// ==========================================
// SELECT ELEMENTS
// ==========================================

const themeToggle = document.getElementById("themeToggle");

const body = document.body;

const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

// ==========================================
// LOAD SAVED THEME
// ==========================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    body.classList.add("dark");

    if (themeIcon) {

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }

}

// ==========================================
// TOGGLE THEME
// ==========================================

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            themeIcon.classList.remove("fa-moon");

            themeIcon.classList.add("fa-sun");

        }

        else {

            localStorage.setItem("theme", "light");

            themeIcon.classList.remove("fa-sun");

            themeIcon.classList.add("fa-moon");

        }

    });

}