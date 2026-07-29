import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { WA_LINK } from '../constants.js';
import { IconMenu, IconClose } from './Icons.jsx';

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/desarrollo', label: 'Desarrollo' },
  { to: '/diseno', label: 'Diseño' },
  { to: '/contacto', label: 'Contacto' }
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const closeMenu = () => {
    setClosing(true);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <nav className="nav">
      <NavLink to="/" className="nav-brand">
        <img src="/aenova-logo.png" alt="Aenova Studio" width="38" height="38" />
        <span>AENOVA <span style={{ color: '#081F3F' }}>STUDIO</span></span>
      </NavLink>
      {links.map((l) => (
        <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          {l.label}
        </NavLink>
      ))}
      <div className="nav-lang">
        <span className="es">ES</span><span style={{ opacity: 0.35 }}>/</span>
        <span className="en" title="Próximamente">EN</span>
      </div>
      <a className="btn brand-cta nav-cta" href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 14 }}>
        Hablemos
      </a>
      <button
        className="nav-toggle"
        onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <IconClose /> : <IconMenu />}
      </button>

      {(menuOpen || closing) && (
        <div
          className={`nav-mobile-menu${closing ? ' nav-menu-closing' : ''}`}
          onAnimationEnd={() => { if (closing) setClosing(false); }}
        >
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMenu}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            className="btn brand-cta"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 10, alignSelf: 'flex-start' }}
            onClick={closeMenu}
          >
            Hablemos
          </a>
        </div>
      )}
    </nav>
  );
}
