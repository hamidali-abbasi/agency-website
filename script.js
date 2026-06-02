// ===============================
// 1. SMOOTH SCROLL NAV LINKS
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });

      // close mobile menu after click
      document.querySelector("nav")?.classList.remove("active");
    }
  });
});


// ===============================
// 2. MOBILE MENU TOGGLE
// ===============================
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}


// ===============================
// 3. LOADER HIDE (extra safety)
// ===============================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});


// ===============================
// 4. CONTACT FORM HANDLING (FIXED FOR NETLIFY)
// ===============================
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function () {
    alert("✅ Message sent successfully!");
  });
}


// ===============================
// 5. NAVBAR SHADOW ON SCROLL
// ===============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
    header.style.background = "#0f172a";
  } else {
    header.style.boxShadow = "none";
    header.style.background = "rgba(15,23,42,0.8)";
  }
});


// ===============================
// 6. LOGIN MODAL CLOSE ON OUTSIDE CLICK
// ===============================
const modal = document.getElementById("loginModal");

if (modal) {
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}


// ===============================
// 7. LOGIN FUNCTION
// ===============================
function openLogin() {
  const modal = document.getElementById("loginModal");
  if (modal) modal.style.display = "flex";
}

function login() {
  const u = document.getElementById("username")?.value;
  const p = document.getElementById("password")?.value;

  if (u === "admin" && p === "1234") {
    alert("Login Successful");
    document.getElementById("loginModal").style.display = "none";
  } else {
    alert("Invalid Login");
  }
}