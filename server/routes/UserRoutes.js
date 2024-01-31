const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post("/signup", userController.createNewUser);
router.post('/login', userController.userLogin)

module.exports = router
