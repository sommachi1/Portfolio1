// Hamburger Menu Functionality
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const close = document.getElementById("close-btn");

// Toggle menu
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("fa-times");
});

// Close menu when clicking on links
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("fa-times");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove("active");
    menuIcon.classList.remove("fa-times");
  }
});

// Sticky header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Active section highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

ScrollReveal({
  distance: `80px`,
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(`.home-content,heading`, { origin: `top` });
ScrollReveal().reveal(
  `.home-img, .services,.portfolio-container, .portfolio-section, .contact`,
  {
    origin: `buttom`,
  }
);
ScrollReveal().reveal(
  `.home-contact h1, .step-img-box, .skill-card, .about-img`,
  {
    origin: `left`,
  }
);
ScrollReveal().reveal(
  `.home-contact p,  .container grid grid--2-cols grid--center-v, .about-content`,
  { origin: `right` }
);

// typed js
const typed = new Typed(`.multiple-text`, {
  strings: [`Frontend Developer`, `Web Developer`, `Crypto Analyst`],
  typeSpeed: 70,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});
// Alert
const customAlert = document.getElementById("custom-alert");
const closeBtn = document.getElementById("close-btn");

function slide(direction) {
  const grid = document.getElementById("projectsGrid");
  const cards = grid.querySelectorAll(".project-box");
  const cardWidth = cards[0].offsetWidth + 20; // 20 = gap between cards
  const visibleCount = 3;
  const totalCards = cards.length;

  const maxIndex = Math.ceil(totalCards / visibleCount) - 1;
  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const scrollX = currentIndex * cardWidth * visibleCount;
  grid.style.transform = `translateX(-${scrollX}px)`;
}
