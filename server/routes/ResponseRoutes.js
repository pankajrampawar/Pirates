const express = require('express');
const router = express.Router();
const responseController = require('../Controllers/responseController')

router.get('/getResponses', responseController.getAllCrafts);
router.post('/addResponse', responseController.addCraft)

module.exports = router;