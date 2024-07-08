import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.accordion-container-faq');
  const accordion = new Accordion(container, {
    showMultiple: true,
    activeClass: 'open',
    onOpen: currEl => console.log('Open!', currEl),
    onClose: currEl => console.log('Close!', currEl),
  });

  // Вибираємо всі кнопки з класом '.faq-btn'
  const buttons = document.querySelectorAll('.faq-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const iconUse = button.querySelector('svg use');
      const currentIcon = iconUse.getAttribute('href');

      if (currentIcon === './img/icons-sprite.svg#icon-down-arrow') {
        console.log('UP');
        iconUse.setAttribute('href', './img/icons-sprite.svg#icon-up-arrow');
      } else {
        console.log('DOWN');
        iconUse.setAttribute('href', './img/icons-sprite.svg#icon-down-arrow');
      }
    });
  });
});
