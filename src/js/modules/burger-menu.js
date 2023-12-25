   
   import gsap from 'gsap';
   export default function burgerMenu() {
         const burger = document.querySelector('.header__burger');
         const close = document.querySelector('.header__close');
         const nav = document.querySelector('.header__nav');
         const dimBackground = document.createElement('div');
         dimBackground.classList.add('dim-background');
         document.body.appendChild(dimBackground);
      
         burger.addEventListener('click', () => {
         gsap.to(nav, {left: "0%", duration: 0.4, ease: "expo.out"});
         gsap.to(dimBackground, {display: "block", opacity: 1, duration: 0.5});
         close.style.display = "block"; // Показать кнопку закрытия
         });
      
         close.addEventListener('click', () => {
         gsap.to(nav, {left: "100vw", duration: 0.4, ease: "expo.in"});
         gsap.to(dimBackground, {opacity: 0, duration: 0.4, onComplete: () => {
            dimBackground.style.display = "none";
            close.style.display = "none"; // Скрыть кнопку закрытия после анимации
         }});
         });
      
         dimBackground.addEventListener('click', () => {
         gsap.to(nav, {left: "100vw", duration: 0.4, ease: "expo.in"});
         gsap.to(dimBackground, {opacity: 0, duration: 0.4, onComplete: () => {
            dimBackground.style.display = "none";
            close.style.display = "none"; // Скрыть кнопку закрытия после анимации
         }});
         });
    }