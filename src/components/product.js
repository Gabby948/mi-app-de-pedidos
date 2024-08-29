import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <p>{product.name} - ${product.price}</p>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
}

export default Product;