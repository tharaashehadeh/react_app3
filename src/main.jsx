import React from 'react'
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </BrowserRouter>
)
