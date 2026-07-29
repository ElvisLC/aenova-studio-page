import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import { getWaLink } from '../constants.js';
import { useLocale, useT, useLocalizedPath } from '../i18n/LocaleContext.jsx';
import dict from '../i18n/dictionaries/home.js';
import ProjectMedia from '../components/ProjectMedia.jsx';
import { IconAutomation, IconCode, IconMonitor, IconPalette, IconStar, IconSearch } from '../components/Icons.jsx';

const stepsStructure = [
  { bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)' },
  { bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)' },
  { bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)' },
  { bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)' }
];

const servicesStructure = [
  { key: 'automations', Icon: IconAutomation, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)' },
  { key: 'webapps', Icon: IconCode, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)' },
  { key: 'landing', Icon: IconMonitor, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)' },
  { key: 'graphic', Icon: IconPalette, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)' },
  { key: 'branding', Icon: IconStar, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)' },
  { key: 'seo', Icon: IconSearch, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)' }
];

const featuredStructure = [
  {
    id: 'kairoz-agency',
    tagClass: 'tag-accent',
    tags: ['Laravel', 'React', 'PWA'],
    type: 'video',
    image: '/proyectos/desarollo/kairoz-agency/preview-agency-tiktok.mp4',
    poster: '/proyectos/desarollo/kairoz-agency/screenshot-project.webp',
    imageW: 1600,
    imageH: 791
  }
];

const brands = ['NIMBUS', 'LUMEN', 'VAIA', 'RUTAS VERDES', 'KAPPA FIT', 'SELLO NORTE'];

export default function Home() {
  const locale = useLocale();
  const t = useT(dict);
  const waLink = getWaLink(locale);
  const servicesPath = useLocalizedPath('services');
  const developmentPath = useLocalizedPath('development');
  const contactPath = useLocalizedPath('contact');

  return (
    <main>
      <Seo title={t.seo.title} description={t.seo.description} pageKey="home" />
      <section className="hero container">
        <span className="tag tag-accent" style={{ fontSize: 12, padding: '5px 14px' }}>{t.hero.tag}</span>
        <h1 style={{ fontSize: 'clamp(38px,6vw,68px)', lineHeight: 1.05, maxWidth: '17ch', margin: '20px 0 22px' }}>
          {t.hero.h1}
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: '52ch', opacity: 0.82, marginBottom: 28 }}>
          {t.hero.p}
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a className="btn brand-cta" href={waLink} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, padding: '12px 26px' }}>{t.hero.ctaWhatsapp}</a>
          <Link className="btn btn-secondary" to={developmentPath} style={{ fontSize: 15, padding: '12px 26px' }}>{t.hero.ctaWork}</Link>
        </div>
      </section>

      <section className="container grid-4" style={{ paddingTop: 20, paddingBottom: 60 }}>
        {stepsStructure.map((s, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: s.bg, color: s.fg, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-heading)', fontSize: 17 }}>{i + 1}</div>
            <h2 style={{ margin: 0, fontSize: 17 }}>{t.steps[i].title}</h2>
            <p style={{ fontSize: 13.5, opacity: 0.75 }}>{t.steps[i].desc}</p>
          </div>
        ))}
      </section>

      <section className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
        <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', marginBottom: 8 }}>{t.servicesSection.title}</h2>
        <p style={{ opacity: 0.75, fontSize: 15, marginBottom: 32, maxWidth: '56ch' }}>{t.servicesSection.subtitle}</p>
        <div className="grid-auto-md">
          {servicesStructure.map(({ key, Icon, bg, fg }) => (
            <Link to={servicesPath} key={key} className="card elev-sm hoverable" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="icon-circle" style={{ background: bg, color: fg }}><Icon /></div>
              <p className="card-title">{t.services[key].title}</p>
              <p className="card-body">{t.services[key].desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingTop: 40, paddingBottom: 72 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
          <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', margin: 0 }}>{t.featuredSection.title}</h2>
          <Link to={developmentPath} className="btn btn-ghost">{t.featuredSection.viewAll}</Link>
        </div>
        <div style={{ maxWidth: 540 }}>
          {featuredStructure.map((f) => (
            <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <ProjectMedia
                type={f.type}
                src={f.image}
                poster={f.poster}
                alt={t.featured[f.id].alt}
                width={f.imageW}
                height={f.imageH}
                ratio="16/10"
              />
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <span className={`tag ${f.tagClass}`}>{t.featured[f.id].tag}</span>
                {f.tags && f.tags.map((tg) => <span key={tg} className="tag tag-neutral">{tg}</span>)}
              </div>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18 }}>{t.featured[f.id].title}</p>
              <p style={{ fontSize: 13.5, opacity: 0.72 }}>{t.featured[f.id].desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingTop: 24, paddingBottom: 40 }}>
        <p style={{ textAlign: 'center', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', opacity: 0.72, marginBottom: 20 }}>{t.brandsLabel}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(24px,5vw,56px)', fontFamily: 'var(--font-heading)', fontSize: 16, opacity: 0.72 }}>
          {brands.map((b) => <span key={b}>{b}</span>)}
        </div>
      </section>

      <section className="container" style={{ paddingTop: 40, paddingBottom: 72 }}>
        <blockquote style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px,2.6vw,30px)', lineHeight: 1.4, maxWidth: '34ch', margin: 0 }}>
          {t.testimonial.quote}
        </blockquote>
        <p style={{ marginTop: 20, opacity: 0.65, fontSize: 15 }}>{t.testimonial.attribution}</p>
      </section>

      <section className="container" style={{ paddingBottom: 80 }}>
        <div className="cta-patch" style={{ background: 'var(--color-accent-2-100)' }}>
          <div>
            <h3 style={{ fontSize: 'clamp(22px,2.6vw,28px)' }}>{t.ctaSection.title}</h3>
            <p style={{ opacity: 0.78, fontSize: 15, maxWidth: '44ch' }}>{t.ctaSection.body}</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn brand-cta" href={waLink} target="_blank" rel="noopener noreferrer">{t.ctaSection.ctaWhatsapp}</a>
            <Link className="btn btn-secondary" to={contactPath}>{t.ctaSection.ctaOther}</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
