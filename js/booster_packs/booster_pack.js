var isPopupOpen = false;
var jsonFilePath; // Variable für den Dateipfad
var booster_type

function addOverlay() {

  var overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.className = "overlay";
  document.body.appendChild(overlay);
}

function removeOverlay() {

  var overlay = document.getElementById("overlay");
  if (overlay) {
    document.body.removeChild(overlay);
  }
}

document.getElementById("booster_tip").addEventListener("click", function () {

  if (!isPopupOpen) {
    jsonFilePath = 'js/booster_packs/booster_tip.json';
    booster_type = 'Booster: Tip';
    openPopup();
  }
});

document.getElementById("booster_wipe").addEventListener("click", function () {

  if (!isPopupOpen) {
    jsonFilePath = 'js/booster_packs/booster_wipe.json';
    booster_type = 'Booster: Wipe';
    openPopup();
  }
});

function openPopup() {
  if (isPopupOpen) {
    return; // Wenn bereits ein Popup geöffnet ist, beende die Funktion
  }

  getRandomEntryAndGenerateHTML(function (popupContent) {
    var popup = document.createElement("div");
    popup.id = "popup";
    popup.className = "popup";
    popup.innerHTML = popupContent;
    addOverlay();
    document.body.appendChild(popup);

    // Timeout, um die Animation zu starten
    setTimeout(function () {
      popup.classList.add("show");
    }, 10);

    // Popup schließen bei Klick
    popup.addEventListener("click", function () {
      closePopup();
    });

    // Klickereignis für die Karte hinzufügen
    var popCard = popup.querySelector(".pop_card");
    if (popCard) {
      popCard.addEventListener("click", function (event) {
        // Überprüfen, ob das Klickereignis von der Karte selbst stammt
        if (event.target === popCard) {
          closePopup();
        }
      });
    }

    isPopupOpen = true; // Setze die Variable auf true, um anzuzeigen, dass ein Popup geöffnet ist
  }, jsonFilePath, booster_type); // jsonFilePath an die Funktion übergeben
}

function getRandomEntryAndGenerateHTML(callback, jsonFilePath) {
  
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        
        // Zufälligen Schlüssel auswählen
        var keys = Object.keys(data);
        var randomKey = keys[Math.floor(Math.random() * keys.length)];
        var randomEntry = data[randomKey];

        // Callback-Funktion aufrufen und den generierten HTML-Teil übergeben
        callback(generatePopupHTML(randomKey, randomEntry, booster_type));
      } else {
        console.error("Failed to fetch data. Status:", xhr.status);
      }
    }
  };

  xhr.open('GET', jsonFilePath, true);
  xhr.send();
}

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

function closePopup() {
  var popup = document.getElementById("popup");
  if (popup) {
    popup.classList.remove("show");
    removeOverlay();
    // Timeout, um die Animation zu beenden und das Popup zu entfernen
    setTimeout(function () {
      document.body.removeChild(popup);
      isPopupOpen = false;
    }, 500); // Dauer der Fade-Out-Animation
  }
}
