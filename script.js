// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");

if (hamburger && navMobile) {
  hamburger.addEventListener("click", () => {
    navMobile.classList.toggle("active");
    const spans = hamburger.querySelectorAll("span");
    if (navMobile.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(7px, 7px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(7px, -7px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });
}

// Language switcher — fully functional
const langButtons = document.querySelectorAll(".lang-btn");
const langElements = document.querySelectorAll("[data-lang]");

function setLanguage(lang) {
  // Update active button
  langButtons.forEach(btn => {
    if (btn.getAttribute("data-lang-code") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  // Show only elements for selected language
  langElements.forEach(el => {
    if (el.getAttribute("data-lang") === lang) {
      el.style.display = "inline";
    } else {
      el.style.display = "none";
    }
  });

  // Update HTML direction for RTL languages
  if (lang === "fa" || lang === "ku") {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }

  // Save to localStorage
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
}

// Load saved language or default to English
const savedLang = localStorage.getItem("language") || "en";
setLanguage(savedLang);

// Add click listeners
langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang-code");
    setLanguage(lang);
  });
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll(".nav-mobile a");
mobileLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navMobile.classList.contains("active")) {
      hamburger.click();
    }
  });
});