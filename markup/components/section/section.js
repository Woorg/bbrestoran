(function () {

    $(function () {

        // slider

        const $slider = $('.slider');
        $slider.slick({
            autoplay: true,
            fade: true,
            speed: 800,
            waitForAnimate: false
        });

        // gallery

        const $galleryItem = $('.gallery__link');

        $galleryItem.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            fixedContentPos: false
        });

    });

})();
