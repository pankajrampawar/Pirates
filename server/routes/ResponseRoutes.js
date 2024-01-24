const express = require('express');
const router = express.Router();
const responseController = require('../controllers/responseController');

router.get('/getResponses', responseController.getAllResponses);
router.post('/addResponse', responseController.addResponse)

module.exports = router;