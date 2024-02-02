/**
 * --> calculateThursdayCountdown.js
 * 
 * 🌟 Creator: Napo_II
 * 
 * 🙌 Feel free to support me by donating as a token of appreciation:
 * 👉 https://ko-fi.com/napo_ii
 * 
 * 📜 This project is licensed under the GNU General Public License Version 3 (GNU GPL 3).
 * ℹ️ More details available at:
 * 🔗 https://github.com/NapoII/Rust-Collection
 * 
 * 💬 Join our Discord server for discussions and updates:
 * 🚀 https://discord.gg/Gd23KJ76Tq
 */

// 🚀 Actual JavaScript code starts here.
// ...
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
  nextThursday.setHours(0);
  nextThursday.setMinutes(0);
  nextThursday.setSeconds(0);

  // Calculate the timezone offset in minutes and reverse the sign
  const offset = -new Date().getTimezoneOffset();

  // Calculate the local time for the specified target time
  let new_skins_time_local_min = offset + targetTimeUTC0 * 60;

  // Set the hours, minutes, and seconds of the next Thursday accordingly
  nextThursday.setHours(0, new_skins_time_local_min, 0, 0);

  // Check if the next Thursday has already passed
  if (nextThursday - now < 0) {
    console.log("now");

    // Reset hours, minutes, and seconds and add 7 days
    nextThursday.setHours(0, 0, 0, 0);
    nextThursday.setMinutes(new_skins_time_local_min + 7 * 24 * 60);

    console.log(nextThursday);
  }

  return nextThursday;
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