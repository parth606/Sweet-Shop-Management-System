// Model for managing sweets in memory
let sweets = [];
// Counter to assign unique IDs to each sweet
let idCounter = 1;

// Adds a new sweet to the collection
function addSweet(name, price, category) {
  const sweet = { id: idCounter++, name, price, category };
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

module.exports = {
  addSweet,
  removeSweet,
  getAllSweets,
  searchSweets,
};
