
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Comment = require('../models/Comment');

const comments = [];

router.post('/create', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secretkey');
    const comment = new Comment(req.body.postId, decoded.username, req.body.content);
    comments.push(comment);
    res.json({ message: 'Comment added!' });
});

router.get('/post/:postId', (req, res) => {
    const postComments = comments.filter(comment => comment.postId == req.params.postId);
    res.json(postComments);
});

module.exports = router;
