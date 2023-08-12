// https://github.com/NapoII/Rust-Collection


/**
 * Calculates the countdown until the next scheduled event (wipe) at 8:00 PM on the first Thursday of the next month.
 */
function calculateWipeCountdown() {
  const now = new Date();
  const nextMonth = new Date(now);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  nextMonth.setDate(1);

  // Find the first Thursday of the next month
  while (nextMonth.getDay() !== 4) { // 4 represents Thursday (Sunday = 0, Monday = 1, ..., Saturday = 6)
    nextMonth.setDate(nextMonth.getDate() + 1);
  }

  nextMonth.setHours(20);
  nextMonth.setMinutes(0);
  nextMonth.setSeconds(0);

  const difference = nextMonth - now;

  // Calculate the remaining days, hours, and minutes
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  // Create the countdown text with the next scheduled event date and time
  const countdownText = `${nextMonth.toDateString()} <hr>  ${days} days<br>${hours} hours<br>${minutes} minutes`;
  
  // Update the HTML element with the countdown text
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdownText;

  // Schedule the function to be called again after 1 second
  setTimeout(calculateWipeCountdown, 1000);
}

/**
 * Updates the countdown for the scheduled event every second.
 */
function updateWipeCountdown() {
  calculateWipeCountdown();
  setTimeout(updateWipeCountdown, 1000);
}
