/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */
/* eslint-disable no-invalid-this */
// select
const select = function() {
    const selectHeader = document.querySelectorAll('.select__header');
    const selectItem = document.querySelectorAll('.select__item');
    const icon = document.querySelectorAll('.select__icon');

    selectHeader.forEach((item) => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach((item) => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
        this.parentElement.classList.toggle('select__header-active');
        icon.parentElement.classList.toggle('select__icon-active');
    }

    function selectChoose() {
        const text = this.innerHTML;
        const select = this.closest('.select');
        const currentText = select.querySelector('.select__current');
        currentText.innerHTML = text;
        select.classList.remove('is-active');
        select.classList.remove('select__header-active');
    }
};
select();

// sleder
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
        // when window width is >= 640px
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});
