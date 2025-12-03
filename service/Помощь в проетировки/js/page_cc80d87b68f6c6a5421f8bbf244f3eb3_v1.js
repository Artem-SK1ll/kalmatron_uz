
; /* Start:"a:4:{s:4:"full";s:88:"/local/templates/kalmatron/components/bitrix/news.detail/service/script.js?1758812291466";s:6:"source";s:74:"/local/templates/kalmatron/components/bitrix/news.detail/service/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
const swiper = new Swiper(".objects-swiper .swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".objects-swiper .swiper-button-next",
        prevEl: ".objects-swiper .swiper-button-prev"
    },
    pagination: {
        el: ".objects-swiper .pagination",
        clickable: true
    },
    breakpoints: {
        1024: {slidesPerView: 3},
        768: {slidesPerView: 2},
        0: {slidesPerView: 1}
    }
});
/* End */
;; /* /local/templates/kalmatron/components/bitrix/news.detail/service/script.js?1758812291466*/
