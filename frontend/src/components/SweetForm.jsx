import React, { useState } from 'react';

function SweetForm({ onAdd }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, price: Number(price), category, stock: Number(stock) });
    setName('');
    setPrice('');
    setCategory('');
    setStock('');
  };

  return (
    <form className="row g-3 mb-4" onSubmit={handleSubmit}>
      <div className="col-md-3">
        <label className="form-label">Name</label>
        <input
          className="form-control"
          placeholder="Sweet Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div className="col-md-3">
        <label className="form-label">Category</label>
        <input
          className="form-control"
          placeholder="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
      </div>
      <div className="col-md-2">
        <label className="form-label">Price</label>
        <input
          className="form-control"
          placeholder="Price"
          type="number"
          min="0"
          step="0.01"
          value={price}
          onChange={e => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="col-md-2">
        <label className="form-label">Stock</label>
        <input
          className="form-control"
          placeholder="Stock"
          type="number"
          min="0"
          value={stock}
          onChange={e => setStock(e.target.value)}
          required
        />
      </div>
      <div className="col-md-2 d-flex align-items-end">
        <button className="btn btn-primary w-100" type="submit">
          Add Sweet
        </button>
      </div>
    </form>
  );
}

export default SweetForm;
