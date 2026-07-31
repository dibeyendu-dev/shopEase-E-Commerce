const wishlistItems = document.getElementById("wishlistItems");
const wishlistCount = document.getElementById("wishlistCount");
const cartCount = document.getElementById("cartCount");

let wishlist = [];
let cart = [];

function loadWishlist() {

    const savedWishlist = localStorage.getItem("wishlist");

    if (savedWishlist) {

        wishlist = JSON.parse(savedWishlist);

    }

}

function loadCart() {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {

        cart = JSON.parse(savedCart);

    }

}

function saveWishlist() {

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

}

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}

function updateCounts() {

    if (wishlistCount) {

        wishlistCount.textContent = wishlist.length;

    }

    if (cartCount) {

        const total = cart.reduce((sum, item) => {

            return sum + item.quantity;

        }, 0);

        cartCount.textContent = total;

    }

}

function renderWishlist() {

    wishlistItems.innerHTML = "";

    if (wishlist.length === 0) {

        wishlistItems.innerHTML = `

<div class="empty-wishlist">

<i class="fa-solid fa-heart-crack"></i>

<h2>Your Wishlist Is Empty</h2>

<p>

Save your favourite products here.

</p>

<a href="products.html" class="shop-btn">

Browse Products

</a>

</div>

`;

        updateCounts();
        wishlistEvents();
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

<p class="wishlist-category">

${product.category}

</p>

<h4 class="wishlist-price">

₹${product.price}

</h4>

<div class="wishlist-actions">

<button class="add-cart-btn" data-id="${product.id}">

Add To Cart

</button>

<button class="remove-wishlist-btn" data-id="${product.id}">

<i class="fa-solid fa-trash"></i>

</button>

</div>

</div>

</div>

`;

    });

    updateCounts();

}