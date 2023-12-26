import gsap from 'gsap';

export default function animation() {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Анимация букв и пробелов
  gsap.utils.toArray('.promo__title .letter, .promo__title .space').forEach((elem, i) => {
    // Анимация для букв и пробелов
    tl.fromTo(elem, 
      { y: '100%' }, // Начальное положение букв и пробелов
      { y: '0%', opacity: 1, delay: i * 0.05 }, // Конечное положение букв с задержкой
      0 // Момент старта анимации
    );
  });
}
