const accordions = document.querySelectorAll(".accordion");
const items = document.querySelectorAll(".item");
const displayedImage = document.getElementById("displayedImage");

accordions.forEach(acc => {
  acc.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

items.forEach(item => {
  item.addEventListener("click", function() {
    const sound = this.getAttribute("data-sound");
    const image = this.getAttribute("data-image");

    // Play sound
    playSound(sound);

    // Set displayed image
    displayedImage.src = image;

    // Copy item name to clipboard
    const itemName = this.textContent;
    copyToClipboard(itemName);
  });
});

function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}

function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}
