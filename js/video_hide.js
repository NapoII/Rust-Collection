/**
 * --> video_hide.js
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

/**
 * Function to show the video element and hide the background image.
 */
function showVideo() {
  // Display the video element
  document.getElementById("video").style.display = "block";
  // Hide the background image
  document.querySelector(".background-image").style.display = "none";
}

/**
* Function to hide the video element and show the background image.
*/
function hideVideo() {
  // Hide the video element
  document.getElementById("video").style.display = "none";
  // Display the background image
  document.querySelector(".background-image").style.display = "block";
}

