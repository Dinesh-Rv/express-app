const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/create', userController.createUser);
router.get('/get', userController.getAllUsers);

module.exports = router;