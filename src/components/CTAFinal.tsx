import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Clock, Zap } from 'lucide-react'

export default function CTAFinal() {
  return (
    <section id="contacto" className="py-24 px-6 bg-[var(--bg-surface)] relative overflow-hidden border-y border-[var(--border-mint)]">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[var(--brand-mint)] opacity-10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-8 text-center"
        >
          <div className="space-y-3">
            <span className="inline-block text-sm font-medium text-[var(--brand-mint)] uppercase tracking-wider">
              Siguiente paso
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] font-semibold leading-tight">
              Tu próximo proyecto<br className="hidden md:block" /> empieza con una conversación
            </h2>
          </div>

<p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto text-center">
            Sin compromisos. Cuéntanos qué necesitas y te diremos cómo podemos ayudarte.
          </p>

          <div className="pt-4">
            <a
              href="mailto:hola@aenova.studio"
              className="inline-flex items-center gap-3 bg-[var(--brand-mint)] text-[var(--brand-navy)] px-8 py-4 rounded-full text-base font-semibold hover:bg-[var(--action-hover)] transition-all duration-150 hover:scale-[1.02] active:scale-[0.97] hover:shadow-[0_0_30px_rgba(93,228,199,0.4)]"
            >
              <MessageSquare className="w-5 h-5" />
              Hablar con el equipo
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6">
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Clock className="w-4 h-4 text-[var(--brand-mint)]" />
              <span>Respuesta en menos de 24 horas</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <Zap className="w-4 h-4 text-[var(--brand-mint)]" />
              <span>Sin costos de consulta inicial</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}