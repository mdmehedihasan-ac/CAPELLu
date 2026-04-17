import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ChiSiamoPage from './pages/ChiSiamoPage'
import ServiziPage from './pages/ServiziPage'
import ContattiPage from './pages/ContattiPage'

function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const id = location.hash.replace('#', '')
    const timer = window.setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 120)

    return () => window.clearTimeout(timer)
  }, [location])

  return null
}

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-sage-950">
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/servizi" element={<ServiziPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
