const galleryImages = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

function openModal(imageElement) {
  modalImage.src = imageElement.dataset.full;
  modalImage.alt = imageElement.alt;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  modalImage.src = "";
}

galleryImages.forEach((image) => {
  image.addEventListener("click", () => openModal(image));
});

modal.addEventListener("click", closeModal);

modalImage.addEventListener("click", (event) => {
  event.stopPropagation();
});
