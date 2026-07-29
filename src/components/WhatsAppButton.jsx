import React from 'react';
import { getWaLink } from '../constants.js';
import { useLocale } from '../i18n/LocaleContext.jsx';
import { IconWhatsapp } from './Icons.jsx';

export default function WhatsAppButton() {
  const locale = useLocale();
  return (
    <a href={getWaLink(locale)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="whatsapp-float">
      <IconWhatsapp />
    </a>
  );
}
