// Controller for handling sweet-related API requests
const Sweet = require('../models/sweet');

// Handles POST request to add a new sweet
exports.addSweet = (req, res) => {
  try {
    const { name, price, category, stock } = req.body;
    const sweet = Sweet.addSweet(name, price, category, stock);
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

// Handles GET request to list all or search sweets
exports.getAllSweets = (req, res) => {
  try {
    const { name, category, minPrice, maxPrice } = req.query;
    let result;
    if (name || category || minPrice !== undefined || maxPrice !== undefined) {
      result = Sweet.searchSweets({ name, category, minPrice, maxPrice });
    } else {
      result = Sweet.getAllSweets();
    }
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Handles POST request to purchase sweets
exports.purchaseSweet = (req, res) => {
  try {
    const { id, quantity } = req.body;
    const remainingStock = Sweet.purchaseSweet(id, quantity);
    res.status(200).json({ remainingStock });
  } catch (err) {
    if (err.message === 'Not enough stock') {
      res.status(400).json({ error: err.message });
    } else if (err.message === 'Sweet not found') {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
};

// Handles PATCH request to restock sweets
exports.restockSweet = (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { quantity } = req.body;
    const stock = Sweet.restockSweet(id, quantity);
    res.status(200).json({ stock });
  } catch (err) {
    if (err.message === 'Sweet not found') {
      res.status(404).json({ error: err.message });
    } else {
      res.status(500).json({ error: err.message });
    }
  }
};

