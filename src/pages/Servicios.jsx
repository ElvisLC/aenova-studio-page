import React from 'react';
import Seo from '../components/Seo.jsx';
import { WA_LINK } from '../constants.js';
import { IconAutomation, IconCode, IconMonitor, IconPalette, IconStar, IconSearch } from '../components/Icons.jsx';

const items = [
  { Icon: IconAutomation, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)', title: 'Automatizaciones', desc: 'Conectamos tus herramientas (CRM, WhatsApp, hojas de cálculo, facturación) con flujos que corren solos. Menos tareas manuales, menos errores, más tiempo para lo importante.' },
  { Icon: IconCode, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)', title: 'Aplicaciones web', desc: 'Plataformas y paneles a medida, desde el primer MVP hasta productos con miles de usuarios. Código prolijo, pensado para crecer sin reescribirse.' },
  { Icon: IconMonitor, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)', title: 'Landing pages', desc: 'Páginas de una sola misión: convertir. Copy, diseño y velocidad de carga trabajando juntos para tu próxima campaña o lanzamiento.' },
  { Icon: IconPalette, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)', title: 'Diseño gráfico', desc: 'Piezas para redes, campañas, presentaciones y punto de venta — coherentes con tu identidad y listas para cualquier formato.' },
  { Icon: IconStar, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)', title: 'Logos & branding', desc: 'Identidad de marca completa: logo, paleta, tipografía y lineamientos claros para que cualquiera pueda aplicarla bien.' },
  { Icon: IconSearch, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)', title: 'SEO', desc: 'Estructura técnica, velocidad y contenido optimizado para que tu sitio aparezca donde tus clientes buscan.' }
];

export default function Servicios() {
  return (
    <main className="container" style={{ paddingTop: 'clamp(48px,8vw,88px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
      <Seo
        title="Servicios de Desarrollo y Diseño — Aenova Studio"
        description="Automatizaciones, aplicaciones web, landing pages, diseño de marca y más. Descubre todo lo que Aenova Studio puede hacer crecer tu negocio."
        path="/servicios"
      />
      <span className="tag tag-accent" style={{ fontSize: 12, padding: '5px 14px' }}>Servicios</span>
      <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', maxWidth: '16ch', margin: '20px 0 18px' }}>Todo lo que tu marca necesita para crecer</h1>
      <p style={{ fontSize: 17, opacity: 0.8, maxWidth: '58ch', lineHeight: 1.6, marginBottom: 48 }}>
        De la automatización interna a la cara pública de tu negocio — cada servicio se apoya en el mismo equipo y el mismo estándar.
      </p>

      {items.map(({ Icon, bg, fg, title, desc }, i) => (
        <div key={title} className="service-row" style={{ display: 'grid', gap: 24, padding: '28px 0', borderBottom: i < items.length - 1 ? '1px solid var(--color-divider)' : 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div className="icon-circle" style={{ background: bg, color: fg }}><Icon /></div>
            <h3 style={{ margin: 0, fontSize: 'clamp(18px,4vw,22px)' }}>{title}</h3>
          </div>
          <p style={{ margin: 0, fontSize: 15, opacity: 0.78, maxWidth: '58ch', lineHeight: 1.6 }}>{desc}</p>
        </div>
      ))}

      <div className="cta-patch" style={{ background: 'var(--color-accent-100)' }}>
        <div>
          <h3 style={{ fontSize: 'clamp(20px,2.4vw,26px)' }}>¿Con cuál arrancamos?</h3>
          <p style={{ opacity: 0.78, fontSize: 15 }}>Contanos tu proyecto y armamos una propuesta a medida.</p>
        </div>
        <a className="btn brand-cta" href={WA_LINK} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp</a>
      </div>
    </main>
  );
}
