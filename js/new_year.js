/**
 * --> new_year.js
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

// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
  // Get the current date
  const currentDate = new Date();
  // Check if it's January 1st
  const isNewYear = currentDate.getDate() === 1 && currentDate.getMonth() === 0;

  // If it's New Year's Day
  if (isNewYear) {
    // Create a canvas element and append it to the body
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    // Get the 2D rendering context of the canvas
    const ctx = canvas.getContext('2d');
    // Array to store particle objects
    const particles = [];
    // Set the limit for the number of particles
    const maxParticles = 400;
    // Set the maximum size of the explosion circles
    const maxExplosionSize = 10;
    // Adjust the rate at which particles fade out
    const fadeOutRate = 0.015;

    // Set styles and dimensions for the canvas
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';

    // Set canvas dimensions to cover the entire viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle constructor function
    function Particle(x, y, size, color) {
      this.x = x;
      this.y = y;
      this.size = size;
      // Set random speed for particles
      this.speedX = (Math.random() - 0.5) * 2;
      this.speedY = (Math.random() - 0.5) * 2;
      this.color = color || getRandomColor();
      this.opacity = 1;
    }

    // Update method for the Particle prototype
    Particle.prototype.update = function () {
      // Update particle position and opacity
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity -= fadeOutRate;
      // Adjust the size reduction rate
      if (this.size > 0.2) this.size -= 0.1;
    };

    // Draw method for the Particle prototype
    Particle.prototype.draw = function () {
      // Set global alpha and fill style for the particle
      ctx.globalAlpha = this.opacity;
      ctx.fillStyle = this.color;
      // Draw a filled circle at the particle's position
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    };

    // Function to create a firework (initial particle)
    function createFirework() {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * canvas.height;
      const size = Math.random() * 5 + 1;
      const firework = new Particle(startX, startY, size, getRandomColor());
      particles.push(firework);

      // Optional: Create explosion after the rocket reaches its peak
      setTimeout(() => {
        createExplosion(firework.x, firework.y, firework.size, firework.color);
      }, 1000);
    }

    // Function to create an explosion (additional particles)
    function createExplosion(x, y, size, color) {
      const numberOfParticles = Math.floor(Math.random() * 50) + 50;
      for (let i = 0; i < numberOfParticles; i++) {
        if (particles.length < maxParticles) {
          const explosionSize = Math.random() * maxExplosionSize + 1;
          const particle = new Particle(x, y, explosionSize, color);
          particles.push(particle);
        }
      }
    }

    // Function to animate particles by updating and drawing them
    function animateParticles() {
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].draw();

        // Remove faded-out particles or exceed the limit
        if (particles[i].opacity <= 0 || particles.length > maxParticles) {
          particles.splice(i, 1);
        }
      }
    }

    // Main animation loop
    function animate() {
      // Clear the canvas for each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Create a new firework and animate existing particles
      createFirework();
      animateParticles();
      // Request the next animation frame
      requestAnimationFrame(animate);
    }

    // Function to get a random color from a predefined array
    function getRandomColor() {
      const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    // Update canvas dimensions when the window is resized
    window.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    // Start the initial animation
    animate();

    // Optional: Start more fireworks over time at regular intervals
    setInterval(() => {
      createFirework();
    }, 2000);
  }
});
