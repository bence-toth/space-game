const root = document.querySelector(":root");

window.addEventListener("mousemove", (mouseMoveEvent) => {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const mouseX = mouseMoveEvent.clientX;
  const mouseY = mouseMoveEvent.clientY;
  root.style.setProperty(
    "--spotlight-center-x",
    `${(100 * mouseX) / viewportWidth}%`
  );
  root.style.setProperty(
    "--spotlight-center-y",
    `${(100 * mouseY) / viewportHeight}%`
  );
  const xDistanceFromCenter = mouseX / viewportWidth - 0.5;
  const yDistanceFromCenter = mouseY / viewportHeight - 0.5;
  const distanceFromCenter =
    2 *
    ((xDistanceFromCenter ** 2 + yDistanceFromCenter ** 2) ** 0.5 / 2 ** 0.5);
  console.log(distanceFromCenter);
  root.style.setProperty(
    "--spotlight-radius-inner",
    `${(15 + distanceFromCenter * 10).toFixed(4)}%`
  );
  root.style.setProperty(
    "--spotlight-radius-outer",
    `${(25 + distanceFromCenter * 10).toFixed(4)}%`
  );
});

const starsHTML = new Array(120).fill(`<div></div>`).join("");
document.querySelector(".stars").innerHTML = starsHTML;

const stars = document.querySelectorAll(".stars > div");
stars.forEach((star) => {
  let x = `${Math.random() * 300 - 100}vw`;
  let y = `${Math.random() * 300 - 100}vh`;
  star.style.setProperty("--x", x);
  star.style.setProperty("--y", y);
  star.style.setProperty("--delay", `${Math.random() * 1.5}s`);
});
