import { motion } from 'framer-motion'
import { Layout, FileText, PenTool, Palette, Search, Lightbulb, ArrowRight, Check } from 'lucide-react'

const services = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
]

export default function Servicios() {
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
          <span className="inline-block text-xs font-mono font-semibold text-[var(--brand-mint)] uppercase tracking-widest mb-4">
            Servicios
          </span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Todo lo que necesitas para construir tu presencia digital
          </h2>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.75rem', display: 'inline-block' }}>
              Desde la identidad visual hasta el sistema que la hace funcionar sin desperdiciar espacio.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
                className="group bg-[var(--bg-surface)] border-2 border-[var(--border-base)] hover:border-[var(--brand-mint)] transition-all duration-300 flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="w-10 h-10 border-2 border-[var(--border-strong)] flex items-center justify-center mb-5 group-hover:border-[var(--brand-mint)] transition-all duration-300">
                    <Icon className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--brand-mint)] transition-all duration-300" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 flex-1">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[var(--brand-mint)] mt-0.5 flex-shrink-0" strokeWidth={3} />
                        <span className="text-xs text-[var(--text-primary)]/80 leading-tight">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contacto"
                    className="x-cut inline-flex items-center justify-center gap-2 bg-[var(--brand-mint)] text-black px-5 py-2.5 text-sm font-semibold hover:bg-transparent hover:text-[var(--brand-mint)] border-2 border-[var(--brand-mint)] transition-all duration-150 active:scale-[0.97] w-full"
                  >
                    Iniciar proyecto
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
