function calculateWipeCountdown() {
  const now = new Date();
  const nextMonth = new Date(now);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  nextMonth.setDate(1);

  // Set the time to 20:00 and 0 minutes and 0 seconds
  nextMonth.setHours(20);
  nextMonth.setMinutes(0);
  nextMonth.setSeconds(0);

  // Look for the first Thursday of the next month
  while (nextMonth.getDay() !== 4) { // 4 corresponds to Thursday (Sunday = 0, Monday = 1, ..., Saturday = 6)
    nextMonth.setDate(nextMonth.getDate() + 1);
  }

  // Check if the first Thursday is in the future
  if (nextMonth < now) {
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    nextMonth.setDate(1);

    // Search again for the first Thursday of the next month
    while (nextMonth.getDay() !== 4) {
      nextMonth.setDate(nextMonth.getDate() + 1);
    }
  }

  const difference = nextMonth - now;

  // Check whether the current time is already in the past  
  if (difference <= 0) {
    // If yes, add another month and look for the first Thursday
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    nextMonth.setDate(1);

    while (nextMonth.getDay() !== 4) {
      nextMonth.setDate(nextMonth.getDate() + 1);
    }
  }

  const newDifference = nextMonth - now;

  const days = Math.floor(newDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((newDifference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((newDifference / (1000 * 60)) % 60);

  const countdownText = `${nextMonth.toDateString()} <hr> ${days} Days<br>${hours} Hours<br>${minutes} Minutes`;

  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = countdownText;

  setTimeout(calculateWipeCountdown, 1000);
}

function updateWipeCountdown() {
  calculateWipeCountdown();
}

updateWipeCountdown();
