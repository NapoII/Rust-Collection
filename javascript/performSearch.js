// https://github.com/NapoII/Rust-Collection
  

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
  