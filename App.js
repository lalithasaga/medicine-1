import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Table from './Components/Table';
import ProductList from './Components/ProductList';
import CartButton from './Components/CartButton';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://crudcrud.com/api/fbf823bf87354ad5a70d2c329cd86942/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddToCart = (productId) => {
    // Add to cart logic
    const product = products.find(product => product._id === productId);

    if (product) {
      const updatedCartItems = [...cartItems, product];
      setCartItems(updatedCartItems);
    }
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Table handleAddToCart={handleAddToCart} />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
        <CartButton cartItems={cartItems} />
      </div>
    </Router>
  );
}

export default App;
