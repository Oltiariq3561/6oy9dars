import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Details from './Pages/Details';
import ErrorPage from './Pages/ErrorPage';
import Products from './Pages/Products';
import MainLayout from './layouts/MainLayout';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!['/', '/about', '/products'].some(path => location.pathname.includes(path))) {
      navigate('/');
    }
  }, [navigate, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="about" element={<MainLayout><About /></MainLayout>} />
      <Route path="/products/:id" element={<MainLayout><Details /></MainLayout>} />
      <Route path="/products" element={<MainLayout><Products /></MainLayout>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
export default App;