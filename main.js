var typed = new Typed(".text", {
  strings: ["SDE @Impulsive Web","Full Stack Developer","Event Manager","GDG Outreach Lead","Wikimedia Contributor","CNCF Co-Organizer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show"); // Jab element viewport me aaye, show class add karega
    }
  });
}, { threshold: 0.2 }); // Jab 20% element visible hoga tab trigger hoga

// Jitne bhi elements hidden class ke saath hain, unko observe karo
document.querySelectorAll(".hidden").forEach(element => {
  observer.observe(element);
});
