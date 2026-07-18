import { motion } from 'framer-motion'
import { ArrowRight, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen px-6 bg-[var(--bg-base)] relative overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="text-white mb-6">
              ¿Cansado de coordinar<br />
              <span className="text-[var(--brand-mint)]">
                diseñadores y desarrolladores
              </span><br />
              que no se hablan?
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div style={{ textAlign: 'center', width: '100%' }}>
              <p
                className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl leading-relaxed"
                style={{ display: 'inline-block', textAlign: 'center' }}
              >
                Nosotros diseñamos y desarrollamos todo acá mismo. Una sola reunión, un solo equipo, un resultado que hace match.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contacto"
              className="x-cut inline-flex items-center gap-3 bg-[var(--brand-mint)] text-black px-8 py-4 text-base font-semibold hover:bg-transparent hover:text-[var(--brand-mint)] border-2 border-[var(--brand-mint)] transition-all duration-150 active:scale-[0.97]"
            >
              <span>Empieza tu proyecto sin riesgo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#portafolio"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--border-strong)] text-white font-medium hover:border-[var(--brand-mint)] hover:text-[var(--brand-mint)] transition-all duration-150"
            >
              <Globe className="w-4 h-4" />
              Ver nuestro trabajo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
