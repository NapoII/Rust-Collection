// Funktion, um das Datum des ersten Donnerstags im aktuellen oder nächsten Monat zu erhalten
function getFirstThursday() {
  let now = new Date(); // Aktuelles Datum und Uhrzeit abrufen
  let year = now.getFullYear();
  let month = now.getMonth(); // Den aktuellen Monat verwenden, nicht +1

  const firstOfMonth = new Date(year, month, 1);
  const daysUntilThursday = ((4 - firstOfMonth.getDay() + 7) % 7);
  const firstThursday = new Date(year, month, 1 + daysUntilThursday);

  // Überprüfe, ob das berechnete Datum bereits vergangen ist
  if (firstThursday < now) {
    // Berechne den ersten Donnerstag im nächsten Monat
    month = (month + 1) % 12; // Nächster Monat, unter Berücksichtigung des Jahreswechsels
    year = month === 0 ? year + 1 : year; // Wenn der nächste Monat Januar ist, erhöhe das Jahr um 1
    firstThursday.setFullYear(year, month, 1);
    const daysUntilNextThursday = ((4 - firstThursday.getDay() + 7) % 7);
    firstThursday.setDate(1 + daysUntilNextThursday);
  }

  return firstThursday;
}

// Funktion, um Stunden und Minuten zu einem Datum hinzuzufügen
function addTimeToDate(date, hours, minutes) {
  const newDate = new Date(date);
  const offset = -new Date().getTimezoneOffset() / 60;
  newDate.setHours(newDate.getHours() + hours + offset);
  newDate.setMinutes(newDate.getMinutes() + minutes);
  return newDate;
}

// Ersten Donnerstag mit Zeit berechnen und ausgeben
const firstThursday = getFirstThursday();
const firstThursdayWithTime = addTimeToDate(firstThursday, 19, 0);
console.log('Erster Donnerstag mit Zeit:', firstThursdayWithTime);

// Function to update the countdown timer
function updateCountdown() {
  const now = new Date(); // Aktuelles Datum und Uhrzeit abrufen

  if (firstThursdayWithTime > now) {
    // Zeitdifferenz zwischen jetzt und dem nächsten Donnerstag berechnen
    const timeDifference = firstThursdayWithTime - now;
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

    // Countdown im HTML-Element mit der ID "countdown" anzeigen
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = firstThursdayWithTime.toDateString() + "<hr>" + days + " Days " + "<br>" + hours + " Hours " + "<br>" + minutes + " Minutes";
  }
}

// Countdown alle Sekunde aktualisieren
setInterval(updateCountdown, 1000);

// Initialen Countdown aufrufen
updateCountdown();
