import { gsap } from "gsap";

export default function logo_animation() {
   const letters = document.querySelectorAll('.logo__letter');
   const svgPath = document.querySelector('.header__logo-svg path'); // Предполагая, что анимируется path в SVG

   // Анимация для букв
   letters.forEach((letter, index) => {
      gsap.to(letter, {
         duration: 1,
         ease: "power1.inOut",
         color: "#FFD34E",
         repeat: -1,
         repeatDelay: 1.6,
         yoyo: true,
         delay: index * 0.1,
      });
   });

   // Анимация для SVG (анимация атрибута 'fill')
   if (svgPath) {
      gsap.to(svgPath, {
         duration: 1.5,
         ease: "power1.inOut",
         attr: { fill: "#FFD34E" },
         repeat: -1,
         repeatDelay: 1,
         yoyo: true
      });
   }
}

// Запуск анимации после загрузки страницы
window.addEventListener('load', logo_animation);
