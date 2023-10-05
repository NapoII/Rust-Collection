function getNextThursday() {
  const now = new Date();
  const daysUntilNextThursday = (4 - now.getDay() + 7) % 7;
  const nextThursday = new Date(now.getTime() + daysUntilNextThursday * 24 * 60 * 60 * 1000);
  nextThursday.setHours(20, 0, 0, 0);
  return nextThursday;
}

function updateCountdown() {
  const nextThursday = getNextThursday();
  const now = new Date();

  const timeDifference = Math.abs(nextThursday - now); // Verwende den Betrag der Differenz

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  const countdownElement = document.getElementById("ThursdayCountdown");
  countdownElement.innerHTML = nextThursday.toDateString() + "<hr>" + days + " Days " + "<br>" + hours + " Hours " + "<br>" + minutes + " Minutes";
}

// Aktualisiere den Countdown alle Sekunde
setInterval(updateCountdown, 1000);

// Initialen Countdown aufrufen
updateCountdown();
