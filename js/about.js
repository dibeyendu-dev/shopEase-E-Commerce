// ==========================================
// COUNTER ANIMATION
// ==========================================

const counters=document.querySelectorAll(".counter");

const speed=150;

function startCounter(){

counters.forEach(counter=>{

const target=+counter.getAttribute("data-target");

const updateCounter=()=>{

const current=+counter.innerText;

const increment=Math.ceil(target/speed);

if(current<target){

counter.innerText=current+increment;

setTimeout(updateCounter,15);

}

else{

counter.innerText=target;

if(target===10000){

counter.innerText="10K+";

}

else if(target===500){

counter.innerText="500+";

}

else if(target===120){

counter.innerText="120+";

}

else if(target===99){

counter.innerText="99%";

}

}

};

updateCounter();

});

}

// ==========================================
// START ON SCROLL
// ==========================================

const statsSection=document.querySelector(".stats-section");

let counterStarted=false;

window.addEventListener("scroll",()=>{

if(!statsSection) return;

const sectionTop=statsSection.offsetTop-300;

if(window.scrollY>=sectionTop && !counterStarted){

counterStarted=true;

startCounter();

}

});

// ==========================================
// MENU TOGGLE
// ==========================================

const menuBtn=document.querySelector(".menu-toggle");

const navbar=document.querySelector(".nav-links");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("active");

});

}