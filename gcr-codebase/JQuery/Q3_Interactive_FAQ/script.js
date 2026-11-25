
$(document).ready(function () {

    // Scenario 1: Click question to show or hide answer
    $(".question").click(function () {
        $(this).next(".answer").slideToggle();
    });


    // Scenario 2: Hover over question to change its color
    $(".question").hover(
        function () {
            $(this).css("color", "blue");
        },
        function () {
            $(this).css("color", "black");
        }
    );


    // Scenario 3: Double-click to collapse all answers
    $(".question").dblclick(function () {
        $(".answer").slideUp();
    });


    // Scenario 4: Focus on input to highlight parent section
    $("#userInput").focus(function () {
        $(this).closest("section").css("background-color", "lightyellow");
    });


    // Scenario 5: Blur from input to reset background color
    $("#userInput").blur(function () {
        $(this).closest("section").css("background-color", "");
    });

});
