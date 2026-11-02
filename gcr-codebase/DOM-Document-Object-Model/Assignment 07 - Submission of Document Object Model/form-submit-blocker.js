const registerForm = document.getElementById("registerForm");
const successMessage = document.getElementById("successMessage");

const fields = [
  {
    input: document.getElementById("nameInput"),
    error: document.getElementById("nameError"),
    validate: (value) => (value.trim() === "" ? "Name is required." : "")
  },
  {
    input: document.getElementById("emailInput"),
    error: document.getElementById("emailError"),
    validate: (value) => {
      if (value.trim() === "") {
        return "Email is required.";
      }
      if (!value.includes("@")) {
        return "Email must contain @.";
      }
      return "";
    }
  },
  {
    input: document.getElementById("passwordInput"),
    error: document.getElementById("passwordError"),
    validate: (value) => (value.length < 6 ? "Password must be at least 6 characters." : "")
  }
];

function showFieldError(field, message) {
  field.error.textContent = message;
  field.input.classList.toggle("invalid", message !== "");
}

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  successMessage.hidden = true;

  let isFormValid = true;

  fields.forEach((field) => {
    const message = field.validate(field.input.value);
    showFieldError(field, message);

    if (message !== "") {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    successMessage.hidden = false;
    registerForm.reset();
  }
});

fields.forEach((field) => {
  field.input.addEventListener("input", () => {
    if (field.validate(field.input.value) === "") {
      showFieldError(field, "");
    }
    successMessage.hidden = true;
  });
});