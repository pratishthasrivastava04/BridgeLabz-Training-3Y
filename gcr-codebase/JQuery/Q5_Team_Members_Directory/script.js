
$(document).ready(function () {

    // Scenario 1: Click manager to highlight direct reports
    $(".manager").click(function () {

        // Remove previous highlights
        $(".employee").removeClass("highlight");

        // Select employees after manager in the same team
        $(this).nextAll(".employee").addClass("highlight");
    });


    // Scenario 2: Hover employee to show contact information
    $(".employee").hover(
        function () {
            $(this).children(".contact").slideDown();
        },
        function () {
            $(this).children(".contact").slideUp();
        }
    );


    // Scenario 3: Click department to change background
    $(".department h2").click(function () {

        // children() selects direct child elements
        $(this).parent().children(".team")
            .children(".employee")
            .css("background-color", "lightyellow");
    });


    // Scenario 4: Select random employee and highlight siblings
    $("#random").click(function () {

        let employees = $(".employee:not(.manager)");

        // Generate random employee index
        let randomIndex = Math.floor(Math.random() * employees.length);

        let selected = employees.eq(randomIndex);

        // Highlight all employees in the same team
        selected.siblings(".employee").addClass("highlight");

        selected.addClass("highlight");
    });


    // Scenario 5: Collapse or expand team
    $("#collapse").click(function () {

        // parent() selects the department section
        let department = $(this).parent().find(".team");

        department.slideToggle();
    });

});
