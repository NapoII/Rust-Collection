// Function to read text from file
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

// Function to generate card content
function generateCardContent() {
    readTextFile("card_of_fame.txt", function(text){
        var entries = text.split('\n');
        var hallOfFameStr = document.getElementById('hall_of_fame_str');
        
        var currentIndex = 0;

        // Function to display the next entry
        function displayNextEntry() {
            var entry = entries[currentIndex];
            var parts = entry.split(' - ');
            var name = parts[0];
            var message = parts[1];
            var p = document.createElement('p');
            p.textContent = name;
            var span = document.createElement('span');
            span.textContent = message;
            span.classList.add('marquee');

            // Fade out effect
            hallOfFameStr.style.transition = 'opacity 0.5s ease-in-out'; // Adjust transition speed here
            hallOfFameStr.style.opacity = 0;

            setTimeout(function() {
                // Clear previous entry and reset opacity
                hallOfFameStr.innerHTML = '';

                // Append new entry
                hallOfFameStr.appendChild(p);
                hallOfFameStr.appendChild(span);

                // Fade in effect
                setTimeout(function() {
                    hallOfFameStr.style.transition = 'opacity 0.5s ease-in-out'; // Adjust transition speed here
                    hallOfFameStr.style.opacity = 1;
                }, 100);
            }, 500); // Adjust delay between fade out and fade in here

            // Increment index or start over if all entries have been displayed
            currentIndex = (currentIndex + 1) % entries.length;
        }

        // Display the first entry immediately
        displayNextEntry();

        // Set interval to display next entry every 5 seconds
        setInterval(displayNextEntry, 5000);
    });
}

// Call the function to generate card content
generateCardContent();

// Function to open link
function openLink(link) {
    window.open(link, '_blank');
}
