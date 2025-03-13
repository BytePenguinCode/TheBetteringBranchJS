document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  // ✅ FIXED: Hamburger Menu Toggle with Smooth Slide Effect
  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("show");
    if (navLinks.classList.contains("show")) {
      navLinks.style.display = "flex"; // Make menu visible
      setTimeout(() => {
        navLinks.style.opacity = "1";
        navLinks.style.transform = "translateY(0)";
      }, 10);
    } else {
      navLinks.style.opacity = "0";
      navLinks.style.transform = "translateY(-20px)";
      setTimeout(() => {
        navLinks.style.display = "none"; // Hide after animation
      }, 300);
    }
  });

  // ✅ Button Animations (Scaling on Hover)
  const buttons = document.querySelectorAll("button, .nav-links a");
  buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
      button.style.transform = "scale(1.1)";
      button.style.transition = "transform 0.3s ease-in-out";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });
  });

  // ✅ Page Load Animation
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1s ease-in-out";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 200);



  // ✅ Image Click Animations (Scale + Rotate)
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.style.transition = "transform 0.3s ease-in-out";
    
    img.addEventListener("click", () => {
      img.style.transform = "scale(1.1) rotate(2deg)";
      setTimeout(() => {
        img.style.transform = "scale(1) rotate(0)";
      }, 300);
    });
  });
});
