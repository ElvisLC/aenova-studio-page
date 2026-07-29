import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, DEFAULT_OG_IMAGE } from '../constants.js';
import { useLocale } from '../i18n/LocaleContext.jsx';
import { ROUTES } from '../i18n/routes.js';

export default function Seo({ title, description, pageKey, image = DEFAULT_OG_IMAGE }) {
  const locale = useLocale();
  const route = ROUTES.find((r) => r.key === pageKey);
  const path = route ? route[locale] : '/';
  const url = `${SITE_URL}${path}`;
  const esUrl = `${SITE_URL}${route ? route.es : '/'}`;
  const enUrl = `${SITE_URL}${route ? route.en : '/en/'}`;
  const ogLocale = locale === 'en' ? 'en_US' : 'es_VE';

  return (
    <Helmet htmlAttributes={{ lang: locale }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="es" href={esUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={esUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={ogLocale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
