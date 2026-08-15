// ==========================================
// SELECT ELEMENTS
// ==========================================

const orderItems = document.getElementById("orderItems");

const orderTotal = document.getElementById("orderTotal");

const checkoutForm = document.getElementById("checkoutForm");

// ==========================================
// LOAD CART
// ==========================================

const cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

if(cart.length === 0){

orderItems.innerHTML = "<p>Your cart is empty.</p>";

}

else{

cart.forEach(item => {

total += item.price * item.quantity;

orderItems.innerHTML += `

<div class="summary-item">

<h4>${item.name}</h4>

<span>

₹${item.price} × ${item.quantity}

</span>

</div>

`;

});

orderTotal.textContent = `₹${total}`;

}