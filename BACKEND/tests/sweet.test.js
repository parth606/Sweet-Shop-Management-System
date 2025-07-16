// Test suite for Sweet API endpoints
const request = require('supertest');
const express = require('express');
const sweetRoutes = require('../routes/sweets'); // ✅ ROUTES, not controller

const app = express();
app.use(express.json());
app.use('/api/sweets', sweetRoutes); // ✅ Must be a router

describe('Sweet API', () => {
  // Test for adding a sweet
  it('should add a sweet', async () => {
    const res = await request(app)
      .post('/api/sweets')
      .send({ name: 'Ladoo', price: 10 });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Ladoo');
  });

});
