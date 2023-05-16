let buttons = document.querySelectorAll(".tab-button");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // This variable saves the info of the data-content property of the button clicked (not the hmtl, the property itself) which in this case its equal to the ID of the tab content.
        let contentId = button.dataset.content;
        // Put all the content when clicked to disappear
        document.querySelectorAll(".tab-content").forEach(function(content) {
            content.style.display = "none";
        });
        // If we take the ElementById of the content Id (of the button clicked), we are, in this case, displaying as a block the element which has an id equal to the var contentId (the same as the button we select because we joint the the button with the id) 
        document.getElementById(contentId).style.display = "block"
        // to retire the active class from all the buttons
        document.querySelectorAll(".tab-button").forEach(function(button) {
            button.classList.remove("active");
        });
        // add the class active in the button clicked
        button.classList.add("active");
    });
});