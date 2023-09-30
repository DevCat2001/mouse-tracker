document.addEventListener("DOMContentLoaded", () => {
  const posXInput = document.querySelector("#pos-x");
  const posYInput = document.querySelector("#pos-y");
  const xLine = document.querySelector(".x-line");
  const yLine = document.querySelector(".y-line");

  function updateMousePosition(event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    posXInput.value = `pos-x: ${mouseX}`;
    posYInput.value = `pos-y: ${mouseY}`;

    xLine.style.transform = `translateY(${mouseY}px)`;
    yLine.style.transform = `translateX(${mouseX}px)`;
  }

  window.addEventListener("mousemove", updateMousePosition);
});