/**
 * --> openLink.js
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
 * Open multiple links in new browser windows or tabs with a slight delay.
 * @param {...string} links - The links to be opened.
 */


function openLink(...links) {
  // Iterate through each link in the arguments
  links.forEach(link => {
    // Use setTimeout to introduce a delay of 0 milliseconds
    setTimeout(() => {
      // Open the link in a new browser window or tab
      window.open(link, '_blank');
    }, 0);
  });
}
