import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Table.css';

function Table({ handleAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://crudcrud.com/api/fbf823bf87354ad5a70d2c329cd86942')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (productId) => {
    handleAddToCart(productId);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Medicine Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.medicineName}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                <button onClick={() => addToCart(product._id)}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/products">View Products</Link>
    </div>
  );
}

export default Table;
