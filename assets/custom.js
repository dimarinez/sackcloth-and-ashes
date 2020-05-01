(function($) {
    $(document).ready(function() {
        if ($('.carousel-with-text').length > 0) {
            $(window).load(function() {
                function setsHeight() {
                    $('.carousel-with-text').each(function() {
                        $(this).find('.vertical-align-middle').height('auto');
                        var carouselHeight = $(this).height();
                        $(this).find('.vertical-align-middle').height(carouselHeight);
                    });            
                }
                setsHeight();
                $( window ).resize(function() {
                    setsHeight();
                });
            });
        }
    });
})(jQuery)