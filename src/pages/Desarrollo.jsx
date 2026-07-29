import React from 'react';
import Seo from '../components/Seo.jsx';
import { getWaLink, SITE_URL } from '../constants.js';
import { useLocale, useT } from '../i18n/LocaleContext.jsx';
import dict from '../i18n/dictionaries/development.js';
import ProjectMedia from '../components/ProjectMedia.jsx';

const projectsStructure = [
  {
    id: 'dev-7',
    tags: ['Laravel', 'React', 'PWA'],
    type: 'video',
    image: '/proyectos/desarollo/kairoz-agency/preview-agency-tiktok.mp4',
    poster: '/proyectos/desarollo/kairoz-agency/screenshot-project.webp',
    imageW: 1600,
    imageH: 791
  }
];

export default function Desarrollo() {
  const locale = useLocale();
  const t = useT(dict);
  const waLink = getWaLink(locale);

  return (
    <main className="container" style={{ paddingTop: 'clamp(48px,8vw,88px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
      <Seo
        title={t.seo.title}
        description={t.seo.description}
        pageKey="development"
        image={`${SITE_URL}/proyectos/desarollo/kairoz-agency/screenshot-project.webp`}
      />
      <span className="tag tag-accent" style={{ fontSize: 12, padding: '5px 14px' }}>{t.tag}</span>
      <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', maxWidth: '16ch', margin: '20px 0 18px' }}>{t.h1}</h1>
      <p style={{ fontSize: 17, opacity: 0.8, maxWidth: '58ch', lineHeight: 1.6, marginBottom: 44 }}>
        {t.intro}
      </p>

      <div className="grid-auto-lg" style={{ maxWidth: 420 }}>
        {projectsStructure.map((p) => (
          <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ProjectMedia
              type={p.type}
              src={p.image}
              poster={p.poster}
              alt={t.projects[p.id].alt}
              width={p.imageW}
              height={p.imageH}
              ratio="16/10"
            />
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {p.tags.map((tg) => <span key={tg} className="tag tag-neutral">{tg}</span>)}
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18 }}>{t.projects[p.id].title}</p>
            <p style={{ fontSize: 13.5, opacity: 0.72 }}>{t.projects[p.id].desc}</p>
          </div>
        ))}
      </div>

      <div className="cta-patch" style={{ background: 'var(--color-accent-2-100)' }}>
        <div>
          <h3 style={{ fontSize: 'clamp(20px,2.4vw,26px)' }}>{t.cta.title}</h3>
          <p style={{ opacity: 0.78, fontSize: 15 }}>{t.cta.body}</p>
        </div>
        <a className="btn brand-cta" href={waLink} target="_blank" rel="noopener noreferrer">{t.cta.button}</a>
      </div>
    </main>
  );
}
