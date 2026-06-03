import { motion } from 'framer-motion'
import { Layout, FileText, PenTool, Palette, Search, Lightbulb, ArrowRight } from 'lucide-react'

export default function Servicios() {
  const services = [
    {
      icon: Layout,
      title: 'Desarrollo de Apps Web',
      description:
        'Aplicaciones web a medida, sistemas internos, paneles de gestión y productos SaaS construidos con tecnología moderna y arquitectura sólida.',
    },
    {
      icon: FileText,
      title: 'Desarrollo de Landing Pages',
      description:
        'Landing pages rápidas, responsivas y optimizadas para convertir visitantes en clientes. Diseñadas para cumplir tus objetivos.',
    },
    {
      icon: PenTool,
      title: 'Desarrollo de Logo',
      description:
        'Logotipos únicos y memorables que representan la esencia de tu marca. Diseños vectoriales listos para cualquier uso.',
    },
    {
      icon: Palette,
      title: 'Creación de Identidad Visual',
      description:
        'Paleta de colores, tipografía, guías de marca y todos los elementos visuales que hacen que tu marca sea reconocible y coherente.',
    },
    {
      icon: Search,
      title: 'Optimización SEO',
      description:
        'Mejoramos la visibilidad de tu sitio en buscadores. SEO técnico, contenido optimizado y estrategias que generan resultados.',
    },
    {
      icon: Lightbulb,
      title: 'Consultoría Digital',
      description:
        '¿No sabes por dónde empezar? Te ayudamos a definir qué necesitas, en qué orden y con qué presupuesto tiene más sentido.',
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
            Desde la identidad visual hasta el sistema que la hace funcionar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-xl bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-surface)]/80 border border-[var(--border-base)] hover:border-[var(--brand-mint)]/40 hover:shadow-[0_0_35px_rgba(93,228,199,0.08)] transition-all duration-300 cursor-pointer flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-[var(--brand-mint)]/10 border border-[var(--brand-mint)]/20 flex items-center justify-center mb-6 group-hover:bg-[var(--brand-mint)]/20 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(93,228,199,0.3)] transition-all duration-300">
                <service.icon className="w-6 h-6 text-[var(--brand-mint)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--brand-mint)] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed flex-grow">
                {service.description}
              </p>
              <div className="mt-6 flex items-center text-sm font-semibold text-[var(--brand-mint)] opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <span className="mr-1">Saber más</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}