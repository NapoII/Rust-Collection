/**
 * --> back_to_home.js
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

// Get the button element by its ID
const backToHomeButton = document.getElementById("backToHomeButton");

// Add a click event to navigate to the home page when the button is clicked
backToHomeButton.addEventListener("click", () => {
  // Redirect to the home page (assuming index.html is your home page)
  window.location.href = "https://napoii.github.io/Rust-Collection/";
});

// Position the button at the top left corner and make it follow while scrolling
backToHomeButton.style.position = "fixed";
backToHomeButton.style.top = "20px";
backToHomeButton.style.left = "20px";

// Add a slight shadow to the button for better visibility
backToHomeButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
