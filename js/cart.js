const cartItems = document.getElementById("cartItems");
const totalItems = document.getElementById("totalItems");
const totalPrice = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =============================
// Render Cart
// =============================

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

        totalItems.textContent = 0;
        totalPrice.textContent = "₹0";

        return;
    }

    let totalItem = 0;
    let total = 0;

    cart.forEach((product, index) => {

        totalItem += product.quantity;
        total += product.price * product.quantity;

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

                    <button class="minus-btn" data-index="${index}">
                        -
                    </button>

                    <span class="quantity">
                        ${product.quantity}
                    </span>

                    <button class="plus-btn" data-index="${index}">
                        +
                    </button>

                </div>

                <button class="remove-btn" data-index="${index}">
                    Remove
                </button>

            </div>

        </div>
        `;

    });

    totalItems.textContent = totalItem;
    totalPrice.textContent = "₹" + total;

    addEvents();

}

// =============================
// Events
// =============================

function addEvents() {

    document.querySelectorAll(".plus-btn").forEach(btn => {

        btn.onclick = function () {

            const index = this.dataset.index;

            cart[index].quantity++;

            localStorage.setItem("cart", JSON.stringify(cart));

            renderCart();

        };

    });

    document.querySelectorAll(".minus-btn").forEach(btn => {

        btn.onclick = function () {

            const index = this.dataset.index;

            if (cart[index].quantity > 1) {

                cart[index].quantity--;

            } else {

                cart.splice(index, 1);

            }

            localStorage.setItem("cart", JSON.stringify(cart));

            renderCart();

        };

    });

    document.querySelectorAll(".remove-btn").forEach(btn => {

        btn.onclick = function () {

            const index = this.dataset.index;

            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));

            renderCart();

        };

    });

}

renderCart();
// =============================
// CHECKOUT VALIDATION
// =============================

const checkoutBtn = document.querySelector(".checkout-btn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", function (event) {

        if (cart.length === 0) {

            event.preventDefault();

            alert("Your cart is empty!");

        }

    });

}