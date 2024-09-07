import React from 'react';
import EmptyCartMessage from './EmptyCartMessage';

function CartView({ cart, fetchRandomCart, goToCheckout }) {
  return (
    <div className="text-center">
      <h1 className="mb-4">Bienvenido a E-commerce Nomad</h1>
      <button 
        onClick={fetchRandomCart} 
        className="btn btn-primary btn-lg m-3"
      >
        Generar carrito
      </button>
      <button 
        onClick={goToCheckout} 
        className="btn btn-secondary btn-lg m-3" 
        disabled={!cart}
      >
        Finalizar compra
      </button>
      <div className="mt-4">
        {cart ? (
          <p>Ya existe un carrito, puedes finalizar la compra.</p>
        ) : (
          <EmptyCartMessage />
        )}
      </div>
    </div>
  );
}

export default CartView;
