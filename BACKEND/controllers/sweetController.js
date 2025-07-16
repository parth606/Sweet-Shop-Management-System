// Controller for handling sweet-related API requests
const Sweet = require('../models/sweet');

// Handles POST request to add a new sweet
exports.addSweet = (req, res) => {
  try {
    const { name, price } = req.body;
    const sweet = Sweet.addSweet(name, price);
    res.json(sweet);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

