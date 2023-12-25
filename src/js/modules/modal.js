import gsap from 'gsap';

export default function modal() {
  const overlay = document.getElementById('modal'); // Получаем оверлей
  const modal = overlay.querySelector('.modal-container'); // Получаем контейнер модального окна внутри оверлея
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = overlay.querySelectorAll('[data-close-button]'); // Убедитесь, что кнопки закрытия находятся внутри оверлея

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      openModal();
    });
  });

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      closeModal();
    });
  });

  function openModal() {
    overlay.classList.add('active');
    gsap.to(overlay, { autoAlpha: 1, duration: 0.2 });
    gsap.to(modal, {
      autoAlpha: 1,
      duration: 0.2,
      delay: 0.1
    });
  }

  function closeModal() {
    gsap.to(modal, {
      autoAlpha: 0,
      duration: 0.2
    });
    gsap.to(overlay, {
      autoAlpha: 0,
      duration: 0.2,
      delay: 0.1,
      onComplete: () => overlay.classList.remove('active')
    });
  }
}
