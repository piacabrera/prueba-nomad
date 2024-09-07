// src/components/Checkout.js
import React, { useState } from 'react';

function Checkout({ cart, clearCart, goBack }) {
  const [shippingCost, setShippingCost] = useState('-');
  const [total, setTotal] = useState(cart ? cart.total : 0);

  const quoteShipping = async () => {
    setShippingCost('Calculando envío...');
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart.products),
      });
      const result = await response.json();
      if (result.canBeReceived) {
        setShippingCost('Envío Nomad ⚡ $3670');
        setTotal(cart.total + 3670);
      } else {
        setShippingCost('No hay envíos disponibles :(');
      }
    } catch (error) {
      setShippingCost('Error al cotizar el despacho.');
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">Resumen de tu Carrito</h2>
      {cart ? (
        <>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Carro ({cart.products.length} productos)</h5>
              <p className="text-muted">Vendido por <strong>Nomad</strong></p>
              <div>
                {cart.products.map((product) => (
                  <div className="d-flex align-items-center mb-3" key={product.id}>
                    <div className="me-3">
                      <img src={product.thumbnail} alt={product.title} className="img-fluid rounded" style={{ width: '100px' }} />
                    </div>
                    <div className="flex-grow-1">
                      <h6>{product.title}</h6>
                      <p class="mb-0 text-muted">Precio por unidad: ${product.price.toFixed(2)}</p>
                      <p class="mb-0 text-muted">Total con descuento: ${product.discountedTotal.toFixed(2)}</p>
                    </div>
                    <div class="text-end">
                      <p class="mb-0">${product.discountedTotal.toFixed(2)}</p>
                      <div class="btn-group mt-2">
                        <button class="btn btn-outline-secondary btn-sm">-</button>
                        <button class="btn btn-outline-secondary btn-sm">{product.quantity}</button>
                        <button class="btn btn-outline-secondary btn-sm">+</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between">
                <span>Productos:</span>
                <span>${cart.total.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Costo de despacho:</span>
                <span>{shippingCost}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <strong>Total:</strong>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <button onClick={quoteShipping} className="btn btn-info btn-lg m-2">Cotizar despacho</button>
            <button onClick={clearCart} className="btn btn-danger btn-lg m-2">Limpiar carrito</button>
            <button onClick={goBack} className="btn btn-secondary btn-lg">Volver</button>
          </div>
        </>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
}

export default Checkout;
