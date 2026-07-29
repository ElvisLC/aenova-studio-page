import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LocaleProvider } from './i18n/LocaleContext.jsx';
import { getRouteByPath } from './i18n/routes.js';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import Nosotros from './pages/Nosotros.jsx';
import Servicios from './pages/Servicios.jsx';
import Desarrollo from './pages/Desarrollo.jsx';
import Diseno from './pages/Diseno.jsx';
import Contacto from './pages/Contacto.jsx';

const PAGES = {
  home: Home,
  about: Nosotros,
  services: Servicios,
  development: Desarrollo,
  design: Diseno,
  contact: Contacto
};

function RouteResolver() {
  const { pathname } = useLocation();
  if (pathname === '/en') return <Navigate to="/en/" replace />;
  const route = getRouteByPath(pathname);
  if (!route) return <NotFound />;
  const Page = PAGES[route.key];
  return <Page />;
}

export default function App() {
  return (
    <LocaleProvider>
      <div>
        <Nav />
        <Routes>
          <Route path="*" element={<RouteResolver />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </LocaleProvider>
  );
}
