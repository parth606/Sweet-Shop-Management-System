// Main entry point for the Sweet Shop backend API
const express = require('express');
const cors = require('cors');
const app = express();
const sweetRoutes = require('./routes/sweets');

// Enable CORS for all routes
app.use(cors());
// Parse incoming JSON requests
app.use(express.json());

// Mount sweet-related routes
app.use('/api/sweets', sweetRoutes);

const PORT = 3000;
// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
