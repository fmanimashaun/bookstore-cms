import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Pageheader from 'js/components/pageheader';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Categories from './Categories';

const navLinks = [
  { to: '/', label: 'Books' },
  { to: '/categories', label: 'Categories' },
];

const App = () => (
  <>
    <Pageheader navLinks={navLinks} />
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
  </>
);

export default App;
