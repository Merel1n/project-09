// const swiper_pr = new Swiper('.swiper-container', {
//     // modules: [Navigation, Pagination, Keyboard],
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 16,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 16,
//         },
//         1440: {
//             slidesPerView: 4,
//             spaceBetween: 16,
//         }
//     },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     keyboard: {
//         enabled: true,
//         onlyInViewport: false,
//     },
//     on: {
//         reachEnd: function () {
//             refs.nextButton.classList.add('swiper-button-disabled');
//         },
//         reachBeginning: function () {
//             refs.prevButton.classList.add('swiper-button-disabled');
//         },
//         fromEdge: function () {
//             refs.nextButton.classList.remove('swiper-button-disabled');
//             refs.prevButton.classList.remove('swiper-button-disabled');
//         }
//     }
// });