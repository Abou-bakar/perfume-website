const cartIcon = document.getElementById('cart-icon');
const cartContainer = document.getElementById('cart-container');
const closeCart = document.getElementById('close-cart');
const overlay = document.getElementById('cart-overlay');
const cartItemsContainer = document.getElementById("cart-items");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartCount = document.getElementById("cart-count");
const BottomCart = document.getElementById('cart-toggle');

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  const savedCart = JSON.parse(localStorage.getItem("cart"));
  if (savedCart && Array.isArray(savedCart)) {
    cart = savedCart;
  }
  updateCart();
});

// Open cart
cartIcon.addEventListener('click', () => {
  cartContainer.classList.add('active');
  overlay.classList.add('active');
});

// Open cart
BottomCart.addEventListener('click', () => {
  cartContainer.classList.add('active');
  overlay.classList.add('active');
});

// Close cart
closeCart.addEventListener('click', () => {
  cartContainer.classList.remove('active');
  overlay.classList.remove('active');
});

// Close on overlay click
overlay.addEventListener('click', () => {
  cartContainer.classList.remove('active');
  overlay.classList.remove('active');
});

// ADD TO CART HANDLER
document.addEventListener("DOMContentLoaded", () => {
  const addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = parseFloat(btn.dataset.price);
      const image = btn.dataset.image;

      const quantityInput = document.querySelector("#quantity")
       const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
      addToCart(name, price, image, quantity);
    });
  });
});

function addToCart(name, price, image, quantity) {
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name, price, image, quantity });
  }

  // localStorage.setItem("cart", JSON.stringify(cart));
  // alert(`${quantity} x ${name} added to cart`);
  saveCart();
  updateCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart() {
  cartItemsContainer.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    subtotal += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <div class="cart-item-content">
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h4>${item.name}</h4>
          <p>$${item.price} × ${item.quantity}</p>

           <div class="quantity-container">
        <button class="qty-btn-cart qty-btn--minus" data-index="${index}">&minus;</button>
        <input type="number" class="cart-quantity" value="${item.quantity}" min="1" max="10" data-index="${index}" />
        <button class="qty-btn-cart qty-btn--plus" data-index="${index}">&plus;</button>
      </div>
        </div>
      </div>
      <i class="fa-solid fa-trash remove-item" data-index="${index}"></i>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  cartSubtotal.textContent = subtotal.toFixed(2);
  cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);

  // document.querySelectorAll(".remove-item").forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     const index = btn.dataset.index;
  //     removeFromCart(index);
  //   });
  // });
  saveCart();
}

cartItemsContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (target.classList.contains("remove-item")) { // ignore clicks that aren't remove buttons
    console.log("Removing index:", target.dataset.index);
    const index = parseInt(target.dataset.index);
    if (!isNaN(index)) {
      removeFromCart(index);
    }
  }

   // Handle quantity increase
  if (target.classList.contains("qty-btn--plus")) {
    const index = parseInt(target.dataset.index);
    if (cart[index].quantity < 10) {
      cart[index].quantity++;
      saveCart();
      updateCart();
    }
  }

  // Handle quantity decrease
  if (target.classList.contains("qty-btn--minus")) {
    const index = parseInt(target.dataset.index);
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
      saveCart();
      updateCart();
    }
  }
});

// Optional: handle manual input
cartItemsContainer.addEventListener("input", (e) => {
  if (e.target.classList.contains("cart-quantity")) {
    const index = parseInt(e.target.dataset.index);
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= 10) {
      cart[index].quantity = value;
      saveCart();
      updateCart();
    }
  }
});

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

document.getElementById('checkout-btn').addEventListener('click', () => {
  // Save cart data to localStorage before navigating
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'checkout.html';
});