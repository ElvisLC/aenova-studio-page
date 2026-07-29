import React from 'react';
import Seo from '../components/Seo.jsx';
import ImagePlaceholder from '../components/ImagePlaceholder.jsx';

const team = [
  { id: 'team-1', name: 'Elvis La Cruz', role: 'Fundador & Developer' },
  { id: 'team-2', name: 'Isael Guillarte', role: 'Fundador & Developer' },
  { id: 'team-3', name: 'Arianny Acosta', role: 'Fundadora & Diseñadora Gráfica' }
];

const values = [
  ['Cercanía', 'Hablamos claro, sin jerga innecesaria, y estamos presentes en cada etapa.'],
  ['Calidad sin atajos', 'Cada entregable pasa por el mismo estándar, sin importar el tamaño del proyecto.'],
  ['Curiosidad constante', 'Probamos herramientas nuevas antes de que se vuelvan tendencia.'],
  ['Compromiso con el resultado', 'Medimos impacto real, no solo entregas a tiempo.']
];

export default function Nosotros() {
  return (
    <main>
      <Seo
        title="Nosotros — Aenova Studio"
        description="Conoce al equipo detrás de Aenova Studio: un mismo equipo para desarrollo y diseño, trabajando desde Caracas, Venezuela para clientes en toda la región."
        path="/nosotros"
      />
      <section className="container" style={{ paddingTop: 'clamp(48px,8vw,88px)', paddingBottom: 'clamp(24px,4vw,48px)' }}>
        <span className="tag tag-accent-2" style={{ fontSize: 12, padding: '5px 14px' }}>Nosotros</span>
        <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', maxWidth: '16ch', margin: '20px 0 18px' }}>Dos oficios, un mismo equipo</h1>
        <p style={{ fontSize: 17, opacity: 0.8, maxWidth: '58ch', lineHeight: 1.6 }}>
          Aenova Studio nació de la unión de dos oficios que casi nunca se sientan en la misma mesa: el desarrollo y el diseño.
          Empezamos ayudando a pequeños negocios a automatizar tareas repetitivas y hoy acompañamos marcas de distintos tamaños
          en la construcción de productos digitales completos — de la idea al lanzamiento, sin intermediarios ni traducciones
          perdidas entre equipos.
        </p>
      </section>

      <section className="container about-split" style={{ paddingTop: 16, paddingBottom: 60, display: 'grid', gap: 'clamp(24px,5vw,56px)', alignItems: 'center' }}>
        <ImagePlaceholder label="Foto del equipo" ratio="5/4" style={{ filter: 'saturate(0.6) contrast(0.85) brightness(1.1)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div className="card elev-sm">
            <p style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-accent-700)' }}>Visión</p>
            <p className="card-body" style={{ opacity: 1, fontSize: 15 }}>Ser el estudio de referencia en Latinoamérica para marcas que quieren crecer con tecnología y diseño, sin perder su identidad.</p>
          </div>
          <div className="card elev-sm">
            <p style={{ fontSize: 10, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--color-accent-2-700)' }}>Misión</p>
            <p className="card-body" style={{ opacity: 1, fontSize: 15 }}>Diseñar y construir productos digitales — automatizaciones, aplicaciones y marcas — combinando estrategia, estética y funcionamiento impecable, acompañando a nuestros clientes de punta a punta.</p>
          </div>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 60 }}>
        <h2 style={{ fontSize: 'clamp(24px,3vw,30px)', marginBottom: 28 }}>Lo que nos guía</h2>
        <div className="grid-auto-sm">
          {values.map(([title, desc]) => (
            <div key={title}>
              <h4 style={{ marginBottom: 6 }}>{title}</h4>
              <p style={{ fontSize: 13.5, opacity: 0.75 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container" style={{ paddingBottom: 80 }}>
        <h2 style={{ fontSize: 'clamp(24px,3vw,30px)', marginBottom: 28 }}>Equipo</h2>
        <div className="grid-auto-sm">
          {team.map((m) => (
            <div key={m.id} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
              <ImagePlaceholder label="Foto" shape="circle" style={{ width: 96, height: 96 }} />
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 16, marginTop: 4 }}>{m.name}</p>
              <p style={{ fontSize: 12.5, opacity: 0.68 }}>{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
