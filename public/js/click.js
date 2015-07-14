$(document).ready(function() {
    $(".click").on("click", function() {

        $("html, body").animate({
            scrollTop: $( $('#clicked')).offset().top
        }, 600);

    });
});