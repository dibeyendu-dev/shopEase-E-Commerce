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