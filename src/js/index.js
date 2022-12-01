document.addEventListener("DOMContentLoaded", (e) => {
  let workTabBtns = document.querySelectorAll(".work-tab__btn");
  let workTabItems = document.querySelectorAll(".work__tab");
  let burger = document.querySelector(".burger");
  let burgerNav = document.querySelector(".burger__nav");

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    effect: "coverflow",
    coverflowEffect: {
      rotate: 30,
      slideShadows: true,
    },
  });

  burger.addEventListener("click", function () {
    burger.classList.toggle("burger-active");
    burgerNav.classList.toggle("burger__nav-active");
  });

  workTabBtns.forEach(function (button) {
    button.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;
      workTabBtns.forEach(function (element) {
        element.classList.remove("work-tab__btn--active");
      });
      e.currentTarget.classList.add("work-tab__btn--active");
      workTabItems.forEach(function (tabs) {
        tabs.classList.remove("work__tab--active");
      });
      document
        .querySelector(`[data-target="${path}"]`)
        .classList.add("work__tab--active");
    });
  });

  new Accordion(".faq__accordion", {
    elementClass: "accordion-item",
    triggerClass: "accordion__control",
    panelClass: "accordion__content",
    activeClass: "accordion--active",
  });

  document.getElementById("open-search-form").addEventListener("click", (e) => {
    document.getElementById("search-form").classList.add("search__form-active");
  });

  document
    .getElementById("search-form-close")
    .addEventListener("click", (e) => {
      document
        .getElementById("search-form")
        .classList.remove("search__form-active");
    });

  document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
