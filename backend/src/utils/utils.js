

function findCartProducts(allProducts, cartItems) {
  return cartResult = cartItems.map((item) => {
    const product = allProducts.find((product) => product.id === item.id);
    if (!product) {
      return {
        ...item,
        error: 'Producto no encontrado'
      };
    }  
    const { title, stock, rating } = product;
    const realStock = Math.floor(stock / rating);
    const totalDiscount = parseFloat((item.quantity <= realStock ? item.discountPercentage/100 * item.quantity * item.price : item.discountPercentage/100 * realStock * item.price).toFixed(2));
    const itemResult = {
      productId: item.id,
      title,
      price: item.price,
      totalDiscount: totalDiscount,
      quantity: item.quantity,
      stock,
      rating,
      realStock,
    };
    return itemResult;
  });
}

module.exports = { findCartProducts };
