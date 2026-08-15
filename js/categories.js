// ==========================================
// ELEMENTS
// ==========================================

const categoriesGrid = document.getElementById("categoriesGrid");
const searchInput = document.getElementById("searchCategory");
const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");

// ==========================================
// CATEGORY DATA
// ==========================================

const categories = [

    {
        id: 1,
        name: "Electronics",
        products: 120,
        image: "images/categories/electronics.jpg",
        badge: "Popular"
    },

    {
        id: 2,
        name: "Fashion",
        products: 180,
        image: "images/categories/fashion.jpg",
        badge: "Trending"
    },

    {
        id: 3,
        name: "Beauty",
        products: 90,
        image: "images/categories/beauty.jpg",
        badge: "New"
    },

    {
        id: 4,
        name: "Furniture",
        products: 70,
        image: "images/categories/furniture.jpg",
        badge: "Best"
    },

    {
        id: 5,
        name: "Watches",
        products: 110,
        image: "images/categories/watches.jpg",
        badge: "Luxury"
    },

    {
        id: 6,
        name: "Sports",
        products: 95,
        image: "images/categories/sports.jpg",
        badge: "Top"
    },

    {
        id: 7,
        name: "Shoes",
        products: 140,
        image: "images/categories/shoes.jpg",
        badge: "Popular"
    },

    {
        id: 8,
        name: "Bags",
        products: 65,
        image: "images/categories/bags.jpg",
        badge: "Hot"
    },

    {
        id: 9,
        name: "Gaming",
        products: 55,
        image: "images/categories/gaming.jpg",
        badge: "Latest"
    }

];

// ==========================================
// VARIABLES
// ==========================================

let filteredCategories = [...categories];

// ==========================================
// RENDER
// ==========================================

function renderCategories(categoryArray) {

    categoriesGrid.innerHTML = "";

    if (categoryArray.length === 0) {

        categoriesGrid.innerHTML = `

<h2 class="no-category">

No Category Found

</h2>

`;

        return;

    }

    categoryArray.forEach(category => {

        categoriesGrid.innerHTML += `

<div class="category-card">

<div class="category-image">

<img src="${category.image}" alt="${category.name}">

<span class="category-badge">

${category.badge}

</span>

</div>

<div class="category-content">

<h3>

${category.name}

</h3>

<p>

${category.products}+ Products

</p>

<a
href="products.html?category=${encodeURIComponent(category.name)}"
class="category-btn"
>

Explore

<i class="fa-solid fa-arrow-right"></i>

</a>

</div>

</div>

`;

    });

}
// ==========================================
// LIVE SEARCH
// ==========================================

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    filteredCategories = categories.filter(category =>

        category.name.toLowerCase().includes(value)

    );

    renderCategories(filteredCategories);

});

// ==========================================
// CART COUNT
// ==========================================

function updateCartCount() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce((total, item) => {

        return total + item.quantity;

    }, 0);

    if (cartCount) {

        cartCount.textContent = totalItems;

    }

}

// ==========================================
// WISHLIST COUNT
// ==========================================

function updateWishlistCount() {

    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    if (wishlistCount) {

        wishlistCount.textContent = wishlist.length;

    }

}

// ==========================================
// SHOW TOAST
// ==========================================

function showToast(message) {

    let toast = document.querySelector(".toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);

}
// ==========================================
// INITIALIZE
// ==========================================

function initializeCategories() {

    renderCategories(filteredCategories);

    updateCartCount();

    updateWishlistCount();

}

// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    initializeCategories();

});

// ==========================================
// UPDATE COUNTS WHEN STORAGE CHANGES
// ==========================================

window.addEventListener("storage", () => {

    updateCartCount();

    updateWishlistCount();

});

// ==========================================
// EXPLORE BUTTON CLICK EFFECT
// ==========================================

document.addEventListener("click", function (event) {

    const button = event.target.closest(".category-btn");

    if (!button) return;

    showToast("Opening Products...");

});