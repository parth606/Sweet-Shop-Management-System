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



module.exports = {
  addSweet,
 
};
