import Swiper from "swiper";

let sliderBar;
function initSlider() {
  sliderBar = new Swiper(".slider-bar", {
    wrapperClass: "slider-bar-wrap",
    slideClass: "slider-bar-item",
    slidesPerView: "auto",
    spaceBetween: 24,
    speed: 800,
    centeredSlides: true,
    centeredSlidesBounds: true,
    breakpoints: {
      0: {
        slideToClickedSlide: true,
        spaceBetween: 12,
      },
      875: {
        spaceBetween: 24,
        slideToClickedSlide: false,
      },
    },
  });
}
if (document.querySelector(".slider-bar")) {
  initSlider();
  setTimeout(() => {
    sliderBar.slideTo(0);
  }, 200);

  window.addEventListener("resize", function () {
    if (sliderBar) {
      setTimeout(() => {
        sliderBar.slideTo(0);
      }, 200);
    }
  });
}
