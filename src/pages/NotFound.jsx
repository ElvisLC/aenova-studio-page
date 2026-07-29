import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale, useLocalizedPath } from '../i18n/LocaleContext.jsx';

export default function NotFound() {
  const locale = useLocale();
  const isEn = locale === 'en';
  const homePath = useLocalizedPath('home');

  return (
    <main className="container" style={{ paddingTop: 'clamp(64px,10vw,120px)', paddingBottom: 'clamp(64px,10vw,120px)', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'clamp(34px,5vw,54px)' }}>{isEn ? 'Page not found' : 'Página no encontrada'}</h1>
      <p style={{ fontSize: 17, opacity: 0.8, marginBottom: 28 }}>
        {isEn ? "The page you're looking for doesn't exist." : 'La página que buscás no existe.'}
      </p>
      <Link className="btn brand-cta" to={homePath}>
        {isEn ? 'Back to home' : 'Volver al inicio'}
      </Link>
    </main>
  );
}
