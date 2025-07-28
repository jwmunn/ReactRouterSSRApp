import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article-1" element={<Article1 />} />
          <Route path="/article-2" element={<Article2 />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
