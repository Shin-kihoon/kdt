const learnBtn = document.getElementById("learn-btn");
const modal = document.getElementById("info-modal");
const closeModal = document.getElementById("close-modal");

learnBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});
