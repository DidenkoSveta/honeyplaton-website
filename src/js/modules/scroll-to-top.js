export default function scroll() {
   // Создаем кнопку
   const scrollButton = document.createElement('button');
   scrollButton.classList.add('scroll-to-top');
   document.body.appendChild(scrollButton);
 
   // Стилизация кнопки
   scrollButton.style.position = 'fixed';
   scrollButton.style.bottom = '60px';
   scrollButton.style.right = '20px';
   scrollButton.style.display = 'none'; // Скрыть до прокрутки до блока .advantages
   scrollButton.style.zIndex = '1000';
   scrollButton.style.cursor = 'pointer';
   // Добавьте другие стили по вашему усмотрению
 
   // Обработчик нажатия кнопки
   scrollButton.addEventListener('click', () => {
     window.scrollTo({
       top: 0,
       behavior: 'smooth' // Плавный скроллинг
     });
   });
 
   // Обработчик прокрутки страницы
   window.addEventListener('scroll', () => {
     const advantagesSection = document.querySelector('.advantages');
     const sectionTop = advantagesSection.getBoundingClientRect().top;
     if (sectionTop < window.innerHeight) {
       scrollButton.style.display = 'block'; // Показать кнопку
     } else {
       scrollButton.style.display = 'none'; // Скрыть кнопку
     }
   });


   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем стандартное поведение
  
        // Получаем целевой элемент, к которому нужно прокрутить
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
  
        // Проверяем, существует ли целевой элемент
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth', // Плавная прокрутка
            block: 'start' // Выравнивание элемента по верхнему краю
          });
        }
      });
    });
 }
 