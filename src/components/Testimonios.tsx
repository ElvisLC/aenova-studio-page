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

  // Track responsive screen size to dynamically adjust visible items
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

  // Auto-play only if not paused
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, totalSlides])

  // Ensure current index is valid if itemsPerView changes
  useEffect(() => {
    if (current >= totalSlides) {
      setCurrent(totalSlides - 1)
    }
  }, [itemsPerView, totalSlides, current])

  const prev = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides)
  const next = () => setCurrent((prev) => (prev + 1) % totalSlides)

  return (
    <section id="clientes" className="py-24 px-6 bg-[var(--bg-base)] relative overflow-hidden">
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[var(--brand-mint)] rounded-full blur-[150px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header section with modern layout: Title left, Controls right */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl"
          >
            <span className="inline-block text-xs md:text-sm font-semibold text-[var(--brand-mint)] mb-4 uppercase tracking-[0.2em]">
              Clientes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] font-semibold leading-tight">
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
                className="w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-base)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--brand-mint)]/40 hover:text-[var(--brand-mint)] hover:bg-[var(--bg-elevated)]/60 hover:shadow-[0_0_20px_var(--action-glow)] active:scale-95 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={next}
                aria-label="Siguiente testimonio"
                className="w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-base)] flex items-center justify-center text-[var(--text-secondary)] hover:border-[var(--brand-mint)]/40 hover:text-[var(--brand-mint)] hover:bg-[var(--bg-elevated)]/60 hover:shadow-[0_0_20px_var(--action-glow)] active:scale-95 transition-all duration-300"
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
              // Mathematically perfect translation formula that accounts for responsive widths and gaps flawlessly
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
                  <div className="relative h-full p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[var(--bg-surface)]/85 to-[var(--bg-surface)]/30 backdrop-blur-md border border-[var(--border-base)]/80 hover:border-[var(--brand-mint)]/35 hover:shadow-[0_20px_55px_rgba(93,228,199,0.08)] hover:-translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group">
                    {/* Expanding glow line on hover */}
                    <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-[var(--brand-mint)] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />

                    <Quote className="w-10 h-10 text-[var(--brand-mint)] opacity-15 mb-6 group-hover:opacity-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                    
                    <p className="text-base md:text-[17px] text-[var(--text-primary)] leading-relaxed mb-8 font-normal min-h-[100px] group-hover:text-white transition-colors duration-300">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-[var(--border-base)]/60">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--brand-mint)]/15 to-[var(--brand-mint)]/5 border border-[var(--brand-mint)]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:border-[var(--brand-mint)]/40 group-hover:shadow-[0_0_15px_rgba(93,228,199,0.15)] transition-all duration-300">
                        <span className="text-sm font-semibold bg-gradient-to-r from-[var(--brand-mint)] to-[#4ade80] bg-clip-text text-transparent">
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

                    {/* Subtle status dot */}
                    <div className="absolute top-8 right-8 w-6 h-6 rounded-full bg-[var(--brand-mint)]/10 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-[var(--brand-mint)] animate-pulse" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dynamic Dot Indicators */}
        {totalSlides > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                  index === current
                    ? 'bg-[var(--brand-mint)] w-8'
                    : 'bg-[var(--border-strong)]/60 hover:bg-[var(--brand-mint)]/40 w-3'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}