
$(document).ready(function () {

    // Version 1: Carousel slider rotation
    var currentSlide = 0;
    var slides = jq1(".slide");

    setInterval(function () {
        slides.hide();

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides.eq(currentSlide).show();

    }, 3000);


    // Version 1: Highlight active widget
    jq1(".widget").click(function () {
        jq1(".widget").removeClass("active");
        jq1(this).addClass("active");
    });


    // Version 2: Modal popup
    jq2("#showModal").click(function () {
        jq2("#modal").fadeIn();
    });

    jq2("#closeModal").click(function () {
        jq2("#modal").fadeOut();
    });


    // Version 2: Tooltip on hover
    jq2("#tooltipWidget button").hover(
        function () {
            jq2(this).css("background", "yellow");
        },
        function () {
            jq2(this).css("background", "");
        }
    );

});
