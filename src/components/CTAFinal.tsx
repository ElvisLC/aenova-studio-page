import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Clock, Shield } from 'lucide-react'

export default function CTAFinal() {
  return (
    <section id="contacto" className="py-24 px-6 bg-[var(--bg-surface)] border-y-2 border-[var(--border-mint)]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-8 text-center"
        >
          <div className="space-y-3">
            <span className="inline-block text-xs font-mono font-semibold text-[var(--brand-mint)] uppercase tracking-widest">
              Sin riesgos
            </span>
            <h2 className="text-[var(--text-primary)]">
              Tu próximo proyecto<br className="hidden md:block" /> empieza con una conversación
            </h2>
          </div>

          <div className="x-cut bg-[var(--brand-mint)]/5 border-2 border-[var(--brand-mint)]/20 p-6 max-w-lg mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-5 h-5 text-[var(--brand-mint)] flex-shrink-0" />
              <p className="font-mono text-sm font-semibold text-[var(--brand-mint)] uppercase tracking-wider">
                Garantía Aenova
              </p>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Si el primer entregable no te convence, no pagas. Así de simple.
            </p>
          </div>

          <div style={{ textAlign: 'center', width: '100%' }}>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-md" style={{ display: 'inline-block', textAlign: 'center' }}>
              Cuéntanos qué necesitas y te diremos cómo podemos ayudarte. Sin compromiso, sin costo.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="mailto:hola@aenova.studio"
              className="x-cut inline-flex items-center gap-3 bg-[var(--brand-mint)] text-black px-8 py-4 text-base font-semibold hover:bg-transparent hover:text-[var(--brand-mint)] border-2 border-[var(--brand-mint)] transition-all duration-150 active:scale-[0.97]"
            >
              <MessageSquare className="w-5 h-5" />
              Empieza tu proyecto sin riesgo
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-[var(--text-muted)] pt-6">
            <Clock className="w-4 h-4 text-[var(--brand-mint)]" />
            <span>Respuesta en menos de 24 horas</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
