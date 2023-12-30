import gsap from 'gsap';

// Функция для показа уведомления пользователю
function showNotification(overlay, message) {
  const notification = overlay.querySelector('.notification');
  notification.textContent = message;
  notification.style.display = 'block'; // Убедитесь, что уведомление видно

  gsap.to(notification, {
    autoAlpha: 1,
    duration: 0.2,
    onComplete: () => {
      // Скрываем уведомление после 2 секунд
      gsap.to(notification, {
        autoAlpha: 0,
        duration: 0.2,
        delay: 2,
        onComplete: () => {
          notification.style.display = 'none'; // Скрываем уведомление в конце анимации
          closeModal(overlay, notification.parentElement); // Закрываем модальное окно
        }
      });
    }
  });
}

// Функция для закрытия модального окна
function closeModal(overlay, modal) {
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

// Функция для отправки данных формы
function submitForm(form, overlay) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => {
        // Проверяем содержание ответа сервера
        if (data.includes('успешно')) {
          // Если ответ содержит слово "успешно", сообщаем об успешной отправке
          showNotification(overlay, "Сообщение успешно отправлено.");
        } else {
          // Если ответ не содержит слово "успешно", показываем текст ответа
          showNotification(overlay, data);
        }
      })
      .catch(error => {
        console.error('Ошибка:', error);
        showNotification(overlay, "Ошибка отправки."); // Показываем сообщение об ошибке
      });
  });
}

export default function modal() {
  const overlay = document.getElementById('modal'); // Получаем оверлей
  const modal = overlay.querySelector('.modal-container'); // Получаем контейнер модального окна внутри оверлея
  const form = modal.querySelector('.modal-form'); // Получаем форму внутри модального окна
  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = overlay.querySelectorAll('[data-close-button]');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      overlay.classList.add('active');
      gsap.to(overlay, { autoAlpha: 1, duration: 0.2 });
      gsap.to(modal, {
        autoAlpha: 1,
        duration: 0.2,
        delay: 0.1
      });
    });
  });

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      closeModal(overlay, modal);
    });
  });

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeModal(overlay, modal);
    }
  });

  // Инициализируем отправку формы
  if (form) {
    submitForm(form, overlay);
  }
}
