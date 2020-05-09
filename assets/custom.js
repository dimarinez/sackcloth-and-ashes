(function($) {
    $(document).ready(function() {
        if ($('.hero-hover').length > 0) {
            $('.hero-hover').each(function() {
                $(this).parent('.effect-zoom').addClass('mobile-border-radius');
            });
        }

        if ($('.product-details').length > 0) {
            $('.product-details').each(function() {
                if ($(this).find('.product-details__item--property').length === 0) {
                    $(this).addClass('hide');
                }
            });
        }
    });
})(jQuery)