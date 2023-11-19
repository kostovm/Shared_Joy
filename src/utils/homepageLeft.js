document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.querySelector(".button-container").style.display = "flex";
      document.querySelector(".search-button").style.opacity = 1;
      setTimeout(() => {
        document.querySelector(".share-button").style.opacity = 1;
      }, 1000);
    }, 2000);
  });