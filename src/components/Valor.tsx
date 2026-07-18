import { motion } from 'framer-motion'
import { Globe, Cpu, Palette } from 'lucide-react'

const cards = [
  {
    id: '01',
    icon: Globe,
    title: 'Web + Apps a Medida',
    description:
      'Landing pages que convierten, plataformas web completas, sistemas internos y productos SaaS construidos con tecnología moderna y arquitectura sólida.',
    points: [
      'Landing pages optimizadas para conversión',
      'Aplicaciones web a medida y dashboards',
      'SaaS escalables con integraciones vía API',
      'Rendimiento y seguridad desde el día uno',
    ],
  },
  {
    id: '02',
    icon: Cpu,
    title: 'Automatización que Escala',
    description:
      'Deja que las máquinas hagan el trabajo repetitivo. Automatizamos procesos, flujos de datos, reportes y tareas operativas para que tu equipo se enfoque en crecer.',
    points: [
      'Automatización de procesos y flujos de datos',
      'Reportes e informes generados sin intervención',
      'Integración entre herramientas (APIs, webhooks)',
      'Menos errores humanos, más eficiencia operativa',
    ],
  },
  {
    id: '03',
    icon: Palette,
    title: 'Identidad + Diseño Gráfico',
    description:
      'Tu marca merece verse profesional en todos lados. Creamos identidades visuales, UI/UX para productos digitales y piezas gráficas para redes, impresos y presentaciones.',
    points: [
      'Identidad visual completa y manual de marca',
      'Diseño UI/UX para web y aplicaciones',
      'Piezas para redes sociales y marketing',
      'Dirección de arte coherente en todo soporte',
    ],
  },
]

export default function Valor() {
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
          <span className="inline-block text-xs font-mono font-semibold text-[var(--brand-mint)] uppercase tracking-widest mb-4">
            Por qué Aenova
          </span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Todo lo que necesitas para crecer, en un solo estudio
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Web, apps, automatizaciones, diseño gráfico e identidad visual.
            Un solo equipo, un solo interlocutor, sin tercerizar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="x-cut bg-[var(--bg-surface)] border-2 border-[var(--border-base)] p-8 flex flex-col hover:border-[var(--brand-mint)] transition-all duration-200 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-[var(--brand-mint)]/10 border-2 border-[var(--brand-mint)]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-mint)]/20 transition-colors duration-200">
                    <Icon className="w-5 h-5 text-[var(--brand-mint)]" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[var(--brand-mint)] tracking-wider">
                    {card.id}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {card.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  {card.description}
                </p>

                <ul className="space-y-2 mt-auto">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--text-muted)]">
                      <span className="w-1.5 h-1.5 bg-[var(--brand-mint)] mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
