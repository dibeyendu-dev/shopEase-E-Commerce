const categories = [

{
id:1,
name:"Electronics",
products:"120+ Products",
image:"images/categories/electronics.jpg",
icon:"fa-solid fa-laptop"
},

{
id:2,
name:"Fashion",
products:"180+ Products",
image:"images/categories/fashion.jpg",
icon:"fa-solid fa-shirt"
},

{
id:3,
name:"Beauty",
products:"90+ Products",
image:"images/categories/beauty.jpg",
icon:"fa-solid fa-spa"
},

{
id:4,
name:"Furniture",
products:"70+ Products",
image:"images/categories/furniture.jpg",
icon:"fa-solid fa-couch"
},

{
id:5,
name:"Watches",
products:"110+ Products",
image:"images/categories/watches.jpg",
icon:"fa-solid fa-clock"
},

{
id:6,
name:"Sports",
products:"95+ Products",
image:"images/categories/sports.jpg",
icon:"fa-solid fa-football"
},

{
id:7,
name:"Shoes",
products:"150+ Products",
image:"images/categories/shoes.jpg",
icon:"fa-solid fa-shoe-prints"
},

{
id:8,
name:"Accessories",
products:"80+ Products",
image:"images/categories/accessories.jpg",
icon:"fa-solid fa-gem"
}

];

const categoriesGrid = document.querySelector(".categories-grid");
const searchInput = document.getElementById("searchCategory");

let filteredCategories = [...categories];
function renderCategories(categoriesArray){

categoriesGrid.innerHTML="";

if(categoriesArray.length===0){

categoriesGrid.innerHTML=`

<h2 class="no-category">

No Categories Found

</h2>

`;

return;

}

categoriesArray.forEach(category=>{

categoriesGrid.innerHTML+=`

<div class="category-card">

<div class="category-image">

<img src="${category.image}" alt="${category.name}">

<span class="category-badge">

${category.products}

</span>

<div class="category-icon">

<i class="${category.icon}"></i>

</div>

</div>

<div class="category-content">

<h3>

${category.name}

</h3>

<p>

Explore premium quality
${category.name} products.

</p>

<a href="products.html" class="category-btn">

Explore

<i class="fa-solid fa-arrow-right"></i>

</a>

</div>

</div>

`;

});

}

renderCategories(filteredCategories);
// ===========================
// Search Categories
// ===========================

searchInput.addEventListener("input", function () {

    const searchValue = this.value.toLowerCase().trim();

    filteredCategories = categories.filter(category => {

        return category.name.toLowerCase().includes(searchValue);

    });

    renderCategories(filteredCategories);

});
// ===========================
// Wishlist & Cart Count
// ===========================

function updateCounts(){

const wishlist=JSON.parse(localStorage.getItem("wishlist")) || [];

const cart=JSON.parse(localStorage.getItem("cart")) || [];

const wishlistCount=document.getElementById("wishlistCount");

const cartCount=document.getElementById("cartCount");

if(wishlistCount){

wishlistCount.textContent=wishlist.length;

}

if(cartCount){

const total=cart.reduce((sum,item)=>sum+item.quantity,0);

cartCount.textContent=total;

}

}

updateCounts();