const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../external-services/api-info');
const { findCartProducts } = require('../utils/utils');

router.post('/cart', async (req, res) => {
  try {
    const cartItems = req.body;
    const allProducts = await getAllProducts();
    const cartResult = findCartProducts(allProducts, cartItems);
    console.log('Detalles del carrito recibido:', cartResult);
    const canBeReceived = cartResult.every(item => !item.error && item.realStock >= item.quantity);
    return res.json({ canBeReceived });
  }
  catch (error) {
    console.error('Error al cotizar el despacho:', error);
    return res.status(500).json({ error: 'Error al cotizar el despacho' });
  }
  });
  


module.exports = router;
