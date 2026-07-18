import { motion } from 'framer-motion'
import { ArrowUpRight, Layout } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'LagusancaV',
    category: 'Diseño + Desarrollo',
    description: 'Plataforma web completa para lavandería con sistema de gestión, booking online y control de inventario.',
    link: 'https://la-laguna-azul-laundry.vercel.app/#privacidad',
  },
]

export default function Portafolio() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  }

  return (
    <section id="portafolio" className="py-20 px-6 bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-mono font-semibold text-[var(--brand-mint)] uppercase tracking-widest mb-4">
            Portafolio
          </span>
          <h2 className="text-[var(--text-primary)] mb-4">
            Trabajos que hablan por nosotros
          </h2>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <p className="text-[var(--text-muted)] text-[16px] max-w-2xl" style={{ display: 'inline-block', textAlign: 'center' }}>
              Proyectos reales de clientes que confían en nosotros para hacer crecer su negocio.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              variants={itemVariants}
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-[var(--bg-elevated)] border-2 border-[var(--border-base)] p-6 hover:border-[var(--brand-mint)] transition-all duration-200 cursor-pointer"
            >
              <span className="x-cut inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-[var(--brand-mint)] px-2.5 py-0.5 bg-[var(--brand-mint)]/10 border-2 border-[var(--brand-mint)]/20 mb-5 w-fit">
                <Layout className="w-3 h-3" />
                {project.category}
              </span>

              <h3 className="text-[19px] font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-mint)] transition-colors duration-200">
                {project.name}
              </h3>

              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-5 flex-grow">
                {project.description}
              </p>

              <div className="flex items-center gap-1.5 text-[var(--brand-mint)] text-xs font-semibold uppercase tracking-wider mt-auto select-none">
                <span className="group-hover:underline">Ver proyecto</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
