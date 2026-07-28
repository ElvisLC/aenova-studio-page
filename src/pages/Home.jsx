import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { WA_LINK } from '../constants.js';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';
import { IconAutomation, IconCode, IconMonitor, IconPalette, IconStar, IconSearch } from '../components/Icons.jsx';

const services = [
  { Icon: IconAutomation, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)', title: 'Automatizaciones', desc: 'Flujos que conectan tus herramientas y eliminan tareas repetitivas.' },
  { Icon: IconCode, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)', title: 'Aplicaciones web', desc: 'Productos a medida, rápidos y escalables, del MVP a la plataforma completa.' },
  { Icon: IconMonitor, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)', title: 'Landing pages', desc: 'Páginas de alto impacto pensadas para convertir, con copy alineado a tu marca.' },
  { Icon: IconPalette, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)', title: 'Diseño gráfico', desc: 'Piezas visuales para redes, campañas y comunicación con identidad propia.' },
  { Icon: IconStar, bg: 'var(--color-accent-100)', fg: 'var(--color-accent-700)', title: 'Logos & branding', desc: 'Identidades completas: logo, paleta, tipografía y lineamientos de marca.' },
  { Icon: IconSearch, bg: 'var(--color-accent-2-100)', fg: 'var(--color-accent-2-700)', title: 'SEO', desc: 'Optimización técnica y de contenido para que te encuentren en los buscadores.' }
];

