import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/scss/styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'routes/App';
import { Provider } from "react-redux"
import store from "redux/store"

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
