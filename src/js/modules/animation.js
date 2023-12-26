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

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.1});

  // Наблюдаем за элементами .skills__item, .about-me и .education
  const elementsToAnimate = document.querySelectorAll('.advantages__item, .advantages__image, .promo__subtitle, .products__item, .about__image, h2,  .about__description, .delivery__item, .promo__image');
  elementsToAnimate.forEach(item => {
    observer.observe(item);
  });
}
