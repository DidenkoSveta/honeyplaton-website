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
  
  // Анимация для капель меда, стекающих по очереди
  const drips = document.querySelectorAll('.honey-drip svg .promo__drip-path');
  const dripsInner = document.querySelectorAll('.honey-drip svg .promo__drip-inner');
  
  drips.forEach((drip, index) => {
    // Для каждой капли задаем анимацию растяжения вниз и уменьшения прозрачности
    tl.fromTo(drip, 
      { scaleY: 1, transformOrigin: 'top center'},
      {
        scaleY: 1.4,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        yoyoEase: 'power1.inOut',
        repeatDelay: 1, // Пауза перед началом следующего цикла
        delay: index * 0.5, // задержка между анимациями капель
      }, 0);
  });

  dripsInner.forEach((drip, index) => {
    // Для каждой капли задаем анимацию растяжения вниз и уменьшения прозрачности
    tl.fromTo(drip, 
      { scaleY: 1, transformOrigin: 'top center'},
      {
        scaleY: 1.6,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        yoyoEase: 'power1.inOut',
        repeatDelay: 1, // Пауза перед началом следующего цикла
        delay: index * 0.5, // задержка между анимациями капель
      }, 0);
  });
  


}
