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
// ==========================================
// PLACE ORDER
// ==========================================

checkoutForm.addEventListener("submit", function (event) {

event.preventDefault();

const fullName = this.querySelector('input[type="text"]').value.trim();

const email = this.querySelector('input[type="email"]').value.trim();

const phone = this.querySelectorAll("input")[2].value.trim();

const address = this.querySelector("textarea").value.trim();

if(fullName==="" || email==="" || phone==="" || address===""){

alert("Please fill all fields.");

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please enter a valid email.");

return;

}

if(cart.length===0){

alert("Your cart is empty.");

return;

}

// Create Order Object

const order={

customer:fullName,

email:email,

phone:phone,

address:address,

items:cart,

total:total,

payment:this.querySelector('input[name="payment"]:checked').parentElement.textContent.trim(),

orderDate:new Date().toLocaleString()

};

// Save Order

localStorage.setItem("lastOrder",JSON.stringify(order));

// Clear Cart

localStorage.removeItem("cart");

// Success Message

alert("🎉 Order Placed Successfully!");

// Redirect

window.location.href="order-success.html";

});