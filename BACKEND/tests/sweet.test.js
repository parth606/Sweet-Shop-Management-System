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

  // Test for removing a sweet
  it('should remove a sweet', async () => {
    // First, add a sweet to ensure there is one to delete
    const addRes = await request(app)
      .post('/api/sweets')
      .send({ name: 'Barfi', price: 15 });
    const sweetId = addRes.body.id;

    // Now, remove the sweet by ID
    const deleteRes = await request(app)
      .delete(`/api/sweets/${sweetId}`);

    // Expect a successful deletion
    expect(deleteRes.statusCode).toBe(200);
    // Optionally, check the response body or message
    // expect(deleteRes.body.message).toBe('Sweet removed');
  });

});
