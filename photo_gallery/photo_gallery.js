$(document).ready(function() {
    var photoSlider = new Swiper('.js-photo-slider', {
        slidesPerView: 1,
        setWrapperSize: true,
        paginationClickable: true,
        loop: true,
        preventClicks: true, 
        controlBy: 'container',
        spaceBetween: 0
    });

    var gallerySlider = new Swiper('.js-gallery-slider', {
        slidesPerView: 3,
        setWrapperSize: true,
        paginationClickable: true,
        loop: true,
        preventClicks: true,
        controlBy: 'container',
        nextButton: '.gallery-control-next',
        prevButton: '.gallery-control-prev',
        spaceBetween: 10,
        breakpoints: {
            124: {
                slidesPerView: 6
            },
            100: {
                slidesPerView: 4
            },
            160: {
                slidesPerView: 3
            }
        }
    });

    $('.photo-slider .swiper-wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $('.gallery-slider a').on('click', function(e) {
        e.preventDefault();
        var $target = $(this).attr('href');
        var index = $('.photo-slider a[href="' + $target + '"]:first').parents('.swiper-slide').index();
        photoSlider.slideTo(index);

    });
});
