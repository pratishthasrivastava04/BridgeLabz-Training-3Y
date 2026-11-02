const MAX_CHARACTERS = 100;
const WARNING_LIMIT = 20;

const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
  const remaining = MAX_CHARACTERS - textBox.value.length;
  counter.textContent = "Remaining: " + remaining;

  counter.classList.remove("warning", "limit");
  if (remaining <= 0) {
    counter.classList.add("limit");
  } else if (remaining <= WARNING_LIMIT) {
    counter.classList.add("warning");
  }
}

textBox.addEventListener("keydown", (event) => {
  const isTypingKey = event.key.length === 1 || event.key === "Enter";
  const hasShortcut = event.ctrlKey || event.metaKey;
  const hasSelection = textBox.selectionStart !== textBox.selectionEnd;

  if (textBox.value.length >= MAX_CHARACTERS && isTypingKey && !hasShortcut && !hasSelection) {
    event.preventDefault();
  }
});

textBox.addEventListener("input", () => {
  if (textBox.value.length > MAX_CHARACTERS) {
    textBox.value = textBox.value.slice(0, MAX_CHARACTERS);
  }
  updateCounter();
});

resetBtn.addEventListener("click", () => {
  textBox.value = "";
  updateCounter();
  textBox.focus();
});

updateCounter();
