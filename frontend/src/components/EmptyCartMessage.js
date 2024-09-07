import React from 'react';

function EmptyCartMessage() {
  return (
    <div className="text-center">
      <i className="fas fa-shopping-cart fa-3x mb-3"></i>
      <p>No hay productos en el carrito. Presiona "Generar carrito" para añadir productos.</p>
    </div>
  );
}

export default EmptyCartMessage;
