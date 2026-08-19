// ==========================================
// GO BACK BUTTON
// ==========================================

const goBackButton = document.getElementById("goBack");

if (goBackButton) {

    goBackButton.addEventListener("click", () => {

        if (window.history.length > 1) {

            window.history.back();

        }

        else {

            window.location.href = "index.html";

        }

    });

}

// ==========================================
// FADE-IN ANIMATION
// ==========================================

window.addEventListener("load", () => {

    const errorContent = document.querySelector(".error-content");

    if (errorContent) {

        errorContent.style.opacity = "0";

        errorContent.style.transform = "translateY(40px)";

        setTimeout(() => {

            errorContent.style.transition = "all .8s ease";

            errorContent.style.opacity = "1";

            errorContent.style.transform = "translateY(0)";

        }, 100);

    }

});

// ==========================================
// ESC KEY -> HOME
// ==========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        window.location.href = "index.html";

    }

});