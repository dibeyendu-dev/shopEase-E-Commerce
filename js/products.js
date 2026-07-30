const filterButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sortSelect");
const searchInput = document.getElementById("searchInput");
const productsGrid = document.getElementById("productsGrid");

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 99,
        oldPrice: 129,
        rating: 4.8,
        discount: "23% OFF",
        image: "images/headphone.jpg"
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Watches",
        price: 149,
        oldPrice: 199,
        rating: 4.7,
        discount: "25% OFF",
        image: "images/watch.jpg"
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Shoes",
        price: 89,
        oldPrice: 120,
        rating: 4.9,
        discount: "26% OFF",
        image: "images/shoes.jpg"
    },
    {
        id: 4,
        name: "Leather Jacket",
        category: "Fashion",
        price: 119,
        oldPrice: 159,
        rating: 4.6,
        discount: "20% OFF",
        image: "images/jacket.jpg"
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 79,
        oldPrice: 99,
        rating: 4.5,
        discount: "18% OFF",
        image: "images/speaker.jpg"
    },
    {
        id: 6,
        name: "Gaming Mouse",
        category: "Electronics",
        price: 49,
        oldPrice: 69,
        rating: 4.8,
        discount: "30% OFF",
        image: "images/mouse.jpg"
    },
    {
        id: 7,
        name: "Classic Sneakers",
        category: "Shoes",
        price: 69,
        oldPrice: 89,
        rating: 4.4,
        discount: "22% OFF",
        image: "images/sneakers.jpg"
    },
    {
        id: 8,
        name: "Denim Shirt",
        category: "Fashion",
        price: 59,
        oldPrice: 79,
        rating: 4.5,
        discount: "18% OFF",
        image: "images/shirt.jpg"
    }
];

let filteredProducts = [...products];
let wishlist = [];
let cart = [];

function renderProducts(productsArray) {

    productsGrid.innerHTML = "";

    productsArray.forEach(product => {

        productsGrid.innerHTML += `

<div class="product-card">

<div class="product-image">

<span class="discount-badge">${product.discount}</span>

<div class="wishlist-floating" data-id="${product.id}">
<i class="fa-regular fa-heart"></i>
</div>

<img src="${product.image}" alt="${product.name}">

</div>

<div class="product-content">

<p class="product-category">${product.category}</p>

<h3 class="product-title">${product.name}</h3>

<div class="product-rating">

<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star"></i>
<i class="fa-solid fa-star-half-stroke"></i>

<span>${product.rating}</span>

</div>

<div class="product-price">

<span class="current-price">$${product.price}</span>

<span class="old-price">$${product.oldPrice}</span>

</div>

<div class="product-actions">

<button class="cart-btn" data-id="${product.id}">
<i class="fa-solid fa-cart-shopping"></i>
Add To Cart
</button>

<button class="wishlist-btn" data-id="${product.id}">
<i class="fa-regular fa-heart"></i>
</button>

</div>

</div>

</div>

`;

    });

}

renderProducts(filteredProducts);

let currentCategory = "All Products";
let currentSearch = "";
let currentSort = "default";

function updateProducts() {

    let updatedProducts = [...products];

    if (currentCategory !== "All Products") {

        updatedProducts = updatedProducts.filter(product => product.category === currentCategory);

    }

    if (currentSearch !== "") {

        updatedProducts = updatedProducts.filter(product => product.name.toLowerCase().includes(currentSearch));

    }

    if (currentSort === "low") {

        updatedProducts.sort((a, b) => a.price - b.price);

    }

    else if (currentSort === "high") {

        updatedProducts.sort((a, b) => b.price - a.price);

    }

    else if (currentSort === "rating") {

        updatedProducts.sort((a, b) => b.rating - a.rating);

    }

    filteredProducts = updatedProducts;

    renderProducts(filteredProducts);

}

searchInput.addEventListener("input", function () {

    currentSearch = this.value.toLowerCase().trim();

    updateProducts();

});

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        currentCategory = this.textContent.trim();

        updateProducts();

    });

});

sortSelect.addEventListener("change", function () {

    currentSort = this.value;

    updateProducts();

});
function saveWishlist() {

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

}

function loadWishlist() {

    const savedWishlist = localStorage.getItem("wishlist");

    if (savedWishlist) {

        wishlist = JSON.parse(savedWishlist);

    }

}

function updateWishlistUI() {

    const wishlistButtons = document.querySelectorAll(".wishlist-btn");
    const floatingButtons = document.querySelectorAll(".wishlist-floating");

    wishlistButtons.forEach(button => {

        const id = Number(button.dataset.id);

        const icon = button.querySelector("i");

        if (wishlist.includes(id)) {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            button.classList.add("active");

        } else {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            button.classList.remove("active");

        }

    });

    floatingButtons.forEach(button => {

        const id = Number(button.dataset.id);

        const icon = button.querySelector("i");

        if (wishlist.includes(id)) {

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            button.classList.add("active");

        } else {

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            button.classList.remove("active");

        }

    });

}

function toggleWishlist() {

    const id = Number(this.dataset.id);

    if (wishlist.includes(id)) {

        wishlist = wishlist.filter(item => item !== id);

    } else {

        wishlist.push(id);

    }

    saveWishlist();

    updateWishlistUI();

}

function wishlistEvents() {

    const wishlistButtons = document.querySelectorAll(".wishlist-btn");
    const floatingButtons = document.querySelectorAll(".wishlist-floating");

    wishlistButtons.forEach(button => {

        button.addEventListener("click", toggleWishlist);

    });

    floatingButtons.forEach(button => {

        button.addEventListener("click", toggleWishlist);

    });

}
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const filterButtons = document.querySelectorAll(".filter-btn");
const productsGrid = document.getElementById("productsGrid");
const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");

const products = [
    {
        id: 1,
        name: "Wireless Headphone",
        category: "Electronics",
        price: 2499,
        rating: 4.8,
        discount: 20,
        image: "images/headphone.jpg"
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Watches",
        price: 3999,
        rating: 4.7,
        discount: 15,
        image: "images/watch.jpg"
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Shoes",
        price: 2999,
        rating: 4.6,
        discount: 10,
        image: "images/shoes.jpg"
    },
    {
        id: 4,
        name: "Men T-Shirt",
        category: "Fashion",
        price: 899,
        rating: 4.4,
        discount: 30,
        image: "images/tshirt.jpg"
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 1899,
        rating: 4.5,
        discount: 25,
        image: "images/speaker.jpg"
    },
    {
        id: 6,
        name: "Leather Wallet",
        category: "Fashion",
        price: 799,
        rating: 4.3,
        discount: 12,
        image: "images/wallet.jpg"
    },
    {
        id: 7,
        name: "Sports Shoes",
        category: "Shoes",
        price: 3499,
        rating: 4.9,
        discount: 18,
        image: "images/sportshoe.jpg"
    },
    {
        id: 8,
        name: "Luxury Watch",
        category: "Watches",
        price: 5999,
        rating: 4.9,
        discount: 22,
        image: "images/luxurywatch.jpg"
    }
];

let filteredProducts = [...products];
let wishlist = [];
let cart = [];