import { getReviews } from './api.js';
import { refs } from './refs.js';

import Swiper from 'swiper/bundle';


import 'swiper/css/bundle';
export async function renderReviews() {
  try {
    const reviews = await getReviews();

    if (reviews.length === 0) {
      refs.errorMessage.textContent = 'Not found';
      return;
    }

    reviews.forEach(review => {
      const li = document.createElement('li');
      li.classList.add('swiper-slide');
      li.innerHTML = `
        <div class="review">
          <img src="${review.avatar_url}" alt="${review.author}'s avatar">
          <p>${review.author}</p>
          <p>${review.review}</p>
        </div>
      `;
      refs.reviewsContainer.appendChild(li);
    });

    const swiper = new Swiper('.swiper-container', {
      modules: [Navigation, Pagination, Keyboard],
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      on: {
        reachEnd: function() {
          refs.nextButton.classList.add('swiper-button-disabled');
        },
        reachBeginning: function() {
          refs.prevButton.classList.add('swiper-button-disabled');
        },
        fromEdge: function() {
          refs.nextButton.classList.remove('swiper-button-disabled');
          refs.prevButton.classList.remove('swiper-button-disabled');
        }
      }
    });
  } catch (error) {
    refs.errorMessage.textContent = 'Not found';
  }
}

document.addEventListener('DOMContentLoaded', renderReviews);
