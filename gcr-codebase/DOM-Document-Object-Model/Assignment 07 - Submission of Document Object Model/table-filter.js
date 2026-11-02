const searchInput = document.getElementById("searchInput");
const tableRows = document.querySelectorAll("#studentTable tr");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  tableRows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    const isMatch = rowText.includes(searchText);
    row.style.display = isMatch ? "" : "none";

    if (isMatch) {
      visibleCount++;
    }
  });

  noResults.hidden = visibleCount !== 0;
});
