import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './i18n';
import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <BrowserRouter basename="/EduPortal-TSULBP">
        <App />
      </BrowserRouter>
    </HashRouter>
  </React.StrictMode>
);
