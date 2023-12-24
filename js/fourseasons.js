document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  canvas.style.position = "fixed";
  canvas.style.pointerEvents = "none";
  canvas.style.left = "0";
  canvas.style.top = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const snowflakes = [];

  function Snowflake() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 5 + 1;
    this.speed = Math.random() * 3 + 1;
    this.opacity = Math.random() * 0.5 + 0.1;

    this.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.fill();
    };

    this.update = function () {
      this.y += this.speed;

      if (this.y > canvas.height) {
        this.y = 0;
        this.x = Math.random() * canvas.width;
      }

      this.draw();
    };
  }

  function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
      snowflakes.push(new Snowflake());
    }
  }

  function animateSnowflakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < snowflakes.length; i++) {
      snowflakes[i].update();
    }

    requestAnimationFrame(animateSnowflakes);
  }

  createSnowflakes();
  animateSnowflakes();

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
});
