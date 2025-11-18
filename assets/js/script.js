//hero swiper

const swiper = new Swiper(".hero-swiper", {
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 0,
  loop: true,
  speed: 700,
  // navigation: {
  //   nextEl: ".hero-next",
  //   prevEl: ".hero-prev",
  // },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".hero-pagination",
    clickable: true,
  },
});

//top deals swiperjs

const topDealsSwiper = new Swiper(".top-deals-swiper", {
  // slidesPerView: 4,
  spaceBetween: 25,
  loop: false,
  // navigation: {
  //   nextEl: ".deals-next",
  //   prevEl: ".deals-prev",
  // },
  pagination: {
    el: ".deals-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    0: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 4 },
    1440: { slidesPerView: 4 },
  },
});

//top-sellers swiper

const topSellersSwiper = new Swiper(".top-sellers-swiper", {
  // slidesPerView: 4,
  spaceBetween: 20,
  loop: false,
  // navigation: {
  //   nextEl: ".deals-next",
  //   prevEl: ".deals-prev",
  // },
  pagination: {
    el: ".sellers-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    0: { slidesPerView: 2},
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
    1280: { slidesPerView: 4 },
    1440: { slidesPerView: 4 },
  },
});

//landscape swiper

const landscapeSwiper = new Swiper(".landscape-swiper", {
  slidesPerView: 1,
  loop: true,
  speed: 800,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  // navigation: {
  //   nextEl: ".landscape-next",
  //   prevEl: ".landscape-prev",
  // },
  pagination: {
    el: ".landscape-pagination",
    clickable: true,
  },
});


