import React from 'react';
import Seo from '../components/Seo.jsx';
import { getWaLink, SITE_URL } from '../constants.js';
import { useLocale, useT } from '../i18n/LocaleContext.jsx';
import dict from '../i18n/dictionaries/design.js';
import ProjectMedia from '../components/ProjectMedia.jsx';

const projectsStructure = [
  { id: 'des-1', ratio: '4/3', image: '/proyectos/diseno/cafe-lumen.webp' },
  { id: 'des-2', ratio: '4/3', image: '/proyectos/diseno/rutas-verdes.webp' },
  { id: 'des-3', ratio: '1/1', image: '/proyectos/diseno/kappa-fit.webp' },
  { id: 'des-4', ratio: '4/3', image: '/proyectos/diseno/sello-norte.webp' },
  { id: 'des-5', ratio: '4/3', image: '/proyectos/diseno/nimbus-stationery.webp' },
  { id: 'des-6', ratio: '1/1', image: '/proyectos/diseno/vaia-packaging.webp' }
];

export default function Diseno() {
  const locale = useLocale();
  const t = useT(dict);
  const waLink = getWaLink(locale);

  return (
    <main className="container" style={{ paddingTop: 'clamp(48px,8vw,88px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
      <Seo
        title={t.seo.title}
        description={t.seo.description}
        pageKey="design"
        image={`${SITE_URL}/proyectos/diseno/cafe-lumen.webp`}
      />
      <span className="tag tag-accent-2" style={{ fontSize: 12, padding: '5px 14px' }}>{t.tag}</span>
      <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', maxWidth: '16ch', margin: '20px 0 18px' }}>{t.h1}</h1>
      <p style={{ fontSize: 17, opacity: 0.8, maxWidth: '58ch', lineHeight: 1.6, marginBottom: 44 }}>
        {t.intro}
      </p>

      <div className="grid-auto-lg">
        {projectsStructure.map((p) => (
          <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ProjectMedia src={p.image} alt={t.projects[p.id].alt} ratio={p.ratio} />
            <span className="tag tag-accent-2">{t.projects[p.id].tag}</span>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18 }}>{t.projects[p.id].title}</p>
            <p style={{ fontSize: 13.5, opacity: 0.72 }}>{t.projects[p.id].desc}</p>
          </div>
        ))}
      </div>

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
