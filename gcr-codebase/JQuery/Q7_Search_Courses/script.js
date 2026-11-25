
$(document).ready(function () {

    // Scenario 1: Filter courses using keyup()
    $("#search").keyup(function () {

        let searchText = $(this).val().toLowerCase();

        let count = 0;

        $(".course").each(function () {

            let courseText = $(this).text().toLowerCase();

            // Scenario 2: Highlight matching text
            $(this).find("h3, p").each(function () {
                $(this).css("background-color", "");
            });

            if (courseText.includes(searchText)) {

                // Scenario 3: Show matching courses
                $(this).show();

                count++;

                // Highlight matched text
                if (searchText !== "") {

                    $(this).find("h3, p").each(function () {

                        if ($(this).text().toLowerCase()
                            .includes(searchText)) {

                            $(this).css("background-color", "yellow");
                        }

                    });

                }

            }
            else {

                // Hide courses that do not match
                $(this).hide();

            }

        });

        // Scenario 4: Display matching course count
        $("#count").text("Matching Courses: " + count);

    });


    // Scenario 5: Clear search and show all courses
    $("#clear").click(function () {

        $("#search").val("");

        $(".course").show();

        $(".course h3, .course p").css("background-color", "");

        $("#count").text("Total Courses: " + $(".course").length);

    });

});
