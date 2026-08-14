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
// ==========================================
// REGISTER FORM
// ==========================================

registerForm.addEventListener("submit",function(event){

event.preventDefault();

const userName=name.value.trim();

const userEmail=email.value.trim();

const userPassword=password.value.trim();

const userConfirmPassword=confirmPassword.value.trim();

if(userName==="" || userEmail==="" || userPassword==="" || userConfirmPassword===""){

alert("Please fill all fields.");

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(userEmail)){

alert("Please enter a valid email.");

return;

}

if(userPassword.length<6){

alert("Password must be at least 6 characters.");

return;

}

if(userPassword!==userConfirmPassword){

alert("Passwords do not match.");

return;

}

// Load Existing Users

const users=JSON.parse(localStorage.getItem("users")) || [];

// Check Duplicate Email

const alreadyExists=users.some(user=>user.email===userEmail);

if(alreadyExists){

alert("Email already registered.");

return;

}

// Save New User

const newUser={

name:userName,
email:userEmail,
password:userPassword

};

users.push(newUser);

localStorage.setItem("users",JSON.stringify(users));

alert("Registration Successful 🎉");

window.location.href="login.html";

});