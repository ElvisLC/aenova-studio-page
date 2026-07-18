import { useState, useRef, useEffect, type ReactNode } from 'react'
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
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

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
              <div className="relative" ref={dropdownRef}>
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
