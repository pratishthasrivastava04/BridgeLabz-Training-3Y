
$(document).ready(function() {

    // Five existing emails for uniqueness testing
    let emails = [
        "aman@gmail.com",
        "rahul@gmail.com",
        "rohit@gmail.com",
        "neha@gmail.com",
        "priya@gmail.com"
    ];

    // Handle form submission
    $("#registerForm").submit(function(e) {

        e.preventDefault();

        // Get input values
        let name = $("#name").val().trim();
        let email = $("#email").val().trim().toLowerCase();
        let password = $("#password").val();

        let valid = true;

        // Reset all borders
        $("input").css("border", "1px solid gray");

        // Check Name
        if (name === "") {
            $("#name").css("border", "2px solid red");
            valid = false;
        }

        // Check Email format
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!pattern.test(email)) {
            $("#email").css("border", "2px solid red");
            valid = false;
        }

        // Check Email uniqueness
        else if (emails.includes(email)) {
            $("#email").css("border", "2px solid red");
            valid = false;
        }

        // Check Password length
        if (password.length < 8) {
            $("#password").css("border", "2px solid red");
            valid = false;
        }

        // Display result
        if (valid) {

            emails.push(email);

            $("#message")
                .css("color", "green")
                .text("Registration Successful!");

            $("#registerForm")[0].reset();

        } else {

            $("#message")
                .css("color", "red")
                .text("Please enter valid details!");

        }

    });

    // Remove red border when user starts correcting input
    $("input").on("input", function() {
        $(this).css("border", "1px solid gray");
    });

});
