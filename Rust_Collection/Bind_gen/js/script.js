/**
 * --> console_alert.js
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

console.log("%cHello, curious explorer! 👋\n%cIf you've ventured into the console, I ask kindly that you treat everything with respect. Let's keep things positive and helpful. If you have questions or suggestions, I'd love to hear from you on Discord or GitHub. Thanks for your consideration!",
"color: #f8f8f2; background-color: #282a36; font-size: 16px; font-weight: bold; padding: 8px;",
"color: #50fa7b; font-size: 14px;"
);

console.log(
    "%cDiscord: %chttps://discord.gg/Gd23KJ76Tq",
    "color: #f8f8f2; background-color: #282a36; font-size: 16px; font-weight: bold; padding: 8px;",
    "color: #50fa7b; text-decoration: underline;"
  );
  
  console.log(
    "%cGitHub: %chttps://github.com/NapoII/Rust-Collection",
    "color: #f8f8f2; background-color: #282a36; font-size: 16px; font-weight: bold; padding: 8px;",
    "color: #50fa7b; text-decoration: underline;"
  );


// Objekt zum Speichern der ausgewählten Werte für jedes Dropdown-Menü
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
  fetch('Rust_Collection/Bind_gen/js/items.txt')
    .then(response => response.text())
    .then(textContent => {
      const entries = textContent.trim().split("\n");

      const items = entries.map(entry => entry.trim());

      function filterItems(query) {
        dropdownContent.innerHTML = '';

        items.filter(item => item.toLowerCase().includes(query)).forEach(item => {
          const imagePath = `../img/${item}.png`;
          // console.log("imagePath:", imagePath);
          const optionDiv = document.createElement("div");
          optionDiv.classList.add("custom-dropdown-item");
          optionDiv.innerHTML = `<img src="${imagePath}" alt="Icon">${item}`;
          optionDiv.setAttribute("data-variable", item);
          optionDiv.addEventListener("click", function() { selectItem(dropdownId, item); });
          dropdownContent.appendChild(optionDiv);
        });
      }

      // Event Listener für Tastatureingaben im Dropdown-Menü
      dropdown.addEventListener('input', function () {
        const filterText = this.innerText.trim().toLowerCase();
        filterItems(filterText);
      });

      // Initialisiere Dropdown-Elemente
      filterItems('');
    })
    .catch(error => console.error('Fehler beim Laden der Textdatei:', error));
});

// Funktion, um das ausgewählte Element zu verarbeiten
function selectItem(dropdownId, variable) {
  const dropdownContent = document.getElementById(dropdownId);
  const dropdownButton = dropdownContent.previousElementSibling;
  dropdownButton.innerHTML = `<img src="img/${variable}.png" class="selected-icon">${variable}`;
  selectedValues[dropdownId] = variable;
  // console.log("Dropdown ID:", dropdownId);
  // console.log("variable:", variable);
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
};

// Positionierung beim Scrollen berücksichtigen
window.addEventListener('scroll', () => {
  const openDropdown = document.querySelector('.custom-dropdown-content.show');
  if (openDropdown) {
    const dropdownButton = openDropdown.previousElementSibling;
    const dropdownButtonRect = dropdownButton.getBoundingClientRect();
    openDropdown.style.left = `${dropdownButtonRect.left}px`;
    openDropdown.style.top = `${dropdownButtonRect.bottom}px`;
  }
});
