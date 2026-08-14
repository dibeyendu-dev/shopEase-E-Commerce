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
// ==========================================
// LOGIN FORM
// ==========================================

loginForm.addEventListener("submit", function (event) {

event.preventDefault();

const userEmail = email.value.trim();

const userPassword = password.value.trim();

if(userEmail === "" || userPassword === ""){

alert("Please fill all fields.");

return;

}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(userEmail)){

alert("Please enter a valid email.");

return;

}

// Load Registered Users

const users = JSON.parse(localStorage.getItem("users")) || [];

// Check Email & Password

const currentUser = users.find(user => {

return user.email === userEmail &&
user.password === userPassword;

});

if(!currentUser){

alert("Invalid Email or Password");

return;

}

// Save Logged In User

localStorage.setItem("currentUser", JSON.stringify(currentUser));

alert(`Welcome ${currentUser.name} 🎉`);

window.location.href = "index.html";

});