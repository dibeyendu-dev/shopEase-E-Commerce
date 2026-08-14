// ==========================================
// SELECT ELEMENTS
// ==========================================

const registerForm = document.getElementById("registerForm");

const name = document.getElementById("name");

const email = document.getElementById("email");

const password = document.getElementById("password");

const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");

const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
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

// ==========================================
// SHOW / HIDE CONFIRM PASSWORD
// ==========================================

toggleConfirmPassword.addEventListener("click",function(){

if(confirmPassword.type==="password"){

confirmPassword.type="text";

this.classList.remove("fa-eye");

this.classList.add("fa-eye-slash");

}

else{

confirmPassword.type="password";

this.classList.remove("fa-eye-slash");

this.classList.add("fa-eye");

}

});