import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Leaf, ChefHat, Award, Flame, ChevronLeft, ChevronRight, X, Quote, MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter, Percent } from 'lucide-react'
import { IMG, signature, categories, menu, gallery, stats, reviews } from '../data'
import { Reveal, SectionTitle, Img, Counter } from './ui'

export const Hero = () => (
  <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
    <Img src={IMG.hero} alt="Flame-grilled meats on a charcoal grill" className="absolute inset-0 h-full w-full" />
    <div className="absolute inset-0 bg-gradient-to-r from-char via-char/80 to-char/30" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-char to-transparent" />
    <div className="relative mx-auto w-full max-w-6xl px-5 pt-24">
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-ember-400">Fire · Smoke · Spice</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="max-w-3xl font-display text-5xl font-extrabold leading-[1.05] sm:text-7xl">
        Where every bite <span className="text-ember">sizzles</span>.
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-6 max-w-xl text-lg text-cream/70">
        Charcoal-grilled kebabs, slow-cooked biryani and fresh coastal seafood — crafted for people who love to gather.
      </motion.p>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }} className="mt-9 flex flex-wrap gap-4">
        <a href="#menu" className="btn btn-primary">Explore Menu</a>
        <a href="#book" className="btn btn-ghost">Book Table</a>
      </motion.div>
    </div>
  </section>
)

export const Highlights = () => {
  const items = [[Leaf, 'Fresh Ingredients', 'Sourced daily from trusted local farms and markets.'], [ChefHat, 'Expert Chefs', 'Masters of the tandoor with decades of experience.'], [Award, '4.8 Rated', 'Loved by over 50,000 happy diners.']]
  return (
    <section className="mx-auto -mt-10 max-w-6xl px-5"><div className="grid gap-4 md:grid-cols-3">
      {items.map(([I, t, d], i) => (
        <Reveal key={t} delay={i * 0.1}><div className="card flex items-start gap-4 p-6">
          <span className="rounded-2xl bg-ember/15 p-3 text-ember-400"><I className="h-6 w-6" /></span>
          <div><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-cream/60">{d}</p></div>
        </div></Reveal>
      ))}
    </div></section>
  )
}

const Rating = ({ v }) => <span className="flex items-center gap-1 text-sm text-amber-400"><Star className="h-4 w-4 fill-current" />{v}</span>

export const Signature = () => (
  <section className="section">
    <SectionTitle eyebrow="Chef's Picks" title="Signature Dishes" sub="The plates our regulars keep coming back for." />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {signature.map((d, i) => (
        <Reveal key={d.name} delay={(i % 3) * 0.08}>
          <article className="card group h-full overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-ember/40 hover:shadow-2xl hover:shadow-ember/10">
            <div className="overflow-hidden"><Img src={d.img} alt={d.name} className="h-56 w-full transition duration-700 group-hover:scale-110" /></div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-3"><h3 className="font-display text-xl font-semibold">{d.name}</h3><Rating v={d.rating} /></div>
              <p className="mt-2 text-sm text-cream/60">{d.desc}</p>
              <p className="mt-4 text-2xl font-bold text-ember-400">₹{d.price}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
)

export const Menu = () => {
  const [cat, setCat] = useState('All')
  const items = cat === 'All' ? menu : menu.filter((m) => m.cat === cat)
  return (
    <section id="menu" className="section">
      <SectionTitle eyebrow="Our Menu" title="Taste the Fire" />
      <div className="mb-10 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Menu categories">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`btn !py-2 ${cat === c ? 'btn-primary' : 'btn-ghost'}`}>{c}</button>
        ))}
      </div>
      <motion.div layout className="grid gap-4 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {items.map((m) => (
            <motion.div layout key={m.name} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.3 }}
              className="card flex items-center gap-4 p-3 transition hover:border-ember/40">
              <Img src={m.img} alt={m.name} className="h-20 w-20 shrink-0 rounded-2xl" />
              <div className="min-w-0 flex-1"><h3 className="truncate font-semibold">{m.name}</h3><p className="text-xs uppercase tracking-wider text-cream/50">{m.cat}</p></div>
              <p className="pr-3 text-lg font-bold text-ember-400">₹{m.price}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export const Offer = () => (
  <section className="mx-auto max-w-6xl px-5"><Reveal>
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-ember-600 via-ember to-ember-400 p-8 sm:p-12">
      <Flame className="absolute -right-6 -top-6 h-48 w-48 text-white/10" />
      <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80"><Percent className="h-4 w-4" />Weekend Offer</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold text-white sm:text-5xl">20% OFF above ₹999</h2>
          <p className="mt-2 text-white/85">Every Saturday & Sunday, dine-in only.</p>
        </div>
        <a href="#book" className="btn bg-char text-cream hover:-translate-y-0.5 hover:bg-black">Claim Offer</a>
      </div>
    </div>
  </Reveal></section>
)

