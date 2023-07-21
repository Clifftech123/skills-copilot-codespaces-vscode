// Create web server


// Import modules

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { Comment } = require('../models/comment');

// GET /comments

router.get('/', async (req, res) => {
    const comments = await Comment.find();
    res.send(comments);
}

);

// POST /comments

router.post('/', [
    check('name').isLength({ min: 3 }),
    check('email').isEmail(),
    check('comment').isLength({ min: 5 })

], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({ error: errors.array() });
    }

    let comment = new Comment({
        name: req.body.name,
        email: req.body.email,
        comment: req.body.comment
    });

    comment = await comment.save();
    res.send(comment);
}
);