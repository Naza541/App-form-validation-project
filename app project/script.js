  const form = document.querySelector('#validationForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const isValid = true;

    if (!isValid)
        document.getElementById('validationForm').textContent = 'Form submission failed. Please correct the errors and try again.';
    else
        document.getElementById('validationForm').textContent = 'Form submitted successfully!';
  });

    
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

username.addEventListener('focus',() => {
    document.getElementById('usernameError').textContent = '';

    if (username.value.trim() === '') {
      document.getElementById('usernameError').textContent = '*Username is required.';
    } else if (username.value.trim().length < 6) {
      document.getElementById('usernameError').textContent = '*Username must be at least 6 characters long.';
      isValid = false;
    }

});

email.addEventListener('focus',() => {
    document.getElementById('emailError').textContent = '';
    if (email.value.trim() === '') {
      document.getElementById('emailError').textContent = '*Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      document.getElementById('emailError').textContent = '*Email is invalid. It must contain "@" and ".com"';
      isValid = false;
    }

});

password.addEventListener('focus',() => {
    document.getElementById('passwordError').textContent = '';
    if (password.value.trim() === '') {
      document.getElementById('passwordError').textContent = '*Password is required.'; 
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password.value)) {
      document.getElementById('passwordError').textContent = '*Password is invalid. It must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters.';
      isValid = false;
    }
});

username.addEventListener('input',() => {
      document.getElementById('usernameError').textContent = '';

    });

email.addEventListener('input',() => {
        document.getElementById('emailError').textContent = '';
    });

password.addEventListener('input',() => {
        document.getElementById('passwordError').textContent = '';
    });


