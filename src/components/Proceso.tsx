import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Proceso() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const totalHeight = rect.bottom - rect.top

      if (totalHeight <= 0) return

      const scrolled = windowHeight - rect.top
      const totalScrollable = totalHeight + windowHeight

      if (scrolled <= 0) {
        setActiveIndex(0)
        return
      }

      if (scrolled >= totalScrollable - windowHeight) {
        setActiveIndex(3)
        return
      }

      const rawProgress = scrolled / totalScrollable
      const index = Math.min(3, Math.floor(rawProgress * 4))
      setActiveIndex(index)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const steps = [
    {
      id: '01',
      title: 'Descubrimiento',
      description:
        'Entendemos tu negocio, tus usuarios y tus objetivos antes de diseñar o escribir una sola línea de código.',
      deliverables: [
        'Entrevistas de alineación inicial',
        'Análisis estratégico de competencia',
        'Investigación de usuarios finales',
        'Definición de requerimientos del sistema',
      ],
    },
    {
      id: '02',
      title: 'Propuesta y Planificación',
      description:
        'Te presentamos el alcance, los tiempos y el costo con claridad total. Sin letra pequeña, sin costos ocultos.',
      deliverables: [
        'Roadmap claro de hitos del proyecto',
        'Presupuesto y cronograma cerrados',
        'Arquitectura de información inicial',
        'Acuerdos de nivel de servicio (SLA)',
      ],
    },
    {
      id: '03',
      title: 'Diseño y Desarrollo',
      description:
        'Trabajamos en sprints con entregas parciales. Ves el progreso en tiempo real y puedes dar feedback en cada etapa.',
      deliverables: [
        'Diseño UI/UX (Prototipos Figma)',
        'Desarrollo Frontend y Backend robusto',
        'Demos e iteración rápida semanal',
        'Pruebas y control de calidad riguroso',
      ],
    },
    {
      id: '04',
      title: 'Entrega y Soporte',
      description:
        'Lanzamos cuando está perfecto. Y seguimos disponibles después del lanzamiento porque los proyectos buenos no terminan en la entrega.',
      deliverables: [
        'Puesta en marcha en producción (Go-Live)',
        'Capacitación de uso de herramientas',
        'Optimización SEO y rendimiento inicial',
        'Garantía activa posventa de soporte',
      ],
    },
  ]

  return (
    <section id="proceso" ref={sectionRef} className="py-20 px-6 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 w-full"
        >
          <span className="inline-block text-xs font-mono font-semibold text-[var(--brand-mint)] uppercase tracking-widest mb-4">
            Proceso
          </span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Sin sorpresas. Sin retrasos. Sin excusas.
          </h2>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.75rem', display: 'inline-block' }}>
              Un solo equipo, una sola reunión, una ejecución impecable. Así funciona trabajar con nosotros.
            </p>
          </div>
        </motion.div>

        <div className="hidden lg:block relative mt-20">
          <div className="absolute top-[27px] left-[12.5%] right-[12.5%] h-0.5 bg-[var(--border-base)]" />

          <div className="absolute top-[27px] left-[12.5%] right-[12.5%] h-0.5">
            <motion.div
              className="h-full bg-[var(--brand-mint)]"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeIndex / 3) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const isActive = index <= activeIndex
              const isCurrent = activeIndex === index

              return (
                <div
                  key={step.id}
                  className="flex flex-col"
                >
                  <div className="flex justify-center mb-8 relative">
                    <motion.div
                      className={`w-14 h-14 flex items-center justify-center border-2 font-mono text-sm font-bold transition-colors duration-300 ${
                        isActive
                          ? 'bg-[var(--bg-surface)] border-[var(--brand-mint)] text-white'
                          : 'bg-[var(--bg-base)] border-[var(--border-base)] text-[var(--text-muted)]'
                      }`}
                      animate={isCurrent ? { scale: 1.1 } : { scale: 1 }}
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  <div className={`flex-1 bg-[var(--bg-surface)] border-2 p-6 transition-all duration-300 flex flex-col ${
                    isActive ? 'border-[var(--brand-mint)] bg-[var(--bg-surface)] -translate-y-2' : 'border-[var(--border-base)]'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-3 text-center transition-colors duration-300 ${isActive ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed text-center mb-6">
                      {step.description}
                    </p>

                    <div className="space-y-2 mb-6 flex-1">
                      {step.deliverables.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${isActive ? 'text-[var(--brand-mint)]' : 'text-[var(--text-muted)]'}`} strokeWidth={3} />
                          <span className="text-xs text-[var(--text-secondary)] leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="lg:hidden flex flex-col gap-6 mt-12 relative pl-10 pr-2">
          <div className="absolute left-[23px] top-[24px] bottom-[24px] w-0.5 bg-[var(--border-base)]" />

          <div className="absolute left-[23px] top-[24px] bottom-[24px] w-0.5">
            <motion.div
              className="w-full bg-[var(--brand-mint)]"
              initial={{ height: '0%' }}
              animate={{ height: `${(activeIndex / 3) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>

          {steps.map((step, index) => {
            const isActive = index <= activeIndex
            const isCurrent = activeIndex === index

            return (
              <div
                key={step.title}
                className="relative"
              >
                <motion.div
                  className={`absolute left-[-41px] top-4 w-10 h-10 flex items-center justify-center border-2 font-mono text-[11px] font-bold z-10 transition-colors duration-300 ${
                    isActive
                      ? 'bg-[var(--bg-surface)] border-[var(--brand-mint)] text-white'
                      : 'bg-[var(--bg-base)] border-[var(--border-base)] text-[var(--text-muted)]'
                  }`}
                  animate={isCurrent ? { scale: 1.1 } : { scale: 1 }}
                >
                  {step.id}
                </motion.div>

                <div className={`bg-[var(--bg-surface)] border-2 p-5 transition-all duration-300 flex flex-col ${
                  isActive ? 'border-[var(--brand-mint)] bg-[var(--bg-surface)]' : 'border-[var(--border-base)]'
                }`}>
                  <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 text-center">
                    {step.description}
                  </p>

                  <div className="flex justify-between items-end pt-4 mt-auto">
                    <div className="space-y-1.5 flex-1 pr-4">
                      {step.deliverables.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <Check className={`w-3 h-3 mt-0.5 flex-shrink-0 ${isActive ? 'text-[var(--brand-mint)]' : 'text-[var(--text-muted)]'}`} strokeWidth={3} />
                          <span className="text-[10px] text-[var(--text-secondary)] leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
