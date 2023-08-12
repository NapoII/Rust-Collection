// https://github.com/NapoII/Rust-Collection

/**
 * Calculates the countdown until the next Thursday at 8:00 PM.
 */
function calculateThursdayCountdown() {
  const now = new Date();
  const nextThursday = new Date(now);

  // Find the next Thursday
  while (nextThursday.getDay() !== 4) { // 4 represents Thursday (Sunday = 0, Monday = 1, ..., Saturday = 6)
    nextThursday.setDate(nextThursday.getDate() + 1);
  }

  nextThursday.setHours(20);
  nextThursday.setMinutes(0);
  nextThursday.setSeconds(0);

  let difference = nextThursday - now;

  if (difference <= 0) {
    // If the countdown has reached 0 or passed, calculate for the next Thursday
    nextThursday.setDate(nextThursday.getDate() + 7);
    difference = nextThursday - now;
  }

  // Calculate the remaining days, hours, and minutes
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  // Create the countdown text with the next Thursday's date and time
  const countdownText = `${nextThursday.toDateString()} <hr>  ${days} days<br>${hours} hours<br>${minutes} minutes`;
  
  // Update the HTML element with the countdown text
  const countdownElement = document.getElementById("ThursdayCountdown"); // Updated the ID here
  countdownElement.innerHTML = countdownText;

  // Schedule the function to be called again after 1 second
  setTimeout(calculateThursdayCountdown, 1000);
}

/**
 * Updates the countdown every second.
 */
function updateThursdayCountdown() {
  calculateThursdayCountdown();
  setTimeout(updateThursdayCountdown, 1000);
}
