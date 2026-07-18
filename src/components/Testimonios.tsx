import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export default function Testimonios() {
  const testimonials = [
    {
      quote:
        'Aenova transformó completamente cómo se ve nuestra marca. En dos semanas teníamos una identidad visual que por fin se sentía como nosotros.',
      name: 'Carlos M.',
      role: 'Fundador · TechStart',
      initial: 'C',
    },
    {
      quote:
        'Nos entregó el sistema completo — diseño y desarrollo — sin tener que coordinar entre dos empresas distintas. Eso solo ya vale la diferencia.',
      name: 'Andrea L.',
      role: 'CEO · Comercial Norte',
      initial: 'A',
    },
    {
      quote:
        'El proceso fue muy claro desde el principio. Sabíamos en qué estaban, cuándo iba a estar listo y qué íbamos a recibir. Sin sorpresas.',
      name: 'Rodrigo V.',
      role: 'Director · GrupoEvo',
      initial: 'R',
    },
    {
      quote:
        'La atención al detalle fue excepcional. Nuestro sistema de gestión quedó funcionando mejor de lo que imaginábamos.',
      name: 'María P.',
      role: 'Gerente · LagusancaV',
      initial: 'M',
    },
  ]

  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalSlides = Math.max(1, testimonials.length - itemsPerView + 1)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, totalSlides])

  useEffect(() => {
    if (current >= totalSlides) {
      setCurrent(totalSlides - 1)
    }
  }, [itemsPerView, totalSlides, current])

  const prev = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)
  const next = () => setCurrent((prev) => (prev + 1) % totalSlides)

  return (
    <section id="clientes" className="py-24 px-6 bg-[var(--bg-base)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs font-mono font-semibold text-[var(--brand-mint)] mb-4 uppercase tracking-[0.2em]">
              Clientes
            </span>
            <h2 className="text-[var(--text-primary)] leading-tight">
              Lo que dicen quienes ya trabajaron con nosotros
            </h2>
          </motion.div>

          {totalSlides > 1 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-3 mt-6 md:mt-0"
            >
              <button
                onClick={prev}
                aria-label="Testimonio anterior"
                className="w-12 h-12 bg-[var(--bg-surface)] border-2 border-[var(--border-base)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--brand-mint)] hover:text-[var(--brand-mint)] active:scale-95 transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={next}
                aria-label="Siguiente testimonio"
                className="w-12 h-12 bg-[var(--bg-surface)] border-2 border-[var(--border-base)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--brand-mint)] hover:text-[var(--brand-mint)] active:scale-95 transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>

        <div
          className="relative overflow-visible"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden -mx-4 px-4 py-6">
            <motion.div
              className="flex gap-6"
              animate={{ x: `calc(-${current * (100 / itemsPerView)}% - ${current * (24 / itemsPerView)}px)` }}
              transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                >
                  <div className="relative h-full p-8 md:p-10 bg-[var(--bg-surface)] border-2 border-[var(--border-base)] hover:border-[var(--brand-mint)] hover:-translate-y-2 transition-all duration-500 group">
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-[var(--brand-mint)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                    <Quote className="w-10 h-10 text-[var(--brand-mint)] opacity-15 mb-6 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500" />

                    <p className="text-base md:text-[17px] text-[var(--text-primary)] leading-relaxed mb-8 font-normal min-h-[100px] group-hover:text-white transition-colors duration-300">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t-2 border-[var(--border-base)]">
                      <div className="w-12 h-12 rounded-full bg-[var(--brand-mint)]/10 border-2 border-[var(--brand-mint)]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[var(--brand-mint)] transition-all duration-300">
                        <span className="text-sm font-semibold text-[var(--brand-mint)]">
                          {testimonial.initial}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[var(--text-primary)] tracking-wide truncate group-hover:text-white transition-colors duration-300">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mt-0.5 truncate">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-8 right-8 w-6 h-6 bg-[var(--brand-mint)]/10 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <div className="w-2 h-2 bg-[var(--brand-mint)]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
                className={`h-1.5 transition-all duration-500 ${
                  index === current
                    ? 'bg-[var(--brand-mint)] w-8'
                    : 'bg-[var(--border-strong)] hover:bg-[var(--brand-mint)] w-3'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
