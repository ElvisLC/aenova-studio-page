import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layout, FileText, PenTool, Palette, Search, Lightbulb, ArrowRight, Check, ChevronDown } from 'lucide-react'

// Graphics Subcomponents for Desktop Showcase Card
function ServiceGraphic({ type }: { type: string }) {
  switch (type) {
    case 'web-app':
      return (
        <div className="w-full h-full flex flex-col gap-1.5 font-mono text-[8px] opacity-75">
          <div className="flex gap-1 items-center border-b border-white/10 pb-1 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
            <span className="text-[7px] text-white/30 ml-2">app.tsx</span>
          </div>
          <div className="text-[#5de4c7]">const App = () =&gt; &#123;</div>
          <div className="pl-3 text-blue-400">const [db] = useDatabase();</div>
          <div className="pl-3 text-purple-400">return &lt;Router /&gt;;</div>
          <div className="text-[#5de4c7]">&#125;</div>
        </div>
      )
    case 'landing':
      return (
        <div className="w-full h-full flex flex-col gap-1.5 opacity-75 relative">
          <div className="h-4 bg-white/5 border border-white/10 rounded-md flex items-center justify-between px-1.5">
            <div className="flex gap-0.5">
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="w-1 h-1 rounded-full bg-white/20" />
            </div>
            <div className="w-16 h-1 bg-white/20 rounded" />
          </div>
          <div className="flex-1 flex gap-2">
            <div className="flex-1 flex flex-col gap-1.5 pt-1">
              <div className="w-full h-2 bg-gradient-to-r from-[#5de4c7] to-[#4ade80] rounded" />
              <div className="w-4/5 h-1 bg-white/20 rounded" />
              <div className="w-3/5 h-1.5 bg-white/10 rounded" />
            </div>
            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-md flex items-center justify-center flex-shrink-0">
              <div className="w-6 h-3 bg-[#5de4c7]/20 rounded-full border border-[#5de4c7]/30 animate-pulse" />
            </div>
          </div>
        </div>
      )
    case 'logo':
      return (
        <div className="w-full h-full flex items-center justify-center opacity-75 relative">
          <div className="absolute inset-0 border border-dashed border-white/5 flex items-center justify-center pointer-events-none">
            <div className="w-full h-[0.5px] bg-white/5 absolute" />
            <div className="h-full w-[0.5px] bg-white/5 absolute" />
            <div className="w-14 h-14 rounded-full border border-dashed border-white/10" />
          </div>
          <svg className="w-10 h-10 text-[#5de4c7] relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 12h20L12 2z" strokeDasharray="3 3" />
            <circle cx="12" cy="2" r="2" fill="#0d1d31" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="2" cy="12" r="2" fill="#0d1d31" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="22" cy="12" r="2" fill="#0d1d31" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      )
    case 'identity':
      return (
        <div className="w-full h-full flex flex-col gap-2 justify-center items-center opacity-80">
          <div className="flex gap-2">
            <div className="w-5 h-5 rounded-full bg-[#5de4c7] border border-white/20 shadow-lg" />
            <div className="w-5 h-5 rounded-full bg-[#863bff] border border-white/20 shadow-lg" />
            <div className="w-5 h-5 rounded-full bg-white border border-white/20 shadow-lg" />
          </div>
          <div className="text-[10px] font-bold tracking-wider text-white/40 uppercase">
            Aenova.
          </div>
        </div>
      )
    case 'seo':
      return (
        <div className="w-full h-full flex flex-col justify-end opacity-80 p-1">
          <div className="flex-1 relative flex items-end">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              <div className="w-full h-[0.5px] bg-white/5" />
              <div className="w-full h-[0.5px] bg-white/5" />
            </div>
            <svg className="w-full h-10 text-[#5de4c7] overflow-visible" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0,35 Q20,38 40,25 T80,12 T100,3" />
              <circle cx="100" cy="3" r="3" fill="#5de4c7" className="animate-ping" />
              <circle cx="100" cy="3" r="2" fill="#5de4c7" />
            </svg>
          </div>
          <div className="flex justify-between text-[5px] text-white/30 font-mono mt-1 pt-1 border-t border-white/5">
            <span>MAR</span>
            <span>ABR</span>
            <span>MAY</span>
          </div>
        </div>
      )
    case 'consulting':
      return (
        <div className="w-full h-full flex items-center justify-center opacity-75">
          <svg className="w-24 h-12 overflow-visible" viewBox="0 0 100 50">
            <path d="M10,25 Q30,10 50,40 T90,25" fill="none" stroke="white" strokeWidth="0.8" strokeDasharray="2,2" opacity="0.3" />
            <circle cx="10" cy="25" r="3" fill="#0d1d31" stroke="#5de4c7" strokeWidth="1.2" />
            <circle cx="50" cy="40" r="3" fill="#0d1d31" stroke="#863bff" strokeWidth="1.2" />
            <circle cx="90" cy="25" r="3" fill="#0d1d31" stroke="#5de4c7" strokeWidth="1.2" />
            <text x="10" y="34" fill="white" fontSize="4.5" textAnchor="middle" opacity="0.4">Idea</text>
            <text x="50" y="49" fill="white" fontSize="4.5" textAnchor="middle" opacity="0.4">Plan</text>
            <text x="90" y="34" fill="white" fontSize="4.5" textAnchor="middle" opacity="0.4">Lanzar</text>
          </svg>
        </div>
      )
    default:
      return null
  }
}

