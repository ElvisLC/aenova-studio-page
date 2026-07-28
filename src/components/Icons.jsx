import React from 'react';

const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' };

export const IconAutomation = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
  </svg>
);
export const IconCode = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
export const IconMonitor = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
    <rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" />
  </svg>
);
export const IconPalette = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
    <circle cx="8.5" cy="13" r="1" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="13" r="1" fill="currentColor" stroke="none" />
  </svg>
);
export const IconStar = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
    <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" />
  </svg>
);
export const IconSearch = (p) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
    <circle cx="10.5" cy="10.5" r="6.5" /><path d="M20 20l-4.3-4.3" />
  </svg>
);
export const IconWhatsapp = (p) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
    <path d="M20.5 12a8.5 8.5 0 1 1-3.9-7.15" /><path d="M20.5 3.5l-4.6 4.6" />
  </svg>
);
export const IconMail = (p) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" />
  </svg>
);
export const IconGlobe = (p) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" {...p}>
    <circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" />
  </svg>
);
export const IconPhone = (p) => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" {...p}>
    <path d="M4 5a1 1 0 0 1 1-1h3l2 5-2 1.5a11 11 0 0 0 5.5 5.5L15 15l5 2v3a1 1 0 0 1-1 1A16 16 0 0 1 4 6V5z" />
  </svg>
);
