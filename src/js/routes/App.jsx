import React from 'react';
import { Outlet } from 'react-router-dom';
import Pageheader from 'js/components/pageheader';

const navLinks = [
  { to: '/', label: 'Books' },
  { to: '/categories', label: 'Categories' },
];

const App = () => (
  <>
    <Pageheader navLinks={navLinks} />
    <main className="main">
      <Outlet />
    </main>
  </>
);

export default App;
