import { useEffect, type RefObject } from 'react'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseOpacity: number
  breathPhase: number
  breathFreq: number
}

const PARTICLE_COUNT = 120
const MIN_SIZE = 1
const MAX_SIZE = 2.5
const MIN_SPEED = -0.3
const MAX_SPEED = 0.3
const MAX_VELOCITY = 1.2
const MOUSE_RADIUS = 140
const MOUSE_FORCE = 0.12
const LINK_DISTANCE = 130
const LINK_MAX_ALPHA = 0.08
const MIN_BASE_OPACITY = 0.2
const MAX_BASE_OPACITY = 0.7
const MIN_BREATH_FREQ = 0.005
const MAX_BREATH_FREQ = 0.02

function randomInRange(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: randomInRange(MIN_SPEED, MAX_SPEED),
    vy: randomInRange(MIN_SPEED, MAX_SPEED),
    size: randomInRange(MIN_SIZE, MAX_SIZE),
    baseOpacity: randomInRange(MIN_BASE_OPACITY, MAX_BASE_OPACITY),
    breathPhase: Math.random() * Math.PI * 2,
    breathFreq: randomInRange(MIN_BREATH_FREQ, MAX_BREATH_FREQ),
  }
}

function createParticles(width: number, height: number): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, () => createParticle(width, height))
}

export function useParticles(canvasRef: RefObject<HTMLCanvasElement | null>): void {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let particles: Particle[] = []
    const mouse: { x: number | null; y: number | null } = { x: null, y: null }
    let animationId = 0
    let resizeFrame = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return
      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (particles.length === 0) {
        particles = createParticles(rect.width, rect.height)
      }
    }

    const handleResize = () => {
      if (resizeFrame) cancelAnimationFrame(resizeFrame)
      resizeFrame = requestAnimationFrame(() => {
        resize()
        resizeFrame = 0
      })
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = event.clientX - rect.left
      mouse.y = event.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    resize()
    window.addEventListener('resize', handleResize)

    const resizeObserver = new ResizeObserver(() => handleResize())
    resizeObserver.observe(canvas)

    const mouseTarget = canvas.parentElement ?? canvas
    mouseTarget.addEventListener('mousemove', handleMouseMove)
    mouseTarget.addEventListener('mouseleave', handleMouseLeave)

    const draw = () => {
      const rect = canvas.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist > 0 && dist < MOUSE_RADIUS) {
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE
            p.vx += (dx / dist) * force
            p.vy += (dy / dist) * force
          }
        }

        if (p.vx > MAX_VELOCITY) p.vx = MAX_VELOCITY
        else if (p.vx < -MAX_VELOCITY) p.vx = -MAX_VELOCITY
        if (p.vy > MAX_VELOCITY) p.vy = MAX_VELOCITY
        else if (p.vy < -MAX_VELOCITY) p.vy = -MAX_VELOCITY

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = width
        else if (p.x > width) p.x = 0
        if (p.y < 0) p.y = height
        else if (p.y > height) p.y = 0

        p.breathPhase += p.breathFreq
        const breath = 0.6 + 0.4 * Math.sin(p.breathPhase)
        let opacity = p.baseOpacity * breath
        if (opacity < 0.2) opacity = 0.2
        else if (opacity > 0.7) opacity = 0.7

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(93, 228, 199, ${opacity})`
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * LINK_MAX_ALPHA
            ctx.strokeStyle = `rgba(93, 228, 199, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
      if (resizeFrame) cancelAnimationFrame(resizeFrame)
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
      mouseTarget.removeEventListener('mousemove', handleMouseMove)
      mouseTarget.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [canvasRef])
}
