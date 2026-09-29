import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import { Toast } from './components/ui'
import { Hero, Highlights, Signature, Menu, Offer, About, Gallery, Reviews, Book, Footer } from './components/Sections'

export default function App() {
  const [msg, setMsg] = useState('')
  const close = useCallback(() => setMsg(''), [])
  return (
    <>
      <Navbar />
      <main>
        <Hero /><Highlights /><Signature /><Menu /><Offer /><About /><Gallery /><Reviews /><Book notify={setMsg} />
      </main>
      <Footer />
      <Toast message={msg} onClose={close} />
    </>
  )
}
