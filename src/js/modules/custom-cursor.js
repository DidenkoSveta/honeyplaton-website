export default function customCursor() {
   // Объявление объекта курсора
   const cursor = {
       delay: 8,
       _x: 0,
       _y: 0,
       endX: window.innerWidth / 2,
       endY: window.innerHeight / 2,
       $dot: document.querySelector('.cursor-dot'),
       $outline: document.querySelector('.cursor-dot-outline'),
       
       // Инициализация курсора
       init: function() {
           // Настройка размеров элементов курсора
           this.dotSize = this.$dot.offsetWidth;
           this.outlineSize = this.$outline.offsetWidth;
           
           // Установка обработчиков событий
           this.setupEventListeners();
           // Запуск анимации курсора
           this.animateDotOutline();
       },
       
       // Установка обработчиков событий
       setupEventListeners: function() {
           // Обработка наведения на ссылки
           document.querySelectorAll('a').forEach(el => {
               el.addEventListener('mouseover', () => {
                   this.cursorEnlarged = true;
                   this.toggleCursorSize();
               });
               el.addEventListener('mouseout', () => {
                   this.cursorEnlarged = false;
                   this.toggleCursorSize();
               });
           });
           
           // Обработка событий нажатия и отпускания мыши
           document.addEventListener('mousedown', () => {
               this.cursorEnlarged = true;
               this.toggleCursorSize();
           });
           document.addEventListener('mouseup', () => {
               this.cursorEnlarged = false;
               this.toggleCursorSize();
           });
   
           // Обработка движения мыши
           document.addEventListener('mousemove', e => {
               this.endX = e.pageX;
               this.endY = e.pageY;
               this.$dot.style.top = this.endY + 'px';
               this.$dot.style.left = this.endX + 'px';
           });
           
           // Обработка входа и выхода курсора из окна
           document.addEventListener('mouseenter', () => {
               this.toggleCursorVisibility(true);
           });
           
           document.addEventListener('mouseleave', () => {
               this.toggleCursorVisibility(false);
           });
       },
       
       // Анимация внешнего контура курсора
       animateDotOutline: function() {
           this._x += (this.endX - this._x) / this.delay;
           this._y += (this.endY - this._y) / this.delay;
           this.$outline.style.top = this._y + 'px';
           this.$outline.style.left = this._x + 'px';
           
           requestAnimationFrame(this.animateDotOutline.bind(this));
       },
       
       // Изменение размера курсора
       toggleCursorSize: function() {
           if (this.cursorEnlarged) {
               this.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
               this.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
           } else {
               this.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
               this.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
           }
       },
       
       // Переключение видимости курсора
       toggleCursorVisibility: function(visible) {
           const opacity = visible ? 1 : 0;
           this.$dot.style.opacity = opacity;
           this.$outline.style.opacity = opacity;
       }
   }
 
   cursor.init();
}
