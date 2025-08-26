// ================== Scroll Animation ==================
AOS.init();

// ================== Typing Effect ==================
new Typed(".typing", {
  strings: ["Student at NIST University", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// ================== Theme Toggle ==================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

function applyTheme(theme) {
  body.classList.toggle("light-mode", theme === "light");
  icon.className = theme === "light" ? "bi bi-sun" : "bi bi-moon";
}

themeToggle.addEventListener("click", () => {
  const newTheme = body.classList.contains("light-mode") ? "dark" : "light";
  localStorage.setItem("theme", newTheme);
  applyTheme(newTheme);
});

applyTheme(localStorage.getItem("theme") || "dark");

// ================== Active Link Highlight ==================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// Use IntersectionObserver instead of scroll loop
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`nav a[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("active"));
        if (link) link.classList.add("active");
      }
    });
  },
  { threshold: 0.5 } // section visible at least 50%
);

sections.forEach((section) => observer.observe(section));

// Auto-close menu on click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("click").checked = false;
  });
});

// ================== Form Alert ==================
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent refresh
  alert("Message sent! I'll get back to you soon.");
  form.reset();
});

// ================== Reveal on Scroll ==================
const reveals = document.querySelectorAll(".education-content");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting);
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((box) => revealObserver.observe(box));

// ================== Certificates Toggle ==================
function toggleCertificates() {
  const section = document.getElementById("certificates");
  if (section.style.maxHeight) {
    section.style.maxHeight = null;
  } else {
    section.style.display = "block";
    section.style.maxHeight = section.scrollHeight + "px";
    section.scrollIntoView({ behavior: "smooth" });
  }
}
