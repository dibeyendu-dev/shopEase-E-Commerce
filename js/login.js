// ==========================================
// SELECT ELEMENTS
// ==========================================

const loginForm = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const rememberMe = document.getElementById("rememberMe");

// ==========================================
// SHOW / HIDE PASSWORD
// ==========================================

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        this.classList.remove("fa-eye");

        this.classList.add("fa-eye-slash");

    }

    else {

        password.type = "password";

        this.classList.remove("fa-eye-slash");

        this.classList.add("fa-eye");

    }

});

// ==========================================
// TOAST
// ==========================================

function showToast(message, color = "#111827") {

    let toast = document.querySelector(".toast");

    if (!toast) {

        toast = document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.style.background = color;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}

// ==========================================
// AUTO FILL REMEMBER EMAIL
// ==========================================

const rememberedEmail = localStorage.getItem("rememberedEmail");

if (rememberedEmail) {

    email.value = rememberedEmail;

    if (rememberMe) {

        rememberMe.checked = true;

    }

}

// ==========================================
// LOGIN
// ==========================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const userEmail = email.value.trim();

    const userPassword = password.value.trim();

    if (userEmail === "" || userPassword === "") {

        showToast("Please fill all fields.", "#ef4444");

        return;

    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(userEmail)) {

        showToast("Please enter a valid email.", "#ef4444");

        return;

    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const currentUser = users.find(user => {

        return user.email === userEmail &&
               user.password === userPassword;

    });

    if (!currentUser) {

        showToast("Invalid Email or Password", "#ef4444");

        return;

    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    if (rememberMe && rememberMe.checked) {

        localStorage.setItem("rememberedEmail", userEmail);

    }

    else {

        localStorage.removeItem("rememberedEmail");

    }

    showToast(`Welcome ${currentUser.name} 🎉`, "#22c55e");

    setTimeout(() => {

        window.location.href = "index.html";

    }, 1200);

});