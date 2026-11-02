// Project 1: write your form validation in this file.
/* connecting the the javascript to the form*/
const form = document.getElementById("signup-form");
/*giving each HTML element a variable to access*/
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const frequencyInput = document.getElementById("frequency");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

});

/*gathering inputs and cleaning up empty space around them*/
const name = nameInput.value.trim();
const email = emailInput.value.trim();
const frequency = frequencyInput.value.trim();

const nameError = name === "";
const emailError = email === "";
const frequencyError = frequency === "";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const invalidEmail = !emailPattern.test(email);

const nameErrorMessage = document.getElementById("name-error");
const emailErrorMessage = document.getElementById("email-error");
const frequencyErrorMessage = document.getElementById("frequency-error");

nameErrorMessage.textContent = nameError
    ? "Enter your name."
    : "";

emailErrorMessage.textContent = emailError
    ? "Enter your email address."
    : invalidEmail
        ? "Enter an email address like name@example.com."
        : "";

frequencyErrorMessage.textContent = frequencyError
    ? "Choose how often we should email you."
    : "";

nameInput.setAttribute("aria-invalid", nameError);
emailInput.setAttribute("aria-invalid", emailError || invalidEmail);
frequencyInput.setAttribute("aria-invalid", frequencyError);

form.reset();/*Checking whether the form has errors */
const hasErrors = nameError || emailError || invalidEmail || frequencyError;

if (hasErrors) {

    formMessage.textContent = "";
    formMessage.classList.remove("success");

    if (nameError) {
        nameInput.focus();
    } else if (emailError || invalidEmail) {
        emailInput.focus();
    } else {
        frequencyInput.focus();
    }

    return;
}

/*Successful submission */
formMessage.textContent = `Thank you, ${name}! You're on the mailing list.`;
formMessage.classList.add("success");

/*nothing but pain exists in app.js*/

