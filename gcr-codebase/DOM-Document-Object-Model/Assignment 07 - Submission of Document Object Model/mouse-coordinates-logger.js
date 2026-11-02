const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

box.addEventListener("mousemove", (event) => {
  coordinates.textContent = "clientX: " + event.clientX + ", clientY: " + event.clientY;
});

box.addEventListener("mouseleave", () => {
  coordinates.textContent = "clientX: -, clientY: -";
});

box.addEventListener("dblclick", (event) => {
  const boxPosition = box.getBoundingClientRect();

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = event.clientX - boxPosition.left - box.clientLeft + "px";
  dot.style.top = event.clientY - boxPosition.top - box.clientTop + "px";

  box.appendChild(dot);
});