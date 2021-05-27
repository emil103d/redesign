const menuKnap = document.querySelector(".menuknap");
let menuOpen = false;

menuKnap.addEventListener("click", () => {
  if (!menuOpen) {
    menuKnap.classList.add("open");
    menuOpen = true;
  } else {
    menuKnap.classList.remove("open");
    menuOpen = false;
  }
});
