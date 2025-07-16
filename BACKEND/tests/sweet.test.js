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
    await request(app).post('/api/sweets').send({ name: 'Jalebi', price: 12 });
    await request(app).post('/api/sweets').send({ name: 'Rasgulla', price: 18 });
    const res = await request(app).get('/api/sweets');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThanOrEqual(2);
  });

  // Test for searching sweets by name, category, or price range
  it('should search for sweets by name, category, or price range', async () => {
    // Add sweets with different names, categories, and prices
    await request(app).post('/api/sweets').send({ name: 'Kaju Katli', price: 25, category: 'Dry Fruit' });
    await request(app).post('/api/sweets').send({ name: 'Gulab Jamun', price: 15, category: 'Milk' });
    await request(app).post('/api/sweets').send({ name: 'Soan Papdi', price: 10, category: 'Gram Flour' });

    // Search by name
    let res = await request(app).get('/api/sweets').query({ name: 'Kaju' });
    expect(res.statusCode).toBe(200);
    expect(res.body.some(sweet => sweet.name.includes('Kaju'))).toBe(true);

    // Search by category
    res = await request(app).get('/api/sweets').query({ category: 'Milk' });
    expect(res.statusCode).toBe(200);
    expect(res.body.some(sweet => sweet.category === 'Milk')).toBe(true);

    // Search by price range
    res = await request(app).get('/api/sweets').query({ minPrice: 10, maxPrice: 15 });
    expect(res.statusCode).toBe(200);
    expect(res.body.every(sweet => sweet.price >= 10 && sweet.price <= 15)).toBe(true);
  });

});
