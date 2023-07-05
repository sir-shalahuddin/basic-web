function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var errorDiv = document.getElementById("error-message");

  errorDiv.innerHTML = "";

  if (email === "" || password === "") {
    errorDiv.innerHTML = "Both fields are required.";
    return false;
  }

  if (!validateEmail(email)) {
    errorDiv.innerHTML = "Please enter a valid email address.";
    return false;
  }

  if (password.length < 6) {
    errorDiv.innerHTML = "Password should be at least 6 characters long.";
    return false;
  }

  // Common rules validation
  if (password.toLowerCase() === password) {
    errorDiv.innerHTML = "Password should contain at least one uppercase letter.";
    return false;
  }

  if (password.toUpperCase() === password) {
    errorDiv.innerHTML = "Password should contain at least one lowercase letter.";
    return false;
  }

  if (!/\d/.test(password)) {
    errorDiv.innerHTML = "Password should contain at least one digit.";
    return false;
  }

  if (!/[!@#$%^&*]/.test(password)) {
    errorDiv.innerHTML = "Password should contain at least one special character (!@#$%^&*).";
    return false;
  }

  // If all validations pass, the form is valid
  alert("Form is valid!");
  return true;
}

function validateEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const form = document.getElementById('myForm');
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('focus', () => {
    form.classList.add('focused');
  });

  input.addEventListener('blur', () => {
    form.classList.remove('focused');
  });
});