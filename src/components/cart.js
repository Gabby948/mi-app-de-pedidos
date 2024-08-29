import React from 'react';

function Cart({ cart, totalPrice, confirmOrder }) {
  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
      <button onClick={confirmOrder}>Confirmar Pedido</button>
    </div>
  );
}

export default Cart;