import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src="/aenova-logo.png" alt="Aenova Studio" width="32" height="32" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} />
        <div>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 15 }}>Aenova Studio</p>
          <p style={{ fontSize: 12, opacity: 0.6, marginTop: 2 }}>Desarrollo & diseño, de punta a punta.</p>
        </div>
      </div>
      <div className="footer-links">
        <Link to="/">Inicio</Link>
        <Link to="/nosotros">Nosotros</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/desarrollo">Desarrollo</Link>
        <Link to="/diseno">Diseño</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
      <p style={{ fontSize: 12, opacity: 0.55 }}>© 2026 Aenova Studio.</p>
    </footer>
  );
}