export default function Servicios() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const services = [
    {
      id: '01',
      icon: Layout,
      title: 'Desarrollo de Apps Web',
      description:
        'Aplicaciones web a medida, sistemas internos, paneles de gestión y productos SaaS construidos con tecnología moderna y arquitectura sólida.',
      deliverables: [
        'Sistemas web robustos a medida',
        'Paneles de administración intuitivos',
        'SaaS escalables e integraciones de API',
        'Rendimiento optimizado y seguridad',
      ],
      glowColor: '#5de4c7', // Mint
      graphicType: 'web-app',
    },
    {
      id: '02',
      icon: FileText,
      title: 'Desarrollo de Landing Pages',
      description:
        'Landing pages rápidas, responsivas y optimizadas para convertir visitantes en clientes. Diseñadas para cumplir tus objetivos.',
      deliverables: [
        'Diseño orientado a la conversión',
        'Optimización móvil avanzada',
        'Integración de analíticas y formularios',
        'Carga instantánea (< 1 segundo)',
      ],
      glowColor: '#00f2fe', // Cyan
      graphicType: 'landing',
    },
    {
      id: '03',
      icon: PenTool,
      title: 'Desarrollo de Logo',
      description:
        'Logotipos únicos y memorables que representan la esencia de tu marca. Diseños vectoriales listos para cualquier uso.',
      deliverables: [
        '3 propuestas conceptuales iniciales',
        'Formatos vectoriales (SVG, EPS, PNG)',
        'Paleta cromática de marca',
        'Guía básica de uso de logotipo',
      ],
      glowColor: '#863bff', // Purple
      graphicType: 'logo',
    },
    {
      id: '04',
      icon: Palette,
      title: 'Creación de Identidad Visual',
      description:
        'Paleta de colores, tipografía, guías de marca y todos los elementos visuales que hacen que tu marca sea reconocible y coherente.',
      deliverables: [
        'Manual de identidad corporativa completo',
        'Sistemas tipográficos definidos',
        'Recursos gráficos para redes sociales',
        'Dirección de arte visual integrada',
      ],
      glowColor: '#ff5e62', // Coral/Pink
      graphicType: 'identity',
    },
    {
      id: '05',
      icon: Search,
      title: 'Optimización SEO',
      description:
        'Mejoramos la visibilidad de tu sitio en buscadores. SEO técnico, contenido optimizado y estrategias que generan resultados.',
      deliverables: [
        'Auditoría SEO técnica y on-page',
        'Estrategia de palabras clave optimizada',
        'Ajustes de Core Web Vitals',
        'Reportes de tráfico y posicionamiento',
      ],
      glowColor: '#3a7bd5', // Blue
      graphicType: 'seo',
    },
    {
      id: '06',
      icon: Lightbulb,
      title: 'Consultoría Digital',
      description:
        '¿No sabes por dónde empezar? Te ayudamos a definir qué necesitas, en qué orden y con qué presupuesto tiene más sentido.',
      deliverables: [
        'Hoja de ruta estratégica de producto',
        'Evaluación de viabilidad tecnológica',
        'Estimación de fases y presupuesto',
        'Optimización de procesos digitales',
      ],
      glowColor: '#a18cd1', // Lavender
      graphicType: 'consulting',
    },
  ]

  return (
    <section id="servicios" className="py-20 px-6 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--brand-mint)] mb-4">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl text-[var(--text-primary)] mb-4 text-center">
            Todo lo que necesitas para construir tu presencia digital
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto center-text-override">
            Desde la identidad visual hasta el sistema que la hace funcionar sin desperdiciar espacio.
          </p>
        </motion.div>

        {/* DESKTOP LAYOUT: Dual-Pane Navigation & Showcase Card (Compact Vertically) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 mt-12 items-stretch">
          {/* Left list of services */}
          <div className="col-span-5 flex flex-col justify-start gap-2.5 py-1">
            {services.map((service, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={service.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="w-full text-left p-4.5 rounded-2xl relative flex items-center gap-5 transition-all duration-300 group cursor-pointer focus:outline-none"
                >
                  {/* Highlight overlay background */}
                  {isActive && (
                    <motion.div
                      layoutId="active-service-bg"
                      className="absolute inset-0 bg-white/[0.025] border border-white/[0.06] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}

                  {/* Visual Left Line */}
                  <div
                    className={`w-[3px] h-7 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-[var(--brand-mint)] scale-y-100' : 'bg-transparent scale-y-50 group-hover:bg-white/20'
                    }`}
                  />

                  {/* Index Number */}
                  <span
                    className={`font-mono text-sm font-semibold tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-[var(--brand-mint)]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]'
                    }`}
                  >
                    {service.id}
                  </span>

                  {/* Title */}
                  <span
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {service.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right Showcase area */}
          <div className="col-span-7">
            <div className="bg-[var(--bg-surface)]/60 backdrop-blur-md border border-[var(--border-base)]/50 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[440px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              {/* Radial theme glow */}
              <div
                className="absolute -right-20 -top-20 w-72 h-72 rounded-full filter blur-[70px] opacity-15 pointer-events-none transition-all duration-500"
                style={{
                  background: `radial-gradient(circle, ${services[activeIndex].glowColor} 0%, transparent 70%)`,
                }}
              />

              {/* Decorative Huge background number */}
              <div className="absolute right-8 bottom-4 text-[11rem] font-black text-white/[0.02] leading-none select-none font-mono tracking-tighter transition-all duration-500">
                {services[activeIndex].id}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex flex-col h-full justify-between relative z-10"
                >
                  <div className="flex flex-col h-full relative z-10">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {services[activeIndex].title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl">
                        {services[activeIndex].description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between flex-1 py-4 gap-8">
                      {/* Deliverables checklist */}
                      <div className="space-y-3 flex-1">
                        <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                          ¿Qué incluye este servicio?
                        </p>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-3">
                          {services[activeIndex].deliverables.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5">
                              <div className="w-4 h-4 rounded-full bg-[var(--brand-mint)]/10 border border-[var(--brand-mint)]/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                                <Check className="w-2.5 h-2.5 text-[var(--brand-mint)]" strokeWidth={3} />
                              </div>
                              <span className="text-[12px] font-medium text-[var(--text-primary)]/90 leading-tight">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Premium graphics representation */}
                      <div className="w-48 h-32 hidden lg:flex items-center justify-center rounded-2xl bg-white/[0.02] border border-white/[0.05] p-3 shadow-inner relative overflow-hidden select-none flex-shrink-0">
                        <ServiceGraphic type={services[activeIndex].graphicType} />
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6 border-t border-white/[0.05] mt-auto">
                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 bg-[var(--brand-mint)] text-[var(--bg-base)] px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-[0_0_25px_rgba(93,228,199,0.4)] hover:scale-105 active:scale-98 transition-all duration-200"
                      >
                        Iniciar proyecto
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT: Dynamic Accordions (Saves vertical space) */}
        <div className="lg:hidden flex flex-col gap-3.5 mt-8">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index

            return (
              <div
                key={service.title}
                className="border border-[var(--border-base)]/50 rounded-2xl bg-[var(--bg-surface)]/20 overflow-hidden transition-all duration-300"
              >
                {/* Header button */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-semibold text-[var(--brand-mint)]">
                      {service.id}
                    </span>
                    <span className="font-semibold text-[var(--text-primary)] text-[15px]">
                      {service.title}
                    </span>
                  </div>
                  <div
                    className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0 transition-transform duration-350"
                    style={{
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown className="w-4 h-4 text-[var(--text-secondary)]" />
                  </div>
                </button>

                {/* Collapsible body details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-4 pb-5 pt-2 border-t border-white/[0.03] flex flex-col gap-4">
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {service.description}
                        </p>

                        <div className="flex items-end justify-between gap-4">
                          {/* Deliverables checklist */}
                          <div className="flex-1 space-y-2">
                            <p className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                              ¿Qué incluye?
                            </p>
                            <div className="grid grid-cols-1 gap-1.5">
                              {service.deliverables.slice(0, 3).map((item, idx) => (
                                <div key={idx} className="flex items-start gap-1.5">
                                  <div className="w-3.5 h-3.5 rounded-full bg-[var(--brand-mint)]/10 border border-[var(--brand-mint)]/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                                    <Check className="w-2 h-2 text-[var(--brand-mint)]" strokeWidth={3} />
                                  </div>
                                  <span className="text-[11px] text-[var(--text-primary)]/90 leading-tight">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Graphic */}
                          <div className="w-24 h-16 flex-shrink-0 flex justify-end">
                            <ServiceGraphic type={service.graphicType} />
                          </div>
                        </div>

                        <a
                          href="#contacto"
                          className="mt-1 inline-flex items-center justify-center gap-2 bg-[var(--brand-mint)] text-[var(--bg-base)] py-2.5 px-6 rounded-full text-xs font-semibold w-full hover:shadow-[0_0_20px_rgba(93,228,199,0.4)] active:scale-98 transition-all duration-200"
                        >
                          Iniciar proyecto
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}