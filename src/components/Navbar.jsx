import { useEffect, useState } from 'react'
import { Flame, Menu, X } from 'lucide-react'
const links = ['Home', 'Menu', 'About', 'Gallery', 'Contact']
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40)
    f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled || open ? 'bg-char/90 py-3 shadow-lg backdrop-blur-lg' : 'py-5'}`}>
      <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#home" className="flex items-center gap-2 font-display text-xl font-bold tracking-wide">
          <Flame className="h-6 w-6 text-ember" /> MEAT <span className="text-ember">&</span> MINGLE
        </a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} className="text-cream/70 transition hover:text-ember-400">{l}</a></li>)}
        </ul>
        <a href="#book" className="btn btn-primary hidden !py-2 md:inline-flex">Order Now</a>
        <button className="rounded-full p-2 md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="mx-auto mt-3 flex max-w-6xl flex-col gap-1 px-5 pb-4 md:hidden">
          {links.map((l) => <li key={l}><a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block rounded-xl px-3 py-3 text-cream/80 hover:bg-char-700">{l}</a></li>)}
          <li><a onClick={() => setOpen(false)} href="#book" className="btn btn-primary mt-2 w-full">Order Now</a></li>
        </ul>
      )}
    </header>
  )
}
