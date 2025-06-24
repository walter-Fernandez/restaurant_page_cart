let cart = [];

function updateCart() {
  const cartDiv = document.getElementById("cart");
  const totalSpan = document.getElementById("total");
  cartDiv.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `${item.name} x ${item.quantity} - $${itemTotal.toFixed(2)} <span class="remove-btn" onclick="removeItem(${index})">remove</span>`;
    cartDiv.appendChild(div);
  });

  totalSpan.textContent = total.toFixed(2);
}

function addToCart(name, price) {
  const item = cart.find(i => i.name === name);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", () => {
    const name = item.getAttribute("data-name");
    const price = parseFloat(item.getAttribute("data-price"));
    addToCart(name, price);
  });
});
