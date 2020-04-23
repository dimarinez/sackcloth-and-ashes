(function($) {
    $('.as-hover').bind('touchstart',function() {
        $(this).addClass('as-zoom');
    }).bind('touchmove',function() {
        $(this).removeClass('as-zoom');
    }).bind('touchend',function() {
        $(this).removeClass('as-zoom');
    });

    $(document).ready(function() {
        $('.template-slider').slick({
            dots: true,
            infinite: true,
            speed: 500
        });
    });

})(jQuery)