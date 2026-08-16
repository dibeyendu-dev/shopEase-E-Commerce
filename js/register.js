// ==========================================
// SELECT ELEMENTS
// ==========================================

const registerForm = document.getElementById("registerForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

const terms = document.getElementById("terms");

// ==========================================
// PASSWORD TOGGLE
// ==========================================

function togglePasswordField(input, icon){

if(input.type==="password"){

input.type="text";

icon.classList.replace("fa-eye","fa-eye-slash");

}

else{

input.type="password";

icon.classList.replace("fa-eye-slash","fa-eye");

}

}

togglePassword.onclick=()=>{

togglePasswordField(password,togglePassword);

}

toggleConfirmPassword.onclick=()=>{

togglePasswordField(confirmPassword,toggleConfirmPassword);

}

// ==========================================
// TOAST
// ==========================================

function showToast(message,color="#111827"){

let toast=document.querySelector(".toast");

if(!toast){

toast=document.createElement("div");

toast.className="toast";

document.body.appendChild(toast);

}

toast.style.background=color;

toast.textContent=message;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

}

// ==========================================
// REGISTER
// ==========================================

registerForm.addEventListener("submit",function(e){

e.preventDefault();

const userName=name.value.trim();

const userEmail=email.value.trim();

const userPhone=phone.value.trim();

const userPassword=password.value.trim();

const confirm=confirmPassword.value.trim();

if(

userName==="" ||

userEmail==="" ||

userPhone==="" ||

userPassword==="" ||

confirm===""

){

showToast("Please fill all fields","#ef4444");

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(userEmail)){

showToast("Invalid Email","#ef4444");

return;

}

const phonePattern=/^[0-9]{10}$/;

if(!phonePattern.test(userPhone)){

showToast("Enter Valid Phone Number","#ef4444");

return;

}

const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

if(!passwordPattern.test(userPassword)){

showToast("Password must contain Uppercase, Lowercase, Number and 8 Characters","#ef4444");

return;

}

if(userPassword!==confirm){

showToast("Passwords do not match","#ef4444");

return;

}

if(!terms.checked){

showToast("Accept Terms & Conditions","#ef4444");

return;

}

const users=JSON.parse(localStorage.getItem("users"))||[];

const exists=users.some(user=>user.email===userEmail);

if(exists){

showToast("Email already registered","#ef4444");

return;

}

users.push({

name:userName,

email:userEmail,

phone:userPhone,

password:userPassword

});

localStorage.setItem("users",JSON.stringify(users));

showToast("Registration Successful 🎉","#22c55e");

setTimeout(()=>{

window.location.href="login.html";

},1500);

});