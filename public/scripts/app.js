
document.addEventListener("DOMContentLoaded", function () {
  const generateCartButton = document.getElementById("generate-cart");
  const checkoutButton = document.getElementById("checkout");
  const cartSummary = document.getElementById("cart-summary");
  let cart = JSON.parse(localStorage.getItem('cart'));

  if (cart) {
    displayExistingCartMessage();
  }
  else {
    displayEmptyCartMessage();
  }

  function displayEmptyCartMessage() {
    checkoutButton.disabled = true; 
    cartSummary.innerHTML = 'No hay productos en el carrito, presiona "Generar carrito" para obtener uno.';
  }
  function displayExistingCartMessage() {
    checkoutButton.disabled = false;
    cartSummary.innerHTML = 'Ya existe un carrito, puedes finalizar la compra.';
  }

  async function fetchRandomCart() {
    try {
      const response = await fetch('http://dummyjson.com/carts');
      const allCarts = await response.json();
      randomCart = allCarts.carts[Math.floor(Math.random() * allCarts.carts.length)];
      localStorage.setItem('cart', JSON.stringify(randomCart));
      displayExistingCartMessage();
    } catch (error) {
      console.error("Error al obtener carrito:", error);
    }
  }
  
  function goToCheckout() {
    window.location.href = 'checkout.html';
  }

  generateCartButton.addEventListener("click", fetchRandomCart);

  checkoutButton.addEventListener("click", goToCheckout);
});
  