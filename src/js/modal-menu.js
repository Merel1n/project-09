import { refs } from './refs';
export function isOpenMenu() {
  refs.modalMenu.classList.add('is-open');
  refs.modalContainer.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'A') return;
    const targetId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    closeMenu();
    targetSection.scrollIntoView({ block: 'start' });
  });
}
export function closeMenu() {
  refs.modalMenu.classList.remove('is-open');
}
