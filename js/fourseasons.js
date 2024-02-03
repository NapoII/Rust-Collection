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
  // Get the current date
  const currentDate = new Date();
  // Get the current month (Note: Months are zero-based, ranging from 0 to 11)
  const currentMonth = currentDate.getMonth();

  // Check if the current month is December or January
  if (currentMonth === 11 || currentMonth === 0) {
    // Only execute the snowfall effect if it's December or January

    // Create a canvas element and append it to the body
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    // Set styles and position for the canvas
    canvas.style.position = "fixed";
    canvas.style.pointerEvents = "none";
    canvas.style.left = "0";
    canvas.style.bottom = "0"; // Place the canvas at the bottom of the page
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    // Set canvas dimensions to match the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Set the maximum number of snowflakes
    const maxSnowflakes = 800;
    const snowflakes = [];

    // Define the Snowflake constructor
    function Snowflake() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 5 + 1;
      this.speed = Math.random() + 0.2;
      this.opacity = 0; // Set initial opacity to 0
      this.targetOpacity = Math.random() * 0.5 + 0.1; // Set individual target opacity

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      };
      // Additional properties and methods for the Snowflake constructor can be added here
    }
      // Function to update the position and opacity of the snowflake
      this.update = function () {
        // Move the snowflake downwards based on its speed
        this.y += this.speed;

        // If the snowflake reaches the bottom edge,
        // reset its Y-position to the top and randomize X and target opacity
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
          this.targetOpacity = Math.random() * 0.5 + 0.1; // Set a new target opacity
        }

        // Gradually increase the opacity
        this.opacity += 0.01;

        // Limit the maximum opacity
        this.opacity = Math.min(this.opacity, this.targetOpacity);

        // Draw the updated snowflake
        this.draw();
      };
    }

    // Function to create a specified number of new snowflakes
    function createSnowflakes(count) {
      for (let i = 0; i < count && snowflakes.length < maxSnowflakes; i++) {
        snowflakes.push(new Snowflake());
      }
    }

    // Function to animate the snowflakes
    function animateSnowflakes() {
      // Clear the canvas to avoid trails
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new snowflakes occasionally
      if (Math.random() > 0.98) {
        createSnowflakes(10); // Increase the number of new flakes
      }

      // Update and draw each snowflake
      for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].update();
      }

      // Request the next animation frame
      requestAnimationFrame(animateSnowflakes);
    }

    // Initialize with a higher number of initial snowflakes
    createSnowflakes(200);
    // Start the animation loop
    animateSnowflakes();

    // Event listener to adjust canvas dimensions on window resize
    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
);
