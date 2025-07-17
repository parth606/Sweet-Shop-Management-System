import React, { useState } from 'react';

function SearchForm({ onSearch }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({
      name: name.trim() || undefined,
      category: category.trim() || undefined,
      minPrice: minPrice || undefined,
      maxPrice: maxPrice || undefined,
    });
  };

  return (
    <form
      className="row g-2 p-3 bg-white rounded shadow-sm border mb-4"
      style={{ boxShadow: '0 0 12px rgba(0,0,0,0.05)' }}
      onSubmit={handleSubmit}
    >
      <div className="col-md-3">
        <label className="form-label mb-0 small text-muted">Name</label>
        <input
          className="form-control form-control-sm"
          placeholder="e.g. Rasgulla"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="col-md-3">
        <label className="form-label mb-0 small text-muted">Category</label>
        <input
          className="form-control form-control-sm"
          placeholder="e.g. Milk, Dry Fruit"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div className="col-md-2">
        <label className="form-label mb-0 small text-muted">Min Price</label>
        <input
          type="number"
          className="form-control form-control-sm"
          placeholder="0"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>

      <div className="col-md-2">
        <label className="form-label mb-0 small text-muted">Max Price</label>
        <input
          type="number"
          className="form-control form-control-sm"
          placeholder="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div className="col-md-2 d-flex align-items-end">
        <button className="btn btn-outline-primary btn-sm w-100" type="submit">
          🔍 Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
