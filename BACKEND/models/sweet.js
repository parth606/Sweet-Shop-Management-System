// Model for managing sweets in memory
let sweets = [];
// Counter to assign unique IDs to each sweet
let idCounter = 1;

// Adds a new sweet to the collection
function addSweet(name, price, category, stock = 0) {
  const sweet = { id: idCounter++, name, price, category, stock };
  sweets.push(sweet);
  return sweet;
}

// Removes a sweet by ID
function removeSweet(id) {
  const index = sweets.findIndex(sweet => sweet.id === id);
  if (index !== -1) {
    sweets.splice(index, 1);
    return true;
  }
  return false;
}

// Returns all sweets
function getAllSweets() {
  return sweets;
}

// Search sweets by name, category, and price range
function searchSweets({ name, category, minPrice, maxPrice }) {
  return sweets.filter(sweet => {
    let match = true;
    if (name) match = match && sweet.name.toLowerCase().includes(name.toLowerCase());
    if (category) match = match && sweet.category === category;
    if (minPrice !== undefined) match = match && sweet.price >= Number(minPrice);
    if (maxPrice !== undefined) match = match && sweet.price <= Number(maxPrice);
    return match;
  });
}

// Purchase a sweet by ID and quantity
function purchaseSweet(id, quantity) {
  const sweet = sweets.find(s => s.id === id);
  if (!sweet) throw new Error('Sweet not found');
  if (sweet.stock === undefined) sweet.stock = 0;
  if (sweet.stock < quantity) throw new Error('Not enough stock');
  sweet.stock -= quantity;
  return sweet.stock;
}

module.exports = {
  addSweet,
  removeSweet,
  getAllSweets,
  searchSweets,
  purchaseSweet,
};
