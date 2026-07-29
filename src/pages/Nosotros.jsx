import React from 'react';
import Seo from '../components/Seo.jsx';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';
import { useT } from '../i18n/LocaleContext.jsx';
import dict from '../i18n/dictionaries/about.js';

const team = [
  { id: 'team-1', name: 'Elvis La Cruz' },
  { id: 'team-2', name: 'Isael Guillarte' },
  { id: 'team-3', name: 'Arianny Acosta' }
];

export default function Nosotros() {
  const t = useT(dict);

  return (
    <main>
      <Seo title={t.seo.title} description={t.seo.description} pageKey="about" />
      <section className="container" style={{ paddingTop: 'clamp(48px,8vw,88px)', paddingBottom: 'clamp(24px,4vw,48px)' }}>
        <span className="tag tag-accent-2" style={{ fontSize: 12, padding: '5px 14px' }}>{t.tag}</span>
        <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', maxWidth: '16ch', margin: '20px 0 18px' }}>{t.h1}</h1>
        <p style={{ fontSize: 17, opacity: 0.8, maxWidth: '58ch', lineHeight: 1.6 }}>
          {t.intro}
        </p>
      </section>

      <section className="container about-split" style={{ paddingTop: 16, paddingBottom: 60, display: 'grid', gap: 'clamp(24px,5vw,56px)', alignItems: 'center' }}>
        <ImagePlaceholder label={t.photoLabel} ratio="5/4" style={{ filter: 'saturate(0.6) contrast(0.85) brightness(1.1)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div className="card elev-sm">
            <p style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-accent-700)' }}>{t.visionLabel}</p>
            <p className="card-body" style={{ opacity: 1, fontSize: 15 }}>{t.visionText}</p>
          </div>
          <div className="card elev-sm">
            <p style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-accent-2-700)' }}>{t.missionLabel}</p>
            <p className="card-body" style={{ opacity: 1, fontSize: 15 }}>{t.missionText}</p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 60 }}>
        <h2 style={{ fontSize: 'clamp(24px,3vw,30px)', marginBottom: 28 }}>{t.valuesHeading}</h2>
        <div className="grid-auto-sm">
          {t.values.map((v) => (
            <div key={v.title}>
              <h3 style={{ marginBottom: 6, fontSize: 16 }}>{v.title}</h3>
              <p style={{ fontSize: 13.5, opacity: 0.75 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 80 }}>
        <h2 style={{ fontSize: 'clamp(24px,3vw,30px)', marginBottom: 28 }}>{t.teamHeading}</h2>
        <div className="grid-auto-sm">
          {team.map((m) => (
            <div key={m.id} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
              <ImagePlaceholder label={t.teamPhotoLabel} shape="circle" style={{ width: 96, height: 96 }} />
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 16, marginTop: 4 }}>{m.name}</p>
              <p style={{ fontSize: 12.5, opacity: 0.68 }}>{t.team[m.id]}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
