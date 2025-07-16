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
    const addRes = await request(app)
      .post('/api/sweets')
      .send({ name: 'Barfi', price: 15 });
    const sweetId = addRes.body.id;
    const deleteRes = await request(app)
      .delete(`/api/sweets/${sweetId}`);
    expect(deleteRes.statusCode).toBe(200);
  });

  // Test for viewing all sweets
  it('should return a list of all sweets', async () => {
    // Add a couple of sweets to ensure the list is not empty
    await request(app).post('/api/sweets').send({ name: 'Jalebi', price: 12 });
    await request(app).post('/api/sweets').send({ name: 'Rasgulla', price: 18 });

    // Request the list of sweets
    const res = await request(app).get('/api/sweets');

    // Expect a successful response
    expect(res.statusCode).toBe(200);
    // Expect the response to be an array with at least 2 sweets
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(2);
    // Optionally, check that the sweets added are present in the list
    // const names = res.body.map(sweet => sweet.name);
    // expect(names).toEqual(expect.arrayContaining(['Jalebi', 'Rasgulla']));
  });

});
