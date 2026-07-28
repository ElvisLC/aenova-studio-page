import React from 'react';
import { Helmet } from 'react-helmet-async';
import { WA_LINK } from '../constants.js';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';

const projects = [
  { id: 'dev-1', title: 'Nimbus CRM', tags: ['n8n', 'Airtable', 'Slack'], desc: 'Flujo que sincroniza leads, contratos y facturación sin intervención manual.' },
  { id: 'dev-2', title: 'Portal Lumen', tags: ['React', 'Node'], desc: 'Plataforma de reservas para una cadena de cafeterías con panel administrativo en tiempo real.' },
  { id: 'dev-3', title: 'Checkout Vaia', tags: ['Next.js', 'Stripe'], desc: 'Flujo de compra headless que redujo el abandono de carrito.' },
  { id: 'dev-4', title: 'Rutas Verdes', tags: ['Landing', 'Analytics'], desc: 'Landing de conversión para una app de movilidad sostenible.' },
  { id: 'dev-5', title: 'Kappa Fit', tags: ['Python', 'Make'], desc: 'Reportes automáticos de rendimiento para estudios de fitness.' },
  { id: 'dev-6', title: 'Sello Norte', tags: ['React', 'Supabase'], desc: 'Sistema de gestión de inventario para una red de tiendas.' }
];

export default function Desarrollo() {
  return (
    <main className="container" style={{ padding: 'clamp(48px,8vw,88px) 0 clamp(56px,8vw,96px)' }}>
      <Helmet>
        <title>Desarrollo Web y Automatizaciones — Aenova Studio</title>
        <meta name="description" content="Portafolio de productos y automatizaciones en producción: CRMs, plataformas de reservas, checkouts, landing pages y más, construidos por Aenova Studio." />
        <link rel="canonical" href="https://aenovastudio.com/desarrollo" />
      </Helmet>
      <span className="tag tag-accent" style={{ fontSize: 12, padding: '5px 14px' }}>Desarrollo</span>
      <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', maxWidth: '16ch', margin: '20px 0 18px' }}>Productos y automatizaciones en producción</h1>
      <p style={{ fontSize: 17, opacity: 0.8, maxWidth: '58ch', lineHeight: 1.6, marginBottom: 44 }}>
        Aplicaciones, integraciones y flujos automatizados construidos con React, Node y herramientas como n8n y Make.
      </p>

      <div className="grid-auto-lg">
        {projects.map((p) => (
          <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ImagePlaceholder label={p.title} ratio="16/10" />
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
