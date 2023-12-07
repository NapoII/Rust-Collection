function getNextThursday() {
  const now = new Date();
  const daysUntilNextThursday = (4 - now.getDay() + 7) % 7;
  const nextThursday = new Date(now);
  nextThursday.setDate(now.getDate() + daysUntilNextThursday);
  nextThursday.setHours(0, 0, 0, 0);


  function addTimeToDate(date, hours, minutes) {
    // Kopiere das Datum, um Seiteneffekte zu vermeiden
    const newDate = new Date(date);


    userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Zeitverschiebung basierend auf der Zeitzone des Benutzers erhalten
    offset = -new Date().getTimezoneOffset() / 60; // Vorzeichen umkehren

    // Füge Stunden und Minuten hinzu
    newDate.setHours(newDate.getHours() + hours + offset);
    newDate.setMinutes(newDate.getMinutes() + minutes);

  
    return newDate;
  }

  // UTC +0 Time
  nextThursday_with_time = addTimeToDate(nextThursday, 19, 0);
  return nextThursday_with_time;
}

function updateCountdown() {
  const nextThursday = getNextThursday();
  const now = new Date();

  let timeDifference = nextThursday - now;

  // Überprüfen, ob der Donnerstag bereits vorbei ist
  if (timeDifference < 0) {
    timeDifference += 7 * 24 * 60 * 60 * 1000; // 7 Tage in Millisekunden
  }

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
