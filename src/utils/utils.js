

function findCartProducts(allProducts, cartItems) {
  return cartResult = cartItems.map((item) => {
    const product = allProducts.find((product) => product.id.toString() === item.productId);
    if (!product) {
      return {
        ...item,
        error: 'Producto no encontrado'
      };
    }  
    const { title, stock, rating } = product;
    const realStock = Math.floor(stock / rating);
    const totalDiscount = (item.quantity <= realStock) ? (item.discount * item.quantity * item.price) : (item.discount * realStock * item.price);
    const itemResult = {
      productId: item.productId,
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