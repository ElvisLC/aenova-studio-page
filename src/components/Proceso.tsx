import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'



export default function Proceso() {
  const [activeIndex, setActiveIndex] = useState(0)

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
      glowColor: '#5de4c7', // Mint
      graphicType: 'discovery',
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
      glowColor: '#863bff', // Purple
      graphicType: 'planning',
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
      glowColor: '#00f2fe', // Cyan
      graphicType: 'design-dev',
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
      glowColor: '#ff5e62', // Coral
      graphicType: 'delivery',
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
          <p className="text-lg text-[var(--text-secondary)] mx-auto max-w-xl center-text-override">
            Un proceso claro de cuatro pasos que mantiene al cliente informado en cada etapa a través de hitos conectados.
          </p>
        </motion.div>

        {/* DESKTOP LAYOUT: Horizontal Timeline (4 columns) */}
        <div className="hidden lg:block relative mt-20">
          {/* Horizontal line track */}
          <div className="absolute top-[27px] left-[12.5%] right-[12.5%] h-[2px] bg-[var(--border-base)]" />
          
          {/* Active connecting horizontal track */}
          <div className="absolute top-[27px] left-[12.5%] right-[12.5%] h-[2px]">
            <motion.div
              className="h-full bg-gradient-to-r from-[var(--brand-mint)] via-[#863bff] to-[#00f2fe]"
              initial={{ width: '0%' }}
              animate={{ width: activeIndex !== null ? `${(activeIndex / 3) * 100}%` : '0%' }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step, index) => {
              const isActive = activeIndex === index || (activeIndex !== null && index <= activeIndex)
              const isCurrent = activeIndex === index
              
              return (
                <div 
                  key={step.id} 
                  className="flex flex-col group cursor-pointer"
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(3)} // Default to end or last known
                >
                  {/* Node */}
                  <div className="flex justify-center mb-8 relative">
                    <motion.div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center border-2 font-mono text-sm font-bold transition-colors duration-300 ${
                        isActive 
                          ? 'bg-[var(--bg-surface)] border-[var(--brand-mint)] text-white shadow-[0_0_15px_rgba(93,228,199,0.4)]' 
                          : 'bg-[var(--bg-base)] border-[var(--border-base)] text-[var(--text-muted)] group-hover:border-[var(--text-muted)]'
                      }`}
                      animate={isCurrent ? { scale: 1.1 } : { scale: 1 }}
                    >
                      {step.id}
                    </motion.div>
                  </div>
                  
                  {/* Card Content */}
                  <div className={`flex-1 bg-[var(--bg-surface)]/40 backdrop-blur-sm border rounded-3xl p-6 transition-all duration-300 flex flex-col ${
                    isActive ? 'border-[var(--brand-mint)]/40 bg-[var(--bg-surface)]/80 -translate-y-2 shadow-[0_10px_30px_rgba(0,0,0,0.2)]' : 'border-[var(--border-base)] group-hover:border-[var(--text-muted)]'
                  }`}>
                    <h3 className={`text-xl font-bold mb-3 text-center transition-colors duration-300 ${isActive ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed text-center mb-6">
                      {step.description}
                    </p>
                    
                    {/* Deliverables checklist */}
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

        {/* MOBILE LAYOUT: Vertical Timeline Cards */}
        <div className="lg:hidden flex flex-col gap-6 mt-12 relative pl-10 pr-2">
          {/* Vertical line runner */}
          <div className="absolute left-[23px] top-[24px] bottom-[24px] w-[2px] bg-[var(--border-base)]" />
          
          <div className="absolute left-[23px] top-[24px] bottom-[24px] w-[2px]">
            <motion.div
              className="w-full bg-gradient-to-b from-[var(--brand-mint)] via-[#863bff] to-[#00f2fe]"
              initial={{ height: '0%' }}
              animate={{ height: activeIndex !== null ? `${(activeIndex / 3) * 100}%` : '0%' }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            />
          </div>
          
          {steps.map((step, index) => {
            const isActive = activeIndex === index || (activeIndex !== null && index <= activeIndex)
            const isCurrent = activeIndex === index

            return (
              <div
                key={step.title}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                {/* Circle Node absolute left */}
                <motion.div
                  className={`absolute left-[-41px] top-4 w-10 h-10 rounded-full flex items-center justify-center border-2 font-mono text-[11px] font-bold z-10 transition-colors duration-300 ${
                    isActive
                      ? 'bg-[var(--bg-surface)] border-[var(--brand-mint)] text-white shadow-[0_0_12px_rgba(93,228,199,0.4)]'
                      : 'bg-[var(--bg-base)] border-[var(--border-base)] text-[var(--text-muted)]'
                  }`}
                  animate={isCurrent ? { scale: 1.1 } : { scale: 1 }}
                >
                  {step.id}
                </motion.div>

                {/* Card */}
                <div className={`bg-[var(--bg-surface)]/40 border rounded-2xl p-5 transition-all duration-300 flex flex-col ${
                  isActive ? 'border-[var(--brand-mint)]/40 bg-[var(--bg-surface)]/80 shadow-[0_8px_25px_rgba(0,0,0,0.15)]' : 'border-[var(--border-base)]'
                }`}>
                  <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[var(--text-secondary)]'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
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