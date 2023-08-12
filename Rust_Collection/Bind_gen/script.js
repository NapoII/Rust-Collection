// Globale Variable für die ausgewählten Werte
const selectedValues = {};

// Funktion, um das Dropdown-Menü zu öffnen/schließen
function toggleDropdown(dropdownId) {
  const dropdownContent = document.getElementById(dropdownId);
  const otherDropdownContents = document.querySelectorAll('.custom-dropdown-content');
  
  otherDropdownContents.forEach(content => {
    if (content !== dropdownContent) {
      content.classList.remove('show');
    }
  });

  if (dropdownContent) {
    dropdownContent.classList.toggle('show');
  }
}

// Lese den Inhalt der Textdatei über eine HTTP-Anfrage aus
const dropdowns = document.querySelectorAll('.custom-dropdown');
dropdowns.forEach((dropdown, index) => {
  const dropdownContent = dropdown.querySelector('.custom-dropdown-content');
  const dropdownId = dropdownContent.id;
  fetch('/Rust_Collection/Bind_gen/items.txt')
    .then(response => response.text())
    .then(textContent => {
      const entries = textContent.trim().split("\n");

      entries.forEach(entry => {
        const itemName = entry.trim();
        const imagePath = `img/${itemName}.png`;
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("custom-dropdown-item");
        optionDiv.innerHTML = `<img src="${imagePath}" alt="Icon">${itemName}`;
        optionDiv.setAttribute("data-variable", itemName);
        optionDiv.addEventListener("click", function() { selectItem(dropdownId, itemName); });
        dropdownContent.appendChild(optionDiv);
      });
    })
    .catch(error => console.error('Fehler beim Laden der Textdatei:', error));
});


// Funktion, um das ausgewählte Element zu verarbeiten
function selectItem(dropdownId, variable) {
    const dropdownContent = document.getElementById(dropdownId);
    const dropdownButton = dropdownContent.previousElementSibling;
    dropdownButton.innerHTML = `<img src="img/${variable}.png" class="selected-icon">${variable}`;
    selectedValues[dropdownId] = variable;
    console.log("Dropdown ID:", dropdownId); // Hier wird die Dropdown-ID in die Konsole geschrieben
    updateOutput();
}

  

// Funktion, um die Ausgabe zu aktualisieren
function updateOutput() {
    const outputTextElement = document.getElementById("output-text");
    let output = "Ausgewählte Werte:";
    for (const dropdownId in selectedValues) {
      output += `<br>${dropdownId}: ${selectedValues[dropdownId]}`;
    }
    outputTextElement.innerHTML = output;
    console.log(output); // Hier wird die Ausgabe in die Konsole geschrieben
  }
  

// Schließen des Dropdown-Menüs, wenn der Benutzer außerhalb klickt
window.onclick = function(event) {
  if (!event.target.matches('.custom-dropdown-button')) {
    const dropdownContents = document.querySelectorAll('.custom-dropdown-content');
    dropdownContents.forEach(content => {
      if (content.classList.contains('show')) {
        content.classList.remove('show');
      }
    });
  }
}
