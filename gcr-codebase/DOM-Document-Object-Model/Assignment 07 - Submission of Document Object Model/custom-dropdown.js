const dropdown = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownList = document.getElementById("dropdownList");

function closeDropdown() {
  dropdownList.classList.add("hidden");
}

dropdownBtn.addEventListener("click", () => {
  dropdownList.classList.toggle("hidden");
});

dropdownList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    dropdownBtn.textContent = event.target.textContent;
    closeDropdown();
  }
});

document.addEventListener(
  "click",
  (event) => {
    if (!dropdown.contains(event.target)) {
      closeDropdown();
    }
  },
  true
);