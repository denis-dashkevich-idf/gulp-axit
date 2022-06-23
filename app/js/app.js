import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", () => {
  // slider
  const revSliderSettings = {
    type: "loop",
    gap: "40px",
    classes: {
      arrow: "splide__arrow review-slider__arrow",
    },
    pagination: false,
    breakpoints: {
      560: {
        arrows: false,
        pagination: true,
        classes: {
          pagination: "splide__pagination review-slider__pagination",
        },
      },
    },
  };

  new Splide("#review-slider", revSliderSettings).mount();

  new Splide("#author-review", revSliderSettings).mount();

  // Promo slider
  const promoSlides = document.querySelectorAll("[data-slide-title]");
  let slideTitles = [];

  promoSlides.forEach(function (slide) {
    slideTitles.push(slide.dataset.slideTitle);
  });

  // console.log(slideTitles);

  const promoSlider = new Splide(".promo__slider", {
    type: "loop",
    arrows: false,
    drag: false,
    autoplay: true,
    classes: {
      pagination: "splide__pagination promo__pagination",
    },
  });

  promoSlider.on("pagination:mounted", function (data) {
    // You can add your class to the UL element
    data.list.classList.add("splide__pagination--custom");

    // `items` contains all dot items
    data.items.forEach(function (item) {
      // item.button.textContent = String( item.page + 1 );
      item.button.textContent = `${slideTitles[item.page]}`;
    });
  });

  promoSlider.mount();

  // mobile menu
  const headerBurger = document.querySelector(".header__burger");
  const headerNav = document.querySelector(".header__nav");

  headerBurger.addEventListener("click", function (event) {
    headerBurger.classList.toggle("burger_closed");
    headerNav.classList.toggle("header__nav_opened");
  });
});
