
document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('Registration successful!');
        // Redirect or update the view
        document.getElementById('auth').style.display = 'none';
        document.getElementById('posts').style.display = 'block';
    } else {
        alert('Registration failed.');
    }
});

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    if (response.ok) {
        alert('Login successful!');
        // Redirect or update the view
        document.getElementById('auth').style.display = 'none';
        document.getElementById('posts').style.display = 'block';
    } else {
        alert('Login failed.');
    }
});
