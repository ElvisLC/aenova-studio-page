import React, { createContext, useContext, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { getLocaleFromPath, localizePath } from './routes.js';

const LocaleContext = createContext('es');

export function LocaleProvider({ children }) {
  const { pathname } = useLocation();
  const locale = useMemo(() => getLocaleFromPath(pathname), [pathname]);
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useT(dictionary) {
  const locale = useLocale();
  return dictionary[locale];
}

export function useLocalizedPath(key) {
  const locale = useLocale();
  return localizePath(key, locale);
}
