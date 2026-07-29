const WA_MESSAGE = {
  es: 'Hola Aenova Studio, quiero cotizar un proyecto',
  en: 'Hi Aenova Studio, I would like to get a quote for a project'
};

export function getWaLink(locale) {
  return 'https://wa.me/584143778737?text=' + encodeURIComponent(WA_MESSAGE[locale] || WA_MESSAGE.es);
}

export const SITE_URL = 'https://aenovastudio.com';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/aenova-logo.png`;
