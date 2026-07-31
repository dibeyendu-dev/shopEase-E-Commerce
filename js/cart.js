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
function updateSummary() {

    const items = cart.reduce((total, product) => {

        return total + product.quantity;

    }, 0);

    const price = cart.reduce((total, product) => {

        return total + (product.price * product.quantity);

    }, 0);

    totalItems.textContent = items;

    totalPrice.textContent = "₹" + price;

}

function increaseQuantity() {

    const id = Number(this.dataset.id);

    const product = cart.find(item => item.id === id);

    if (product) {

        product.quantity++;

        saveCart();

        renderCart();

    }

}

function decreaseQuantity() {

    const id = Number(this.dataset.id);

    const product = cart.find(item => item.id === id);

    if (product) {

        if (product.quantity > 1) {

            product.quantity--;

        }

        else {

            cart = cart.filter(item => item.id !== id);

        }

        saveCart();

        renderCart();

    }

}

function removeProduct() {

    const id = Number(this.dataset.id);

    cart = cart.filter(item => item.id !== id);

    saveCart();

    renderCart();

}

function cartEvents() {

    const plusButtons = document.querySelectorAll(".plus-btn");

    const minusButtons = document.querySelectorAll(".minus-btn");

    const removeButtons = document.querySelectorAll(".remove-btn");

    plusButtons.forEach(button => {

        button.addEventListener("click", increaseQuantity);

    });

    minusButtons.forEach(button => {

        button.addEventListener("click", decreaseQuantity);

    });

    removeButtons.forEach(button => {

        button.addEventListener("click", removeProduct);

    });

}

loadCart();

renderCart();

cartEvents();