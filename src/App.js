import React from 'react';
import './App.css';  
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  
  const [cart, setCart] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);

  // Lista de productos
  const products = [
    { id: 1, name: 'Producto A', price: 10 },
    { id: 2, name: 'Producto B', price: 15 },
   
  ];

 
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setTotalPrice(totalPrice + product.price);
  };


  const confirmOrder = () => {
    if (cart.length === 0) {
      alert('El carrito está vacío.');
    } else {
      alert('Pedido confirmado. Total: $' + totalPrice.toFixed(2));
      setCart([]);
      setTotalPrice(0);
    }
  };

  return (
    <div className="App">
      <Header />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} totalPrice={totalPrice} confirmOrder={confirmOrder} />
    </div>
  );
}

export default App;