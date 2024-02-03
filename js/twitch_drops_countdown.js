/**
 * --> twitch_drops_countdown.js
 * 
 * 🌟 Creator: Napo_II
 * 
 * 🙌 Feel free to support me by donating as a token of appreciation:
 * 👉 https://ko-fi.com/napo_ii
 * 
 * 📜 This project is licensed under the GNU General Public License Version 3 (GNU GPL 3).
 * ℹ️ More details available at:
 * 🔗 https://github.com/NapoII/Rust-Collection
 * 
 * 💬 Join our Discord server for discussions and updates:
 * 🚀 https://discord.gg/Gd23KJ76Tq
 */


/**
 * Function to display the countdown
 */
function startCountdown() {
    // Read the target date and time from the text file.
    fetch('countdown_data.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');

            let futureDateFound = false; // Flag to determine if a future date is found

            // Iterate through the lines of the text file
            for (let i = 0; i < lines.length; i++) {
                const line = lines[i].trim();

                // Skip empty lines
                if (line === '') {
                    continue;
                }

                // Split the date and the corresponding message
                const [dateString, message] = line.split(',');

                // Convert the date into a Date object
                const targetDate = new Date(dateString);
                
                // Check if the date is in the future
                if (targetDate > new Date()) {
                    // Start the countdown for this date and display the message
                    startIndividualCountdown(targetDate, message);
                    futureDateFound = true;
                    break; // Start only the next countdown
                }
            }

            if (!futureDateFound) {
                // No future date found, display the default message
                document.getElementById('countdown_twitch').textContent = 'Pick up your Free Rust Skins at Events';
            }
        })
        .catch(error => {
            console.error('Error loading countdown data:', error);
            // Display the default message in case of an error
            document.getElementById('countdown_twitch').textContent = 'Pick up your Free Rust Skins at Events';
        });
}

// Start the countdown when the page is loaded
window.addEventListener('load', startCountdown);

/**
 * Function to start an individual countdown
 */
function startIndividualCountdown(targetDate, message) {
    const countdownElement = document.getElementById('countdown_twitch');

    const countdownInterval = setInterval(function () {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        // Check if the target date has been reached
        if (timeDifference <= 0) {
            countdownElement.innerHTML = 'The Event Starts!';
            clearInterval(countdownInterval); // Stop the countdown
        } else {
            // Create the countdown text format with the message above the date
            const countdownText = `${message}<p>${targetDate.toDateString()}<hr>${formatCountdown(timeDifference)}`;
            countdownElement.innerHTML = countdownText;
        }
    }, 1000); // Update every 1 second
}

// Function to format the countdown
function formatCountdown(timeDifference) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return `${days} days<br>${hours} hours<br>${minutes} minutes`;
}
