import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Instagram, Facebook, Calendar, MapPin, MessageCircle, ArrowRight, Home, Scissors, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Chi Siamo', path: '/chi-siamo' },
  { name: 'Servizi', path: '/servizi' },
  { name: 'Contatti', path: '/contatti' },
]

const bottomTabs = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Servizi', path: '/servizi', icon: Scissors },
  { name: 'Prenota', path: 'https://www.treatwell.it/salone/capelli-snc/', icon: Calendar, external: true, accent: true },
  { name: 'Contatti', path: '/contatti', icon: Mail },
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
      {/* ─── DESKTOP HEADER ─── */}
      <div className="fixed inset-x-0 top-0 z-50 hidden lg:block">
        <div className={`transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-sage-200/50' 
            : 'bg-white/80 backdrop-blur-md border-b border-sage-200/30'
        }`}>
          {/* Top Info Bar */}
          <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-[38px] opacity-100 border-b border-sage-200/40'}`}>
            <div className="container-shell mx-auto px-8 flex items-center justify-between h-full text-[11px] uppercase tracking-[0.16em] text-sage-600">
              <div className="flex items-center gap-6">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-3 w-3" />
                  Via Brione 10/c, Torino
                </span>
                <a href="tel:+39011755287" className="inline-flex items-center gap-2 transition-colors hover:text-sage-900 hover:font-medium">
                  <Phone className="h-3 w-3" />
                  +39 011 755 287
                </a>
              </div>
              <div className="flex items-center gap-5">
                <span>Mar - Ven 9:00 / 19:00</span>
                <a href="https://wa.me/393513346103" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-sage-900 hover:font-medium">
                  <MessageCircle className="h-3 w-3" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Main Desktop Navbar */}
          <div className="container-shell mx-auto px-8 transition-all duration-300">
            <div className={`flex items-center justify-between ${scrolled ? 'py-3' : 'py-4'}`}>
              <Link to="/" className="flex items-center gap-4 group">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-900 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-transform duration-500 group-hover:scale-105">
                  C
                </div>
                <div>
                  <h1 className="font-display text-[26px] font-medium tracking-[-0.03em] text-sage-950 leading-none">
                    Capelli
                  </h1>
                  <span className="block font-sans text-[10px] uppercase tracking-[0.28em] text-sage-500 mt-1">
                    Lounge Torino
                  </span>
                </div>
              </Link>

              <nav className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative font-sans text-[13px] uppercase tracking-[0.1em] transition-all duration-200 hover:text-sage-900 ${
                      location.pathname === link.path
                        ? 'font-semibold text-sage-950 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-sage-900 after:rounded-full'
                        : 'font-medium text-sage-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/capelliloungetorino/" target="_blank" rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-50 text-sage-600 transition-all duration-200 hover:bg-sage-900 hover:text-white">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://www.facebook.com/CapelliLoungeTorino/" target="_blank" rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-50 text-sage-600 transition-all duration-200 hover:bg-sage-900 hover:text-white">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="https://www.treatwell.it/salone/capelli-snc/" target="_blank" rel="noopener noreferrer"
                  className="btn-primary ml-2 py-2.5 px-6 text-[13px]">
                  <Calendar className="h-4 w-4 mr-2" />
                  Prenota ora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MOBILE MAIN HEADER ─── */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* Mobile compact header */}
        <div className={`lg:hidden flex items-center justify-between px-4 transition-all duration-300 ${
          scrolled
            ? 'bg-white py-2 shadow-[0_1px_6px_rgba(0,0,0,0.06)]'
            : 'bg-transparent py-3'
        }`} style={{ paddingTop: 'max(env(safe-area-inset-top), 8px)' }}>
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-900 text-xs font-bold uppercase tracking-wider text-white">
              C
            </div>
            <div className="leading-none">
              <span className="font-display text-lg font-medium tracking-tight text-sage-950">Capelli</span>
              <span className="block font-sans text-[9px] uppercase tracking-[0.24em] text-sage-500">Lounge Torino</span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="tel:+39011755287"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-sage-700"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-900 text-white"
              aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ─── MOBILE FULL-SCREEN MENU ─── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <div className="absolute inset-0 bg-sage-950/50 backdrop-blur-sm" />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto overscroll-contain rounded-t-[2rem] bg-white"
              style={{ paddingBottom: 'calc(80px + env(safe-area-inset-bottom, 0px))' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="h-1 w-10 rounded-full bg-sage-300" />
              </div>

              {/* Menu header */}
              <div className="flex items-center justify-between px-6 pb-4 pt-2">
                <div>
                  <span className="font-display text-2xl font-medium text-sage-950">Menu</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-100 text-sage-700"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Nav links */}
              <div className="px-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center justify-between rounded-2xl px-5 py-4 transition-colors active:bg-sage-50 ${
                        location.pathname === link.path
                          ? 'bg-sage-50 font-semibold text-sage-950'
                          : 'text-sage-800'
                      }`}
                    >
                      <span className="font-display text-[22px]">{link.name}</span>
                      <ArrowRight className="h-4 w-4 text-sage-400" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="mx-6 my-4 h-px bg-sage-100" />

              {/* Quick actions */}
              <div className="px-4">
                <p className="px-5 pb-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-400">
                  Azioni rapide
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <a href="tel:+39011755287" className="flex items-center gap-3 rounded-2xl bg-sage-50 px-5 py-4 text-sm font-medium text-sage-800 active:bg-sage-100">
                    <Phone className="h-4 w-4 text-sage-600" />
                    Chiama
                  </a>
                  <a href="https://wa.me/393513346103" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-sage-50 px-5 py-4 text-sm font-medium text-sage-800 active:bg-sage-100">
                    <MessageCircle className="h-4 w-4 text-sage-600" />
                    WhatsApp
                  </a>
                </div>

                <a
                  href="https://www.treatwell.it/salone/capelli-snc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-3 w-full py-4 text-[13px]"
                >
                  <Calendar className="h-4 w-4" />
                  Prenota su Treatwell
                </a>
              </div>

              {/* Footer info */}
              <div className="mx-4 mt-5 mb-2 flex items-center justify-between rounded-2xl bg-cream-100 px-5 py-4">
                <span className="inline-flex items-center gap-2 text-sm text-sage-600">
                  <MapPin className="h-4 w-4" />
                  Via Brione 10/c, Torino
                </span>
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/capelliloungetorino/" target="_blank" rel="noopener noreferrer" className="text-sage-500 active:text-sage-900">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="https://www.facebook.com/CapelliLoungeTorino/" target="_blank" rel="noopener noreferrer" className="text-sage-500 active:text-sage-900">
                    <Facebook className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── MOBILE BOTTOM TAB BAR ─── */}
      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-sage-200/60 bg-white/95 backdrop-blur-xl lg:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}>
        <div className="flex items-stretch justify-around">
          {bottomTabs.map((tab) => {
            const isActive = !tab.external && location.pathname === tab.path
            const Icon = tab.icon

            if (tab.external) {
              return (
                <a
                  key={tab.name}
                  href={tab.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-1 flex-col items-center gap-0.5 pb-2 pt-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sage-900 text-white shadow-md shadow-sage-900/20">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.06em] text-sage-900">
                    {tab.name}
                  </span>
                </a>
              )
            }

            return (
              <Link
                key={tab.name}
                to={tab.path}
                className="relative flex flex-1 flex-col items-center gap-0.5 pb-2 pt-3"
              >
                <Icon className={`h-5 w-5 transition-colors ${isActive ? 'text-sage-900' : 'text-sage-400'}`} />
                <span className={`font-sans text-[10px] uppercase tracking-[0.06em] transition-colors ${
                  isActive ? 'font-bold text-sage-900' : 'font-medium text-sage-400'
                }`}>
                  {tab.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="bottomTabIndicator"
                    className="absolute top-0 h-[2px] w-10 rounded-full bg-sage-900"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
