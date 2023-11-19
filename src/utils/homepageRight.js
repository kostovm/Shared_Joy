document.addEventListener("DOMContentLoaded", () => {
  const fadeInImage = document.querySelector(".fade-in-image");

  // Wait for the transition to complete before modifying the opacity
  fadeInImage.addEventListener("transitionend", () => {
    fadeInImage.style.opacity = 1;
  });

  // Ensure that the transition has started (if it's set in CSS)
  fadeInImage.offsetHeight; // Trigger a reflow to force the transition to start
});