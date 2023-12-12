import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BasketSliderProvider from './context/BasketSliderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BasketSliderProvider>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BasketSliderProvider>
);


