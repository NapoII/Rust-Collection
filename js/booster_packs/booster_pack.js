/**
 * --> booster_pack.js
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


/**
 * GNU GENERAL PUBLIC LICENSE Version 3
 * @returns {Date} A Date object representing the next Thursday.
 */

var isPopupOpen = false;
var jsonFilePath; // Variable for the file path
var booster_type;

function addOverlay() {
  // Create an overlay element and append it to the document body
  var overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.className = "overlay";
  document.body.appendChild(overlay);
}

function removeOverlay() {
  // Remove the overlay element from the document body, if it exists
  var overlay = document.getElementById("overlay");
  if (overlay) {
    document.body.removeChild(overlay);
  }
}

// Event listener for the "Booster Tip" button
document.getElementById("booster_tip").addEventListener("click", function () {
  if (!isPopupOpen) {
    // Set the JSON file path and booster type for "Booster Tip"
    jsonFilePath = 'js/booster_packs/booster_tip.json';
    booster_type = 'Booster: Tip';
    // Open the popup
    openPopup();
  }
});

// Event listener for the "Booster Wipe" button
document.getElementById("booster_wipe").addEventListener("click", function () {
  if (!isPopupOpen) {
    // Set the JSON file path and booster type for "Booster Wipe"
    jsonFilePath = 'js/booster_packs/booster_wipe.json';
    booster_type = 'Booster: Wipe';
    // Open the popup
    openPopup();
  }
});


// Function to open a popup with random content from a specified JSON file
function openPopup() {
  // If a popup is already open, exit the function
  if (isPopupOpen) {
    return;
  }

  // Fetch a random entry from the specified JSON file and generate HTML content
  getRandomEntryAndGenerateHTML(function (popupContent) {
    // Create the popup element and set its content
    var popup = document.createElement("div");
    popup.id = "popup";
    popup.className = "popup";
    popup.innerHTML = popupContent;

    // Add an overlay to the document
    addOverlay();
    document.body.appendChild(popup);

    // Timeout to initiate the animation
    setTimeout(function () {
      popup.classList.add("show");
    }, 10);

    // Close the popup on click
    popup.addEventListener("click", function () {
      closePopup();
    });

    // Add click event for the card within the popup
    var popCard = popup.querySelector(".pop_card");
    if (popCard) {
      popCard.addEventListener("click", function (event) {
        // Check if the click event originates from the card itself
        if (event.target === popCard) {
          closePopup();
        }
      });
    }

    // Set the variable to true to indicate that a popup is open
    isPopupOpen = true;
  }, jsonFilePath, booster_type);
}

// Function to fetch a random entry from a JSON file and invoke a callback with the generated HTML
function getRandomEntryAndGenerateHTML(callback, jsonFilePath) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Parse the JSON response
        var data = JSON.parse(xhr.responseText);

        // Select a random key from the data
        var keys = Object.keys(data);
        var randomKey = keys[Math.floor(Math.random() * keys.length)];
        var randomEntry = data[randomKey];
        

        // Invoke the callback function with the generated HTML
        callback(generatePopupHTML(randomKey, randomEntry, booster_type));
      } else {
        console.error("Failed to fetch data. Status:", xhr.status);
      }
    }
  };

  // Open an asynchronous GET request to fetch the JSON file
  xhr.open('GET', jsonFilePath, true);
  xhr.send();
}


// Function to generate HTML content for the popup using the provided key, entry, and booster type
function generatePopupHTML(key, entry, booster_type) {
  return `
    <div class="background-image extra" style="background-image: url('${entry.img}'); opacity: 0.5;"></div>
    <div class="pop_card">
      <div class="pop_top-section dark-background">
        <div class="pop_top-background"></div>
        <div class="pop_top-text">
          ${entry.titel}
        </div>
      </div>
      <div class="content">
        <div class="pop_bottom-section">
          ${entry.text}
          <p></p>
          <div class="pop_card-info_r">
            ${key}
          </div>
          <div class="pop_card-info_l">
            ${booster_type}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to close the popup, remove the overlay, and reset the popup-related variables
function closePopup() {
  var popup = document.getElementById("popup");
  if (popup) {
    // Remove the "show" class to initiate the fade-out animation
    popup.classList.remove("show");
    removeOverlay();

    // Timeout to complete the fade-out animation and remove the popup
    setTimeout(function () {
      document.body.removeChild(popup);
      // Reset the variable to indicate that no popup is open
      isPopupOpen = false;
    }, 500); // Duration of the fade-out animation
  }
}
