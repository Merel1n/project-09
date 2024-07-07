import './js/reviews';
import './js/faq';
import { refs } from './js/refs';

import './js/projects';
import { observer } from './js/covers';
observer.observe(refs.sectionCovers);

import './js/work-together';
import { isOpenMenu } from './js/modal-menu';
import { closeMenu } from './js/modal-menu';
import { openMenu } from './js/menu';
observer.observe(refs.sectionCovers);
refs.burgerMenu.addEventListener('click', isOpenMenu);
refs.closeBurgerMenu.addEventListener('click', closeMenu);
refs.menu.addEventListener('click', openMenu);
