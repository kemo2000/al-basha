document.addEventListener("DOMContentLoaded", () => {
  // تعريف قائمة الأسعار
  const categories = {
    "tiktok": [
 "70 coin = 50 L.E",
 "350 coin = 200 L.E",
 "700 coin = 400 L.E",
 "1000 coin = 570 L.E",
 "1050 coin = 600 L.E",
 "1400 coin = 800 L.E",
 "2000 coin = 1140 L.E",
 "3500 coin = 2000 L.E",
 "4000 coin = 2300 L.E",
 "5000 coin = 2850 L.E",
 "7000 coin = 4000 L.E",
 "10000 coin = 5700 L.E",
 "14000 coin = 8000 L.E",
    ],
    "pubg-global": [

 "60 UC = 50 L.E",

 "325 UC = 230 L.E",

 "660 UC = 450 L.E",

 "720 UC = 500 L.E",

 "1800 UC = 1150 L.E",

 "3850  UC = 2250 L.E",

 "8100 UC = 4400 L.E",

    ],

    "pubg-korea": [
 "60 UC = 60 L.E",

 "190 UC = 150 L.E",

 "310 UC = 250 L.E",

 "380 UC = 300 L.E",

 "660 UC =500 L.E",

 "720 UC = 550 L.E",

 "1800 UC = 1200 L.E",

 "3850  UC = 2350 L.E",

 "8100 UC = 4600 L.E",
    ],
  };

  // الحصول على العناصر من الصفحة
  const priceCategories = document.querySelectorAll(".price-category"); // جميع الخانات
  const modal = document.getElementById("price-modal"); // النافذة المنبثقة
  const modalTitle = document.getElementById("modal-title"); // عنوان النافذة
  const modalPrices = document.getElementById("modal-prices"); // قائمة الأسعار داخل النافذة
  const closeModal = document.querySelector(".close-modal"); // زر الإغلاق

  // إضافة حدث النقر على الخانات
  priceCategories.forEach((category) => {
    category.addEventListener("click", () => {
      const categoryName = category.dataset.category; // جلب اسم الفئة من البيانات
      modalTitle.textContent = category.querySelector("h3").textContent; // تحديث عنوان النافذة
      modalPrices.innerHTML = categories[categoryName]
        .map((price) => `<li>${price}</li>`)
        .join(""); // إضافة الأسعار إلى القائمة

      // إظهار النافذة بحركة
      modal.style.display = "flex"; // التأكد من عرض النافذة
      gsap.fromTo(
        ".modal-content",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
      );
    });
  });

  // حدث إغلاق النافذة
  closeModal.addEventListener("click", () => {
    gsap.to(".modal-content", {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "power2.in",
      onComplete: () => {
        modal.style.display = "none"; // إخفاء النافذة بعد انتهاء الحركة
      },
    });
  });

  // إغلاق النافذة عند النقر خارج المحتوى
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      gsap.to(".modal-content", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "power2.in",
        onComplete: () => {
          modal.style.display = "none";
        },
      });
    }
  });
});
