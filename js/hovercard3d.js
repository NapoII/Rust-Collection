document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach((card) => {
      let mouseX = 0;
      let mouseY = 0;
      let isHovered = false;
  
      card.addEventListener('mouseenter', () => {
        isHovered = true;
      });
  
      card.addEventListener('mousemove', (event) => {
        if (!isHovered) return;
  
        const cardRect = card.getBoundingClientRect();
        mouseX = (event.clientX - cardRect.left - cardRect.width / 2) / (cardRect.width / 2);
        mouseY = (event.clientY - cardRect.top - cardRect.height / 2) / (cardRect.height / 2);
      });
  
      card.addEventListener('mouseleave', () => {
        isHovered = false;
      });
  
      function updateCardPosition() {
        const maxRotation = 30; // Maximaler Rotationswinkel in Grad
  
        if (isHovered) {
          const rotateX = -mouseY * maxRotation;
          const rotateY = mouseX * maxRotation;
  
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
        } else {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        }
  
        requestAnimationFrame(updateCardPosition);
      }
  
      updateCardPosition(); // Starte die Aktualisierung der Kartenposition
    });
  });
  