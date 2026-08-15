// ==========================================
// SELECT ELEMENTS
// ==========================================

const orderId = document.getElementById("orderId");

const orderDate = document.getElementById("orderDate");

const orderAmount = document.getElementById("orderAmount");

// ==========================================
// LOAD LAST ORDER
// ==========================================

const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));
// ==========================================
// CHECK ORDER
// ==========================================

if(!lastOrder){

alert("No Order Found!");

window.location.href="index.html";

}

// ==========================================
// GENERATE ORDER ID
// ==========================================

const generatedOrderId =
"ORD-" +
Math.floor(Math.random()*1000000);

orderId.textContent = generatedOrderId;

orderDate.textContent = lastOrder.orderDate;

orderAmount.textContent = "₹" + lastOrder.total;
// ==========================================
// SAVE ORDER HISTORY
// ==========================================

const orderHistory =
JSON.parse(localStorage.getItem("orders")) || [];

orderHistory.push({

id:generatedOrderId,

customer:lastOrder.customer,

email:lastOrder.email,

phone:lastOrder.phone,

address:lastOrder.address,

items:lastOrder.items,

payment:lastOrder.payment,

total:lastOrder.total,

date:lastOrder.orderDate

});

localStorage.setItem(

"orders",

JSON.stringify(orderHistory)

);

// ==========================================
// REMOVE LAST ORDER
// ==========================================

localStorage.removeItem("lastOrder");