import React from 'react';
import ReactDOM from 'react-dom/client';
import './custom-styles.css';  // ← Change this line
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);