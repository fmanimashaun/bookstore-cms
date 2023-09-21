import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'routes/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/bookstore-cms">
      <App />
    </Router>
  </React.StrictMode>,
);
