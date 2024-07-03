import React, { useState } from 'react';

const BuyProducts = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Buy Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuyProducts;
