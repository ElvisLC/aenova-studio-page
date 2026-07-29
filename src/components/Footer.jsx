import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale, useT } from '../i18n/LocaleContext.jsx';
import { ROUTES } from '../i18n/routes.js';
import common from '../i18n/dictionaries/common.js';

export default function Footer() {
  const locale = useLocale();
  const t = useT(common);

  return (
    <footer className="site-footer">
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src="/aenova-logo-icon.webp" alt="Aenova Studio" width="32" height="32" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover' }} />
        <div>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 15 }}>Aenova Studio</p>
          <p style={{ fontSize: 12, opacity: 0.72, marginTop: 2 }}>{t.footerTagline}</p>
        </div>
      </div>
      <div className="footer-links">
        {ROUTES.map((r) => (
          <Link key={r.key} to={r[locale]}>{t.nav[r.key]}</Link>
        ))}
      </div>
      <p style={{ fontSize: 12, opacity: 0.72 }}>{t.copyright}</p>
    </footer>
  );
}
