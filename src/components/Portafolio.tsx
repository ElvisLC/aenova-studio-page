import { motion } from 'framer-motion'
import { ArrowUpRight, Layout, Code, PenTool } from 'lucide-react'

interface Project {
  id: number
  name: string
  category: 'diseño' | 'desarrollo' | 'ambos'
  description: string
  link?: string
  browserUrl: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'LagusancaV',
    category: 'ambos',
    description: 'Plataforma web completa para lavandería con sistema de gestión, booking online y control de inventario.',
    link: 'https://la-laguna-azul-laundry.vercel.app/#privacidad',
    browserUrl: 'lagusancav.com',
  },
  {
    id: 2,
    name: 'TechStart',
    category: 'ambos',
    description: 'Identidad visual completa y plataforma web para startup tecnológica con dashboard administrativo.',
    link: '#',
    browserUrl: 'techstart.io',
  },
  {
    id: 3,
    name: 'Comercial Norte',
    category: 'desarrollo',
    description: 'Sistema de gestión interna, dashboard administrativo y automatización de procesos comerciales.',
    link: '#',
    browserUrl: 'comercialnorte.cl',
  },
  {
    id: 4,
    name: 'GrupoEvo',
    category: 'diseño',
    description: 'Rebranding completo, guía de marca y piezas digitales para empresa del sector industrial.',
    link: '#',
    browserUrl: 'grupoevo.com',
  },
  {
    id: 5,
    name: 'InnovaCorp',
    category: 'ambos',
    description: 'Desarrollo de SaaS para gestión de proyectos con diseño UI/UX personalizado.',
    link: '#',
    browserUrl: 'innovacorp.app',
  },
  {
    id: 6,
    name: 'DigitalFlow',
    category: 'desarrollo',
    description: 'API RESTful y dashboard de analytics para startup de marketing digital.',
    link: '#',
    browserUrl: 'digitalflow.dev',
  },
]

const categoryLabels = {
  diseño: 'Solo Diseño',
  desarrollo: 'Solo Desarrollo',
  ambos: 'Diseño + Desarrollo',
}

const categoryIcons = {
  diseño: PenTool,
  desarrollo: Code,
  ambos: Layout,
}

