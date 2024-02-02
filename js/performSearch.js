/**
 * --> performSearch.js
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
 * Performs a search operation by constructing a URL based on the provided search input,
 * and opens the constructed URL in a new browser window or tab.
 */
function performSearch() {
    // Get the value from the input field with the ID 'searchInput'
    var searchInput = document.getElementById('searchInput').value;
    
    // Check if the search input is not empty
    if (searchInput) {
      // Construct the URL by appending the encoded search input to a base URL
      var url = 'https://rustlabs.com/search=' + encodeURIComponent(searchInput);
      
      // Call the openLink() function to open the constructed URL in a new tab
      openLink(url);
    }
  }
  