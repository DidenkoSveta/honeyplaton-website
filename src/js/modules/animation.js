   
   import gsap from 'gsap';
   export default function animation() {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Анимация букв
      gsap.utils.toArray('.promo__title .letter').forEach((letter, i) => {
        tl.fromTo(letter, 
          { y: '100%' }, // Начальное положение букв
          { y: '0%', opacity: 1, delay: i * 0.05 }, // Конечное положение букв с задержкой
          0 // Момент старта анимации
        );
      });
    }