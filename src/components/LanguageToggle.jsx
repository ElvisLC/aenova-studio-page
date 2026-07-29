import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from '../i18n/LocaleContext.jsx';
import { getSiblingPath } from '../i18n/routes.js';

export default function LanguageToggle({ onNavigate, className = '' }) {
  const locale = useLocale();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isEn = locale === 'en';

  const handleToggle = () => {
    navigate(getSiblingPath(pathname, isEn ? 'es' : 'en'));
    if (onNavigate) onNavigate();
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEn}
      className={`lang-toggle${className ? ` ${className}` : ''}`}
      onClick={handleToggle}
    >
      <span className="lang-toggle-thumb" aria-hidden="true" />
      <span className={`lang-toggle-option${!isEn ? ' active' : ''}`}>ES</span>
      <span className={`lang-toggle-option${isEn ? ' active' : ''}`}>EN</span>
    </button>
  );
}
