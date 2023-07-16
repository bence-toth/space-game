const root = document.querySelector(":root");

window.addEventListener("mousemove", (mouseMoveEvent) => {
  root.style.setProperty("--mouse-x", `${mouseMoveEvent.clientX}px`);
  root.style.setProperty("--mouse-y", `${mouseMoveEvent.clientY}px`);
});
