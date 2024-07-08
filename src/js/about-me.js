import Accordion from 'accordion-js';

new Accordion('.accordion-container', {
  duration: 400,
  openOnInit: [0],
  onOpen: function (currentElement) {
    const down = currentElement.querySelector('.am-icon-button-down');
    const up = currentElement.querySelector('.am-icon-button-up');
    down.classList.toggle('open');
    up.classList.toggle('open');
  },
  onClose: function (currentElement) {
    const down = currentElement.querySelector('.am-icon-button-down');
    const up = currentElement.querySelector('.am-icon-button-up');
    down.classList.toggle('open');
    up.classList.toggle('open');
  },
});
