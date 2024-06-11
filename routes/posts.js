
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Post = require('../models/Post');

const posts = [];

router.post('/create', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secretkey');
    const post = new Post(req.body.title, req.body.content, decoded.username);
    posts.push(post);
    res.json({ message: 'Post created!' });
});

router.get('/all', (req, res) => {
    res.json(posts);
});

module.exports = router;
