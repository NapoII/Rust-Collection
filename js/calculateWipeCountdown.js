function getNextFirstThursday() {
  const now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let day = 1;

  while (true) {
      const date = new Date(year, month, day, 20, 0, 0); // Stellen Sie die Uhrzeit auf 20:00 Uhr
      if (date.getDay() === 4 && date.getMonth() === month) { // Erster Donnerstag im aktuellen Monat
          return date;
      }
      day++;
      if (day > 31) {
          day = 1;
          month++;
          if (month > 11) {
              month = 0;
              year++;
          }
      }
  }
}


function updateCountdown() {
  const nextThursday = getNextFirstThursday();
  const now = new Date();

  if (nextThursday > now) {
      const timeDifference = nextThursday - now;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

      const countdownElement = document.getElementById("countdown");
      countdownElement.innerHTML = nextThursday.toDateString() + "<hr>" + days + " Days " + "<br>" + hours + " Hours " + "<br>" + minutes + " Minutes";
  } else {
      // Wenn der Donnerstag in dieser Woche bereits vorbei ist, berechne den Countdown für den nächsten Monat.
      const nextMonth = new Date(nextThursday);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      nextMonth.setDate(1);

      const timeDifference = nextMonth - now;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

      const countdownElement = document.getElementById("countdown");
      countdownElement.innerHTML = nextMonth.toDateString() + "<hr>" + days + " Days " + hours + " Hours " + minutes + " Minutes";
  }
}

// Aktualisiere den Countdown alle Sekunde
setInterval(updateCountdown, 1000);

// Initialen Countdown aufrufen
updateCountdown();