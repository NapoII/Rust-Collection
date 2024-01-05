var isPopupOpen = false;

function addOverlay() {
  console.log("Adding overlay");
  var overlay = document.createElement("div");
  overlay.id = "overlay";
  overlay.className = "overlay";
  document.body.appendChild(overlay);
}

function removeOverlay() {
  console.log("Removing overlay");
  var overlay = document.getElementById("overlay");
  if (overlay) {
    document.body.removeChild(overlay);
  }
}


document.getElementById("rust_tip").addEventListener("click", function () {
  console.log("Button clicked");
  if (!isPopupOpen) {
    openPopup();
    isPopupOpen = true;
  }
});


function openPopup() {
  getRandomEntryAndGenerateHTML(function (popupContent) {
    var popup = document.createElement("div");
    popup.id = "popup";
    popup.className = "popup";
    popup.innerHTML = popupContent;
    addOverlay()
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
  });
}


function getRandomEntryAndGenerateHTML(callback) {
  console.log("Fetching data...");
  var jsonFilePath = '/js/rust_trick_list.json';
  
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
        callback(generatePopupHTML(randomKey, randomEntry));
      } else {
        console.error("Failed to fetch data. Status:", xhr.status);
      }
    }
  };

  xhr.open('GET', jsonFilePath, true);
  xhr.send();
}

function generatePopupHTML(key, entry) {
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
            Rust Tip
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
    removeOverlay()
    // Timeout, um die Animation zu beenden und das Popup zu entfernen
    setTimeout(function () {
      document.body.removeChild(popup);
      isPopupOpen = false;
    }, 500); // Dauer der Fade-Out-Animation
  }
}


// <img src='img/rust_tipps/gunpowder.png' alt='gunpowder' style='width:8%; height:7%; vertical-align: middle;'></img>


// das ist der aufbau  meine rjson :
//    "4": {
//         "titel": "HQ Metal in Bandit Camp",
//         "text": "<p>For 200 scrap you can buy 40 HQM.</p><p>1. Purchase a 16x Scope in Bandit-Camp</p><p>2. Recycle it to obtain HQ Metal.</p>",
//         "img": "img/rust_tipps/hqm_stroe.png"
//     }

//     ich brauche mehr tipps ich gebe dir tipps kontext und du erstellst einen neuen jason-eintrag im selben style einem titel im text eine kurze beschreibung des tips ohne erklärung und danach eine erklärung des tipps step by step mit <p>1. .... <p>2. ....