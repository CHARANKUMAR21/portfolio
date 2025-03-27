const navMobile = document.getElementById("nav-mobile");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle Navigation Menu on Mobile
menuBtn.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    navMobile.classList.toggle("open");

    const isOpen = navMobile.classList.contains("open");
    menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-3-line";

    // Ensure menu visibility on mobile
    navMobile.style.display = isOpen ? "flex" : "none";
  }
});

// Close Menu When Clicking a Link on Mobile
navMobile.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    navMobile.classList.remove("open");
    navMobile.style.display = "none";
    menuBtnIcon.className = "ri-menu-3-line";
  }
});

// Ensure menu is always visible on larger screens
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navMobile.style.display = "none"; // Hide mobile menu
  }
});

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,
});
document.getElementById("menu-btn").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});
