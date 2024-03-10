function validateForm() {
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    // Check username length
    if (usernameInput.value.length < 6) {
        alert('Username must be at least 6 characters.');
        return false;
    }

    // Check password length
    if (passwordInput.value.length < 8) {
        alert('Password must be at least 8 characters.');
        return false;
    }

    // If all validations pass, allow the form to be submitted
    return true;
}

const submitEl = document.getElementById("submitButton");
submitEl.addEventListener("click", () =>{ 
    if(validateForm()){
        alert("Login Successful");
    }
    else{
        alert("Login attempt Failed");
    }
});