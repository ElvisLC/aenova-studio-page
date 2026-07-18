import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MessageCircle, ArrowRight, ChevronDown, ArrowUpRight, Code2, Palette } from 'lucide-react'

interface ContactCardProps {
  href: string
  phone: string
  role: string
  name: string
  icon: ReactNode
  onClick?: () => void
}

function WhatsAppContactCard({ href, phone, role, name, icon, onClick }: ContactCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="group block p-3 hover:bg-white/[0.03] transition-all duration-300 relative overflow-hidden"
    >
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-8 h-8 bg-[var(--brand-mint)]/5 border-2 border-[var(--brand-mint)]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-mint)]/10 transition-all duration-300">
          {icon}
        </div>
        <div className="min-w-0 flex-grow">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold text-[var(--text-primary)] tracking-wide group-hover:text-[var(--brand-mint)] transition-colors duration-300">
              {name}
            </span>
            <span className="inline-block w-1 h-1 bg-[#25D366]" />
          </div>
          <p className="text-[9px] text-[var(--text-muted)] mt-0.5 font-medium uppercase tracking-wider">
            {role}
          </p>
          <p className="text-xs text-[var(--text-secondary)] mt-0.5 font-mono font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            {phone}
          </p>
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--brand-mint)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100 flex-shrink-0" />
      </div>
    </a>
  )
}

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false)

  const servicios = [
    { label: 'Desarrollo de Apps Web', href: '#servicios' },
    { label: 'Desarrollo de Landing Pages', href: '#servicios' },
    { label: 'Desarrollo de Logo', href: '#servicios' },
    { label: 'Creación de Identidad Visual', href: '#servicios' },
    { label: 'Optimización SEO', href: '#servicios' },
    { label: 'Consultoría Digital', href: '#servicios' },
  ]

  const empresa = [
    { label: 'Sobre nosotros', href: '#' },
    { label: 'Nuestro proceso', href: '#proceso' },
    { label: 'Portafolio', href: '#portafolio' },
  ]

  return (
    <footer className="bg-[var(--bg-base)] border-t-2 border-[var(--border-base)]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:pr-8"
          >
            <a href="#" className="inline-block">
              <img 
                src="/aenova-logo.png" 
                alt="Aenova Studio" 
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-4 text-sm text-[var(--text-muted)] leading-relaxed">
              Diseño y desarrollo para empresas que quieren crecer.
            </p>

            <div className="mt-6 flex flex-col gap-3 relative">
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-2.5 text-sm font-semibold hover:bg-[#20BD5A] transition-all duration-150 active:scale-[0.97]"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chatear
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <>
                      <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95, x: '-50%' }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
                        exit={{ opacity: 0, y: 10, scale: 0.95, x: '-50%' }}
                        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                        className="absolute left-1/2 bottom-full mb-3 w-[270px] bg-[var(--bg-surface)] border-2 border-[var(--border-base)] p-2 z-20 flex flex-col gap-1.5"
                      >
                        <div className="px-3 pt-2 pb-1">
                          <p className="text-[9px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-widest">
                            Canales de contacto
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <WhatsAppContactCard
                            href="https://wa.me/584143778737"
                            phone="+58 414-3778737"
                            name="Informática y Código"
                            role="Desarrollo Web"
                            icon={<Code2 className="w-4 h-4 text-[var(--brand-mint)]" />}
                            onClick={() => setIsOpen(false)}
                          />
                          <WhatsAppContactCard
                            href="https://wa.me/584241405402"
                            phone="+58 424-1405402"
                            name="Diseño Gráfico"
                            role="Identidad y UI/UX"
                            icon={<Palette className="w-4 h-4 text-[var(--brand-mint)]" />}
                            onClick={() => setIsOpen(false)}
                          />
                        </div>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="mailto:hola@aenova.studio"
                className="inline-flex items-center justify-center gap-2 bg-[var(--bg-elevated)] border-2 border-[var(--border-base)] text-[var(--text-primary)] px-5 py-2.5 text-sm font-medium hover:border-[var(--brand-mint)] hover:text-[var(--brand-mint)] transition-all duration-150"
              >
                <Mail className="w-4 h-4" />
                Enviar email
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border-2 border-[var(--border-base)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--brand-mint)] hover:text-[var(--brand-mint)] transition-all duration-150"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border-2 border-[var(--border-base)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--brand-mint)] hover:text-[var(--brand-mint)] transition-all duration-150"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border-2 border-[var(--border-base)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--brand-mint)] hover:text-[var(--brand-mint)] transition-all duration-150"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-3">
              {servicios.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-3">
              {empresa.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-4 uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hola@aenova.studio"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[var(--brand-mint)]" />
                  hola@aenova.studio
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/584143778737"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[var(--brand-mint)]" />
                  +58 414-3778737
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/584241405402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[var(--brand-mint)]" />
                  +58 424-1405402
                </a>
              </li>
              <li>
                <span className="text-sm text-[var(--text-muted)]">
                  Lun-Vie 9:00-18:00 (UTC-5)
                </span>
              </li>
              <li>
                <span className="text-sm text-[var(--text-muted)]">
                  Atención a clientes internacionales.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t-2 border-[var(--border-base)] pt-6 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-mono text-[var(--text-muted)]">
            © 2026 Aenova Studio. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
            >
              Política de privacidad
            </a>
            <a
              href="#"
              className="text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-150"
            >
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
