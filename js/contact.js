const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

event.preventDefault();

const name = this.querySelector('input[type="text"]').value.trim();

const email = this.querySelector('input[type="email"]').value.trim();

const subject = this.querySelectorAll('input')[2].value.trim();

const message = this.querySelector("textarea").value.trim();

if(name==="" || email==="" || subject==="" || message===""){

alert("Please Fill All Fields");

return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){

alert("Please Enter A Valid Email Address");

return;

}

alert("✅ Your Message Has Been Sent Successfully!");

contactForm.reset();

});