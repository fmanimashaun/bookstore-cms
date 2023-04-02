import React from 'react';
import ReactDOM from 'react-dom/client';
import 'scss/styles.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from 'js/routes/App';
import Home from 'js/routes/Home';
import Categories from 'js/routes/Categories';
import ErrorPage from 'js/routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/categories',
        element: <Categories />,
      },
    ],
  },
],
{
  basename: '/bookstore-cms',
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
