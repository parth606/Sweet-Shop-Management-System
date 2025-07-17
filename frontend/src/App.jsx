import React from 'react';
import SweetForm from './components/SweetForm';
import SweetTable from './components/SweetTable';
import PurchaseModal from './components/PurchaseModal';
import SearchForm from './components/SearchForm';

import {
  getSweets,
  addSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet,
} from './api/sweets';
import { useEffect, useState } from 'react';
import './App.css'; // ✅ Import the CSS

function App() {
  const [sweets, setSweets] = useState([]);
  const [selectedSweet, setSelectedSweet] = useState(null);
  const [showPurchase, setShowPurchase] = useState(false);

  const loadSweets = async () => {
    const data = await getSweets();
    setSweets(data);
  };

  useEffect(() => {
    loadSweets();
  }, []);

  const handleAdd = async (sweet) => {
    await addSweet(sweet);
    loadSweets();
  };

  const handleDelete = async (id) => {
    await deleteSweet(id);
    loadSweets();
  };

  const handlePurchase = async (id, quantity) => {
    await purchaseSweet(id, quantity);
    loadSweets();
  };
  
  const handleSearch = async (queryParams) => {
  const data = await getSweets(queryParams);
  setSweets(data);
};


  const handleRestock = async (id, quantity) => {
    await restockSweet(id, quantity);
    loadSweets();
  };
 


  return (
    <div className="container py-5">
      <div className="sweet-box mx-auto">
        <h1 className="sweet-title "> Sweet Shop Management System</h1>
        <SearchForm onSearch={handleSearch} />
        <SweetForm onAdd={handleAdd} />
      
        <SweetTable
          sweets={sweets}
          onDelete={handleDelete}
          onPurchaseClick={(sweet) => {
            setSelectedSweet(sweet);
            setShowPurchase(true);
          }}
          onRestockClick={(sweet) => {
            const qty = prompt(`Enter restock quantity for ${sweet.name}`);
            if (qty) handleRestock(sweet.id, Number(qty));
          }}
        />
      </div>

      {showPurchase && selectedSweet && (
        <PurchaseModal
          sweet={selectedSweet}
          onPurchase={handlePurchase}
          onClose={() => setShowPurchase(false)}
        />
      )}
    </div>
  );
}

export default App;
