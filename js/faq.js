// ==========================================
// SELECT ELEMENTS
// ==========================================

const faqItems = document.querySelectorAll(".faq-item");

const faqQuestions = document.querySelectorAll(".faq-question");

const searchInput = document.getElementById("faqSearch");

const menuToggle = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

// ==========================================
// FAQ ACCORDION
// ==========================================

faqQuestions.forEach(question => {

    question.addEventListener("click", function () {

        const currentItem = this.parentElement;

        faqItems.forEach(item => {

            if (item !== currentItem) {

                item.classList.remove("active");

            }

        });

        currentItem.classList.toggle("active");

    });

});

// ==========================================
// SEARCH FAQ
// ==========================================

searchInput.addEventListener("input", function () {

    const value = this.value.toLowerCase().trim();

    faqItems.forEach(item => {

        const question = item.querySelector(".faq-question")
            .textContent
            .toLowerCase();

        const answer = item.querySelector(".faq-answer")
            .textContent
            .toLowerCase();

        if (
            question.includes(value) ||
            answer.includes(value)
        ) {

            item.classList.remove("hide");

        }

        else {

            item.classList.add("hide");

        }

    });

});

// ==========================================
// MOBILE MENU
// ==========================================

if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}

// ==========================================
// CLOSE MENU AFTER CLICK
// ==========================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks.classList.contains("active")) {

            navLinks.classList.remove("active");

        }

    });

});

// ==========================================
// OPEN FIRST FAQ BY DEFAULT
// ==========================================

if (faqItems.length > 0) {

    faqItems[0].classList.add("active");

}