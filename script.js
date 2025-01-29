document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  sections.forEach((section) => observer.observe(section));
});

function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

function closeMenu() {
  document.querySelector(".nav-links").classList.remove("show");

  const targetId = event.target.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  targetElement.scrollIntoView({ behavior: 'smooth'});
}
