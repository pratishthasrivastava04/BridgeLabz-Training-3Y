const themeButtons = document.querySelectorAll("button[data-theme-value]");
const currentThemeLabel = document.getElementById("currentTheme");

function applyTheme(themeName) {
  document.body.setAttribute("class", "theme-" + themeName);
  document.body.setAttribute("data-theme", themeName);
  currentThemeLabel.textContent = document.body.getAttribute("data-theme");
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTheme(button.getAttribute("data-theme-value"));
  });
});

applyTheme("light");