import { motion } from 'framer-motion'
import { Layers, Code2, Zap } from 'lucide-react'

export default function Valor() {
  const cards = [
    {
      icon: Layers,
      title: 'Diseño con intención',
      description:
        'Cada decisión visual tiene un porqué. No hacemos bonito por hacer bonito — diseñamos para que tu usuario entienda, confíe y actúe.',
    },
    {
      icon: Code2,
      title: 'Desarrollo que escala',
      description:
        'Escribimos código limpio, bien estructurado y documentado. Tu producto puede crecer sin que tengamos que tirarlo y empezar de cero.',
    },
    {
      icon: Zap,
      title: 'Un equipo, no una cadena',
      description:
        'Diseñador y desarrollador trabajan juntos desde el día uno. Sin malentendidos entre equipos, sin retrasos por handoffs mal hechos.',
    },
  ]

  return (
    <section className="py-20 px-6 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--brand-mint)] mb-4">
            Por qué Aenova
          </span>
          <h2 className="text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
            Un estudio que entiende tanto el píxel como el código
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl w-full center-text-override">
            No tercerizamos ni fragmentamos tu proyecto. Diseño y desarrollo bajo
            el mismo techo significa menos fricciones, más coherencia y entregas
            más rápidas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -4 }}
              className="group p-8 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-base)] hover:border-[var(--border-mint)] hover:shadow-[0_0_30px_var(--action-glow)] transition-all duration-200 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--brand-mint)]/10 border border-[var(--brand-mint)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--brand-mint)]/20 transition-colors duration-200">
                <card.icon className="w-6 h-6 text-[var(--brand-mint)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
                {card.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}