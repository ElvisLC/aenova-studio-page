import React from 'react';
import { NavLink } from 'react-router-dom';
import { WA_LINK } from '../constants.js';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/desarrollo', label: 'Desarrollo' },
  { to: '/diseno', label: 'Diseño' },
  { to: '/contacto', label: 'Contacto' }
];

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav-brand">
        <img src="/aenova-logo.png" alt="Aenova Studio" width="38" height="38" />
        <span>AENOVA <span style={{ color: '#081F3F' }}>STUDIO</span></span>
      </NavLink>
      {links.map((l) => (
        <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
          {l.label}
        </NavLink>
      ))}
      <div className="nav-lang">
        <span className="es">ES</span><span style={{ opacity: 0.35 }}>/</span>
        <span className="en" title="Próximamente">EN</span>
      </div>
      <a className="btn brand-cta" href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 14 }}>
        Hablemos
      </a>
    </nav>
  );
}
