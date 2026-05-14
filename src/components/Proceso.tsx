import { motion } from 'framer-motion'

export default function Proceso() {
  const steps = [
    {
      number: '01',
      title: 'Descubrimiento',
      description:
        'Entendemos tu negocio, tus usuarios y tus objetivos antes de diseñar o escribir una sola línea de código.',
    },
    {
      number: '02',
      title: 'Propuesta y Planificación',
      description:
        'Te presentamos el alcance, los tiempos y el costo con claridad total. Sin letra pequeña, sin costos ocultos.',
    },
    {
      number: '03',
      title: 'Diseño y Desarrollo',
      description:
        'Trabajamos en sprints con entregas parciales. Ves el progreso en tiempo real y puedes dar feedback en cada etapa.',
    },
    {
      number: '04',
      title: 'Entrega y Soporte',
      description:
        'Lanzamos cuando está perfecto. Y seguimos disponibles después del lanzamiento porque los proyectos buenos no terminan en la entrega.',
    },
  ]

  return (
    <section id="proceso" className="py-20 px-6 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--brand-mint)] mb-4">
            Proceso
          </span>
          <h2 className="text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
            Sin sorpresas. Sin retrasos. Sin excusas.
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mx-auto">
            Un proceso claro de cuatro pasos que mantiene al cliente informado
            en cada etapa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-[var(--border-base)]" />
              )}

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--brand-mint)]/10 border border-[var(--brand-mint)] flex items-center justify-center">
                    <span className="text-sm font-bold text-[var(--brand-mint)]">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}