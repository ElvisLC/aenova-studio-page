import React from 'react';
import Seo from '../components/Seo.jsx';
import { getWaLink } from '../constants.js';
import { useLocale, useT } from '../i18n/LocaleContext.jsx';
import dict from '../i18n/dictionaries/contact.js';
import { IconWhatsapp, IconMail, IconGlobe, IconPhone } from '../components/Icons.jsx';

export default function Contacto() {
  const locale = useLocale();
  const t = useT(dict);
  const waLink = getWaLink(locale);

  return (
    <main className="container" style={{ paddingTop: 'clamp(48px,8vw,88px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
      <Seo title={t.seo.title} description={t.seo.description} pageKey="contact" />
      <span className="tag tag-accent" style={{ fontSize: 12, padding: '5px 14px' }}>{t.tag}</span>
      <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', maxWidth: '16ch', margin: '20px 0 18px' }}>{t.h1}</h1>
      <p style={{ fontSize: 17, opacity: 0.8, maxWidth: '58ch', lineHeight: 1.6, marginBottom: 44 }}>
        {t.intro}
      </p>

      <div className="grid-auto-sm">
        <div className="card elev-md" style={{ background: 'var(--color-accent-2-100)', gap: 16 }}>
          <IconWhatsapp style={{ color: 'var(--color-accent-2-700)' }} />
          <p className="card-title">{t.whatsapp.title}</p>
          <p className="card-body" style={{ opacity: 1 }}>{t.whatsapp.body}</p>
          <a className="btn brand-cta" href={waLink} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start' }}>{t.whatsapp.button}</a>
        </div>
        <div className="card elev-sm" style={{ gap: 16 }}>
          <IconMail style={{ color: 'var(--color-accent-700)' }} />
          <p className="card-title">{t.email.title}</p>
          <p className="card-body" style={{ opacity: 1 }}>{t.email.body}</p>
          <a className="btn btn-secondary" href="mailto:hola@aenovastudio.com" style={{ alignSelf: 'flex-start' }}>hola@aenovastudio.com</a>
        </div>
        <div className="card elev-sm" style={{ gap: 16 }}>
          <IconGlobe style={{ color: 'var(--color-accent-700)' }} />
          <p className="card-title">{t.social.title}</p>
          <p className="card-body" style={{ opacity: 1 }}>{t.social.body}</p>
          <p style={{ fontSize: 13, opacity: 0.72 }}>{t.social.note}</p>
        </div>
        <div className="card elev-sm" style={{ gap: 16 }}>
          <IconPhone style={{ color: 'var(--color-accent-700)' }} />
          <p className="card-title">{t.phone.title}</p>
          <p className="card-body" style={{ opacity: 1 }}>{t.phone.body}</p>
          <a className="btn btn-secondary" href="tel:+584143778737" style={{ alignSelf: 'flex-start' }}>0414-3778737</a>
          <a className="btn btn-secondary" href="tel:+584241405402" style={{ alignSelf: 'flex-start' }}>0424-1405402</a>
        </div>
      </div>
    </main>
  );
}
