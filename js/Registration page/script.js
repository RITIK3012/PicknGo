// Handle Registration Form Submission
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Check if all fields are filled
    if (!fullName || !email || !password || !confirmPassword || !dob || !gender) {
        alert('Please fill in all the fields.');
        return;
    }

    // Success
    alert(`Registration Successful!\n\nName: ${fullName}\nEmail: ${email}\nGender: ${gender}\nDate of Birth: ${dob}`);
});
