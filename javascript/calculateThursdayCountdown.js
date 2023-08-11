function calculateThursdayCountdown() {
  const now = new Date();
  const nextThursday = new Date(now);

  // Find the next Thursday
  while (nextThursday.getDay() !== 4) {
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

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const countdownText = `${nextThursday.toDateString()} <hr>  ${days} days<br>${hours} hours<br>${minutes} minutes`;
  const countdownElement = document.getElementById("ThursdayCountdown"); // Updated the ID here
  countdownElement.innerHTML = countdownText;

  setTimeout(calculateThursdayCountdown, 1000); // Call the function again after 1 second
}

// Function to update the countdown every second
function updateThursdayCountdown() {
  calculateThursdayCountdown();
  setTimeout(updateThursdayCountdown, 1000);
}