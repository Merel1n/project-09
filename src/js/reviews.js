import { refs } from "./refs";
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  // pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  // },
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
});