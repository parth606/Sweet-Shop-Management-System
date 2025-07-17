const BASE_URL = 'http://localhost:3000/api/sweets';

export const getSweets = async (params = {}) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}?${query}`);
  return await res.json();
};


export const addSweet = async (sweet) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sweet),
  });
  return await res.json();
};

export const deleteSweet = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  return await res.json();
};

export const purchaseSweet = async (id, quantity) => {
  const res = await fetch(`${BASE_URL}/purchase`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, quantity }),
  });
  return await res.json();
};

export const restockSweet = async (id, quantity) => {
  const res = await fetch(`${BASE_URL}/${id}/restock`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ quantity }),
  });
  return await res.json();
};
