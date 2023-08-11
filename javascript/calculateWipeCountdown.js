function calculateWipeCountdown() {
  const now = new Date();
  const nextMonth = new Date(now);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  nextMonth.setDate(1);

  while (nextMonth.getDay() !== 4) { // Find the first Thursday of next month
    nextMonth.setDate(nextMonth.getDate() + 1);
  }

  nextMonth.setHours(20);
  nextMonth.setMinutes(0);
  nextMonth.setSeconds(0);

  const difference = nextMonth - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const countdownText = `${nextMonth.toDateString()} <hr>  ${days} days<br>${hours} hours<br>${minutes} minutes`;
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdownText;
}

// Function to update the countdown every second
function updateWipeCountdown() {
  calculateWipeCountdown();
  setTimeout(updateWipeCountdown, 1000);
}