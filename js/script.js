const menuBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
const backToTop=document.getElementById("backToTop");

window.addEventListener("scroll",function(){
    if(window.scrollY>300){
        backToTop.classList.add("show");
    }else{
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});