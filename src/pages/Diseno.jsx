import React from 'react';
import { Helmet } from 'react-helmet-async';
import { WA_LINK } from '../constants.js';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';

const projects = [
  { id: 'des-1', title: 'Identidad Café Lumen', tag: 'Branding', ratio: '4/3', desc: 'Logo, paleta y packaging para una cadena de cafeterías.' },
  { id: 'des-2', title: 'Serie editorial Rutas Verdes', tag: 'Diseño gráfico', ratio: '4/3', desc: 'Afiches y piezas para una campaña de movilidad sostenible.' },
  { id: 'des-3', title: 'Naming & logo Kappa Fit', tag: 'Logo', ratio: '1/1', desc: 'Marca deportiva construida desde cero.' },
  { id: 'des-4', title: 'Kit de redes Sello Norte', tag: 'Diseño gráfico', ratio: '4/3', desc: 'Plantillas y sistema visual para comunicación digital.' },
  { id: 'des-5', title: 'Papelería Nimbus', tag: 'Branding', ratio: '4/3', desc: 'Tarjetería y papelería corporativa.' },
  { id: 'des-6', title: 'Packaging Vaia', tag: 'Packaging', ratio: '1/1', desc: 'Empaque de producto para e-commerce.' }
];

export default function Diseno() {
  return (
    <main className="container" style={{ paddingTop: 'clamp(48px,8vw,88px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
      <Helmet>
        <title>Diseño de Marca y Branding — Aenova Studio</title>
        <meta name="description" content="Identidad visual, branding, logos y diseño editorial con carácter propio. Explora el portafolio de diseño de Aenova Studio." />
        <link rel="canonical" href="https://aenovastudio.com/diseno" />
      </Helmet>
      <span className="tag tag-accent-2" style={{ fontSize: 12, padding: '5px 14px' }}>Diseño</span>
      <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', maxWidth: '16ch', margin: '20px 0 18px' }}>Marcas con carácter propio</h1>
      <p style={{ fontSize: 17, opacity: 0.8, maxWidth: '58ch', lineHeight: 1.6, marginBottom: 44 }}>
        Branding, diseño gráfico y sistemas visuales pensados para sostenerse en el tiempo.
      </p>

      <div className="grid-auto-lg">
        {projects.map((p) => (
          <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ImagePlaceholder label={p.title} ratio={p.ratio} />
            <span className="tag tag-accent-2">{p.tag}</span>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18 }}>{p.title}</p>
            <p style={{ fontSize: 13.5, opacity: 0.72 }}>{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="cta-patch" style={{ background: 'var(--color-accent-100)' }}>
        <div>
          <h3 style={{ fontSize: 'clamp(20px,2.4vw,26px)' }}>¿Buscás renovar tu marca?</h3>
          <p style={{ opacity: 0.78, fontSize: 15 }}>Armamos un sistema visual que se sostenga en todos los formatos.</p>
        </div>
        <a className="btn brand-cta" href={WA_LINK} target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp</a>
      </div>
    </main>
  );
}
