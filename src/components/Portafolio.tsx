import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink, Layout, Code, PenTool } from 'lucide-react'

interface Project {
  id: number
  name: string
  category: 'diseño' | 'desarrollo' | 'ambos'
  description: string
  link?: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'LagusancaV',
    category: 'ambos',
    description: 'Plataforma web completa para lavandería con sistema de gestión, booking online y control de inventario.',
    link: 'https://la-laguna-azul-laundry.vercel.app/#privacidad',
  },
  {
    id: 2,
    name: 'TechStart',
    category: 'ambos',
    description: 'Identidad visual completa y plataforma web para startup tecnológica con dashboard administrativo.',
    link: '#',
  },
  {
    id: 3,
    name: 'Comercial Norte',
    category: 'desarrollo',
    description: 'Sistema de gestión interna, dashboard administrativo y automatización de procesos comerciales.',
    link: '#',
  },
  {
    id: 4,
    name: 'GrupoEvo',
    category: 'diseño',
    description: 'Rebranding completo, guía de marca y piezas digitales para empresa del sector industrial.',
    link: '#',
  },
  {
    id: 5,
    name: 'InnovaCorp',
    category: 'ambos',
    description: 'Desarrollo de SaaS para gestión de proyectos con diseño UI/UX personalizado.',
    link: '#',
  },
  {
    id: 6,
    name: 'DigitalFlow',
    category: 'desarrollo',
    description: 'API RESTful y dashboard de analytics para startup de marketing digital.',
    link: '#',
  },
]

const categoryLabels = {
  diseño: 'Diseño',
  desarrollo: 'Desarrollo',
  ambos: 'Diseño + Desarrollo',
}

const categoryIcons = {
  diseño: PenTool,
  desarrollo: Code,
  ambos: Layout,
}

export default function Portafolio() {
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
          <span className="inline-block text-sm font-medium text-[var(--brand-mint)] mb-4 uppercase tracking-wider">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] mb-4 font-semibold">
            Trabajos que hablan por nosotros
          </h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Proyectos reales de clientes que confían en nosotros para hacer crecer su negocio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = categoryIcons[project.category]
            return (
              <motion.a
                key={project.id}
                href={project.link || '#'}
                target={project.link?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: index * 0.1,
                }}
                className="group relative block rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-base)] hover:border-[var(--border-mint)] hover:shadow-[0_16px_32px_rgba(93,228,199,0.15)] transition-all duration-300 cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--brand-mint)] px-2.5 py-1 rounded-full bg-[var(--brand-mint)]/10 border border-[var(--brand-mint)]/20">
                      <Icon className="w-3 h-3" />
                      {categoryLabels[project.category]}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--brand-mint)] transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {project.link && (
                    <div className="flex items-center gap-2 pt-4 border-t border-[var(--border-base)]">
                      <ExternalLink className="w-4 h-4 text-[var(--brand-mint)]" />
                      <span className="text-sm font-medium text-[var(--brand-mint)]">
                        Ver proyecto
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[var(--brand-mint)] ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  )}
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[var(--brand-mint)] font-medium hover:underline"
          >
            Ver todos los proyectos
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}