import React from 'react';

function SweetTable({ sweets, onDelete, onPurchaseClick, onRestockClick }) {
  return (
    <table className="table table-striped table-hover table-bordered align-middle">
      <thead className="table-primary">
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sweets.map((sweet) => (
          <tr key={sweet.id}>
            <td>{sweet.name}</td>
            <td>{sweet.category}</td>
            <td>${sweet.price.toFixed(2)}</td>
            <td>
              {sweet.stock <= 5 ? (
                <span className="badge bg-danger">{sweet.stock} (Low)</span>
              ) : (
                <span className="badge bg-success">{sweet.stock}</span>
              )}
            </td>
            <td>
              <button className="btn btn-sm btn-success me-2" onClick={() => onPurchaseClick(sweet)}>
                <i className="bi bi-cart"></i> Purchase
              </button>
              <button className="btn btn-sm btn-warning me-2" onClick={() => onRestockClick(sweet)}>
                <i className="bi bi-plus-circle"></i> Restock
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(sweet.id)}>
                <i className="bi bi-trash"></i> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SweetTable;
