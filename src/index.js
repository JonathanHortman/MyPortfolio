import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LenguageContextProvider from './shared/context/LenguageContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LenguageContextProvider>
      <App />
    </LenguageContextProvider>
  </React.StrictMode>
);
