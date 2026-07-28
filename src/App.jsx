import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Servicios from './pages/Servicios.jsx';
import Desarrollo from './pages/Desarrollo.jsx';
import Diseno from './pages/Diseno.jsx';
import Contacto from './pages/Contacto.jsx';

export default function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/desarrollo" element={<Desarrollo />} />
        <Route path="/diseno" element={<Diseno />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
