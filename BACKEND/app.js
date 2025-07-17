// Main entry point for the Sweet Shop backend API
const express = require('express');
const cors = require('cors');
const sweetsRouter = require('./routes/sweets');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/sweets', sweetsRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
