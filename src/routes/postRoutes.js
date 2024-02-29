const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.post('/post', postController.createPost);

module.exports = router;
