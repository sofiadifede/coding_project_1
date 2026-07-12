// Get all the elements we need from the page
const form = document.getElementById("feedbackForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");

const charCount = document.getElementById("charCount");
const tooltip = document.getElementById("tooltip");
const validationMessage = document.getElementById("validationMessage");
const feedbackDisplay = document.getElementById("feedback-display");

// Update the character count every time the user types in the textarea
commentsInput.addEventListener("input", function () {
    charCount.textContent = "characters: " + commentsInput.value.length;
});

// Messages to show when the user hovers over each field
const tooltipMessages = {
    name: "Enter your full name",
    email: "Enter a valid email address",
    comments: "Enter your feedback"
};

// Show a tooltip on hover, and hide it when the mouse leaves
const allFields = [nameInput, emailInput, commentsInput];

for (let i = 0; i < allFields.length; i++) {
    const field = allFields[i];

    field.addEventListener("mouseover", function () {
        tooltip.textContent = tooltipMessages[field.id];
    });

    field.addEventListener("mouseout", function () {
        tooltip.textContent = "";
    });
}

// Handle the form being submitted
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    validationMessage.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim();

    // Make sure every field has something in it
    if (!name || !email || !comments) {
        validationMessage.textContent = "Please fill out all fields.";
        return;
    }

    // Build a new feedback entry and add it to the page
    const feedbackEntry = document.createElement("div");
    feedbackEntry.innerHTML =
        "<h3>" + name + "</h3>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p>" + comments + "</p>" +
        "<hr>";

    feedbackDisplay.appendChild(feedbackEntry);

    // Clear the form for the next entry
    form.reset();
    charCount.textContent = "characters: 0";
});