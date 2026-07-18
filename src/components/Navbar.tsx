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
    { label: 'Portafolio', href: '#portafolio' },
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
          ? 'bg-[var(--bg-base)] border-b-2 border-[var(--border-base)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <img 
            src="/aenova-logo.png" 
            alt="Aenova Studio" 
            className="h-10 w-auto"
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
            className="x-cut hidden md:inline-flex items-center gap-2 bg-[var(--brand-mint)] text-black px-5 py-2.5 text-sm font-semibold hover:bg-transparent hover:text-[var(--brand-mint)] border-2 border-[var(--brand-mint)] transition-all duration-150 active:scale-[0.97]"
          >
            Iniciar proyecto
          </a>

          <button
            className="lg:hidden p-2 border-2 border-[var(--border-base)] hover:border-[var(--brand-mint)] transition-colors flex items-center justify-center w-10 h-10 relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[var(--text-primary)]">
              <motion.line
                x1="2" y1="5" x2="18" y2="5"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"
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
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.line
                x1="2" y1="15" x2="18" y2="15"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="square"
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
            className="fixed inset-x-0 top-20 h-[calc(100vh-5rem)] bg-[var(--bg-base)] border-t-2 border-[var(--border-base)] lg:hidden flex flex-col justify-between p-8 z-40 overflow-y-auto"
          >
            <div className="flex flex-col gap-8">
              <div className="space-y-2">
                <span className="text-[10px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-[0.2em]">
                  Navegación
                </span>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      variants={itemVariants}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="py-4 text-[var(--text-primary)] font-semibold text-2xl hover:text-[var(--brand-mint)] transition-colors duration-200 border-b-2 border-[var(--border-base)] flex items-center justify-between group"
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
                className="x-cut w-full bg-[var(--brand-mint)] text-black py-4 text-center font-bold text-base hover:bg-transparent hover:text-[var(--brand-mint)] border-2 border-[var(--brand-mint)] active:scale-[0.98] transition-all duration-300 block"
              >
                Iniciar proyecto
              </motion.a>
            </div>

            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t-2 border-[var(--border-base)] flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-mono font-bold text-[var(--text-muted)] uppercase tracking-wider">
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
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  © 2026 Aenova Studio
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
