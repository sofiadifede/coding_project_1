//DOM
const form = document.getElementById("feedbackForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const commentsInput = document.getElementById("comments");

const charCount = document.getElementById("charCount");
const tooltip = document.getElementById("tooltip");
const validationMessage = document.getElementById("validationMessage");
const feedbackDisplay = document.getElementById("feedback-display");

//Count characters
commentsInput.addEventListener("input", () => {
    charCount.textContent = `characters: ${commentsInput.value.length}`;
});

//Display tooltips
const tooltipMessages = {
    name: "Enter your full name",
    email: "Enter a valid email address",
    comments: "Enter your feedback"
};

[nameInput, emailInput, commentsInput].forEach(field => {
    field.addEventListener("mouseover", (event) => {
        tooltip.textContent = tooltipMessages[event.target.id];
    });

    field.addEventListener("mouseout", () => {
        tooltip.textContent = "";
    });
});

//Feedback display
form.addEventListener("submit", (event) => {
    event.preventDefault();

    validationMessage.textContent = "";

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim();

    if (!name || !email || !comments) {
        validationMessage.textContent = "Please fill out all fields.";
        return;
    }

    const feedbackEntry = document.createElement("div");
    feedbackEntry.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p>${comments}</p>
        <hr>
    `;

    feedbackDisplay.appendChild(feedbackEntry);
    form.reset();
    charCount.textContent = "characters: 0";
});
