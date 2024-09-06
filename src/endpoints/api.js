const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../external-services/api-info');
const { findCartProducts } = require('../utils/utils');

router.post('/cart', async (req, res) => {
    const cartItems = req.body;
    const allProducts = await getAllProducts();
    const cartResult = findCartProducts(allProducts, cartItems);
    console.log('Detalles del carrito recibido:', cartResult);
    const canBeReceived = cartResult.every(item => !item.error && item.realStock >= item.quantity);
    return res.json({ canBeReceived });
  });
  


module.exports = router;
