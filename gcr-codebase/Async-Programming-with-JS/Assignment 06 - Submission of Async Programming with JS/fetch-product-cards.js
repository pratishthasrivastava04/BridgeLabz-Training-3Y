const API_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const products = await response.json();

    products.forEach((product) => {
      console.log("Product: " + product.title);
      console.log("Price: $" + product.price);
      console.log("Image: " + product.image);
      console.log("");
    });

    if (typeof document !== "undefined") {
      showProductCards(products);
    }
  } catch (error) {
    console.log("Failed to load products. Please try again.");
    console.log("Reason: " + error.message);

    if (typeof document !== "undefined") {
      const message = document.createElement("p");
      message.textContent = "Failed to load products. Please try again.";
      document.body.appendChild(message);
    }
  }
}

function showProductCards(products) {
  const container = document.createElement("div");
  container.style.display = "grid";
  container.style.gridTemplateColumns = "repeat(auto-fill, minmax(220px, 1fr))";
  container.style.gap = "16px";
  container.style.padding = "16px";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "8px";
    card.style.padding = "12px";
    card.style.textAlign = "center";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    image.style.height = "150px";
    image.style.objectFit = "contain";

    const title = document.createElement("h4");
    title.textContent = product.title;

    const price = document.createElement("p");
    price.textContent = "$" + product.price;

    card.append(image, title, price);
    container.appendChild(card);
  });

  document.body.appendChild(container);
}

fetchProducts();