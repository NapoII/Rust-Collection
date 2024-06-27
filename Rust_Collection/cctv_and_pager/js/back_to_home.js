// Get the button element by its ID
const backToHomeButton = document.getElementById("backToHomeButton");

// Add a click event to navigate to the home page when the button is clicked
backToHomeButton.addEventListener("click", () => {
  // Redirect to the home page (assuming index.html is your home page)
  window.location.href = "rust-collection.eu";
});

// Position the button at the top left corner and make it follow while scrolling
backToHomeButton.style.position = "fixed";
backToHomeButton.style.top = "20px";
backToHomeButton.style.left = "20px";

// Add a slight shadow to the button for better visibility
backToHomeButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
