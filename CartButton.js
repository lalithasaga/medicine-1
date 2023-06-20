import React, { useEffect, useState } from 'react';
import './CartButton.css';

function CartButton() {
  const [numItems, setNumItems] = useState(0);
  const [showCartItems, setShowCartItems] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://crudcrud.com/api/fbf823bf87354ad5a70d2c329cd86942')
      .then(response => response.json())
      .then(data => {
        setCartItems(data);
        setNumItems(data.length);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const toggleCartItems = () => {
    setShowCartItems(prevState => !prevState);
  };

  return (
    <div>
      <button onClick={toggleCartItems}>Cart ({numItems})</button>
      {showCartItems && (
        <div className="cart-items">
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map(item => (
                <li key={item._id}>{item.medicineName}</li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default CartButton;
