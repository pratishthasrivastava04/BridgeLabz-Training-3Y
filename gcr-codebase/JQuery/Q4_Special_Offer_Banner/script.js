
$(document).ready(function () {

    // Scenario 1: Hide a specific banner
    $("#hide").click(function () {
        $("#banner1").hide();
    });


    // Scenario 2: Show all hidden banners
    $("#show").click(function () {
        $(".banner").show();
    });


    // Scenario 3: Slide up and slide down banners
    $("#slideUp").click(function () {
        $(".banner").slideUp();
    });

    $("#slideDown").click(function () {
        $(".banner").slideDown();
    });


    // Scenario 4: Fade out and fade in banners
    $("#fadeOut").click(function () {
        $(".banner").fadeOut(1000);
    });

    $("#fadeIn").click(function () {
        $(".banner").fadeIn(1000);
    });


    // Scenario 5: Automatically rotate banners every 5 seconds

    let current = 0;
    let banners = $(".banner");

    // Initially show only the first banner
    banners.hide();
    banners.eq(current).show();

    // Change banner after every 5 seconds
    setInterval(function () {

        banners.eq(current).fadeOut(1000);

        current = (current + 1) % banners.length;

        banners.eq(current).fadeIn(1000);

    }, 5000);

});
