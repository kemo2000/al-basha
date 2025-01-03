document.addEventListener("DOMContentLoaded", () => {
  // أنيميشن النصوص
  gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
  gsap.from(".btn", { opacity: 0, scale: 0, duration: 1, delay: 1, ease: "elastic.out(1, 0.3)" });
});


document.addEventListener("DOMContentLoaded", () => {
  const floatingElements = document.querySelector(".floating-elements");

  // إنشاء النجوم
  const createStar = () => {
    const star = document.createElement("div");
    const size = Math.random() * 5 + 2; // حجم النجمة بين 2px و 7px
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    star.classList.add("star");
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDuration = `${Math.random() * 5 + 5}s`; // مدة الحركة بين 5-10 ثوانٍ

    floatingElements.appendChild(star);

    // إزالة النجمة بعد انتهاء الحركة
    setTimeout(() => {
      star.remove();
    }, 10000);
  };

  // إنشاء نجوم جديدة بشكل مستمر
  setInterval(createStar, 50); // نجمة جديدة كل 50 مللي ثانية
});
