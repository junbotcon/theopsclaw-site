import { useEffect, useRef, useState, useCallback } from 'react'
import { useInView } from 'framer-motion'

export function useCountUp(target, duration = 2) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(0)
  const rafRef = useRef(null)

  const animate = useCallback(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setDisplay(target)
      return
    }

    const startTime = performance.now()
    const step = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      // easeOutExpo — 빠르게 올라가고 끝에서 감속
      const eased = 1 - Math.pow(2, -10 * progress)
      setDisplay(Math.round(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step)
      }
    }
    rafRef.current = requestAnimationFrame(step)
  }, [target, duration])

  useEffect(() => {
    if (isInView) {
      animate()
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isInView, animate])

  return { ref, display }
}
