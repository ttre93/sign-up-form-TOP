var password = document.getElementById("password")
var confirmPassword = document.getElementById("confirmPassword");
var createAccBtn = document.getElementById("createNewAcc");

createAccBtn.onclick = validatePassword;

function validatePassword(){
    if(password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity("Passwords Don't Match.");
    } else {
        confirmPassword.setCustomValidity('');
    }
}