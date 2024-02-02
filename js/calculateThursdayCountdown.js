/**
 * Function to calculate the date and time of the next Thursday.
 * The time is set to 19:00 UTC+0.
 * @returns {Date} - The next Thursday with the specified time.
 */
function getNextThursday() {
  // Set the target time in UTC+0
  const targetTimeUTC0 = 19;

  // Get the current date and time
  const now = new Date();

  // Calculate the number of days until the next Thursday
  const daysUntilNextThursday = (4 - now.getDay() + 7) % 7;

  // Create a new date object for the next Thursday
  const nextThursday = new Date(now);
  nextThursday.setDate(now.getDate() + daysUntilNextThursday);
  nextThursday.setHours(0, 0, 0, 0);

  /**
   * Function to add hours and minutes to a given date.
   * @param {Date} date - The date to which time needs to be added.
   * @param {number} hours - The number of hours to add.
   * @param {number} minutes - The number of minutes to add.
   * @returns {Date} - The new date with added time.
   */
  function addTimeToDate(date, hours, minutes) {
    // Copy the date to avoid side effects
    const newDate = new Date(date);

    // Get the user's time zone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Add hours and minutes to the date
    newDate.setHours(newDate.getHours() + hours);
    newDate.setMinutes(newDate.getMinutes() + minutes);

    return newDate;
  }

  // Calculate the offset for the user's time zone
  const offset = -new Date().getTimezoneOffset(); // Reverse the sign
  const offsetMinutes = offset * 60;
  const offsetMinutesPlusTargetTime = (targetTimeUTC0 * 60) + offsetMinutes;

  // Add the calculated offset to the next Thursday's date and time
  const nextThursdayWithTime = addTimeToDate(nextThursday, 0, offsetMinutesPlusTargetTime);
  return nextThursdayWithTime;
}

/**
 * Function to update the countdown display based on the time remaining until the next Thursday.
 */
function updateCountdown() {
  // Get the next Thursday date and time
  const nextThursday = getNextThursday();
  // Get the current date and time
  const now = new Date();

  // Calculate the time difference between now and the next Thursday
  let timeDifference = nextThursday - now;

  // Check if Thursday has already passed in the current week
  if (timeDifference < 0) {
    // Add 7 days in milliseconds to get the time until the next Thursday
    timeDifference += 7 * 24 * 60 * 60 * 1000;
  }

  // Calculate days, hours, and minutes from the time difference
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  // Update the HTML element with the calculated values
  const countdownElement = document.getElementById("ThursdayCountdown");
  countdownElement.innerHTML = nextThursday.toDateString() + "<hr>" + days + " Days " + "<br>" + hours + " Hours " + "<br>" + minutes + " Minutes";
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to update the countdown
updateCountdown();
