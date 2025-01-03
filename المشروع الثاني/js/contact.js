document.addEventListener("DOMContentLoaded", () => {
  gsap.from("h2", { opacity: 0, y: -50, duration: 1 });
  gsap.from("ul li", { opacity: 0, x: 50, duration: 1, stagger: 0.2 });
});
