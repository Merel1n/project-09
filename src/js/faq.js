import Accordion from 'accordion-js';
//import sprite from './src/img/icons-sprite.svg';
//import 'accordion-js/dist/accordion.min.css';

//new Accordion('.accordion-container-faq');
const container = document.querySelector('.accordion-container-faq');
const accordion = new Accordion(container, {
  showMultiple: true,
  onOpen: currEl => console.log('Open!', currEl),
});

const buttons = container.querySelectorAll('.close-accordion-btn');
[...buttons].map((button, idx) => {
  button.addEventListener('click', () => accordion.close(idx));
});

// function accordionIcon(currEl) {
//   if (condition) {
//   }
// }
