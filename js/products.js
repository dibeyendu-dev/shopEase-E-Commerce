// ==========================================
// ELEMENTS
// ==========================================

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const filterButtons = document.querySelectorAll(".filter-btn");

const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");

// ==========================================
// PRODUCTS DATA
// ==========================================

const products = [

{
id:1,
name:"Wireless Headphone",
category:"Electronics",
price:2499,
oldPrice:3199,
rating:4.8,
discount:20,
image:"images/products/headphone.png"
},

{
id:2,
name:"Smart Watch",
category:"Watches",
price:3999,
oldPrice:4999,
rating:4.7,
discount:15,
image:"images/products/watch.png"
},

{
id:3,
name:"Running Shoes",
category:"Shoes",
price:2999,
oldPrice:3799,
rating:4.6,
discount:10,
image:"images/products/shoes.png"
},

{
id:4,
name:"Men T-Shirt",
category:"Fashion",
price:899,
oldPrice:1199,
rating:4.4,
discount:30,
image:"images/products/tshirt.png"
},

{
id:5,
name:"Bluetooth Speaker",
category:"Electronics",
price:1899,
oldPrice:2499,
rating:4.5,
discount:25,
image:"images/products/speaker.png"
},

{
id:6,
name:"Leather Wallet",
category:"Fashion",
price:799,
oldPrice:999,
rating:4.3,
discount:12,
image:"images/products/wallet.png"
},

{
id:7,
name:"Sports Shoes",
category:"Shoes",
price:3499,
oldPrice:4299,
rating:4.9,
discount:18,
image:"images/products/sportshoe.png"
},

{
id:8,
name:"Luxury Watch",
category:"Watches",
price:5999,
oldPrice:6999,
rating:4.9,
discount:22,
image:"images/products/luxurywatch.png"
}

];

// ==========================================
// VARIABLES
// ==========================================

let filteredProducts=[...products];

let wishlist=JSON.parse(localStorage.getItem("wishlist")) || [];

let cart=JSON.parse(localStorage.getItem("cart")) || [];

// ==========================================
// RENDER PRODUCTS
// ==========================================

function renderProducts(productArray){

productsGrid.innerHTML="";

if(productArray.length===0){

productsGrid.innerHTML=`
<h2 class="no-products">
No Products Found
</h2>
`;

return;

}

productArray.forEach(product=>{

productsGrid.innerHTML+=`

<div class="product-card">

<span class="discount-badge">
-${product.discount}%
</span>

<button class="wishlist-btn" data-id="${product.id}">
<i class="fa-regular fa-heart"></i>
</button>

<div class="product-image">

<img src="${product.image}" alt="${product.name}">

</div>

<div class="product-content">

<span class="product-category">
${product.category}
</span>

<h3>
${product.name}
</h3>

<div class="product-rating">

⭐⭐⭐⭐⭐

<span>
(${product.rating})
</span>

</div>

<div class="product-price">

<span class="new-price">
₹${product.price}
</span>

<span class="old-price">
₹${product.oldPrice}
</span>

</div>

<button class="add-to-cart" data-id="${product.id}">
Add To Cart
</button>

</div>

</div>

`;

});

}
// ==========================================
// SEARCH + FILTER + SORT
// ==========================================

let currentCategory = "All Products";
let currentSearch = "";
let currentSort = "default";

function updateProducts() {

    let updatedProducts = [...products];

    // Category Filter
    if (currentCategory !== "All Products") {

        updatedProducts = updatedProducts.filter(product =>
            product.category === currentCategory
        );

    }

    // Search
    if (currentSearch !== "") {

        updatedProducts = updatedProducts.filter(product =>
            product.name.toLowerCase().includes(currentSearch)
        );

    }

    // Sorting
    switch (currentSort) {

        case "low":

            updatedProducts.sort((a, b) => a.price - b.price);

            break;

        case "high":

            updatedProducts.sort((a, b) => b.price - a.price);

            break;

        case "rating":

            updatedProducts.sort((a, b) => b.rating - a.rating);

            break;

        default:

            break;

    }

    filteredProducts = updatedProducts;

    renderProducts(filteredProducts);

    updateWishlistUI();

    cartEvents();

}

// ==========================================
// FILTER BUTTONS
// ==========================================

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        this.classList.add("active");

        currentCategory = this.textContent.trim();

        updateProducts();

    });

});

// ==========================================
// SEARCH
// ==========================================

searchInput.addEventListener("input", function () {

    currentSearch = this.value.toLowerCase().trim();

    updateProducts();

});

// ==========================================
// SORT
// ==========================================

sortSelect.addEventListener("change", function () {

    currentSort = this.value;

    updateProducts();

});
// ==========================================
// WISHLIST
// ==========================================

function saveWishlist() {

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

}

function updateWishlistCount() {

    if (wishlistCount) {

        wishlistCount.textContent = wishlist.length;

    }

}

function updateWishlistUI() {

    document.querySelectorAll(".wishlist-btn").forEach(button => {

        const id = Number(button.dataset.id);

        const icon = button.querySelector("i");

        const exists = wishlist.some(item => item.id === id);

        if (exists) {

            button.classList.add("active");

            icon.className = "fa-solid fa-heart";

        }

        else {

            button.classList.remove("active");

            icon.className = "fa-regular fa-heart";

        }

    });

    updateWishlistCount();

}

function toggleWishlist() {

    const id = Number(this.dataset.id);

    const index = wishlist.findIndex(item => item.id === id);

    if (index === -1) {

        const product = products.find(item => item.id === id);

        wishlist.push(product);

        showToast("Added To Wishlist");

    }

    else {

        wishlist.splice(index, 1);

        showToast("Removed From Wishlist");

    }

    saveWishlist();

    updateWishlistUI();

}

function wishlistEvents() {

    document.querySelectorAll(".wishlist-btn").forEach(button => {

        button.onclick = toggleWishlist;

    });

}

// ==========================================
// CART
// ==========================================

function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

}

function updateCartCount() {

    if (cartCount) {

        const total = cart.reduce((sum, item) => {

            return sum + item.quantity;

        }, 0);

        cartCount.textContent = total;

    }

}

function addToCart() {

    const id = Number(this.dataset.id);

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    }

    else {

        const product = products.find(item => item.id === id);

        cart.push({

            ...product,

            quantity: 1

        });

    }

    saveCart();

    updateCartCount();

    showToast("Product Added To Cart");

}

function cartEvents() {

    document.querySelectorAll(".add-to-cart").forEach(button => {

        button.onclick = addToCart;

    });

}
// ==========================================
// TOAST MESSAGE
// ==========================================

function showToast(message){

    let toast = document.querySelector(".toast");

    if(!toast){

        toast = document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },2000);

}

// ==========================================
// INITIALIZE
// ==========================================

function initializeProducts(){

    renderProducts(filteredProducts);

    wishlistEvents();

    cartEvents();

    updateWishlistUI();

    updateCartCount();

}

// ==========================================
// START APP
// ==========================================

initializeProducts();