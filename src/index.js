import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/scss/styles.scss';
import App from 'components/App';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/math-magicians">
      <App />
    </Router>
  </React.StrictMode>,
);
