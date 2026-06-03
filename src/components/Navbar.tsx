import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

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

  // Close mobile menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const navLinks = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Clientes', href: '#clientes' },
  ]

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        staggerChildren: 0.08,
        delayChildren: 0.15
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, y: -12 },
    open: { opacity: 1, y: 0 }
  }

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
            className="lg:hidden p-2 hover:bg-[var(--bg-surface)] rounded-lg transition-colors flex items-center justify-center w-10 h-10 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[var(--text-primary)]">
              <motion.line
                x1="2" y1="5" x2="18" y2="5"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                animate={{ 
                  rotate: isMobileMenuOpen ? 45 : 0, 
                  y: isMobileMenuOpen ? 5 : 0,
                  x: isMobileMenuOpen ? 2 : 0 
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ originX: "2px", originY: "5px" }}
              />
              <motion.line
                x1="2" y1="10" x2="18" y2="10"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.line
                x1="2" y1="15" x2="18" y2="15"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                animate={{ 
                  rotate: isMobileMenuOpen ? -45 : 0, 
                  y: isMobileMenuOpen ? -5 : 0,
                  x: isMobileMenuOpen ? 2 : 0 
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ originX: "2px", originY: "15px" }}
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-x-0 top-20 h-[calc(100vh-5rem)] bg-[var(--bg-base)]/98 backdrop-blur-2xl border-t border-[var(--border-base)] lg:hidden flex flex-col justify-between p-8 z-40 overflow-y-auto"
          >
            <div className="flex flex-col gap-8">
              <div className="space-y-2 text-left">
                <span className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.2em]">
                  Navegación
                </span>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      variants={itemVariants}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-4 text-[var(--text-primary)] font-semibold text-2xl hover:text-[var(--brand-mint)] transition-colors duration-200 border-b border-[var(--border-base)]/40 flex items-center justify-between group"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[var(--brand-mint)] transition-all duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.a
                variants={itemVariants}
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-[var(--brand-mint)] text-[var(--bg-base)] py-4 rounded-full text-center font-bold text-base hover:shadow-[0_0_30px_rgba(93,228,199,0.5)] active:scale-[0.98] transition-all duration-300 block"
              >
                Iniciar proyecto
              </motion.a>
            </div>

            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t border-[var(--border-base)]/60 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2 text-left">
                <span className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                  Escríbenos
                </span>
                <a
                  href="mailto:hola@aenova.studio"
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-mint)] transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[var(--brand-mint)]" />
                  hola@aenova.studio
                </a>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-[var(--text-muted)]">
                  © 2026 Aenova Studio
                </span>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-[var(--border-base)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--brand-mint)] hover:text-[var(--brand-mint)] transition-all duration-200"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-[var(--border-base)] flex items-center justify-center text-[var(--text-muted)] hover:border-[var(--brand-mint)] hover:text-[var(--brand-mint)] transition-all duration-200"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}