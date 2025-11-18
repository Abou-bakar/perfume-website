const cart = JSON.parse(localStorage.getItem("cart")) || [];
const container = document.getElementById("order-items");
const subtotalEl = document.getElementById("summary-subtotal");
const shippingEl = document.getElementById("summary-shipping");
const totalEl = document.getElementById("summary-total");

let subtotal = 0;

if (cart.length === 0) {
  container.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("order-item");
    div.innerHTML = `
    <div class="order-item-content">
        <img src="${item.image}">
        <p>${item.name} × ${item.quantity}</p>
      <span>$${(item.price * item.quantity).toFixed(2)}</span>
       </div>
        `;

        container.appendChild(div)
        subtotal += item.price *  item.quantity;
  });
}

subtotalEl.textContent = subtotal.toFixed(2);
const shipping = subtotal > 50 ? 0 : 5;
shippingEl.textContent = shipping.toFixed(2);
totalEl.textContent = (subtotal + shipping).toFixed(2);

document.querySelector(".complete-order").addEventListener('click', () => {
     localStorage.removeItem("cart");
})

document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelectorAll('.accordion-item-checkout').forEach(item => item.classList.remove('active'));
        radio.closest('.accordion-item-checkout').classList.add("active")
    })
})

document.querySelectorAll('input[name="billing"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelectorAll('.accordion-item-checkout').forEach(item => item.classList.remove('active'));
        radio.closest('.accordion-item-checkout').classList.add("active")
    })
})

