// Defines routes for sweet-related API endpoints
const express = require('express');
const router = express.Router();
const sweetController = require('../controllers/sweetController');

// Route to add a new sweet
router.post('/', sweetController.addSweet);
// Route to remove a sweet by ID
router.delete('/:id', sweetController.removeSweet);
// Route to get all sweets
router.get('/', sweetController.getAllSweets);
// Route to purchase sweets
router.post('/purchase', sweetController.purchaseSweet);


module.exports = router;
