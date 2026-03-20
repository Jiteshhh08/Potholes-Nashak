document.addEventListener("DOMContentLoaded", () => {
const Form = document.querySelector('.form')
const nameInput = document.querySelector('.nameInput')
const emailInput = document.querySelector('.emailInput')
const passwordInput = document.querySelector('.passwordInput')
const submitButton = document.querySelector('.Submit')
const errorMsg = document.querySelector('.errorMsg')

const isSignupForm = Form.classList.contains('signUpForm')


Form.addEventListener('submit', (e) => {
    let Errors = []

    if (isSignupForm) {
        Errors = signUpFormErrors(nameInput.value, emailInput.value, passwordInput.value)
    }
    else {
        Errors = logInFormErrors(emailInput.value, passwordInput.value)
    }

    if (Errors.length > 0) {
        e.preventDefault();
        if (errorMsg) {
            errorMsg.textContent = Errors.join(' | ');
            errorMsg.style.display = "block";
        }
    }
})

function signUpFormErrors(name, email, password) {
    let Errors = []

    if (name === '' || name == null) {
        Errors.push('enter a valid Name')
    }
    if (!email.includes('@') || email === '') {
        Errors.push('invalid email address')
    }
    if (password.length < 8 || password == '') {
        Errors.push('password must be greater than 8 char')
    }
    return Errors;
}

function logInFormErrors(email, password) {
    let Errors = []

    if (!email.includes('@') || email === '') {
        Errors.push('invalid email address')
    }
    if (password.length < 8 || password == '') {
        Errors.push('password must be greater than 8 char')
    }
    return Errors;
}
})
const signUpForm = document.querySelector(".signUpForm");

if(signUpForm){

signUpForm.addEventListener("submit", function(e){

e.preventDefault();

const name = document.querySelector(".nameInput").value;
const email = document.querySelector(".emailInput").value;
const password = document.querySelector(".passwordInput").value;

const user = {
    name:name,
    email:email,
    password:password
};
document.querySelector(".signUpForm").reset();
localStorage.setItem("user", JSON.stringify(user));

alert("Signup successful! Please login.");

window.location.href = "../pages/logInUser.html";

});
}

const loginForm = document.querySelector(".logInForm");

if(loginForm){

loginForm.addEventListener("submit", function(e){

e.preventDefault();

const email = document.querySelector(".emailInput").value;
const password = document.querySelector(".passwordInput").value;

const storedUser = JSON.parse(localStorage.getItem("user"));

if(storedUser && email === storedUser.email && password === storedUser.password){

localStorage.setItem("loggedInUser", storedUser.name);

window.location.href = "./userDashboard.html";

}else{

alert("Invalid login");

}

});
}