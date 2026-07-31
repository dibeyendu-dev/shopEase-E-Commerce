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

function renderProducts(productsArray) {

    productsGrid.innerHTML = "";

    if (productsArray.length === 0) {

        productsGrid.innerHTML = `
<h2 class="no-products">
No Products Found
</h2>
`;

        return;

    }

    productsArray.forEach(product => {

        productsGrid.innerHTML += `

<div class="product-card">

<div class="product-image">

<img src="${product.image}" alt="${product.name}">

<span class="discount-badge">
-${product.discount}%
</span>

<button class="wishlist-btn" data-id="${product.id}">
<i class="fa-regular fa-heart"></i>
</button>

</div>

<div class="product-content">

<h3>${product.name}</h3>

<p>${product.category}</p>

<div class="rating">

<i class="fa-solid fa-star"></i>

<span>${product.rating}</span>

</div>

<h4>
₹${product.price}
</h4>

<button class="cart-btn" data-id="${product.id}">
Add To Cart
</button>

</div>

</div>

`;

    });
    wishlistEvents();

    updateWishlistUI();
}
let currentCategory = "All Products";
let currentSearch = "";
let currentSort = "default";

function updateProducts() {

    let updatedProducts = [...products];

    if (currentCategory !== "All Products") {

        updatedProducts = updatedProducts.filter(product => product.category === currentCategory);

    }

    if (currentSearch !== "") {

        updatedProducts = updatedProducts.filter(product =>
            product.name.toLowerCase().includes(currentSearch)
        );

    }

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

            updatedProducts = [...updatedProducts];

    }

    filteredProducts = updatedProducts;

    renderProducts(filteredProducts);

}

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

searchInput.addEventListener("input", function () {

    currentSearch = this.value.toLowerCase().trim();

    updateProducts();

});

sortSelect.addEventListener("change", function () {

    currentSort = this.value;

    updateProducts();

});
loadWishlist();

renderProducts(filteredProducts);
function saveWishlist() {

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

}

function loadWishlist() {

    const savedWishlist = localStorage.getItem("wishlist");

    if (savedWishlist) {

        wishlist = JSON.parse(savedWishlist);

    }

}

function updateWishlistCount() {

    if (wishlistCount) {

        wishlistCount.textContent = wishlist.length;

    }

}

function updateWishlistUI() {

    const wishlistButtons = document.querySelectorAll(".wishlist-btn");

    wishlistButtons.forEach(button => {

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

    }

    else {

        wishlist.splice(index, 1);

    }

    saveWishlist();

    updateWishlistUI();

}

function wishlistEvents() {

    const wishlistButtons = document.querySelectorAll(".wishlist-btn");

    wishlistButtons.forEach(button => {

        button.addEventListener("click", toggleWishlist);

    });

}
function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart));

}

function loadCart(){

const savedCart=localStorage.getItem("cart");

if(savedCart){

cart=JSON.parse(savedCart);

}

}

function updateCartCount(){

if(cartCount){

const totalItems=cart.reduce((total,item)=>{

return total+item.quantity;

},0);

cartCount.textContent=totalItems;

}

}

function addToCart(){

const id=Number(this.dataset.id);

const existingProduct=cart.find(item=>item.id===id);

if(existingProduct){

existingProduct.quantity++;

}

else{

const product=products.find(item=>item.id===id);

cart.push({

id:product.id,

name:product.name,

category:product.category,

price:product.price,

rating:product.rating,

discount:product.discount,

image:product.image,

quantity:1

});

}

saveCart();

updateCartCount();

}

function cartEvents(){

const cartButtons=document.querySelectorAll(".cart-btn");

cartButtons.forEach(button=>{

button.addEventListener("click",addToCart);

});

}
loadCart();

cartEvents();

updateCartCount();

renderProducts(filteredProducts);
function showToast(message){

let toast=document.querySelector(".toast");

if(!toast){

toast=document.createElement("div");

toast.className="toast";

document.body.appendChild(toast);

}

toast.textContent=message;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2000);

}

function initializeProducts(){

loadWishlist();

loadCart();

renderProducts(filteredProducts);

updateWishlistCount();

updateWishlistUI();

updateCartCount();

cartEvents();

}

document.addEventListener("click",function(event){

const cartButton=event.target.closest(".cart-btn");

if(cartButton){

addToCart.call(cartButton);

showToast("Product Added To Cart");

}

const wishlistButton=event.target.closest(".wishlist-btn");

if(wishlistButton){

toggleWishlist.call(wishlistButton);

const id=Number(wishlistButton.dataset.id);

const exists=wishlist.some(item=>item.id===id);

if(exists){

showToast("Added To Wishlist");

}

else{

showToast("Removed From Wishlist");

}

}

});

initializeProducts();