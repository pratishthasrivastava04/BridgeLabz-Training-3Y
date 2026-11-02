const steps = [
  document.getElementById("step1"),
  document.getElementById("step2"),
  document.getElementById("step3")
];

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");

const progress = document.getElementById("progress");
const errorMessage = document.getElementById("errorMessage");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const formArea = document.getElementById("formArea");
const summary = document.getElementById("summary");

let currentStep = 0;

function getError(stepIndex) {
  if (stepIndex === 0) {
    if (nameInput.value.trim().length < 2) {
      return "Please enter a name with at least 2 characters.";
    }
  } else if (stepIndex === 1) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      return "Please enter a valid email address.";
    }
  } else if (stepIndex === 2) {
    if (passwordInput.value.length < 6) {
      return "Password must be at least 6 characters.";
    }
  }
  return "";
}

function showStep(stepIndex) {
  steps.forEach((step, index) => {
    step.hidden = index !== stepIndex;
  });

  progress.textContent = "Step " + (stepIndex + 1) + " of " + steps.length;
  backBtn.hidden = stepIndex === 0;
  nextBtn.textContent = stepIndex === steps.length - 1 ? "Finish" : "Next";
  errorMessage.textContent = "";
}

function showSummary() {
  document.getElementById("summaryName").textContent = nameInput.value.trim();
  document.getElementById("summaryEmail").textContent = emailInput.value.trim();
  document.getElementById("summaryPassword").textContent = "*".repeat(passwordInput.value.length);

  formArea.hidden = true;
  progress.textContent = "All steps completed";
  summary.hidden = false;
}

nextBtn.addEventListener("click", () => {
  const error = getError(currentStep);
  if (error) {
    errorMessage.textContent = error;
    return;
  }

  if (currentStep === steps.length - 1) {
    showSummary();
  } else {
    currentStep++;
    showStep(currentStep);
  }
});

backBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

showStep(currentStep);