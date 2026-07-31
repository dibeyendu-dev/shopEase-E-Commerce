const cartItems = document.getElementById("cartItems");
const totalItems = document.getElementById("totalItems");
const totalPrice = document.getElementById("totalPrice");

let cart = [];

function loadCart() {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {

        cart = JSON.parse(savedCart);

    }

}

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}

function renderCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `

<div class="empty-cart">

<i class="fa-solid fa-cart-shopping"></i>

<h2>Your Cart Is Empty</h2>

<p>Add some amazing products to your cart.</p>

<a href="products.html" class="shop-btn">

Continue Shopping

</a>

</div>

`;

        updateSummary();
        cartEvents();

        return;

    }

    cart.forEach(product => {

        cartItems.innerHTML += `

<div class="cart-card">

<div class="cart-image">

<img src="${product.image}" alt="${product.name}">

</div>

<div class="cart-content">

<h3>${product.name}</h3>

<p class="cart-category">

${product.category}

</p>

<h4 class="cart-price">

₹${product.price}

</h4>

<div class="quantity-box">

<button class="qty-btn minus-btn" data-id="${product.id}">

-

</button>

<span class="quantity">

${product.quantity}

</span>

<button class="qty-btn plus-btn" data-id="${product.id}">

+

</button>

</div>

<button class="remove-btn" data-id="${product.id}">

Remove

</button>

</div>

</div>

`;

    });

    updateSummary();

}