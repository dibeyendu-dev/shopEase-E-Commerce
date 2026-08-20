// ==========================================
// SELECT ELEMENTS
// ==========================================

const loginBtn = document.getElementById("loginBtn");

const userBox = document.getElementById("userBox");

const userBtn = document.getElementById("userBtn");

const userName = document.getElementById("userName");

const userDropdown = document.getElementById("userDropdown");

const logoutBtn = document.getElementById("logoutBtn");

// ==========================================
// LOAD CURRENT USER
// ==========================================

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (currentUser) {

    if (loginBtn) {

        loginBtn.style.display = "none";

    }

    if (userBox) {

        userBox.style.display = "block";

    }

    if (userName) {

        userName.textContent = `Hi, ${currentUser.name}`;

    }

}

else{

    if(loginBtn){

        loginBtn.style.display="flex";

    }

    if(userBox){

        userBox.style.display="none";

    }

}

// ==========================================
// USER DROPDOWN
// ==========================================

if(userBtn){

    userBtn.addEventListener("click",function(){

        userBox.classList.toggle("active");

    });

}

// ==========================================
// CLOSE DROPDOWN WHEN CLICK OUTSIDE
// ==========================================

document.addEventListener("click",function(event){

    if(

        userBox &&

        !userBox.contains(event.target)

    ){

        userBox.classList.remove("active");

    }

});

// ==========================================
// LOGOUT
// ==========================================

if(logoutBtn){

    logoutBtn.addEventListener("click",function(event){

        event.preventDefault();

        localStorage.removeItem("currentUser");

        alert("Logged Out Successfully");

        window.location.href="login.html";

    });

}