
$(document).ready(function () {

    // Scenario 1: Add new post at the end
    $("#addPost").click(function () {

        let title = $("#postTitle").val();
        let content = $("#postContent").val();

        if (title.trim() !== "" && content.trim() !== "") {

            let newPost = `
                <article class="post">
                    <h3>${title}</h3>
                    <p>${content}</p>
                </article>
            `;

            $("#postList").append(newPost);

            $("#postTitle").val("");
            $("#postContent").val("");
        }
        else {
            alert("Please enter title and content!");
        }
    });


    // Scenario 2: Add featured post at the top
    $("#featuredPost").click(function () {

        let featured = `
            <article class="post featured">
                <h3>Featured Blog Post</h3>
                <p>This is our special featured article!</p>
            </article>
        `;

        $("#postList").prepend(featured);
    });


    // Scenario 3: Remove last post
    $("#removePost").click(function () {

        $("#postList").children(".post").last().remove();
    });


    // Scenario 4: Add tags using before() and after()
    $("#addTag").click(function () {

        let number = parseInt($("#postNumber").val());
        let tag = $("#tagName").val();

        let post = $("#postList").children(".post").eq(number - 1);

        if (post.length > 0 && number > 0 && tag.trim() !== "") {

            let newTag = `<span class="tag">${tag}</span>`;

            post.find("p").before(newTag);

            post.find("p").after(
                `<small> Tag added: ${tag}</small>`
            );

            $("#tagName").val("");
        }
        else {
            alert("Enter a valid post number and tag!");
        }
    });


    // Scenario 5: Highlight posts containing keywords
    $("#highlightPost").click(function () {

        let keyword = $("#keyword").val().toLowerCase();

        $(".post").removeClass("featured");

        if (keyword.trim() === "") {
            alert("Please enter a keyword!");
            return;
        }

        $(".post").each(function () {

            let content = $(this).text().toLowerCase();

            if (content.includes(keyword)) {

                $(this).addClass("featured");

            }

        });

    });

});
