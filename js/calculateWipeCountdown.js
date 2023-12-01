// Funktion, um das Datum des ersten Donnerstags im nächsten Monat zu erhalten
function getFirstThursdayOfNextMonth() {
  let now = new Date(); // Aktuelles Datum und Uhrzeit abrufen
  let year = now.getFullYear();
  let month = now.getMonth(); // Den aktuellen Monat verwenden, nicht +1

  const firstOfMonth = new Date(year, month, 1);
  const daysUntilThursday = (4 - firstOfMonth.getDay() + 7) % 7;
  const firstThursday = new Date(year, month, 1 + daysUntilThursday);

  // Überprüfen, ob der erste Donnerstag im aktuellen Monat bereits vergangen ist
  if (firstThursday < now) {
    // Wenn ja, den ersten Donnerstag im nächsten Monat verwenden
    month++;
    if (month > 11) {
      year++;
      month = 0;
    }
    const nextFirstOfMonth = new Date(year, month, 1);
    const daysUntilNextThursday = (4 - nextFirstOfMonth.getDay() + 7) % 7;
    return new Date(year, month, 1 + daysUntilNextThursday);
  }

  return firstThursday;
}

// Function to update the countdown timer
function updateCountdown() {
  const nextThursday = getFirstThursdayOfNextMonth(); // Get the date of the first Thursday in the next month
  const now = new Date(); // Get the current date and time

  if (nextThursday > now) {
    // Calculate the time difference between now and the next Thursday
    const timeDifference = nextThursday - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Calculate days
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes

    // Display the countdown in an HTML element with the ID "countdown"
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = nextThursday.toDateString() + "<hr>" + days + " Days " + "<br>" + hours + " Hours " + "<br>" + minutes + " Minutes";
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Call the initial countdown
updateCountdown();
