import '../scss/style.scss'; // Путь к файлу стилей

// Импорт функций из модулей
import burgerMenu from './modules/burger-menu';
import startAnimation from './modules/animation';
import modal from './modules/modal';

// Использование функций после полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  startAnimation();
  modal();
  
});