export const About = () => (
  <section id="about" className="section">
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <Reveal><div className="relative">
        <Img src={IMG.kebab} alt="Chef grilling kebabs" className="h-80 w-full rounded-3xl sm:h-[28rem]" />
        <div className="absolute -bottom-5 right-4 rounded-2xl bg-ember px-5 py-3 font-display text-lg font-bold shadow-xl">Est. 2014</div>
      </div></Reveal>
      <Reveal delay={0.1}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-ember-400">Our Story</p>
        <h2 className="font-display text-3xl font-bold sm:text-5xl">Born on a charcoal grill</h2>
        <p className="mt-5 text-cream/65">MEAT & MINGLE began as a tiny street-side tandoor with one belief: great food brings people together. Twelve years on, we still marinate overnight, grill over live coals and seal every biryani by hand.</p>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="card p-5"><p className="font-display text-3xl font-bold text-ember-400"><Counter {...s} /></p><p className="mt-1 text-sm text-cream/60">{s.label}</p></div>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
)

export const Gallery = () => {
  const [sel, setSel] = useState(null)
  useEffect(() => { const f = (e) => e.key === 'Escape' && setSel(null); window.addEventListener('keydown', f); return () => window.removeEventListener('keydown', f) }, [])
  return (
    <section id="gallery" className="section">
      <SectionTitle eyebrow="Gallery" title="A Feast for the Eyes" />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {gallery.map((src, i) => (
          <Reveal key={i} delay={(i % 3) * 0.06}>
            <button onClick={() => setSel(src)} aria-label={`Preview gallery image ${i + 1}`} className="group block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ember">
              <Img src={src} alt={`Gallery ${i + 1}`} className="aspect-square w-full transition duration-700 group-hover:scale-110" />
            </button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {sel && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)} role="dialog" aria-modal="true" aria-label="Image preview"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4">
            <button aria-label="Close preview" className="absolute right-5 top-5 rounded-full bg-white/10 p-2"><X /></button>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} onClick={(e) => e.stopPropagation()}>
              <Img src={sel.replace('w=900', 'w=1400')} alt="Enlarged gallery" className="max-h-[85vh] w-auto max-w-full rounded-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export const Reviews = () => {
  const [i, setI] = useState(0)
  const go = (n) => setI((i + n + reviews.length) % reviews.length)
  useEffect(() => { const t = setTimeout(() => setI((x) => (x + 1) % reviews.length), 6000); return () => clearTimeout(t) }, [i])
  const r = reviews[i]
  return (
    <section className="section">
      <SectionTitle eyebrow="Reviews" title="Loved by Diners" />
      <div className="card relative mx-auto max-w-3xl p-8 text-center sm:p-12">
        <Quote className="mx-auto mb-4 h-8 w-8 text-ember" />
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }} aria-live="polite">
            <p className="text-lg leading-relaxed sm:text-xl">“{r.text}”</p>
            <div className="mt-6 flex justify-center gap-1 text-amber-400">{[...Array(5)].map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
            <p className="mt-3 font-semibold">{r.name}</p><p className="text-sm text-cream/50">{r.role}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={() => go(-1)} aria-label="Previous review" className="rounded-full border border-cream/20 p-2 hover:border-ember hover:text-ember-400"><ChevronLeft /></button>
          <div className="flex gap-2">{reviews.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Review ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? 'w-6 bg-ember' : 'w-2 bg-cream/30'}`} />)}</div>
          <button onClick={() => go(1)} aria-label="Next review" className="rounded-full border border-cream/20 p-2 hover:border-ember hover:text-ember-400"><ChevronRight /></button>
        </div>
      </div>
    </section>
  )
}

export const Book = ({ notify }) => {
  const submit = (e) => { e.preventDefault(); const n = new FormData(e.target).get('name'); e.target.reset(); notify(`Table request received, ${n}! We'll confirm shortly.`) }
  const f = 'w-full rounded-xl border border-white/10 bg-char/60 px-4 py-3 text-sm outline-none transition placeholder:text-cream/40 focus:border-ember'
  return (
    <section id="book" className="mx-auto max-w-6xl px-5 pb-20"><Reveal>
      <div className="card overflow-hidden p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div><h2 className="font-display text-3xl font-bold sm:text-5xl">Book a <span className="text-ember">Table</span></h2><p className="mt-4 text-cream/60">Reserve your spot for an unforgettable evening. Demo form — no data is sent anywhere.</p></div>
          <form onSubmit={submit} className="grid gap-3 sm:grid-cols-2">
            <input required name="name" aria-label="Name" placeholder="Your name" className={f} />
            <input required name="phone" type="tel" aria-label="Phone" placeholder="Phone number" className={f} />
            <input required name="date" type="date" aria-label="Date" className={`${f} [color-scheme:dark]`} />
            <select name="guests" aria-label="Guests" className={f} defaultValue="2">{[1, 2, 3, 4, 5, 6, 8].map((n) => <option key={n} value={n}>{n} guest{n > 1 ? 's' : ''}</option>)}</select>
            <button className="btn btn-primary sm:col-span-2">Reserve Now</button>
          </form>
        </div>
      </div>
    </Reveal></section>
  )
}

export const Footer = () => (
  <footer id="contact" className="border-t border-white/5 bg-black/40">
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
      <div><p className="flex items-center gap-2 font-display text-xl font-bold"><Flame className="h-5 w-5 text-ember" />MEAT <span className="text-ember">&</span> MINGLE</p><p className="mt-3 text-sm text-cream/55">Fire-grilled. Slow-cooked. Shared.</p></div>
      <div className="space-y-3 text-sm text-cream/65"><h4 className="font-semibold text-cream">Contact</h4><p className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-ember" />+91 98765 43210</p><p className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-ember" />hello@meatandmingle.demo</p></div>
      <div className="space-y-3 text-sm text-cream/65"><h4 className="font-semibold text-cream">Location</h4><p className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-ember" />12 Grill Street, Baner, Pune 411045</p></div>
      <div className="space-y-3 text-sm text-cream/65"><h4 className="font-semibold text-cream">Hours</h4><p className="flex gap-2"><Clock className="h-4 w-4 shrink-0 text-ember" />Mon–Fri: 12pm – 11pm<br />Sat–Sun: 11am – 12am</p>
        <div className="flex gap-3 pt-2">{[[Instagram, 'Instagram'], [Facebook, 'Facebook'], [Twitter, 'Twitter']].map(([I, n]) => <a key={n} href="#home" aria-label={n} className="rounded-full border border-cream/20 p-2 transition hover:border-ember hover:text-ember-400"><I className="h-4 w-4" /></a>)}</div></div>
    </div>
    <p className="border-t border-white/5 py-5 text-center text-xs text-cream/40">© {new Date().getFullYear()} MEAT & MINGLE. Frontend demo project.</p>
  </footer>
)
