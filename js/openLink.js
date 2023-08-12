// https://github.com/NapoII/Rust-Collection


/**
 * Opens a URL in a new browser window or tab.
 * 
 * @param {string} url - The URL to be opened.
 */
function openLink(url) {
  // The window.open() function is used to open a URL in a new window or tab.
  // The '_blank' parameter specifies that the URL should be opened in a new tab.
  // The provided URL is passed as the first argument to the window.open() function.
  window.open(url, '_blank');
}