function ProjectPreview({ id }: { id: number }) {
  switch (id) {
    case 1:
      return (
        <div className="w-full h-full bg-[#080d1a] flex flex-col p-3 text-[10px] text-slate-400 font-sans overflow-hidden select-none">
          <div className="flex items-center justify-between border-b-2 border-slate-900 pb-1.5 mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-blue-600" />
              <span className="font-semibold text-slate-200">LagusancaV Admin</span>
            </div>
            <span className="text-[8px] bg-blue-950/60 text-blue-400 px-1.5 py-0.5 border-2 border-blue-900/30">Lavado Activo</span>
          </div>

          <div className="grid grid-cols-2 gap-2 flex-grow">
            <div className="space-y-1.5">
              <span className="text-[7px] text-slate-500 font-medium uppercase tracking-wider block">Pedidos</span>
              <div className="bg-[#0e1526] p-1.5 border-2 border-slate-900 flex flex-col gap-1">
                <div className="flex justify-between items-center text-[8px]">
                  <span className="text-slate-300 font-medium">#1084 - Secando</span>
                  <span className="w-1.5 h-1.5 bg-amber-500" />
                </div>
                <div className="w-full bg-slate-900 h-1 overflow-hidden">
                  <div className="bg-blue-600 h-full w-[75%]" />
                </div>
              </div>
              <div className="bg-[#0e1526] p-1.5 border-2 border-slate-900 flex flex-col gap-1">
                <div className="flex justify-between items-center text-[8px]">
                  <span className="text-slate-300 font-medium">#1085 - Entregado</span>
                  <span className="w-1.5 h-1.5 bg-emerald-500" />
                </div>
                <div className="w-full bg-slate-900 h-1 overflow-hidden">
                  <div className="bg-emerald-500 h-full w-full" />
                </div>
              </div>
            </div>

            <div className="space-y-1.5 flex flex-col justify-between">
              <div>
                <span className="text-[7px] text-slate-500 font-medium uppercase tracking-wider block mb-1">Carga Diaria</span>
                <div className="bg-[#0e1526] p-1.5 border-2 border-slate-900 flex items-center justify-between h-[34px]">
                  <span className="font-semibold text-slate-200 text-xs">84 kg</span>
                  <span className="text-[8px] text-blue-400 font-medium">+15%</span>
                </div>
              </div>
              <div className="bg-[#0e1526] p-1 border-2 border-slate-900 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-500" />
                <span className="text-[7px] text-slate-400">Lavadora 3: Operativa</span>
              </div>
            </div>
          </div>
        </div>
      )

    case 2:
      return (
        <div className="w-full h-full bg-[#06050a] flex flex-col p-3 text-[10px] text-zinc-400 font-sans overflow-hidden select-none">
          <div className="flex items-center justify-between border-b-2 border-zinc-900 pb-1.5 mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-violet-600" />
              <span className="font-semibold text-zinc-200">TechStart Console</span>
            </div>
            <div className="flex gap-1">
              <div className="w-7 h-1.5 bg-zinc-900" />
              <div className="w-3 h-1.5 bg-zinc-900" />
            </div>
          </div>

          <div className="flex-grow flex flex-col gap-2">
            <div className="flex justify-between items-end bg-[#0c0a12] p-2 border-2 border-zinc-900">
              <div>
                <span className="text-[7px] text-zinc-500 block leading-none mb-0.5">ARR RECURRENTE</span>
                <span className="text-xs font-bold text-zinc-100">$142,500</span>
              </div>
              <div className="w-20 h-6 flex items-end">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <path d="M 0 35 Q 20 15 40 28 T 80 8 T 100 2" fill="none" stroke="#7c3aed" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#0c0a12] p-1.5 border-2 border-zinc-900 flex justify-between items-center">
                <span className="text-[7px] text-zinc-500">CONVERSIÓN</span>
                <span className="font-bold text-violet-400">4.8%</span>
              </div>
              <div className="bg-[#0c0a12] p-1.5 border-2 border-zinc-900 flex justify-between items-center">
                <span className="text-[7px] text-zinc-500">API STATUS</span>
                <span className="font-bold text-emerald-400">99.9%</span>
              </div>
            </div>
          </div>
        </div>
      )

    case 3:
      return (
        <div className="w-full h-full bg-[#0b0a09] flex flex-col p-3 text-[10px] text-stone-400 font-sans overflow-hidden select-none">
          <div className="flex items-center justify-between mb-2 pb-1.5 border-b-2 border-stone-900">
            <span className="font-semibold text-stone-200 text-xs">Gestión Comercial</span>
            <span className="bg-orange-950/40 text-orange-500 px-1.5 py-0.5 text-[8px] border-2 border-orange-900/30 font-medium">
              Ventas
            </span>
          </div>

          <div className="flex-grow flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex justify-between items-center bg-[#141211] p-1.5 border-2 border-stone-900/60">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-orange-600/10 text-orange-500 flex items-center justify-center font-bold text-[7px] border-2 border-orange-950/20">D</div>
                  <div>
                    <p className="font-medium text-stone-200 text-[8px] leading-none">Distribuidora A</p>
                    <p className="text-[6px] text-stone-500 mt-0.5">Metropolitana</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-stone-200 text-[8px] leading-none">$12,450</p>
                  <span className="text-[6px] text-emerald-500 font-medium">Completado</span>
                </div>
              </div>

              <div className="flex justify-between items-center bg-[#141211] p-1.5 border-2 border-stone-900/60">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 bg-stone-900 text-stone-400 flex items-center justify-center font-bold text-[7px] border-2 border-stone-800">L</div>
                  <div>
                    <p className="font-medium text-stone-200 text-[8px] leading-none">Logística Sur</p>
                    <p className="text-[6px] text-stone-500 mt-0.5">Biobío</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-stone-200 text-[8px] leading-none">$8,900</p>
                  <span className="text-[6px] text-orange-500 font-medium">Pendiente</span>
                </div>
              </div>
            </div>

            <div className="flex gap-1.5 items-end justify-between px-1 h-3 mt-1.5">
              <div className="bg-stone-900 w-full h-[50%]" />
              <div className="bg-stone-900 w-full h-[75%]" />
              <div className="bg-orange-600 w-full h-[100%]" />
              <div className="bg-stone-900 w-full h-[35%]" />
              <div className="bg-orange-600 w-full h-[85%]" />
            </div>
          </div>
        </div>
      )

    case 4:
      return (
        <div className="w-full h-full bg-[#0a0a0a] relative flex p-3 text-[10px] text-neutral-400 font-mono overflow-hidden select-none">
          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-[0.04] pointer-events-none">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="border-r border-b border-green-500" />
            ))}
          </div>

          <div className="w-[45%] flex flex-col justify-between z-10 border-r-2 border-neutral-900 pr-2">
            <span className="text-[5px] text-green-500 font-bold uppercase tracking-wider">GUIDE v1.2</span>
            <div className="flex-1 flex items-center justify-center py-1">
              <div className="relative w-9 h-9 border-2 border-green-900/20 flex items-center justify-center bg-neutral-950/80">
                <div className="absolute w-[140%] h-px bg-green-900/10 rotate-45" />
                <div className="absolute w-[140%] h-px bg-green-900/10 -rotate-45" />
                <svg className="w-7 h-7 text-green-600 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 12h16M4 6h16M4 18h11" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <span className="text-[5px] text-neutral-600">EVO GROUP ©</span>
          </div>

          <div className="flex-grow pl-2 flex flex-col justify-between z-10">
            <div className="space-y-0.5">
              <span className="text-[5px] text-neutral-500 block uppercase">Manual de Marca</span>
              <h4 className="text-[9px] font-bold text-neutral-200 font-sans tracking-wide">EVO INDUSTRIAL</h4>
            </div>

            <div className="space-y-1">
              <span className="text-[5px] text-neutral-500 block">SISTEMA CROMÁTICO</span>
              <div className="flex gap-1.5">
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-3.5 h-3.5 bg-[#15803d] border-2 border-green-900/30" />
                  <span className="text-[4px] text-neutral-600">#15803D</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-3.5 h-3.5 bg-[#1a1a1a] border-2 border-neutral-900" />
                  <span className="text-[4px] text-neutral-600">#1A1A1A</span>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <div className="w-3.5 h-3.5 bg-neutral-200 border-2 border-neutral-300" />
                  <span className="text-[4px] text-neutral-600">#E2E8F0</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[5px] text-neutral-600 border-t-2 border-neutral-900 pt-1">
              <span>GRID: 8px</span>
              <span className="text-green-500 font-bold">VALORADO</span>
            </div>
          </div>
        </div>
      )

    case 5:
      return (
        <div className="w-full h-full bg-[#07080f] flex flex-col p-3 text-[10px] text-slate-400 font-sans overflow-hidden select-none">
          <div className="flex items-center justify-between border-b-2 border-indigo-950/60 pb-1.5 mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 bg-indigo-600 flex items-center justify-center text-[7px] text-white font-bold">I</div>
              <span className="font-semibold text-slate-200">InnovaBoard</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-slate-800" />
              <div className="w-3 h-3 bg-indigo-900" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 flex-grow">
            <div className="space-y-1">
              <div className="flex justify-between items-center text-[6px] text-slate-500 font-bold uppercase">
                <span>Por Hacer</span>
                <span className="w-2.5 h-2.5 bg-[#0e101b] flex items-center justify-center text-[5px]">1</span>
              </div>
              <div className="bg-[#0e101b] p-1 border-2 border-indigo-950/40 flex flex-col gap-1">
                <span className="text-[7px] text-slate-300 font-semibold leading-tight">UX/UI design</span>
                <div className="flex justify-between items-center">
                  <span className="text-[5px] px-1 bg-amber-950 text-amber-400">Alta</span>
                  <div className="w-2 h-2 bg-slate-700" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center text-[6px] text-indigo-400 font-bold uppercase">
                <span>En Curso</span>
                <span className="w-2.5 h-2.5 bg-indigo-950/40 flex items-center justify-center text-[5px]">1</span>
              </div>
              <div className="bg-[#0e101b] p-1 border-2 border-indigo-600/30 flex flex-col gap-1">
                <span className="text-[7px] text-slate-200 font-semibold leading-tight">API Dev</span>
                <div className="flex justify-between items-center">
                  <span className="text-[5px] px-1 bg-indigo-950 text-indigo-300">Sprint 1</span>
                  <div className="w-2 h-2 bg-indigo-500" />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center text-[6px] text-emerald-500 font-bold uppercase">
                <span>Completado</span>
                <span className="w-2.5 h-2.5 bg-[#0e101b] flex items-center justify-center text-[5px]">2</span>
              </div>
              <div className="bg-[#0e101b] p-1 border-2 border-indigo-950/40 flex flex-col gap-1 opacity-60">
                <span className="text-[7px] text-slate-400 font-semibold leading-tight line-through">Repo Setup</span>
                <div className="flex justify-between items-center">
                  <span className="text-[5px] px-1 bg-emerald-950/40 text-emerald-500">Ok</span>
                  <div className="w-2 h-2 bg-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    case 6:
      return (
        <div className="w-full h-full bg-[#03060c] flex flex-col p-3 text-[10px] text-cyan-500/70 font-sans overflow-hidden select-none">
          <div className="flex items-center justify-between border-b-2 border-cyan-950/60 pb-1.5 mb-1.5">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-cyan-400" />
              <span className="font-semibold text-slate-200">FlowAnalytics</span>
            </div>
            <span className="text-[7px] text-slate-500">Tráfico Vivo</span>
          </div>

          <div className="grid grid-cols-2 gap-2 flex-grow">
            <div className="bg-[#080d16] p-1 border-2 border-cyan-950/40 flex flex-col items-center justify-center">
              <div className="relative w-11 h-11 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="22" cy="22" r="16" className="stroke-cyan-950/30 fill-none" strokeWidth="3" />
                  <circle cx="22" cy="22" r="16" className="stroke-cyan-500 fill-none" strokeWidth="3" strokeDasharray="100" strokeDashoffset="32" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[8px] font-bold text-slate-200">68%</span>
                  <span className="text-[4px] text-slate-500 uppercase leading-none">Ratio</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="bg-[#080d16] p-1 border-2 border-cyan-950/40">
                <span className="text-[6px] text-slate-500 block uppercase leading-none mb-0.5">Visitas</span>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-xs font-bold text-cyan-400 leading-none">1,482</span>
                  <span className="text-[5px] text-emerald-500 font-semibold font-mono">▲24%</span>
                </div>
              </div>

              <div className="bg-[#080d16] p-1 border-2 border-cyan-950/40 flex-grow mt-1 flex flex-col justify-between">
                <span className="text-[5px] text-slate-500 block uppercase leading-none">Flujo Diario</span>
                <div className="flex gap-0.5 items-end h-4 mt-1">
                  <div className="bg-cyan-950 w-full h-[25%]" />
                  <div className="bg-cyan-950 w-full h-[45%]" />
                  <div className="bg-cyan-950 w-full h-[60%]" />
                  <div className="bg-cyan-500 w-full h-[85%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    default:
      return null
  }
}

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
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => {
            const Icon = categoryIcons[project.category]
            return (
              <motion.a
                key={project.id}
                variants={itemVariants}
                href={project.link || '#'}
                target={project.link?.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group relative flex flex-col bg-[var(--bg-elevated)] border-2 border-[var(--border-base)] p-6 hover:border-[var(--brand-mint)] transition-all duration-200 cursor-pointer"
              >
                <div className="w-full aspect-[1.8/1] bg-[var(--bg-base)] border-2 border-[var(--border-base)] overflow-hidden flex flex-col mb-5 group-hover:border-[var(--brand-mint)] transition-all duration-200 select-none">
                  <div className="h-7 border-b-2 border-[var(--border-base)] px-3 flex items-center justify-between bg-[var(--bg-surface)]">
                    <div className="flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 bg-[#ff5f56]" />
                      <span className="w-1.5 h-1.5 bg-[#ffbd2e]" />
                      <span className="w-1.5 h-1.5 bg-[#27c93f]" />
                    </div>
                    <div className="bg-[var(--bg-base)] border-2 border-[var(--border-base)] text-[9px] text-[var(--text-muted)] px-3 py-0.5 w-[55%] text-center font-mono tracking-wide truncate">
                      {project.browserUrl}
                    </div>
                    <div className="w-10" />
                  </div>
                  <div className="flex-grow w-full overflow-hidden relative">
                    <ProjectPreview id={project.id} />
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3.5">
                  <span className="x-cut inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-[var(--brand-mint)] px-2.5 py-0.5 bg-[var(--brand-mint)]/10 border-2 border-[var(--brand-mint)]/20">
                    <Icon className="w-3 h-3" />
                    {categoryLabels[project.category]}
                  </span>
                </div>

                <h3 className="text-[19px] font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--brand-mint)] transition-colors duration-200">
                  {project.name}
                </h3>

                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>

                {project.link && (
                  <div className="flex items-center gap-1.5 text-[var(--brand-mint)] text-xs font-semibold uppercase tracking-wider mt-auto select-none">
                    <span className="group-hover:underline">Ver proyecto</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                )}
              </motion.a>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 text-[var(--brand-mint)] font-medium hover:underline text-sm tracking-wide transition-all duration-200"
          >
            Ver todos los proyectos
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
