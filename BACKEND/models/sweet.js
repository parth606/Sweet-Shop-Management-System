// Model for managing sweets in memory
let sweets = [];
// Counter to assign unique IDs to each sweet
let idCounter = 1;

// Adds a new sweet to the collection
function addSweet(name, price) {
  const sweet = { id: idCounter++, name, price };
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

module.exports = {
  addSweet,
  removeSweet,
  getAllSweets,
};
