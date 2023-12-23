document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM vollständig geladen');

  const snowContainer = document.createElement('div');
  snowContainer.id = 'snow-container';
  document.body.appendChild(snowContainer);
  console.log('Schneecontainer erstellt');

  const style = document.createElement('style');
  style.innerHTML = `
    body {
      margin: 0;
      overflow: auto;
    }

    #snow-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9998;
    }

    .snowflake {
      position: absolute;
      border-radius: 50%;
      animation: fall linear infinite;
      z-index: 9999;
      opacity: 0;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }

    @keyframes fall {
      0% {
        transform: translateY(-10vh) translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateY(110vh) translateX(10vw);
        opacity: 0;
      }
    }
  `;

  document.head.appendChild(style);
  console.log('CSS-Stile hinzugefügt');

  function normalDistribution(min, max, skew) {
    const u = Math.random();
    const v = Math.random();
    const num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return Math.floor(num * skew + (max + min) / 2);
  }

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowContainer.appendChild(snowflake);

    const size = normalDistribution(5, 20, 0.5);
    const maxSize = window.innerWidth; // Änderung: Maximale Breite auf die Fensterbreite begrenzen
    snowflake.style.width = `${Math.min(size, maxSize)}px`;
    snowflake.style.height = `${Math.min(size, maxSize)}px`;

    const animationDuration = Math.random() * 8 + 8;
    snowflake.style.animationDuration = `${animationDuration}s`;

    const leftPosition = Math.random() * (window.innerWidth - size); // Änderung: Begrenzung der Position auf die Fensterbreite
    snowflake.style.left = `${leftPosition}px`;

    const angle = Math.random() * 45 - 22.5;
    snowflake.style.transform = `rotate(${angle}deg)`;

    const shade = normalDistribution(200, 255, 0.8);
    snowflake.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;

    snowflake.style.opacity = 1;

    snowflake.addEventListener('animationiteration', () => {
      snowContainer.removeChild(snowflake);
      createSnowflake();
    });

    console.log('Schneeflocke erstellt');
  }

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  if (currentMonth === 11 || currentMonth === 0) {
    console.log('Es ist Dezember oder Januar');

    for (let i = 0; i < 100; i++) {
      createSnowflake();
    }
  } else {
    console.log('Es ist kein Dezember oder Januar');
  }
});
