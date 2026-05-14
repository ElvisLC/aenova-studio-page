import { motion } from 'framer-motion'
import { Cpu, Building2, Zap, Layers, Activity } from 'lucide-react'

const clients = [
  {
    name: 'LagusancaV',
    imgSrc: '/logo-laundry.jpg',
    link: 'https://lagusanca.com',
    textStyle: 'font-semibold tracking-tight text-base md:text-lg',
  },
  {
    name: 'TechStart',
    icon: Cpu,
    textStyle: 'font-mono font-bold uppercase tracking-tighter text-sm md:text-base',
  },
  {
    name: 'Comercial Norte',
    icon: Building2,
    textStyle: 'font-sans text-xs md:text-sm font-bold uppercase tracking-[0.18em]',
  },
  {
    name: 'GrupoEvo',
    icon: Zap,
    textStyle: 'font-bold tracking-tight text-base md:text-lg',
  },
  {
    name: 'InnovaCorp',
    icon: Layers,
    textStyle: 'font-light uppercase tracking-[0.22em] text-xs md:text-sm',
  },
  {
    name: 'DigitalFlow',
    icon: Activity,
    textStyle: 'font-medium tracking-tight italic text-base md:text-lg',
  },
]

// Double the client list to ensure sufficient width for seamless scrolling
const list = [...clients, ...clients]

export default function Logos() {
  return (
    <section className="py-16 px-6 bg-[var(--bg-base)] border-y border-[var(--border-base)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs md:text-sm font-medium text-[var(--text-muted)] tracking-widest uppercase"
        >
          Empresas que ya trabajan con nosotros
        </motion.p>
      </div>

      {/* High-end transparent fade overlays for the marquee container */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-48 bg-gradient-to-r from-[var(--bg-base)] via-[var(--bg-base)]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-48 bg-gradient-to-l from-[var(--bg-base)] via-[var(--bg-base)]/80 to-transparent z-10 pointer-events-none" />

      <div className="flex relative w-full overflow-hidden">
        <motion.div
          className="flex gap-12 md:gap-16 items-center whitespace-nowrap shrink-0"
          animate={{ x: [0, '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, // Slow, premium speed
              ease: "linear",
            },
          }}
        >
          {/* Render combined list twice for mathematically perfect loop */}
          {[...list, ...list].map((client, index) => {
            const Icon = client.icon
            
            const Content = (
              <div className="flex items-center gap-3 px-2 select-none group transition-all duration-300">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--bg-elevated)] border border-[var(--border-strong)] flex items-center justify-center group-hover:border-[var(--brand-mint)] group-hover:shadow-[0_0_15px_var(--action-glow)] transition-all duration-300 flex-shrink-0 overflow-hidden">
                  {client.imgSrc ? (
                    <img
                      src={client.imgSrc}
                      alt={client.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  ) : Icon ? (
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-[var(--text-secondary)] group-hover:text-[var(--brand-mint)] group-hover:scale-110 transition-all duration-300" />
                  ) : null}
                </div>
                <span className={`${client.textStyle} text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-0.5 transition-all duration-300`}>
                  {client.name}
                </span>
              </div>
            )

            return client.link ? (
              <a
                key={index}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-block hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
              >
                {Content}
              </a>
            ) : (
              <div key={index} className="inline-block transition-all duration-200">
                {Content}
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}