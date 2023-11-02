// Function to get the date of the next first Thursday in the future
function getNextFirstThursday() {
  const now = new Date(); // Get the current date and time
  const currentDay = now.getDate();
  const year = now.getFullYear();
  let month = now.getMonth();

  // Check if it's the first week of the month
  if (currentDay <= 7) {
    // If it's Thursday or later, use the current month
    if (now.getDay() >= 4) {
      return new Date(year, month, currentDay, 20, 0, 0);
    }
  }

  // Move to the next month
  if (month === 11) {
    month = 0;
  } else {
    month++;
  }

  const firstOfMonth = new Date(year, month, 1, 20, 0, 0);
  const daysUntilThursday = (4 - firstOfMonth.getDay() + 7) % 7;
  const firstThursday = new Date(year, month, 1 + daysUntilThursday, 20, 0, 0);

  return firstThursday;
}
  
  // Function to update the countdown timer
  function updateCountdown() {
    const nextThursday = getNextFirstThursday(); // Get the date of the next first Thursday
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
    } else {
      // If Thursday of this week has already passed, calculate the countdown for the next month
      const nextMonth = new Date(nextThursday);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      nextMonth.setDate(1);
  
      // Calculate the time difference between now and the first day of the next month
      const timeDifference = nextMonth - now;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Calculate days
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Calculate hours
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Calculate minutes
  
      // Display the countdown in an HTML element with the ID "countdown"
      const countdownElement = document.getElementById("countdown");
      countdownElement.innerHTML = nextMonth.toDateString() + "<hr>" + days + " Days " + "<br>" + hours + " Hours " + "<br>" + minutes + " Minutes";
    }
  }
  
  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  
  // Call the initial countdown
  updateCountdown();
  