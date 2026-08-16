const wishlistItems = document.getElementById("wishlistItems");
const wishlistCount = document.getElementById("wishlistCount");
const cartCount = document.getElementById("cartCount");
const clearWishlist = document.getElementById("clearWishlist");

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// =========================
// SAVE
// =========================

function saveWishlist() {

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

}

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}

// =========================
// COUNTS
// =========================

function updateCounts() {

    wishlistCount.textContent = wishlist.length;

    const total = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartCount.textContent = total;

}

// =========================
// TOAST
// =========================

function showToast(message, color = "#111827") {

    let toast = document.querySelector(".toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.style.background = color;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}

// =========================
// RENDER
// =========================

function renderWishlist() {

    wishlistItems.innerHTML = "";

    if (wishlist.length === 0) {

        wishlistItems.innerHTML = `

<div class="empty-wishlist">

<i class="fa-solid fa-heart-crack"></i>

<h2>Your Wishlist Is Empty</h2>

<p>Save your favourite products here.</p>

<a href="products.html" class="shop-btn">

Browse Products

</a>

</div>

`;

        updateCounts();

        return;

    }

    wishlist.forEach(product => {

        wishlistItems.innerHTML += `

<div class="wishlist-card">

<div class="wishlist-image">

<img src="${product.image}" alt="${product.name}">

</div>

<div class="wishlist-content">

<h3>${product.name}</h3>

<p>${product.category}</p>

<h4>₹${product.price}</h4>

<div class="wishlist-actions">

<button
class="add-cart-btn"
data-id="${product.id}">

Move To Cart

</button>

<button
class="remove-btn"
data-id="${product.id}">

<i class="fa-solid fa-trash"></i>

</button>

</div>

</div>

</div>

`;

    });

    updateCounts();

    events();

}

// =========================
// MOVE TO CART
// =========================

function moveToCart() {

    const id = Number(this.dataset.id);

    const product = wishlist.find(item => item.id === id);

    const exists = cart.find(item => item.id === id);

    if (exists) {

        exists.quantity++;

    } else {

        cart.push({

            ...product,

            quantity: 1

        });

    }

    wishlist = wishlist.filter(item => item.id !== id);

    saveWishlist();

    saveCart();

    renderWishlist();

    showToast("Moved To Cart", "#22c55e");

}

// =========================
// REMOVE
// =========================

function removeItem() {

    const id = Number(this.dataset.id);

    wishlist = wishlist.filter(item => item.id !== id);

    saveWishlist();

    renderWishlist();

    showToast("Removed From Wishlist", "#ef4444");

}

// =========================
// CLEAR
// =========================

clearWishlist?.addEventListener("click", () => {

    if (wishlist.length === 0) {

        showToast("Wishlist Already Empty", "#ef4444");

        return;

    }

    const confirmDelete = confirm("Clear Wishlist ?");

    if (!confirmDelete) return;

    wishlist = [];

    saveWishlist();

    renderWishlist();

    showToast("Wishlist Cleared", "#ef4444");

});

// =========================
// EVENTS
// =========================

function events() {

    document.querySelectorAll(".add-cart-btn").forEach(btn => {

        btn.onclick = moveToCart;

    });

    document.querySelectorAll(".remove-btn").forEach(btn => {

        btn.onclick = removeItem;

    });

}

renderWishlist();