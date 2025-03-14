document.addEventListener("DOMContentLoaded", function () {
  // Hamburger Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("mobile");
    navLinks.classList.toggle("show");
	hamburger.classList.toggle("open"); // Ensure it toggles into a cross (✖)
  });

  // Carousel Functionality
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;
  const totalItems = carouselItems.length;
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  function showSlide(index) {
    carouselItems.forEach((item, i) => {
      item.classList.remove("active");
      if (i === index) {
        item.classList.add("active");
      }
    });
  }

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showSlide(currentIndex);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  });

  // Auto-slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    showSlide(currentIndex);
  }, 5000);
});
