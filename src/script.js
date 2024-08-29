document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Placeholder for actual authentication logic
    if (username === 'user' && password === 'pass') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
        
        // Redirect to home page after successful login
        window.location.href = 'home.html';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password!';
    }
});
