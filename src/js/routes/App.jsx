import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalculatorPage from 'pages/CalculatorPage';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import QuotePage from 'pages/QuotePage';
import PageHeader from './PageHeader';

const App = () => (
  <>
    <PageHeader />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<CalculatorPage />} />
      <Route path="quote" element={<QuotePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
