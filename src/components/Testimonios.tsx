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

  const itemsPerView = 3

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPaused, testimonials.length])

  const totalSlides = Math.max(1, testimonials.length - itemsPerView + 1)

  const prev = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)
  const next = () => setCurrent((prev) => (prev + 1) % totalSlides)

  return (
    <section id="clientes" className="py-20 px-6 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--brand-mint)] mb-4 uppercase tracking-wider">
            Clientes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] mb-4 font-semibold">
            Lo que dicen quienes ya trabajaron con nosotros
          </h2>
        </motion.div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `${-current * (100 / itemsPerView)}%` }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-full md:w-1/2 lg:w-1/3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-full p-6 md:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-base)] hover:border-[var(--border-mint)] hover:shadow-[0_8px_32px_rgba(93,228,199,0.1)] transition-all duration-300 group">
                    <Quote className="w-10 h-10 text-[var(--brand-mint)] opacity-20 mb-4" />
                    
                    <p className="text-base md:text-lg text-[var(--text-primary)] leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-base)]">
                      <div className="w-11 h-11 rounded-full bg-[var(--brand-mint)]/10 border border-[var(--brand-mint)]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-[var(--brand-mint)]">
                          {testimonial.initial}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-[var(--text-primary)] truncate">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] truncate">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-6 right-6 w-6 h-6 rounded-full bg-[var(--brand-mint)]/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-2 h-2 rounded-full bg-[var(--brand-mint)]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {totalSlides > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--border-base)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--border-mint)] hover:text-[var(--brand-mint)] hover:shadow-[0_0_20px_var(--action-glow)] transition-all duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 rounded-full bg-[var(--bg-surface)] border border-[var(--border-base)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--border-mint)] hover:text-[var(--brand-mint)] hover:shadow-[0_0_20px_var(--action-glow)] transition-all duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-[var(--brand-mint)] w-8'
                    : 'bg-[var(--border-strong)] w-3'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}