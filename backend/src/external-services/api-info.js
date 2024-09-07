const axios = require('axios');

async function getAllProducts() {
    let currentPage = 1;
    let allProducts = [];
    const pageSize = 10;
  
    try {
      while (true) {
        const response = await axios.get(`https://dummyjson.com/products?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
        const products = response.data.products;
  
        allProducts = [...allProducts, ...products];
  
        if (products.length < pageSize) {
          break;
        }

        currentPage++;
      }
    } catch (error) {
      console.error('Error al obtener productos de dummyjson:', error.message);
      return [];
    }
    return allProducts;
}

module.exports = { getAllProducts };

