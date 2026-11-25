
$(document).ready(function () {

    // Scenario 1: Subscribe to notifications
    $("#topics").on("click", ".subscribe", function () {

        let topic = $(this).closest(".topic").find("h3").text();

        $(this).closest(".topic").attr("data-subscribed", "true");

        $("#message").text("Successfully subscribed to " + topic);
    });


    // Scenario 2: Unsubscribe from notifications
    $("#topics").on("click", ".unsubscribe", function () {

        let topic = $(this).closest(".topic").find("h3").text();

        $(this).closest(".topic").attr("data-subscribed", "false");

        $("#message").text("Unsubscribed from " + topic);
    });


    // Scenario 3: Dynamically add new subscription topics
    $("#addTopic").click(function () {

        let name = $("#newTopic").val();

        if (name.trim() !== "") {

            let newItem = `
                <div class="topic">
                    <h3>${name}</h3>
                    <button class="subscribe">Subscribe</button>
                    <button class="unsubscribe">Unsubscribe</button>
                    <button class="remove">Remove</button>
                </div>
            `;

            $("#topics").append(newItem);

            $("#message").text("New topic added successfully!");

            $("#newTopic").val("");
        }
        else {
            $("#message").text("Please enter a topic name.");
        }
    });


    // Scenario 4: Remove topic and detach its events
    $("#topics").on("click", ".remove", function () {

        let topic = $(this).closest(".topic");

        // Remove event handlers from topic buttons
        topic.find("button").off();

        topic.remove();

        $("#message").text("Subscription topic removed successfully!");
    });


    // Scenario 5: Show success message dynamically
    // All actions update the message element using text()
});
