// Defines routes for sweet-related API endpoints
const express = require('express');
const router = express.Router();
const sweetController = require('../controllers/sweetController');

// Route to add a new sweet
router.post('/', sweetController.addSweet);


module.exports = router;
