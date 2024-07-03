import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SellProducts from './pages/sellproducts';
import BuyProducts from './pages/Buyproducts';
import Cart from './pages/cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Sell Products</Link>
        <Link to="/buy">Buy Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<SellProducts />} />
        <Route path="/buy" element={<BuyProducts products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </Router>
  );
};

export default App;

