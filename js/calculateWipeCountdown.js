// Function to get the date of the first Thursday in the current or next month
function getFirstThursday() {
  // Set the wipe time in UTC to 19:00
  const wipe_time_utc_0_h = 19;

  let now = new Date(); // Get current date and time
  let year = now.getFullYear();
  let month = now.getMonth(); // Use the current month, not +1

  // Calculate the first day of the current month
  const firstOfMonth = new Date(year, month, 1);
  // Calculate the number of days until the next Thursday
  const daysUntilThursday = ((4 - firstOfMonth.getDay() + 7) % 7);
  // Set the date for the first Thursday
  let firstThursday = new Date(year, month, 1 + daysUntilThursday);

  // Convert to local time zone
  const offset = -new Date().getTimezoneOffset(); // Reverse the sign
  let wipe_time_local = offset + (wipe_time_utc_0_h * 60);
  firstThursday.setHours(0, wipe_time_local, 0, 0);

  // If the calculated date is in the past, calculate the first Thursday in the next month
  if (firstThursday - now < 0){
    month = (month + 1) % 12; // Move to the next month, considering the change of the year
    year = month === 0 ? year + 1 : year; // If the next month is January, increase the year by 1
    const nextMonthFirstOfMonth = new Date(year, month, 1);
    const daysUntilNextThursday = ((4 - nextMonthFirstOfMonth.getDay() + 7) % 7);
    firstThursday = new Date(year, month, 1 + daysUntilNextThursday);

    wipe_time_local = offset + (wipe_time_utc_0_h * 60);
    firstThursday.setHours(0, wipe_time_local, 0, 0);
  }

  return firstThursday;
}

// Function to add hours and minutes to a given date
function addTimeToDate(date, hours, minutes) {
  const newDate = new Date(date);
  const offsetInMinutes = -newDate.getTimezoneOffset();

  newDate.setHours(newDate.getHours() + hours);
  newDate.setMinutes(newDate.getMinutes() + minutes + offsetInMinutes);

  return newDate;
}

// Update the countdown timer
function updateCountdown() {
  const now = new Date(); // Get current date and time
  const firstThursdayWithTime = getFirstThursday();

  // Calculate the time difference between now and the next Thursday
  const timeDifference = firstThursdayWithTime - now;
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Display the countdown in the HTML element with the ID "countdown"
  const countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML = firstThursdayWithTime.toDateString() + "<hr>" + days + " Days " + "<br>" + hours + " Hours " + "<br>" + minutes + " Minutes";
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Call the initial countdown
updateCountdown();
