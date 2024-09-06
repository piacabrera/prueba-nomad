
  document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem('cart'));
    const cartSummary = document.getElementById('cart-summary');
    const quoteShippingButton = document.getElementById('quote-shipping');
    const clearCartButton = document.getElementById('clear-cart');
    const backButton = document.getElementById('back');
    const shippingResult = document.getElementById('shipping-result');
    const totalProducts = document.getElementById('total-products');
    const cartTotal = document.getElementById('cart-total');

    if (cart) {
      displayCartSummary(cart);
    } else {
      displayEmptyCartMessage();
    }

    function displayEmptyCartMessage() {
      cartSummary.innerHTML = '<p>No hay productos en el carrito.</p>';
    }
    function displayCartSummary(cart) {
      cartSummary.innerHTML = `
        ${cart.products.map((product) => `
          <div class="d-flex align-items-center mb-3">
            <div class="me-3">
              <img src="${product.thumbnail}" alt="${product.title}" class="img-fluid rounded" style="width: 100px; margin-right: 20px;">
            </div>
            <div class="flex-grow-1">
              <h6>${product.title}</h6>
              <p class="mb-0 text-muted">Precio: $${product.price.toFixed(2)}</p>
              <p class="mb-0 text-muted">Cantidad: ${product.quantity}</p>
              <p class="mb-0 text-muted">Total con descuento: $${product.discountedTotal.toFixed(2)}</p>
            </div>
            <div class="text-end">
              <p class="mb-0">$${product.discountedTotal.toFixed(2)}</p>
              <div class="btn-group mt-2">
                <button class="btn btn-outline-secondary btn-sm">-</button>
                <button class="btn btn-outline-secondary btn-sm">${product.quantity}</button>
                <button class="btn btn-outline-secondary btn-sm">+</button>
              </div>
            </div>
          </div>
        `).join('')}`;
    }
    totalProducts.textContent = `$${cart.total.toFixed(2)}`;
    cartTotal.textContent = `$${cart.total.toFixed(2)}`;


    quoteShippingButton.addEventListener("click", async () => {
      shippingResult.textContent = 'Cauculando envío...';
      try {
        const response = await fetch("/api/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cart.products),
        });
        const result = await response.json();
        console.log(result);
        if (result.canBeReceived) {
          shippingResult.textContent = "Envío Nomad ⚡ $3670";
          cartTotal.textContent = `$${(cart.total + 3670).toFixed(2)}`;
        } else {
          shippingResult.textContent = "No hay envíos disponibles :(";
        }
      } catch (error) {
        shippingResult.textContent = "Error al cotizar el despacho.";
      }
    });
  

    clearCartButton.addEventListener("click", () => {
      localStorage.removeItem('cart');
      shippingResult.textContent = "";
      window.location.href = 'index.html';
  
    });
  
    backButton.addEventListener("click", () => {
      window.location.href = 'index.html';
    });

  });
