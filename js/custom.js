/*global window, jQuery, document, $, console*/

(function ($) {
    "use strict";
    // Add smooth scrolling to all links in navbar
    $(".navbar a.smooth-scroll, a.mouse-hover, .overlay-detail a").on('click', function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            window.location.hash = hash;
        });
    });
})(jQuery);
/*start scroll top button*/




