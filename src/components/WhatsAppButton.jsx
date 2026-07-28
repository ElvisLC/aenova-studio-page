import React from 'react';
import { WA_LINK } from '../constants.js';
import { IconWhatsapp } from './Icons.jsx';

export default function WhatsAppButton() {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="whatsapp-float">
      <IconWhatsapp />
    </a>
  );
}
