/*  -----------------------------------------------------------------------------------
                                          DROPDOWN
-------------------------------------------------------------------------------------*/
(function() {

    var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');

    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function() {

        if (navMain.classList.contains('main-nav--closed')) {
            navMain.classList.remove('main-nav--closed');
        } else {
            navMain.classList.add('main-nav--closed');
            navMain.classList.remove('open');
        }

        this.classList.toggle('open');
    });

})();
/*  ===============================================================================================================
                                                MODAL
================================================================================================================*/
(function() {

    var modal = document.getElementById('popup');
    var modalBtnShow = document.querySelector('.featured__btn');
    var modalBtnHide = document.querySelector('.modal__btn');
    var wrapper = document.querySelector('.wrapper');
    var basket = document.querySelectorAll('.product-card__basket');

    function creatOverlay() {
        var docHeight = document.body.offsetHeight;

        wrapper.classList.add('wrap-visible');
        wrapper.style.height = docHeight + 'px';
    }

    function showModal(event) {
        event.preventDefault();
        creatOverlay();
        modal.classList.add('modal--visible');
    }

    function hideModal(event) {
        event.preventDefault();
        modal.classList.remove('modal--visible');
        wrapper.classList.remove('wrap-visible');
        wrapper.style.height = 0;
    }

    if (modalBtnShow && wrapper) {
        modalBtnShow.addEventListener('click', showModal, false);
        wrapper.addEventListener('click', hideModal, false);
        modalBtnHide.addEventListener('click', hideModal, false);
    }

    if (basket && wrapper) {
        for (var i = 0; i < basket.length; i++) {
            basket[i].addEventListener('click', showModal, false);
        }
        wrapper.addEventListener('click', hideModal, false);
    }

})();
/* ====================================================================
                                SLIDER
======================================================================*/
(function() {

    var isTrue;
    isTrue = document.querySelector('.slider');

    if (isTrue) { // Для работы слайдера только на главной
        var slideNow = 1;
        var sliderList = document.querySelector('.slider__list');
        var slideCount = document.querySelector('.slider__list').children.length;
        var next = document.querySelector('.slider__btn--next');
        var prev = document.querySelector('.slider__btn--prev');

        document.addEventListener('DOMContentLoaded', function() {

            function nextSlide() {
                if (slideNow === slideCount || slideNow <= 0 || slideNow > slideCount) {
                    sliderList.style.transform = 'translate(0, 0)';
                    slideNow = 1;
                } else {
                    translateWidth = -document.querySelector('.slider__viewport').offsetWidth * slideNow;
                    sliderList.style.transform = 'translate('+ translateWidth + 'px, 0)';
                    slideNow++;
                }
            }

            function prevSlide() {
                if (slideNow === 1 || slideNow <= 0 || slideNow > slideCount) {
                    translateWidth = -document.querySelector('.slider__viewport').offsetWidth * (slideCount - 1);
                    sliderList.style.transform = 'translate('+ translateWidth + 'px, 0)';
                    slideNow = slideCount;
                } else {
                    translateWidth = -document.querySelector('.slider__viewport').offsetWidth * (slideNow - 2);
                    sliderList.style.transform = 'translate('+ translateWidth + 'px, 0)';
                    slideNow--;
                }
            }

            next.addEventListener('click', nextSlide, false);
            prev.addEventListener('click', prevSlide, false);

        });
    }

})();
/* --------------------------------------------------------------------------
                              GOOGLE MAPS API
-----------------------------------------------------------------------------*/
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat: 59.936250, lng: 30.321751}
    });

    var svg = [
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="66px" height="100.801px" viewBox="0 0 66 100.801" enable-background="new 0 0 66 100.801" xml:space="preserve">','<path fill="#FFFFFF" d="M56.334,9.228c-12.892-12.305-33.773-12.305-46.667,0c-12.891,12.297-12.891,32.248,0,44.542 c0,0,23.318,21.832,23.318,47.031c0-25.199,23.343-47.031,23.343-47.031C69.225,41.476,69.225,21.525,56.334,9.228z"/>','<path fill="#6BC6B3" d="M47.036,45.522c-0.636-3.277,0.13-6.947,0.027-10.284c-0.115-3.755-0.713-7.485-0.665-11.246 c0.039-3.044,0.545-6.173-0.503-9.091c0.065-0.332,0.134-0.662,0.195-0.995c0.271-1.463-4.577-0.689-5.338,0.649 c-0.479,0.393-0.726,0.861-0.523,1.339c0.051,0.121,0.097,0.243,0.142,0.365c-0.917,4.485-2.197,8.827-3.668,13.174 c-0.563,1.663-1.244,3.288-1.817,4.946c-0.814-1.545-1.638-3.071-2.3-4.728c-1.922-4.805-3.656-9.661-6-14.285 c0.266-2.14-4.484-1.916-5.421,0.044c-1.132,2.371-0.986,4.763-0.613,7.299c0.42,2.858,0.494,5.668,0.528,8.554 c0.066,5.566,0.502,11.119,0.584,16.684c-0.496,0.552-0.646,1.233-0.127,1.924c0.226,0.302,0.505,0.535,0.799,0.769 c1.265,1.013,4.899,0.15,4.893-1.779c-0.02-5.771-0.437-11.531-0.589-17.299c-0.015-0.565-0.025-1.129-0.034-1.694 c0.08,0.203,0.159,0.406,0.24,0.607c0.896,2.245,1.833,4.427,3.059,6.514c1.214,2.068,1.824,4.289,2.523,6.547 c-0.265,0.303-0.423,0.647-0.326,0.991c-0.055,0.251,0.099,0.409,0.352,0.504c0.894,0.766,2.578,0.383,3.513-0.01 c0.4-0.168,0.785-0.364,1.155-0.593c0.483-0.297,1.236-0.95,1.021-1.622c-0.041-0.13-0.081-0.26-0.121-0.391 c0.657-1.776,0.992-3.625,1.352-5.5c0.381-2,1.095-3.892,1.812-5.786c0.073,0.867,0.149,1.732,0.219,2.597 c0.285,3.575,0.046,7.099,0.011,10.674c-0.013,1.186,0.074,2.287,0.306,3.445c0.096,0.479,0.514,2.53,0.394,2.642 c-0.855,0.79-0.606,1.759,0.539,2.011c1.279,0.281,2.912-0.148,3.877-1.039C48.207,49.911,47.414,47.479,47.036,45.522z"/>','</svg>'
    ].join('\n');

    var customMarker = {
        url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg),
        scaledSize: new google.maps.Size(100, 100)
    };

    var marker = new google.maps.Marker({
        position: map.getCenter(),
        icon: customMarker,
        map: map,
        optimized: false
    });

}
