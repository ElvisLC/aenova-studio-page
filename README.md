# Aenova Studio — sitio web (React + Vite)

Proyecto React exportado a partir del diseño hecho en Aenova Studio.dc.html.

## Instalación

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

- `src/pages/` — Home, Nosotros, Servicios, Desarrollo, Diseño, Contacto
- `src/components/` — Nav, Footer, WhatsAppButton, ImagePlaceholder, Icons
- `src/index.css` — tokens de color/tipografía y clases (paleta y estilo tomados del diseño original)
- `public/aenova-logo.png` — logo de marca

## Pendientes para producción

- Reemplazar los `ImagePlaceholder` por fotos/capturas reales (portfolio de Desarrollo y Diseño, foto de equipo, fotos del equipo en Nosotros).
- ~~Actualizar el número de WhatsApp en `src/constants.js`~~ (ya actualizado con el número real).
- Conectar los enlaces de redes sociales en Contacto.
- Activar el toggle de inglés (EN) cuando haya contenido traducido.
