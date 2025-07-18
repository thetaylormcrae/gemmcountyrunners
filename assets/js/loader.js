document.addEventListener("DOMContentLoaded", function () {
  const phrases = [
    "Lacing up...",
    "Mapping the route...",
    "Warming up the trail...",
    "One stride at a time...",
    "Ready to run Emmett..."
  ];

  let index = 0;
  const textEl = document.getElementById("gcr-loader-text");

  setInterval(() => {
    index = (index + 1) % phrases.length;
    textEl.textContent = phrases[index];
  }, 3000);

  window.addEventListener("load", () => {
    const loader = document.getElementById("gcr-loader");
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 500);
  });
});
