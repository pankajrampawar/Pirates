const express = require('express');
const router = express.Router();
const craftController = require('../Controllers/craftController')

router.get('/getCrafts', craftController.getAllCrafts);
router.post('/addCraft', craftController.addCraft)

module.exports = router;