const products = [
  {
    id: 1,
    name: "Laptop",
    price: 30000,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Headphones",
    price: 500,
    img: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Smartphone",
    price: 15000,
    img: "https://via.placeholder.com/100",
  },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productContainer = document.getElementById("products");
const cartContainer = document.getElementById("cart");
const totalContainer = document.getElementById("total");

// Display products dynamically
function renderProducts() {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productContainer.appendChild(productDiv);
  });
}

// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

// Update cart display
function updateCart() {
  cartContainer.innerHTML = "";
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Cart is empty.</p>";
  } else {
    cart.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
                <span>${item.name} (${item.quantity})</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
      cartContainer.appendChild(itemDiv);
    });
  }

  updateTotal();
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();
}

// Calculate total price
function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalContainer.innerHTML = `Total: $${total.toFixed(2)}`;
}

// Initialize
renderProducts();
updateCart();
