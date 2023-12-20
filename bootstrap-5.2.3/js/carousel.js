document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".btn-voltar");
  const nextButton = document.querySelector(".btn-proximo");
  const carousel = document.querySelector(".carousel");
  const items = carousel.querySelectorAll(".item");

  let currentIndex = 0;
  const totalItems = items.length;
  const itemsPerPage = 3;

  prevButton.addEventListener("click", () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = Math.min(currentIndex + 1, totalItems - itemsPerPage);
    updateCarousel();
  });

  function updateCarousel() {
    items.forEach((item) => {
      item.style.display = "none";
    });
    for (let i = currentIndex; i < currentIndex + itemsPerPage; i++) {
      items[i].style.display = "block";
    }
  }
  updateCarousel();
});
