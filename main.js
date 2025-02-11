// ✅ Typing Effect
var typed = new Typed(".text", {
  strings: ["SDE @Impulsive Web", "Full Stack Developer", "Event Manager", "GDG Outreach Lead", "Wikimedia Contributor", "CNCF Co-Organizer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ✅ Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden").forEach(element => {
  observer.observe(element);
});

// ✅ Navbar Toggle for Mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle"); // ✅ Fixed Typo
  const navbar = document.getElementById("navbar");

  // ✅ Toggle Navbar on Click
  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });

  // ✅ Close Navbar When Clicking Outside
  document.addEventListener("click", function (event) {
    if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
      navbar.classList.remove("active");
    }
  });
});
