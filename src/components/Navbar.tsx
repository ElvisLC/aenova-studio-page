import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Clientes', href: '#clientes' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[var(--bg-base)]/90 backdrop-blur-xl border-b border-[var(--border-base)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/aenova.jfif" 
            alt="Aenova Studio" 
            className="h-10 w-auto rounded-full transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--brand-mint)] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center gap-2 bg-[var(--brand-mint)] text-[var(--bg-base)] px-5 py-2.5 rounded-full text-sm font-semibold hover:shadow-[0_0_25px_rgba(93,228,199,0.4)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Iniciar proyecto
          </a>

          <button
            className="lg:hidden p-2 hover:bg-[var(--bg-surface)] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--text-primary)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--text-primary)]" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[var(--bg-surface)]/98 backdrop-blur-xl border-b border-[var(--border-base)]"
          >
            <div className="px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-4 px-4 text-[var(--text-primary)] font-medium text-lg hover:bg-[var(--bg-elevated)] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 bg-[var(--brand-mint)] text-[var(--bg-base)] px-5 py-4 rounded-full text-center font-semibold"
              >
                Iniciar proyecto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}