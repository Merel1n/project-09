import { refs } from './refs.js';
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
const swiper_pr = new Swiper('.swiper-pr', {
    direction: 'horizontal',
    navigation: {
        nextEl: '.projects-btn-next',
        prevEl: '.projects-btn-prev',
    },

    slidesPerView: 1,
    // spaceBetween: 34,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        320: {
            spaceBetween: 16,
        },
        375: {
            spaceBetween: 34,
        },
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    on: {
        reachEnd: function () {
            refs.projectsNextButton.classList.add('swiper-button-disabled');
        },
        reachBeginning: function () {
            refs.projectsPrevButton.classList.add('swiper-button-disabled');
        },
        fromEdge: function () {
            refs.projectsNextButton.classList.remove('swiper-button-disabled');
            refs.projectsPrevButton.classList.remove('swiper-button-disabled');
        }
    }
});