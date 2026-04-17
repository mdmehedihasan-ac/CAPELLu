import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Instagram, Facebook, Calendar, MapPin, MessageCircle, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Chi Siamo', path: '/chi-siamo' },
  { name: 'Servizi', path: '/servizi' },
  { name: 'Contatti', path: '/contatti' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className={`hidden border-b transition-all duration-300 lg:block ${
          scrolled ? 'border-sage-200/80 bg-cream-50/92 backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}>
          <div className="container-shell flex items-center justify-between px-6 py-3 text-[11px] uppercase tracking-[0.16em] text-sage-600 md:px-10 lg:px-16">
            <div className="flex items-center gap-6">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                Via Brione 10/c, Torino
              </span>
              <a href="tel:+39011755287" className="inline-flex items-center gap-2 hover:text-sage-900 transition-colors">
                <Phone className="h-3.5 w-3.5" />
                +39 011 755 287
              </a>
            </div>
            <div className="flex items-center gap-5">
              <span>Mar - Ven 9:00 / 19:00</span>
              <a href="https://wa.me/393513346103" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-sage-900 transition-colors">
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className={`transition-all duration-300 ${scrolled ? 'px-3 py-3 md:px-5' : 'px-3 py-4 md:px-5 lg:pt-5'}`}>
          <div className={`container-shell rounded-full border transition-all duration-300 ${
            scrolled
              ? 'border-sage-200/80 bg-white/92 shadow-[0_20px_50px_-30px_rgba(26,31,22,0.35)] backdrop-blur-xl'
              : 'border-white/50 bg-white/78 shadow-[0_20px_50px_-32px_rgba(26,31,22,0.25)] backdrop-blur-xl'
          }`}>
            <div className="flex items-center justify-between px-5 py-4 md:px-7 lg:px-8">
              <Link to="/" className="relative z-10 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-900 text-sm font-semibold uppercase tracking-[0.14em] text-white">
                  C
                </div>
                <div>
                  <h1 className="font-display text-2xl font-medium tracking-[-0.03em] text-sage-950 md:text-[30px]">
                    Capelli
                  </h1>
                  <span className="block font-sans text-[10px] uppercase tracking-[0.28em] text-sage-500 md:text-[11px]">
                    Lounge Torino
                  </span>
                </div>
              </Link>

              <nav className="hidden items-center gap-8 lg:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`line-reveal relative font-sans text-sm uppercase tracking-[0.08em] transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'font-semibold text-sage-950'
                        : 'font-medium text-sage-600 hover:text-sage-950'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="hidden items-center gap-3 lg:flex">
                <a
                  href="https://www.instagram.com/capelliloungetorino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-200 text-sage-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-sage-900 hover:text-sage-900"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/CapelliLoungeTorino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-200 text-sage-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-sage-900 hover:text-sage-900"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.treatwell.it/salone/capelli-snc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary ml-1"
                >
                  <Calendar className="h-4 w-4" />
                  Prenota
                </a>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-sage-200 text-sage-900 transition-colors duration-200 hover:bg-sage-900 hover:text-white lg:hidden"
                aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-sage-950/45 backdrop-blur-sm lg:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-3 mt-[96px] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_30px_80px_-40px_rgba(26,31,22,0.45)]"
            >
              <div className="border-b border-sage-100 px-6 py-5">
                <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-500">
                  Menu rapido
                </span>
              </div>

              <nav className="px-6 py-4">
                <div className="space-y-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        className="flex items-center justify-between rounded-2xl px-4 py-4 font-display text-2xl text-sage-950 transition-colors hover:bg-cream-100"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-4 w-4 text-sage-500" />
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a href="tel:+39011755287" className="surface-card flex items-center gap-3 rounded-[1.5rem] px-4 py-4 text-sm font-medium text-sage-800">
                    <Phone className="h-4 w-4 text-sage-600" />
                    Chiama
                  </a>
                  <a href="https://wa.me/393513346103" target="_blank" rel="noopener noreferrer" className="surface-card flex items-center gap-3 rounded-[1.5rem] px-4 py-4 text-sm font-medium text-sage-800">
                    <MessageCircle className="h-4 w-4 text-sage-600" />
                    WhatsApp
                  </a>
                </div>

                <a
                  href="https://www.treatwell.it/salone/capelli-snc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full"
                >
                  <Calendar className="h-4 w-4" />
                  Prenota su Treatwell
                </a>

                <div className="mt-6 flex items-center justify-between border-t border-sage-100 pt-5 text-sm text-sage-500">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Via Brione 10/c
                  </span>
                  <div className="flex items-center gap-3">
                    <a href="https://www.instagram.com/capelliloungetorino/" target="_blank" rel="noopener noreferrer" className="hover:text-sage-900 transition-colors">
                      <Instagram className="h-4 w-4" />
                    </a>
                    <a href="https://www.facebook.com/CapelliLoungeTorino/" target="_blank" rel="noopener noreferrer" className="hover:text-sage-900 transition-colors">
                      <Facebook className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
