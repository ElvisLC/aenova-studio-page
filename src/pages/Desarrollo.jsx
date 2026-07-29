import React from 'react';
import Seo from '../components/Seo.jsx';
import { WA_LINK, SITE_URL } from '../constants.js';
import ProjectMedia from '../components/ProjectMedia.jsx';

const projects = [
  {
    id: 'dev-7',
    title: 'Panel Operativo — Agencia TikTok Live',
    alt: 'Vista previa del panel operativo web con tareas Kanban desarrollado para una agencia de TikTok Live',
    tags: ['Laravel', 'React', 'PWA'],
    desc: 'Sistema interno con roles, tareas Kanban con reporte obligatorio de cierre, objetivos semanales, horarios de equipo y auditoría, instalable como PWA.',
    type: 'video',
    image: '/proyectos/desarollo/kairoz-agency/preview-agency-tiktok.mp4',
    poster: '/proyectos/desarollo/kairoz-agency/screenshot-project.webp',
    imageW: 1600,
    imageH: 791
  }
];

export default function Desarrollo() {
  return (
    <main className="container" style={{ paddingTop: 'clamp(48px,8vw,88px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
      <Seo
        title="Desarrollo Web y Automatizaciones — Aenova Studio"
        description="Portafolio de productos y automatizaciones en producción: CRMs, plataformas de reservas, checkouts, landing pages y más, construidos por Aenova Studio."
        path="/desarrollo"
        image={`${SITE_URL}/proyectos/desarollo/kairoz-agency/screenshot-project.webp`}
      />
      <span className="tag tag-accent" style={{ fontSize: 12, padding: '5px 14px' }}>Desarrollo</span>
      <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', maxWidth: '16ch', margin: '20px 0 18px' }}>Productos y automatizaciones en producción</h1>
      <p style={{ fontSize: 17, opacity: 0.8, maxWidth: '58ch', lineHeight: 1.6, marginBottom: 44 }}>
        Aplicaciones, integraciones y flujos automatizados construidos con React, Node y herramientas como n8n y Make.
      </p>

      <div className="grid-auto-lg" style={{ maxWidth: 420 }}>
        {projects.map((p) => (
          <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ProjectMedia
              type={p.type}
              src={p.image}
              poster={p.poster}
              alt={p.alt}
              width={p.imageW}
              height={p.imageH}
              ratio="16/10"
            />
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {p.tags.map((t) => <span key={t} className="tag tag-neutral">{t}</span>)}
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18 }}>{p.title}</p>
            <p style={{ fontSize: 13.5, opacity: 0.72 }}>{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="cta-patch" style={{ background: 'var(--color-accent-2-100)' }}>
        <div>
          <h3 style={{ fontSize: 'clamp(20px,2.4vw,26px)' }}>¿Necesitás automatizar o construir algo?</h3>
          <p style={{ opacity: 0.78, fontSize: 15 }}>Contanos el problema, no la solución.</p>
        </div>
        <a className="btn brand-cta" href={WA_LINK} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp</a>
      </div>
    </main>
  );
}
