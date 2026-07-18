import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { number: '+20', label: 'Proyectos entregados' },
    { number: '5+', label: 'Países alcanzados' },
    { number: '100%', label: 'Proyectos con diseño y código propios' },
    { number: '<21 días', label: 'Tiempo promedio de primer entregable' },
  ]

  return (
    <section className="py-16 px-6 bg-[var(--bg-base)] border-y-2 border-[var(--border-mint)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-mono font-bold text-[var(--brand-mint)] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