const featured = [
  { id: 'home-feat-1', tag: 'Desarrollo', tagClass: 'tag-accent', title: 'Nimbus CRM', desc: 'Automatización de ventas con n8n, Airtable y Slack.', to: '/desarrollo' },
  { id: 'home-feat-2', tag: 'Diseño', tagClass: 'tag-accent-2', title: 'Identidad Café Lumen', desc: 'Branding completo para una cadena de cafeterías.', to: '/diseno' },
  { id: 'home-feat-3', tag: 'Desarrollo', tagClass: 'tag-accent', title: 'Portal Lumen', desc: 'Plataforma de reservas con panel en tiempo real.', to: '/desarrollo' },
  { id: 'home-feat-4', tag: 'Diseño', tagClass: 'tag-accent-2', title: 'Naming & logo Kappa Fit', desc: 'Marca deportiva de punta a punta.', to: '/diseno' }
];

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Aenova Studio — Desarrollo y Diseño en Caracas, Venezuela</title>
        <meta name="description" content="Aenova Studio: automatizaciones, aplicaciones web, landing pages y diseño de marca en Caracas, Venezuela. Cotiza tu proyecto por WhatsApp." />
        <link rel="canonical" href="https://aenovastudio.com/" />
      </Helmet>
      <section className="hero container">
        <span className="tag tag-accent" style={{ fontSize: 12, padding: '5px 14px' }}>Estudio de desarrollo & diseño</span>
        <h1 style={{ fontSize: 'clamp(38px,6vw,68px)', lineHeight: 1.05, maxWidth: '15ch', margin: '20px 0 22px' }}>
          Construimos productos digitales con carácter
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, maxWidth: '52ch', opacity: 0.82, marginBottom: 28 }}>
          Automatizaciones, aplicaciones web, landing pages y diseño de marca — bajo un mismo equipo, de punta a punta.
        </p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a className="btn brand-cta" href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, padding: '12px 26px' }}>Hablemos por WhatsApp</a>
          <Link className="btn btn-secondary" to="/desarrollo" style={{ fontSize: 15, padding: '12px 26px' }}>Ver nuestro trabajo</Link>
        </div>
      </section>

      <section className="container grid-4" style={{ paddingTop: 20, paddingBottom: 60 }}>
        {[
          ['1', 'Descubrimiento', 'Entendemos tu negocio, objetivos y usuarios antes de proponer nada.', 'var(--color-accent-100)', 'var(--color-accent-700)'],
          ['2', 'Diseño', 'Definimos identidad, UX y UI — cada decisión respaldada por un porqué.', 'var(--color-accent-2-100)', 'var(--color-accent-2-700)'],
          ['3', 'Desarrollo', 'Construimos, automatizamos e integramos, con foco en performance real.', 'var(--color-accent-100)', 'var(--color-accent-700)'],
          ['4', 'Lanzamiento', 'Publicamos, medimos y acompañamos la primera etapa en vivo.', 'var(--color-accent-2-100)', 'var(--color-accent-2-700)']
        ].map(([n, title, desc, bg, fg]) => (
          <div key={n} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: bg, color: fg, display: 'grid', placeItems: 'center', fontFamily: 'var(--font-heading)', fontSize: 17 }}>{n}</div>
            <h4 style={{ margin: 0 }}>{title}</h4>
            <p style={{ fontSize: 13.5, opacity: 0.75 }}>{desc}</p>
          </div>
        ))}
      </section>

      <section className="container" style={{ paddingTop: 24, paddingBottom: 48 }}>
        <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', marginBottom: 8 }}>Lo que hacemos</h2>
        <p style={{ opacity: 0.75, fontSize: 15, marginBottom: 32, maxWidth: '56ch' }}>Cinco disciplinas, un mismo equipo — sin traducciones perdidas entre diseño y código.</p>
        <div className="grid-auto-md">
          {services.map(({ Icon, bg, fg, title, desc }) => (
            <Link to="/servicios" key={title} className="card elev-sm hoverable" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="icon-circle" style={{ background: bg, color: fg }}><Icon /></div>
              <p className="card-title">{title}</p>
              <p className="card-body">{desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingTop: 40, paddingBottom: 72 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}>
          <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', margin: 0 }}>Trabajo destacado</h2>
          <Link to="/desarrollo" className="btn btn-ghost">Ver todo el portfolio →</Link>
        </div>
        <div className="grid-auto-lg">
          {featured.map((f) => (
            <Link to={f.to} key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: 10, textDecoration: 'none', color: 'inherit' }}>
              <ImagePlaceholder label={f.title} ratio="4/3" />
              <span className={`tag ${f.tagClass}`}>{f.tag}</span>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 17 }}>{f.title}</p>
              <p style={{ fontSize: 13, opacity: 0.72 }}>{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingTop: 24, paddingBottom: 40 }}>
        <p style={{ textAlign: 'center', fontSize: 12, letterSpacing: '.08em', textTransform: 'uppercase', opacity: 0.55, marginBottom: 20 }}>Marcas con las que trabajamos</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(24px,5vw,56px)', fontFamily: 'var(--font-heading)', fontSize: 16, opacity: 0.5 }}>
          <span>NIMBUS</span><span>LUMEN</span><span>VAIA</span><span>RUTAS VERDES</span><span>KAPPA FIT</span><span>SELLO NORTE</span>
        </div>
      </section>

      <section className="container" style={{ paddingTop: 40, paddingBottom: 72 }}>
        <blockquote style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(22px,2.6vw,30px)', lineHeight: 1.4, maxWidth: '34ch', margin: 0 }}>
          "Aenova entendió el negocio antes de escribir una línea de código. Automatizamos gran parte de nuestro proceso de ventas en tres semanas."
        </blockquote>
        <p style={{ marginTop: 20, opacity: 0.65, fontSize: 15 }}>— Equipo Nimbus</p>
      </section>

      <section className="container" style={{ paddingBottom: 80 }}>
        <div className="cta-patch" style={{ background: 'var(--color-accent-2-100)' }}>
          <div>
            <h3 style={{ fontSize: 'clamp(22px,2.6vw,28px)' }}>¿Tenés un proyecto en mente?</h3>
            <p style={{ opacity: 0.78, fontSize: 15, maxWidth: '44ch' }}>Contanos qué necesitás y te respondemos en menos de 24 horas.</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn brand-cta" href={WA_LINK} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp</a>
            <Link className="btn btn-secondary" to="/contacto">Otros medios</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
