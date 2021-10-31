let form = document.querySelector('form')
form.addEventListener("submit", function (e) {
    e.preventDefault();
})


let eye = document.getElementById('password_button-check1')
eye.addEventListener("click", function () {
    let password = document.getElementById('input__password1')
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    eye.classList.toggle('hide')
})

let eye2 = document.getElementById('password_button-check2')
eye2.addEventListener("click", function () {
    let password = document.getElementById('input__password2')
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    eye2.classList.toggle('hide')
})

 
function validateForm() {
    globalState.validateEmail()
    globalState.validatePassword()
    globalState.confirmPassword()

}