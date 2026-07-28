import React from 'react';
import { Helmet } from 'react-helmet-async';
import { WA_LINK } from '../constants.js';
import { IconWhatsapp, IconMail, IconGlobe, IconPhone } from '../components/Icons.jsx';

export default function Contacto() {
  return (
    <main className="container" style={{ paddingTop: 'clamp(48px,8vw,88px)', paddingBottom: 'clamp(56px,8vw,96px)' }}>
      <Helmet>
        <title>Contacto — Aenova Studio</title>
        <meta name="description" content="Escríbenos por WhatsApp, llama o envía un correo. Aenova Studio responde en menos de 24 horas para cotizar tu proyecto de desarrollo o diseño." />
        <link rel="canonical" href="https://aenovastudio.com/contacto" />
      </Helmet>
      <span className="tag tag-accent" style={{ fontSize: 12, padding: '5px 14px' }}>Contacto</span>
      <h1 style={{ fontSize: 'clamp(34px,5vw,54px)', maxWidth: '16ch', margin: '20px 0 18px' }}>Hablemos de tu proyecto</h1>
      <p style={{ fontSize: 17, opacity: 0.8, maxWidth: '58ch', lineHeight: 1.6, marginBottom: 44 }}>
        La forma más rápida de empezar es escribirnos por WhatsApp — te respondemos en menos de 24 horas.
      </p>

      <div className="grid-auto-sm">
        <div className="card elev-md" style={{ background: 'var(--color-accent-2-100)', gap: 16 }}>
          <IconWhatsapp style={{ color: 'var(--color-accent-2-700)' }} />
          <p className="card-title">WhatsApp</p>
          <p className="card-body" style={{ opacity: 1 }}>Respuesta más rápida, ideal para cotizar en el momento.</p>
          <a className="btn brand-cta" href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ alignSelf: 'flex-start' }}>Escribir por WhatsApp</a>
        </div>
        <div className="card elev-sm" style={{ gap: 16 }}>
          <IconMail style={{ color: 'var(--color-accent-700)' }} />
          <p className="card-title">Email</p>
          <p className="card-body" style={{ opacity: 1 }}>Para propuestas formales o briefs detallados.</p>
          <a className="btn btn-secondary" href="mailto:hola@aenovastudio.com" style={{ alignSelf: 'flex-start' }}>hola@aenovastudio.com</a>
        </div>
        <div className="card elev-sm" style={{ gap: 16 }}>
          <IconGlobe style={{ color: 'var(--color-accent-700)' }} />
          <p className="card-title">Redes</p>
          <p className="card-body" style={{ opacity: 1 }}>Instagram y LinkedIn — @aenovastudio</p>
          <p style={{ fontSize: 13, opacity: 0.6 }}>Próximamente enlazadas.</p>
        </div>
        <div className="card elev-sm" style={{ gap: 16 }}>
          <IconPhone style={{ color: 'var(--color-accent-700)' }} />
          <p className="card-title">Teléfono</p>
          <p className="card-body" style={{ opacity: 1 }}>Llamadas de 7:00 a.m. a 8:00 p.m., todos los días.</p>
          <a className="btn btn-secondary" href="tel:+584143778737" style={{ alignSelf: 'flex-start' }}>0414-3778737</a>
          <a className="btn btn-secondary" href="tel:+584241405402" style={{ alignSelf: 'flex-start' }}>0424-1405402</a>
        </div>
      </div>
    </main>
  );
}
