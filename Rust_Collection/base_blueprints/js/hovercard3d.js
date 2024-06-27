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

// 🚀 Actual JavaScript code starts here.
// ...



document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach((card) => {
      let mouseX = 0;
      let mouseY = 0;
      let isHovered = false;
      let rotateX = 0;
      let rotateY = 0;
  
      card.addEventListener('mouseenter', () => {
        isHovered = true;
        requestAnimationFrame(animateCard);
      });
  
      card.addEventListener('mousemove', (event) => {
        if (!isHovered) return;
  
        const cardRect = card.getBoundingClientRect();
        mouseX = (event.clientX - cardRect.left - cardRect.width / 2) / (cardRect.width / 2);
        mouseY = (event.clientY - cardRect.top - cardRect.height / 2) / (cardRect.height / 2);
      });
  
      card.addEventListener('mouseleave', () => {
        isHovered = false;
        requestAnimationFrame(animateCard);
      });
  
      function animateCard() {
        const maxRotation = 30; // Maximum rotation angle in degrees
  
        if (isHovered) {
          rotateX = -mouseY * maxRotation;
          rotateY = mouseX * maxRotation;
        } else {
          rotateX = 0;
          rotateY = 0;
        }
  
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  
        if (isHovered || Math.abs(rotateX) > 1 || Math.abs(rotateY) > 1) {
          requestAnimationFrame(animateCard);
        }
      }
  
      animateCard();
    });
  });
  