import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate, AnimatePresence } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay, ease: 'easeOut' }}>{children}</motion.div>
)

export const SectionTitle = ({ eyebrow, title, sub }) => (
  <Reveal className="mx-auto mb-12 max-w-2xl text-center">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-ember-400">{eyebrow}</p>
    <h2 className="font-display text-3xl font-bold sm:text-5xl">{title}</h2>
    {sub && <p className="mt-4 text-cream/60">{sub}</p>}
  </Reveal>
)

export const Img = ({ src, alt, className = '' }) => {
  const [err, setErr] = useState(false)
  return err
    ? <div role="img" aria-label={alt} className={`bg-gradient-to-br from-ember/40 via-char-600 to-char-800 ${className}`} />
    : <img src={src} alt={alt} loading="lazy" onError={() => setErr(true)} className={`object-cover ${className}`} />
}

export const Counter = ({ value, suffix = '', decimals = 0 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.8, ease: 'easeOut', onUpdate: (v) => { if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix } })
    return () => c.stop()
  }, [inView, value, suffix, decimals])
  return <span ref={ref}>{(0).toFixed(decimals)}{suffix}</span>
}

export const Toast = ({ message, onClose }) => {
  useEffect(() => { if (!message) return; const t = setTimeout(onClose, 4000); return () => clearTimeout(t) }, [message, onClose])
  return (
    <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-[70] flex justify-center px-4">
      <AnimatePresence>
        {message && (
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="pointer-events-auto flex items-center gap-3 rounded-full border border-ember/40 bg-char-700 px-5 py-3 text-sm shadow-2xl">
            <CheckCircle2 className="h-5 w-5 text-ember-400" /> {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
