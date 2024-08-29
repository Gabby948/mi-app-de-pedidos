import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './App.css';  
import App from './App'; 

// Obtén el elemento con id "root" del HTML
const rootElement = document.getElementById('root');

// Crea el root de React y renderiza el componente App dentro de este root
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />  {/* Renderiza el componente principal */}
  </React.StrictMode>
);