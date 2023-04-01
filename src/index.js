import React from 'react';
import ReactDOM from 'react-dom/client';
import 'scss/style.scss';
import App from 'js/routes/App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/bookstore-cms">
      <App />
    </Router>
  </React.StrictMode>,
);
