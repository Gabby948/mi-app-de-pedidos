import React from 'react';
import Product from './Product.js';

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Productos Disponibles</h2>
      {products.map(product => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;