import React, { useState } from 'react';

function PurchaseModal({ sweet, onPurchase, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const handlePurchase = () => {
    if (Number(quantity) > sweet.stock) {
      setError(`Cannot purchase more than available stock (${sweet.stock}).`);
      return;
    }
    setError('');
    onPurchase(sweet.id, Number(quantity));
    onClose();
  };

  return (
    <div className="modal fade show" tabIndex="-1" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border border-1 shadow-sm" style={{ minWidth: 350 }}>
          <div className="modal-header">
            <h5 className="modal-title">Purchase {sweet.name}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-2 text-muted">Available stock: <span className="fw-bold">{sweet.stock}</span></div>
            <label className="form-label">Quantity</label>
            <input
              type="number"
              min="1"
              max={sweet.stock}
              className="form-control"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
            {error && (
              <div className="alert alert-danger mt-2" role="alert">
                {error}
              </div>
            )}
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={handlePurchase}>
              Purchase
            </button>
            <button className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseModal;
