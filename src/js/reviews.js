import { refs } from "./refs";
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import axios from "axios";
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  // slidesPerView: 4,
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
