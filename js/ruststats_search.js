/**
 * --> ruststats_search.js
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
 * This script is designed to perform a RustStats search based on user input.
 * It takes the value from an input field, constructs a URL, and opens the URL
 * in a new tab.
 */

/**
 * Function to perform the RustStats search.
 */
function performRustStatsSearch() {
    // Find the input element by its ID
    var searchInput = document.getElementById("searchInputrustStats");
  
    // Get the value entered by the user
    var inputValue = searchInput.value;
  
    // Check if the entered value is not empty
    if (inputValue.trim() !== "") {
      // Construct the URL string by appending the user input
      var url = "http://ruststats.gg/rust-stats/user/" + encodeURIComponent(inputValue);
  
      // Open the constructed URL in a new tab
      window.open(url, "_blank");
    }
  }
  