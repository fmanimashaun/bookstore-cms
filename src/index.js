import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'routes/App';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import store from 'redux/store';
=======
>>>>>>> 266c089f19f4621e96b2306982db5e8493525d3f

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/bookstore-cms">
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
);
