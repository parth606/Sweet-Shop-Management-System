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

// Handles DELETE request to remove a sweet by ID
exports.removeSweet = (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const removed = Sweet.removeSweet(id);
    if (removed) {
      res.status(200).json({ message: 'Sweet removed' });
    } else {
      res.status(404).json({ error: 'Sweet not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Handles GET request to list all sweets
exports.getAllSweets = (req, res) => {
  try {
    const allSweets = Sweet.getAllSweets();
    res.status(200).json(allSweets);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

