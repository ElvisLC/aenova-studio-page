import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getWaLink } from '../constants.js';
import { useLocale, useT } from '../i18n/LocaleContext.jsx';
import { ROUTES } from '../i18n/routes.js';
import common from '../i18n/dictionaries/common.js';
import { IconMenu, IconClose } from './Icons.jsx';
import LanguageToggle from './LanguageToggle.jsx';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const locale = useLocale();
  const t = useT(common);
  const waLink = getWaLink(locale);

  const links = ROUTES.map((r) => ({ key: r.key, to: r[locale], label: t.nav[r.key], end: r.key === 'home' }));

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
      <NavLink to={ROUTES[0][locale]} className="nav-brand">
        <img src="/aenova-logo.png" alt="Aenova Studio" width="38" height="38" />
        <span>AENOVA <span style={{ color: '#081F3F' }}>STUDIO</span></span>
      </NavLink>
      {links.map((l) => (
        <NavLink key={l.key} to={l.to} end={l.end} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
          {l.label}
        </NavLink>
      ))}
      <LanguageToggle />
      <a className="btn brand-cta nav-cta" href={waLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 14 }}>
        {t.cta}
      </a>
      <button
        className="nav-toggle"
        onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
        aria-label={menuOpen ? t.menuClose : t.menuOpen}
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
              key={l.key}
              to={l.to}
              end={l.end}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={closeMenu}
            >
              {l.label}
            </NavLink>
          ))}
          <LanguageToggle onNavigate={closeMenu} />
          <a
            className="btn brand-cta"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 10, alignSelf: 'flex-start' }}
            onClick={closeMenu}
          >
            {t.cta}
          </a>
        </div>
      )}
    </nav>
  );
}
