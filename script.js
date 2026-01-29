// ==================
// CAROUSEL
// ==================
const slides = document.querySelectorAll(".slide");
if (slides.length > 0) {
  let currentSlide = 0;
  const carouselInterval = setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 5000);
  // Cleanup on page unload
  window.addEventListener("beforeunload", () => clearInterval(carouselInterval));
}

// ==================
// CONTACT BUTTON
// ==================
const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    const form = document.querySelector(".contact-form");
    if (form) form.scrollIntoView({ behavior: "smooth" });
  });
}

// ==================
// MOBILE NAV SETUP
// ==================
function setupMobileNav() {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector("header nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
    // Close nav when a link is clicked
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => nav.classList.remove("active"));
    });
  }
}

// ==================
// MOBILE NAV
// ==================
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector("header nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  // Close nav when a link is clicked
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("active"));
  });
}

// ==================
// SCROLL REVEAL
// ==================
if ("IntersectionObserver" in window) {
  const reveals = document.querySelectorAll(".reveal, .slide-up");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
  );
  reveals.forEach(el => observer.observe(el));
}

// ==================
// DARK MODE (AUTO-SCHEDULE)
// ==================
const toggle = document.getElementById("themeToggle");
const THEME_KEY = "app-theme";
const AUTO_THEME_KEY = "app-theme-auto";

// Determine theme based on time of day
// Light mode: 6 AM - 6 PM (06:00 - 18:00)
// Dark mode: 6 PM - 6 AM (18:00 - 06:00)
function getThemeByTime() {
  const hour = new Date().getHours();
  return (hour >= 6 && hour < 18) ? "light" : "dark";
}

// Initialize theme from localStorage, or automatically based on time
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const isAutoMode = localStorage.getItem(AUTO_THEME_KEY) !== "false";
  
  let theme;
  if (saved && !isAutoMode) {
    // If user manually selected a theme and disabled auto, use that
    theme = saved;
  } else {
    // Auto mode: use time-based theme
    theme = getThemeByTime();
    localStorage.setItem(AUTO_THEME_KEY, "true");
  }
  
  document.documentElement.setAttribute("data-theme", theme);
}

// Update theme periodically and when time changes
function setupAutoThemeUpdate() {
  let lastHour = new Date().getHours();
  
  setInterval(() => {
    const currentHour = new Date().getHours();
    // Check if we've crossed into a different day period
    if ((lastHour < 6 && currentHour >= 6) || 
        (lastHour >= 6 && lastHour < 18 && currentHour >= 18) ||
        (lastHour >= 18 && currentHour < 6)) {
      const isAutoMode = localStorage.getItem(AUTO_THEME_KEY) !== "false";
      if (isAutoMode) {
        const newTheme = getThemeByTime();
        document.documentElement.setAttribute("data-theme", newTheme);
      }
      lastHour = currentHour;
    }
  }, 60000); // Check every minute
}

if (toggle) {
  toggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
    localStorage.setItem(AUTO_THEME_KEY, "false"); // Disable auto mode when user manually toggles
  });
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupAutoThemeUpdate();
});

// ==================
// FAQ TOGGLE
// ==================
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const isOpen = answer.classList.contains("open");
    // Close all answers
    document.querySelectorAll(".faq-answer").forEach(a => a.classList.remove("open"));
    // Toggle current answer
    if (!isOpen) answer.classList.add("open");
  });
});

// ==================
// HOME LINK VISIBILITY
// ==================
function toggleHomeLink() {
  const homeLink = document.getElementById("navHome");
  if (!homeLink) return;
  
  // Check if we're on the homepage
  const currentPath = window.location.pathname;
  const isHomepage = currentPath.endsWith("index.html") || currentPath.endsWith("/") || currentPath === "";
  
  if (isHomepage) {
    homeLink.classList.remove("show");
  } else {
    homeLink.classList.add("show");
  }
}

// Call on page load and after components load
document.addEventListener("DOMContentLoaded", toggleHomeLink);
window.addEventListener("load", toggleHomeLink);

// ==================
// NEWSLETTER SIGNUP
// ==================
function handleNewsletterSignup(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.querySelector(".newsletter-input").value.trim();
  
  if (email) {
    console.log("Newsletter signup:", { email });
    form.reset();
    alert("🎉 Thank you for subscribing! Check your email for updates.");
  } else {
    alert("Please enter a valid email address.");
  }
}
