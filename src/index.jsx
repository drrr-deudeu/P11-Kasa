import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import Home from './pages/Home'
import Apropos from './pages/Apropos'
// After
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/apropos" element={<Apropos />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
