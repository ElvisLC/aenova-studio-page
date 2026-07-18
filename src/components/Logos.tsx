import { motion } from 'framer-motion'

const clients = [
  {
    name: 'La Laguna Azul',
    imgSrc: '/logo-laundry.jpg',
    link: 'https://la-laguna-azul-laundry.vercel.app/',
  },
  {
    name: 'NexaCore',
    color: '#5de4c7',
    symbol: '◈',
  },
  {
    name: 'Vórtice',
    color: '#f97316',
    symbol: '⟳',
  },
  {
    name: 'Cima',
    color: '#a78bfa',
    symbol: '▲',
  },
]

export default function Logos() {
  return (
    <section className="py-16 px-6 bg-[var(--bg-base)] border-y-2 border-[var(--border-base)] overflow-hidden relative">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs font-mono font-semibold text-[var(--text-muted)] tracking-widest uppercase"
        >
          Empresas que ya trabajan con nosotros
        </motion.p>
      </div>

      <div className="flex justify-center items-center gap-12 md:gap-20 flex-wrap">
        {clients.map((client, index) => (
          <motion.a
            key={client.name}
            href={client.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="cursor-pointer inline-block hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[var(--border-strong)] hover:border-[var(--brand-mint)] transition-all duration-300 flex items-center justify-center bg-[var(--bg-elevated)]">
              {client.imgSrc ? (
                <img
                  src={client.imgSrc}
                  alt={client.name}
                  className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-all duration-300"
                />
              ) : (
                <span className="text-4xl md:text-5xl" style={{ color: client.color }}>
                  {client.symbol}
                </span>
              )}
            </div>
            <p className="text-center text-sm text-[var(--text-muted)] mt-3 font-medium">
              {client.name}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
