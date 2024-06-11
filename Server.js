
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = []; // This is a placeholder. You should use a database in a real app.

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    users.push({ username, password });
    res.status(200).json({ message: 'Registration successful' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
