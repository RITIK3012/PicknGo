// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Sign-In Successful!\nEmail: ${email}`);
    } else {
        alert('Please fill in all fields.');
    }
});

// Handle "Create a New Account" Button
document.getElementById('createAccountBtn').addEventListener('click', function () {
    alert('Redirecting to account creation page...');
    // You can redirect to a new page or show a modal here
});
