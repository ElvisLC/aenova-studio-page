import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Layers, Code2, Zap, Check, ChevronDown } from 'lucide-react'

// Graphics Subcomponents for Desktop Showcase Card
function ValueGraphic({ type }: { type: string }) {
  switch (type) {
    case 'design':
      return (
        <div className="w-full h-full flex items-center justify-center opacity-75 relative">
          <div className="absolute inset-0 border border-dashed border-white/5 flex items-center justify-center pointer-events-none">
            <div className="w-full h-[0.5px] bg-white/5 absolute" />
            <div className="h-full w-[0.5px] bg-white/5 absolute" />
            <div className="w-14 h-14 rounded-full border border-dashed border-white/10" />
          </div>
          <svg className="w-10 h-10 text-[#5de4c7] relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="5" fill="#0d1d31" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 2v20M2 12h20" stroke="white" strokeWidth="0.5" opacity="0.2" />
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
      )
    case 'development':
      return (
        <div className="w-full h-full flex flex-col gap-1.5 font-mono text-[8px] opacity-75">
          <div className="flex gap-1 items-center border-b border-white/10 pb-1 mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
            <span className="text-[7px] text-white/30 ml-2">CleanCode.ts</span>
          </div>
          <div className="text-[#5de4c7]">export class ScalableApp &#123;</div>
          <div className="pl-3 text-blue-400">private architecture = 'Clean';</div>
          <div className="pl-3 text-purple-400">public deploy() &#123; return true; &#125;</div>
          <div className="text-[#5de4c7]">&#125;</div>
        </div>
      )
    case 'team':
      return (
        <div className="w-full h-full flex items-center justify-center opacity-75">
          <svg className="w-24 h-16 overflow-visible" viewBox="0 0 100 60">
            <line x1="25" y1="30" x2="75" y2="30" stroke="white" strokeWidth="1" strokeDasharray="2 2" opacity="0.2" />
            
            {/* Left circle - Design */}
            <circle cx="35" cy="30" r="18" fill="none" stroke="#5de4c7" strokeWidth="1.2" opacity="0.6" />
            <text x="35" y="32" fill="white" fontSize="4.5" fontWeight="bold" textAnchor="middle" opacity="0.7">Pixel</text>

            {/* Right circle - Development */}
            <circle cx="65" cy="30" r="18" fill="none" stroke="#863bff" strokeWidth="1.2" opacity="0.6" />
            <text x="65" y="32" fill="white" fontSize="4.5" fontWeight="bold" textAnchor="middle" opacity="0.7">Código</text>

            {/* Middle merger visual */}
            <circle cx="50" cy="30" r="4.5" fill="#5de4c7" className="animate-pulse" />
          </svg>
        </div>
      )
    default:
      return null
  }
}

