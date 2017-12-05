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


$('#live-chat .chat-header').click(function () {
  $('.chat').slideToggle();
});

//$(".chat").delay(5000).slideToggle();

setTimeout(function(){
  $('.chat').css({
    display: "block",
    opacity: "1"
  });
}, 6000);

$(document).ready(function () {
    "use strict";
    $(".comments-text-apear").hide();
    
    $(".comment .down").click(function () {
        $(".comments-text-apear").fadeIn();
        $(".comment .down").hide();
        $(".comment .up").show();
        /*$(".subscribe .form-inline .col-sm-8").removeClass('comment-limit');*/
    });
    
    $(".comment .up").click(function () {
        $(".comments-text-apear").fadeOut();
        $(".comment .down").show();
        $(".comment .up").hide();
        /*$(".subscribe .form-inline .col-sm-8").removeClass('comment-limit');*/
    });
});


