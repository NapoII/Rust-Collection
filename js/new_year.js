// new_year.js

document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    const isNewYear = currentDate.getDate() === 1 && currentDate.getMonth() === 0; // Check if it's January 1st
  
    if (isNewYear) {
      const canvas = document.createElement('canvas');
      document.body.appendChild(canvas);
      const ctx = canvas.getContext('2d');
      const particles = [];
      const maxParticles = 800; // Set the limit for the number of particles
      const maxExplosionSize = 8; // Set the maximum size of the explosion circles
      const fadeOutRate = 0.021; // Adjust the rate at which particles fade out
  
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      function Particle(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = (Math.random() - 0.5) * 2;
        this.speedY = (Math.random() - 0.5) * 2;
        this.color = color || getRandomColor();
        this.opacity = 1;
      }
  
      Particle.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= fadeOutRate; // Adjust the fade out rate
  
        if (this.size > 0.5) this.size -= 0,1; // Adjust the size reduction rate
      };
  
      Particle.prototype.draw = function () {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      };
  
      function createFirework() {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        const size = Math.random() * 5 + 1; // Set the size of the rockets
        const firework = new Particle(startX, startY, size, getRandomColor());
        particles.push(firework);
  
        // Optional: Create explosion after the rocket reaches its peak
        setTimeout(() => {
          createExplosion(firework.x, firework.y, firework.size, firework.color);
        }, 1000);
      }
  
      function createExplosion(x, y, size, color) {
        const numberOfParticles = Math.floor(Math.random() * 50) + 50; // Set the number of particles in each explosion
        for (let i = 0; i < numberOfParticles; i++) {
          if (particles.length < maxParticles) {
            const explosionSize = Math.random() * maxExplosionSize + 1; // Generate random explosion size
            const particle = new Particle(x, y, explosionSize, color);
            particles.push(particle);
          }
        }
      }
  
      function animateParticles() {
        for (let i = particles.length - 1; i >= 0; i--) {
          particles[i].update();
          particles[i].draw();
  
          if (particles[i].opacity <= 0 || particles.length > maxParticles) {
            particles.splice(i, 1);
          }
        }
      }
  
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        createFirework();
        animateParticles();
        requestAnimationFrame(animate);
      }
  
      function getRandomColor() {
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
        return colors[Math.floor(Math.random() * colors.length)];
      }
  
      window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
  
      animate();
  
      // Optional: Start more fireworks over time
      setInterval(() => {
        createFirework();
      }, 2000);
    }
  });
  