export const DEFAULT_LOCALE = 'es';

export const ROUTES = [
  { key: 'home', es: '/', en: '/en/' },
  { key: 'about', es: '/nosotros', en: '/en/about' },
  { key: 'services', es: '/servicios', en: '/en/services' },
  { key: 'development', es: '/desarrollo', en: '/en/development' },
  { key: 'design', es: '/diseno', en: '/en/design' },
  { key: 'contact', es: '/contacto', en: '/en/contact' }
];

export function getLocaleFromPath(pathname) {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es';
}

export function getRouteByPath(pathname) {
  return ROUTES.find((r) => r.es === pathname || r.en === pathname) || null;
}

export function getSiblingPath(pathname, targetLocale) {
  const route = getRouteByPath(pathname);
  if (route) return route[targetLocale];
  return targetLocale === 'en' ? ROUTES[0].en : ROUTES[0].es;
}

export function localizePath(key, locale) {
  const route = ROUTES.find((r) => r.key === key);
  if (!route) return locale === 'en' ? ROUTES[0].en : ROUTES[0].es;
  return route[locale];
}
