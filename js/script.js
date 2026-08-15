// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

// ==========================================
// BACK TO TOP
// ==========================================

const backToTop=document.getElementById("backToTop");

if(backToTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

backToTop.classList.add("show");

}else{

backToTop.classList.remove("show");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// ==========================================
// CART
// ==========================================

const cartButtons=document.querySelectorAll(".add-to-cart");

const cartCount=document.getElementById("cartCount");

let cart=JSON.parse(localStorage.getItem("cart")) || [];

// Update Cart Counter

function updateCartCount(){

if(cartCount){

const totalItems=cart.reduce((sum,item)=>{

return sum+item.quantity;

},0);

cartCount.textContent=totalItems;

}

}

updateCartCount();

// Add To Cart

cartButtons.forEach(button=>{

button.addEventListener("click",function(){

const product=this.closest(".product-card");

const item={

id:Number(product.dataset.id),

name:product.dataset.name,

category:product.dataset.category,

price:Number(product.dataset.price),

image:product.dataset.image,

quantity:1

};

const existingProduct=cart.find(p=>p.id===item.id);

if(existingProduct){

existingProduct.quantity++;

}else{

cart.push(item);

}

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert(item.name+" added to cart successfully!");

});

});