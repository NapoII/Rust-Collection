function calculateWipeCountdown() {
  const now = new Date();
  const nextMonth = new Date(now);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  nextMonth.setDate(1);

  // Setzen Sie die Uhrzeit auf 20:00 Uhr und 0 Minuten und 0 Sekunden
  nextMonth.setHours(20);
  nextMonth.setMinutes(0);
  nextMonth.setSeconds(0);

  // Suchen Sie nach dem ersten Donnerstag im nächsten Monat
  while (nextMonth.getDay() !== 4) { // 4 entspricht Donnerstag (Sonntag = 0, Montag = 1, ..., Samstag = 6)
    nextMonth.setDate(nextMonth.getDate() + 1);
  }

  // Überprüfen Sie, ob der erste Donnerstag in der Zukunft liegt
  if (nextMonth < now) {
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    nextMonth.setDate(1);

    // Suchen Sie erneut nach dem ersten Donnerstag im nächsten Monat
    while (nextMonth.getDay() !== 4) {
      nextMonth.setDate(nextMonth.getDate() + 1);
    }
  }

  const difference = nextMonth - now;

  // Überprüfen Sie, ob die aktuelle Zeit bereits in der Vergangenheit liegt
  if (difference <= 0) {
    // Wenn ja, fügen Sie einen weiteren Monat hinzu und suchen Sie nach dem ersten Donnerstag
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
