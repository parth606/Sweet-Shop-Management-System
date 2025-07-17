const express = require('express');
const cors = require('cors'); 
const sweetsRoutes = require('./routes/sweets'); // ✅ adjust path if needed

const app = express();
const PORT = 3000;

pp.use(cors({
  origin: 'http://localhost:5174',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());
app.use('/api/sweets', sweetsRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
