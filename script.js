document.addEventListener("DOMContentLoaded", () => {
  const xLine = document.querySelector(".x-line");
  const yLine = document.querySelector(".y-line");

  function updateMousePosition(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      xLine.style.transform = `translateY(${mouseY}px)`;
      yLine.style.transform = `translateX(${mouseX}px)`;

      document.querySelector("#position").textContent = `X: ${mouseX}, Y: ${mouseY}`;
  }

  window.addEventListener("mousemove", updateMousePosition);
});