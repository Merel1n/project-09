import { refs } from './js/refs';
import './js/reviews';
import './js/projects';
import './js/about-me';
import { observer } from './js/covers';
observer.observe(refs.sectionCovers);
import './js/faq';
import './js/work-together';
import './js/about-me';
import { observer } from './js/covers';
import { isOpenMenu } from './js/modal-menu';
import { closeMenu } from './js/modal-menu';
import { openMenu } from './js/menu';
observer.observe(refs.sectionCovers);
refs.burgerMenu.addEventListener('click', isOpenMenu);
refs.closeBurgerMenu.addEventListener('click', closeMenu);
refs.menu.addEventListener('click', openMenu);

