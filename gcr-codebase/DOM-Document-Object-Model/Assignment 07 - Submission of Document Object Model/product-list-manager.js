const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");
const emptyMessage = document.getElementById("emptyMessage");

let activeEditItem = null;

function updateEmptyMessage() {
  emptyMessage.style.display = productList.children.length === 0 ? "block" : "none";
}

function createProductItem(name) {
  const item = document.createElement("li");

  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = name;

  const editButton = document.createElement("button");
  editButton.className = "edit-btn";
  editButton.textContent = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-btn";
  deleteButton.textContent = "Delete";

  item.append(nameSpan, editButton, deleteButton);
  return item;
}

function addProduct() {
  const name = productInput.value.trim();
  if (name === "") {
    return;
  }
  productList.appendChild(createProductItem(name));
  productInput.value = "";
  productInput.focus();
  updateEmptyMessage();
}

function startEdit(item) {
  if (activeEditItem && activeEditItem !== item) {
    saveEdit(activeEditItem);
  }

  const nameSpan = item.querySelector(".product-name");
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.className = "edit-input";
  editInput.value = nameSpan.textContent;

  item.replaceChild(editInput, nameSpan);
  item.querySelector(".edit-btn").textContent = "Save";
  editInput.focus();
  activeEditItem = item;
}

function saveEdit(item) {
  const editInput = item.querySelector(".edit-input");
  if (!editInput) {
    return;
  }

  const newName = editInput.value.trim();
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = newName === "" ? editInput.defaultValue : newName;

  item.replaceChild(nameSpan, editInput);
  item.querySelector(".edit-btn").textContent = "Edit";

  if (activeEditItem === item) {
    activeEditItem = null;
  }
}

addBtn.addEventListener("click", addProduct);

productInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addProduct();
  }
});

productList.addEventListener("click", (event) => {
  const item = event.target.closest("li");
  if (!item) {
    return;
  }

  if (event.target.classList.contains("delete-btn")) {
    if (activeEditItem === item) {
      activeEditItem = null;
    }
    item.remove();
    updateEmptyMessage();
  } else if (event.target.classList.contains("edit-btn")) {
    if (item.querySelector(".edit-input")) {
      saveEdit(item);
    } else {
      startEdit(item);
    }
  }
});

productList.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.classList.contains("edit-input")) {
    saveEdit(event.target.closest("li"));
  }
});

document.addEventListener("click", (event) => {
  if (activeEditItem && !activeEditItem.contains(event.target)) {
    saveEdit(activeEditItem);
  }
});

updateEmptyMessage();
