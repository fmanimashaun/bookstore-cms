import React from 'react';
import ReactDOM from 'react-dom/client';
import 'scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'js/routes/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/bookstore-cms">
      <App />
    </Router>
  </React.StrictMode>,
);
