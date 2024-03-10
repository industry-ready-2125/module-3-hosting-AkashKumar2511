<script>
    function validateForm() {
        var usernameInput = document.getElementById('uname');
        var passwordInput = document.getElementById('pass');
        var confirmPasswordInput = document.getElementById('conformpass');
        var emailInput = document.getElementById('email');
        var mobileNumberInput = document.getElementById('phone');

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

        // Check if password and confirm password match
        if (passwordInput.value !== confirmPasswordInput.value) {
            alert('Password and Confirm Password do not match.');
            return false;
        }

        // Check email format
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            alert('Invalid email format.');
            return false;
        }

        // Check mobile number format
        var mobileNumberRegex = /^[6-9]\d{9}$/;
        if (!mobileNumberRegex.test(mobileNumberInput.value)) {
            alert('Invalid mobile number format. It should be 10 digits starting from 6-9.');
            return false;
        }

        // If all validations pass, allow the form to be submitted
        return true;
    }
    </script>