import React, { useState } from 'react';
import CartView from './components/CartView';
import Checkout from './components/Checkout';
import './styles.css';

function App() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || null);
  const [view, setView] = useState('cart'); // 'cart' or 'checkout'

  const fetchRandomCart = async () => {
    try {
      const response = await fetch('http://dummyjson.com/carts');
      const allCarts = await response.json();
      const randomCart = allCarts.carts[Math.floor(Math.random() * allCarts.carts.length)];
      localStorage.setItem('cart', JSON.stringify(randomCart));
      setCart(randomCart);
    } catch (error) {
      console.error("Error al obtener carrito:", error);
    }
  };

  const clearCart = () => {
    localStorage.removeItem('cart');
    setCart(null);
    setView('cart');
  };

  const goToCheckout = () => {
    setView('checkout');
  };

  return (
    <div className="container mt-5">
      {view === 'cart' ? (
        <CartView 
          cart={cart} 
          fetchRandomCart={fetchRandomCart} 
          goToCheckout={goToCheckout} 
        />
      ) : (
        <Checkout cart={cart} clearCart={clearCart} goBack={() => setView('cart')} />
      )}
    </div>
  );
}

export default App;
