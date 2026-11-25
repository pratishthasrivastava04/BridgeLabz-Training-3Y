
$(document).ready(function () {

    // Scenario 1: Display greeting according to time of day
    let hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning!";
    }
    else if (hour < 17) {
        greeting = "Good Afternoon!";
    }
    else {
        greeting = "Good Evening!";
    }

    $("#greeting").text(greeting);

    // Scenario 2: Change greeting into motivational quotes
    let quotes = [
        "Believe in Yourself!",
        "Never Give Up!",
        "Dream Big and Work Hard!",
        "Success Starts with Effort!",
        "Every Day is a New Opportunity!"
    ];

    let index = 0;

    $("#changeGreeting").click(function () {
        $("#greeting").text(quotes[index]);

        index = (index + 1) % quotes.length;
    });

    // Scenario 3: Hide or show welcome message
    $("#toggleMessage").click(function () {
        $("#welcomeMessage").toggle();
    });

    // Scenario 4: Show alert when greeting is clicked
    $("#greeting").click(function () {
        alert("You clicked the greeting! Have a wonderful day.");
    });

});
