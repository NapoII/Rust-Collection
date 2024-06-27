/**
 * --> fourseasons.js
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


document.addEventListener("DOMContentLoaded", function () {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // Der Monat ist nullbasiert (0-11)

  // Überprüfe, ob der aktuelle Monat Dezember oder Januar ist
  if (currentMonth === 11 || currentMonth === 0) {
    // Nur wenn es Dezember oder Januar ist, führe den Schneefall aus

    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.pointerEvents = "none";
    canvas.style.left = "0";
    canvas.style.bottom = "0"; // Platziere das Canvas am unteren Rand der Seite
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const maxSnowflakes = 800; // Maximale Anzahl von Schneeflocken
    const snowflakes = [];

    function Snowflake() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 5 + 1;
      this.speed = Math.random() +0.2;
      this.opacity = 0; // Starttransparenz auf 0 setzen
      this.targetOpacity = Math.random() * 0.5 + 0.1; // Individuelle Zieltransparenz

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      };

      this.update = function () {
        this.y += this.speed;

        // Wenn die Schneeflocke den unteren Rand erreicht hat,
        // setze die Y-Position auf die Höhe des Canvas
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
          this.targetOpacity = Math.random() * 0.5 + 0.1; // Neue Zieltransparenz setzen
        }

        // Erhöhe die Transparenz allmählich
        this.opacity += 0.01;

        // Begrenze die maximale Transparenz
        this.opacity = Math.min(this.opacity, this.targetOpacity);

        this.draw();
      };
    }

    function createSnowflakes(count) {
      for (let i = 0; i < count && snowflakes.length < maxSnowflakes; i++) {
        snowflakes.push(new Snowflake());
      }
    }

    function animateSnowflakes() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Füge bei Bedarf neue Schneeflocken hinzu
      if (Math.random() > 0.98) {
        createSnowflakes(10); // Erhöhe die Anzahl der neuen Flocken
      }

      for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].update();
      }

      requestAnimationFrame(animateSnowflakes);
    }

    createSnowflakes(200); // Starte mit einer höheren Anzahl von Anfangsflocken
    animateSnowflakes();

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
});
