document.addEventListener("DOMContentLoaded", () => {
  gsap.from("h2", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".account", { opacity: 0, scale: 0.8, duration: 1, stagger: 0.2 });
});
