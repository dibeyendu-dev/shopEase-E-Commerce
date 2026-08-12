const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const offerDate = new Date("December 31, 2026 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = offerDate - now;

    if (distance <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        return;
    }

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((distance % (1000 * 60)) / 1000);

    days.textContent = String(day).padStart(2, "0");
    hours.textContent = String(hour).padStart(2, "0");
    minutes.textContent = String(minute).padStart(2, "0");
    seconds.textContent = String(second).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
// ===============================
// Offer Products
// ===============================

const offers = [

{
id:1,
name:"Wireless Headphone",
category:"Electronics",
price:2499,
oldPrice:3499,
discount:30,
rating:4.8,
image:"images/products/headphone.png"
},

{
id:2,
name:"Smart Watch",
category:"Watches",
price:3999,
oldPrice:5499,
discount:27,
rating:4.9,
image:"images/products/watch.png"
},

{
id:3,
name:"Running Shoes",
category:"Shoes",
price:1899,
oldPrice:2499,
discount:24,
rating:4.7,
image:"images/products/shoes.png"
},

{
id:4,
name:"Travel Backpack",
category:"Accessories",
price:1499,
oldPrice:1999,
discount:25,
rating:4.6,
image:"images/products/backpack.png"
},

{
id:5,
name:"Bluetooth Speaker",
category:"Electronics",
price:1799,
oldPrice:2499,
discount:28,
rating:4.5,
image:"images/products/speaker.png"
},

{
id:6,
name:"Leather Jacket",
category:"Fashion",
price:2999,
oldPrice:3999,
discount:25,
rating:4.8,
image:"images/products/jacket.png"
}

];

const offersGrid=document.querySelector(".offers-grid");

let cart=JSON.parse(localStorage.getItem("cart")) || [];

let wishlist=JSON.parse(localStorage.getItem("wishlist")) || [];