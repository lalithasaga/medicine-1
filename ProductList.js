/*import React, { useEffect, useState } from 'react';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://crudcrud.com/api/243f545cb6b2415b84ac6d95e8816fb6/products')
      .then(response => response.json())
      .then(data => {
        setProducts(prevProducts => [...prevProducts, ...data]);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const newProducts = [
      {
        _id: '1',
        medicineName: 'paracetmol',
        description: 'used to solve fever',
        price: 20,
        numOfProductsAdded: 0
      },
      {
        _id: '2',
        medicineName: 'Dolo',
        description: 'used to solve fever',
        price: 20,
        numOfProductsAdded: 0
      }
    ];

    setProducts(prevProducts => [...prevProducts, ...newProducts]);
  }, []);

  const handleAddToCart = (productId) => {
    const product = products.find(product => product._id === productId);

    if (product) {
      const updatedProducts = products.map(p => {
        if (p._id === productId) {
          return { ...p, numOfProductsAdded: p.numOfProductsAdded + 1 };
        }
        return p;
      });

      setProducts(updatedProducts);

      fetch('https://crudcrud.com/api/243f545cb6b2415b84ac6d95e8816fb6/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Item added to cart:', data);
        })
        .catch(error => {
          console.error('Error adding item to cart:', error);
        });
    }
  };

  const handleDeleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product._id !== productId);
    setProducts(updatedProducts);

    fetch(`https://crudcrud.com/api/243f545cb6b2415b84ac6d95e8816fb6/products/${productId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product deleted:', data);
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Num of Products Added</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.medicineName}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.numOfProductsAdded}</td>
                <td>
                  <button onClick={() => handleAddToCart(product._id)}>
                    Add to Cart
                  </button>
                </td>
                <td>
                  <button onClick={() => handleDeleteProduct(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList; */


import React, { useEffect, useState } from 'react';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newProduct, setNewProduct] = useState({
    medicineName: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    fetch('https://crudcrud.com/api/fbf823bf87354ad5a70d2c329cd86942')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, []);

  const handleAddToCart = (productId) => {
    // Add to cart logic
    const product = products.find(product => product._id === productId);

    if (product) {
      const updatedProducts = products.map(p => {
        if (p._id === productId) {
          return { ...p, numOfProductsAdded: (p.numOfProductsAdded || 0) + 1 };
        }
        return p;
      });

      setProducts(updatedProducts);

      fetch('https://crudcrud.com/api/fbf823bf87354ad5a70d2c329cd86942', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Item added to cart:', data);
        })
        .catch(error => {
          console.error('Error adding item to cart:', error);
        });
    }
  };

  const handleDeleteProduct = (productId) => {
    // Delete product logic
    const updatedProducts = products.filter(product => product._id !== productId);
    setProducts(updatedProducts);

    fetch(`https://crudcrud.com/api/fbf823bf87354ad5a70d2c329cd86942/${productId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product deleted:', data);
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  const handleInputChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation or additional checks here

    const productData = {
      ...newProduct,
      numOfProductsAdded: 0
    };

    fetch('https://crudcrud.com/api/fbf823bf87354ad5a70d2c329cd86942', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(response => response.json())
      .then(data => {
        setProducts(prevProducts => [...prevProducts, data]);
        setNewProduct({
          medicineName: '',
          description: '',
          price: ''
        });
        console.log('Product added:', data);
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Medicine Name:
              <input
                type="text"
                name="medicineName"
                value={newProduct.medicineName}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Price:
              <input
                type="text"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Add Product</button>
          </form>

          <table>
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Num of Products Added</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product.medicineName}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.numOfProductsAdded || 0}</td>
                  <td>
                    <button onClick={() => handleAddToCart(product._id)}>
                      Add to Cart
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteProduct(product._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductList;