export default function Valor() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  const cards = [
    {
      id: '01',
      icon: Layers,
      title: 'Diseño con intención',
      description:
        'Cada decisión visual tiene un porqué. No hacemos bonito por hacer bonito — diseñamos para que tu usuario entienda, confíe y actúe de manera intuitiva.',
      principles: [
        'Enfoque centrado en conversión y UX',
        'Jerarquía visual clara y balanceada',
        'Identidad y dirección de arte coherente',
        'Optimizado para captar y retener atención',
      ],
      glowColor: '#5de4c7', // Mint
      graphicType: 'design',
    },
    {
      id: '02',
      icon: Code2,
      title: 'Desarrollo que escala',
      description:
        'Escribimos código limpio, bien estructurado y documentado. Tu producto puede crecer orgánicamente sin necesidad de reescribir la base desde cero.',
      principles: [
        'Arquitectura de software limpia y modular',
        'Código reutilizable bajo estándares modernos',
        'Carga rápida y optimización de recursos',
        'Pruebas y seguridad integradas',
      ],
      glowColor: '#863bff', // Purple
      graphicType: 'development',
    },
    {
      id: '03',
      icon: Zap,
      title: 'Un equipo, no una cadena',
      description:
        'Diseñador y desarrollador trabajan juntos desde el día uno. Evitamos los handoffs ineficientes y nos enfocamos en una colaboración directa y ágil.',
      principles: [
        'Fusión natural entre diseño y código',
        'Comunicación directa sin intermediarios',
        'Iteración ágil y sprints eficientes',
        'Entregas finales coherentes y veloces',
      ],
      glowColor: '#00f2fe', // Cyan
      graphicType: 'team',
    },
  ]

  return (
    <section className="py-20 px-6 bg-[var(--bg-base)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-[var(--brand-mint)] mb-4">
            Por qué Aenova
          </span>
          <h2 className="text-3xl md:text-4xl text-[var(--text-primary)] mb-4">
            Un estudio que entiende tanto el píxel como el código
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl w-full center-text-override">
            No tercerizamos ni fragmentamos tu proyecto. Diseño y desarrollo bajo
            el mismo techo significa menos fricciones, más coherencia y entregas
            más rápidas.
          </p>
        </motion.div>

        {/* DESKTOP LAYOUT: Dual-Pane Navigation & Showcase Card (Compact Vertically) */}
        <div className="hidden lg:grid grid-cols-12 gap-10 mt-12 items-stretch">
          {/* Left Navigation */}
          <div className="col-span-5 flex flex-col justify-start gap-3 py-1">
            {cards.map((card, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={card.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="w-full text-left p-5 rounded-2xl relative flex items-center gap-5 transition-all duration-300 group cursor-pointer focus:outline-none"
                >
                  {/* Highlight overlay background */}
                  {isActive && (
                    <motion.div
                      layoutId="active-value-bg"
                      className="absolute inset-0 bg-white/[0.025] border border-white/[0.06] rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}

                  {/* Left Highlight Indicator Line */}
                  <div
                    className={`w-[3px] h-7 rounded-full transition-all duration-300 ${
                      isActive ? 'bg-[var(--brand-mint)] scale-y-100' : 'bg-transparent scale-y-50 group-hover:bg-white/20'
                    }`}
                  />

                  {/* Index Number */}
                  <span
                    className={`font-mono text-sm font-semibold tracking-wider transition-colors duration-300 ${
                      isActive ? 'text-[var(--brand-mint)]' : 'text-[var(--text-muted)] group-hover:text-[var(--text-secondary)]'
                    }`}
                  >
                    {card.id}
                  </span>

                  {/* Title */}
                  <span
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {card.title}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right Showcase Card */}
          <div className="col-span-7">
            <div className="bg-[var(--bg-surface)]/60 backdrop-blur-md border border-[var(--border-base)]/50 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between h-full min-h-[380px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              {/* Radial glow */}
              <div
                className="absolute -right-20 -top-20 w-72 h-72 rounded-full filter blur-[70px] opacity-15 pointer-events-none transition-all duration-500"
                style={{
                  background: `radial-gradient(circle, ${cards[activeIndex].glowColor} 0%, transparent 70%)`,
                }}
              />

              {/* Decorative Huge Watermark Number */}
              <div className="absolute right-8 bottom-4 text-[11rem] font-black text-white/[0.02] leading-none select-none font-mono tracking-tighter transition-all duration-500">
                {cards[activeIndex].id}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="flex flex-col h-full justify-between relative z-10"
                >
                  <div>
                    {/* Header: Icon & tag */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shadow-inner">
                        {(() => {
                          const Icon = cards[activeIndex].icon
                          return <Icon className="w-5.5 h-5.5 text-[var(--brand-mint)]" />
                        })()}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand-mint)]">
                        Pilar {cards[activeIndex].id}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {cards[activeIndex].title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 max-w-xl">
                      {cards[activeIndex].description}
                    </p>

                    {/* Principles Checklist */}
                    <div className="space-y-3">
                      <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                        Principios clave:
                      </p>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
                        {cards[activeIndex].principles.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5">
                            <div className="w-4 h-4 rounded-full bg-[var(--brand-mint)]/10 border border-[var(--brand-mint)]/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                              <Check className="w-2.5 h-2.5 text-[var(--brand-mint)]" strokeWidth={3} />
                            </div>
                            <span className="text-[12px] font-medium text-[var(--text-primary)]/90 leading-tight">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Graphic representation placeholder */}
                  <div className="flex justify-end mt-auto pt-6 border-t border-white/[0.05]">
                    <div className="w-40 h-24 hidden xl:flex items-center justify-center rounded-2xl bg-white/[0.02] border border-white/[0.05] p-3 shadow-inner relative overflow-hidden select-none">
                      <ValueGraphic type={cards[activeIndex].graphicType} />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* MOBILE LAYOUT: Dynamic Accordions (Saves vertical space) */}
        <div className="lg:hidden flex flex-col gap-3.5 mt-8">
          {cards.map((card, index) => {
            const isExpanded = expandedIndex === index

            return (
              <div
                key={card.title}
                className="border border-[var(--border-base)]/50 rounded-2xl bg-[var(--bg-surface)]/20 overflow-hidden transition-all duration-300"
              >
                {/* Header button */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-semibold text-[var(--brand-mint)]">
                      {card.id}
                    </span>
                    <span className="font-semibold text-[var(--text-primary)] text-[15px]">
                      {card.title}
                    </span>
                  </div>
                  <div
                    className="w-7 h-7 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0 transition-transform duration-350"
                    style={{
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <ChevronDown className="w-4 h-4 text-[var(--text-secondary)]" />
                  </div>
                </button>

                {/* Collapsible details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-4 pb-5 pt-1 border-t border-white/[0.03] flex flex-col gap-4">
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {card.description}
                        </p>

                        {/* Principles Checklist */}
                        <div className="space-y-2 mt-1">
                          <p className="text-[9px] font-bold text-[var(--text-muted)] uppercase tracking-wider">
                            Principios clave
                          </p>
                          <div className="grid grid-cols-1 gap-2">
                            {card.principles.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-3.5 h-3.5 rounded-full bg-[var(--brand-mint)]/10 border border-[var(--brand-mint)]/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                                  <Check className="w-2 h-2 text-[var(--brand-mint)]" strokeWidth={3} />
                                </div>
                                <span className="text-[11px] text-[var(--text-primary)]/90 leading-tight">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}