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

loginForm.addEventListener("submit",function(event){

event.preventDefault();

const userEmail=email.value.trim();

const userPassword=password.value.trim();

if(userEmail==="" || userPassword===""){

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

const user={

email:userEmail,
password:userPassword

};

localStorage.setItem("currentUser",JSON.stringify(user));

alert("Login Successful 🎉");

window.location.href="index.html";

});