import '../scss/style.scss'; // Путь к файлу стилей

// Импорт функций из модулей
import burgerMenu from './modules/burger-menu';
import startAnimation from './modules/animation';
import modal from './modules/modal';
import scroll from './modules/scroll-to-top';
import custom_cursor from './modules/custom-cursor';

// Использование функций после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  startAnimation();
  scroll();
  custom_cursor();
  const modalTrigger = document.getElementById('modal');
  if (modalTrigger) {
    modal();
  }
});