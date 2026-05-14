import { motion } from 'framer-motion'
import { ArrowRight, PenTool, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-20 px-6 bg-[var(--brand-navy)] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(93,228,199,0.08)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(93,228,199,0.06)_0%,transparent_40%)]" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-[var(--brand-mint)] rounded-full blur-[150px] opacity-15" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[var(--brand-mint)] rounded-full blur-[180px] opacity-8" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight"
          >
            Tu marca merece ser{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-mint)] to-[#4ade80]">
              tan buena
            </span>{' '}
            como tu producto.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Convertimos ideas en productos digitales que se ven profesionales,
            funcionan perfecto y crecen con tu negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-3 bg-[var(--brand-mint)] text-[var(--bg-base)] px-8 py-4 rounded-full text-base font-semibold hover:shadow-[0_0_35px_rgba(93,228,199,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Empieza tu proyecto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portafolio"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--border-strong)] text-white font-medium hover:border-[var(--brand-mint)] hover:text-[var(--brand-mint)] hover:bg-[var(--brand-mint)]/5 transition-all duration-200"
            >
              <Globe className="w-4 h-4" />
              Ver nuestro trabajo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-2 text-sm text-[var(--text-muted)]"
          >
            <div className="flex -space-x-2">
              {[
                { icon: '✓', color: 'bg-[var(--brand-mint)]/20 border-[var(--brand-mint)]/30' },
                { icon: '✓', color: 'bg-[var(--brand-mint)]/20 border-[var(--brand-mint)]/30' },
                { icon: '✓', color: 'bg-[var(--brand-mint)]/20 border-[var(--brand-mint)]/30' },
                { icon: '✓', color: 'bg-[var(--brand-mint)]/20 border-[var(--brand-mint)]/30' },
                { icon: '✓', color: 'bg-[var(--brand-mint)]/20 border-[var(--brand-mint)]/30' },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full border-2 border-[var(--brand-navy)] ${item.color} flex items-center justify-center text-[10px] font-bold text-[var(--brand-mint)]`}
                >
                  {item.icon}
                </div>
              ))}
            </div>
            <span className="ml-3">
              <span className="text-[var(--brand-mint)] font-semibold">20+</span> proyectos completados
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20 relative"
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-mint)] to-[var(--brand-mint)] rounded-2xl blur opacity-20" />
            <div className="relative bg-[var(--bg-surface)] border border-[var(--border-base)] rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-[var(--bg-elevated)] border-b border-[var(--border-base)]">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div className="ml-4 px-3 py-1 bg-[var(--bg-surface)] rounded-md text-xs text-[var(--text-muted)] font-mono">
                  aenova.studio
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-base)] hover:border-[var(--border-mint)] hover:shadow-[0_0_20px_var(--action-glow)] transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[var(--brand-mint)]/15 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-[var(--brand-mint)]" />
                      </div>
                      <span className="text-xs font-medium text-[var(--brand-mint)] uppercase tracking-wider">Desarrollo</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--brand-mint)] transition-colors">
                      Código limpio y escalable
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      Construimos aplicaciones robustas con arquitectura sólida que crece con tu negocio.
                    </p>
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-base)] hover:border-[var(--border-mint)] hover:shadow-[0_0_20px_var(--action-glow)] transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-[var(--brand-mint)]/15 flex items-center justify-center">
                        <PenTool className="w-4 h-4 text-[var(--brand-mint)]" />
                      </div>
                      <span className="text-xs font-medium text-[var(--brand-mint)] uppercase tracking-wider">Diseño</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--brand-mint)] transition-colors">
                      Experiencias visuales únicas
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      Creamos interfaces que cautivan, funcionan intuitivamente y potencian tu marca.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}