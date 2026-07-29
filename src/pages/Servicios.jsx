import React from 'react';
import Seo from '../components/Seo.jsx';
import { getWaLink } from '../constants.js';
import { useLocale, useT } from '../i18n/LocaleContext.jsx';
import dict from '../i18n/dictionaries/services.js';
import { IconAutomation, IconCode, IconMonitor, IconPalette, IconStar, IconSearch } from '../components/Icons.jsx';

const itemsStructure = [
  { key: 'automations', Icon: IconAutomation, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)' },
  { key: 'webapps', Icon: IconCode, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)' },
  { key: 'landing', Icon: IconMonitor, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)' },
  { key: 'graphic', Icon: IconPalette, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)' },
  { key: 'branding', Icon: IconStar, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)' },
  { key: 'seo', Icon: IconSearch, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)' }
];

export default function Servicios() {
  const locale = useLocale();
  const t = useT(dict);
  const waLink = getWaLink(locale);

  return (
    <main className="container" style={{ paddingTop: 'clamp(48px,8vw,88px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
      <Seo title={t.seo.title} description={t.seo.description} pageKey="services" />
      <span className="tag tag-accent" style={{ fontSize: 12, padding: '5px 14px' }}>{t.tag}</span>
      <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', maxWidth: '16ch', margin: '20px 0 18px' }}>{t.h1}</h1>
      <p style={{ fontSize: 17, opacity: 0.8, maxWidth: '58ch', lineHeight: 1.6, marginBottom: 48 }}>
        {t.intro}
      </p>

      {itemsStructure.map(({ key, Icon, bg, fg }, i) => (
        <div key={key} className="service-row" style={{ display: 'grid', gap: 24, padding: '28px 0', borderBottom: i < itemsStructure.length - 1 ? '1px solid var(--color-divider)' : 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div className="icon-circle" style={{ background: bg, color: fg }}><Icon /></div>
            <h3 style={{ margin: 0, fontSize: 'clamp(18px,4vw,22px)' }}>{t.items[key].title}</h3>
          </div>
          <p style={{ margin: 0, fontSize: 15, opacity: 0.78, maxWidth: '58ch', lineHeight: 1.6 }}>{t.items[key].desc}</p>
        </div>
      ))}

      <div className="cta-patch" style={{ background: 'var(--color-accent-100)' }}>
        <div>
          <h3 style={{ fontSize: 'clamp(20px,2.4vw,26px)' }}>{t.cta.title}</h3>
          <p style={{ opacity: 0.78, fontSize: 15 }}>{t.cta.body}</p>
        </div>
        <a className="btn brand-cta" href={waLink} target="_blank" rel="noopener noreferrer">{t.cta.button}</a>
      </div>
    </main>
  );
}
