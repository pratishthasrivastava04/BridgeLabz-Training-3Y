
$(document).ready(function () {

    // Scenario 1: Click on product to highlight background
    $(".product").click(function () {

        $(".product").removeClass("highlight");

        $(this).addClass("highlight");

        // Scenario 5: Check product stock using data attribute
        if ($(this).attr("data-stock") === "no") {
            alert("Sorry! This product is out of stock.");
        }
    });


    // Scenario 2: Hover over product to show additional details
    $(".product").hover(
        function () {
            $(this).find(".details").slideDown();
        },
        function () {
            $(this).find(".details").slideUp();
        }
    );


    // Scenario 3: Toggle favorite selection
    $(".favorite").click(function (event) {

        // Stop click from reaching the parent product
        event.stopPropagation();

        $(this).toggleClass("selected");

        // Change favorite icon
        if ($(this).hasClass("selected")) {
            $(this).text("♥");
        }
        else {
            $(this).text("♡");
        }
    });

});

