/**
 * --> cokiemsg.js
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


// Function to check whether the cookie acceptance status is already set
function isCookieAccepted() {
  return localStorage.getItem('cookieAccepted') === 'true';
}

// Function to display the pop-up if the cookie acceptance status is not set
function showCookiePopup() {
  if (!isCookieAccepted()) {
    // Display the cookie popup by setting its style to 'block'
    document.getElementById('cookie-popup').style.display = 'block';
  }
}

// Function to hide the pop-up and set the cookie acceptance status
function acceptCookie() {
  // Hide the cookie popup by setting its style to 'none'
  document.getElementById('cookie-popup').style.display = 'none';
  // Set the cookie acceptance status to 'true' in the local storage
  localStorage.setItem('cookieAccepted', 'true');
}

// Event listener for the OK button in the cookie popup
document.getElementById('accept-cookie').addEventListener('click', acceptCookie);

// Initialization: show the pop-up if the cookie acceptance status is not set
showCookiePopup();
