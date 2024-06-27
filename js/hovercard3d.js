/**
 * --> hovercard3d.js
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


document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the class 'card'
  const cards = document.querySelectorAll('.card');

  // Iterate through each card element
  cards.forEach((card) => {
    let mouseX = 0;
    let mouseY = 0;
    let isHovered = false;
    let rotateX = 0;
    let rotateY = 0;

    // Add event listener for mouse entering the card
    card.addEventListener('mouseenter', () => {
      isHovered = true;
      // Trigger the animation when the card is hovered
      requestAnimationFrame(animateCard);
    });

    // Add event listener for mouse moving over the card
    card.addEventListener('mousemove', (event) => {
      // Update mouse position relative to the card
      if (!isHovered) return;

      const cardRect = card.getBoundingClientRect();
      mouseX = (event.clientX - cardRect.left - cardRect.width / 2) / (cardRect.width / 2);
      mouseY = (event.clientY - cardRect.top - cardRect.height / 2) / (cardRect.height / 2);
    });

    // Add event listener for mouse leaving the card
    card.addEventListener('mouseleave', () => {
      isHovered = false;
      // Trigger the animation when the card is not hovered
      requestAnimationFrame(animateCard);
    });

    // Function to animate the card rotation
    function animateCard() {
      const maxRotation = 30; // Maximum rotation angle in degrees

      if (isHovered) {
        // Update rotation angles based on mouse position
        rotateX = -mouseY * maxRotation;
        rotateY = mouseX * maxRotation;
      } else {
        // Reset rotation angles when not hovered
        rotateX = 0;
        rotateY = 0;
      }

      // Apply the rotation and scaling transformation to the card
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;

      // Continue the animation if the card is hovered or rotation angles are significant
      if (isHovered || Math.abs(rotateX) > 1 || Math.abs(rotateY) > 1) {
        requestAnimationFrame(animateCard);
      }
    }

    // Trigger the initial animation for each card
    animateCard();
  });
});
