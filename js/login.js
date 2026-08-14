// ==========================================
// SELECT ELEMENTS
// ==========================================

const loginForm=document.getElementById("loginForm");

const email=document.getElementById("email");

const password=document.getElementById("password");

const togglePassword=document.getElementById("togglePassword");
// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

togglePassword.addEventListener("click",function(){

if(password.type==="password"){

password.type="text";

this.classList.remove("fa-eye");

this.classList.add("fa-eye-slash");

}

else{

password.type="password";

this.classList.remove("fa-eye-slash");

this.classList.add("fa-eye");

}

});