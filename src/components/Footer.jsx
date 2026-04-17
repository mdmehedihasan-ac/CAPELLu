import { Link } from 'react-router-dom'
import { Instagram, Facebook, Phone, Mail, MapPin, Calendar, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-sage-950 text-white">
      <div className="container-shell px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="grid gap-10 rounded-[2rem] border border-white/8 bg-white/4 p-8 backdrop-blur-sm lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr] lg:p-10">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-semibold uppercase tracking-[0.16em] text-sage-950">
                C
              </div>
              <div>
                <h2 className="font-display text-3xl tracking-[-0.03em] text-white">Capelli</h2>
                <span className="block font-sans text-[11px] uppercase tracking-[0.28em] text-sage-400">
                  Lounge Torino
                </span>
              </div>
            </div>

            <p className="mt-6 max-w-md text-sm font-light leading-7 text-white/68">
              Un salone contemporaneo a Torino dedicato a taglio, colore e trattamenti personalizzati,
              con un approccio elegante, professionale e sostenibile.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://www.instagram.com/capelliloungetorino/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:text-white">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/CapelliLoungeTorino/" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:text-white">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.treatwell.it/salone/capelli-snc/" target="_blank" rel="noopener noreferrer" className="btn-gold">
                <Calendar className="h-4 w-4" />
                Prenota
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-400">Navigazione</h3>
            <ul className="mt-5 space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'Chi Siamo', path: '/chi-siamo' },
                { name: 'Servizi', path: '/servizi' },
                { name: 'Contatti', path: '/contatti' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm font-light text-white/70 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-400">Servizi</h3>
            <ul className="mt-5 space-y-3">
              {[
                'Drycut',
                'Colorazione sostenibile',
                'Laminazione',
                'Trattamenti SPA',
              ].map((service) => (
                <li key={service}>
                  <Link to="/servizi" className="text-sm font-light text-white/70 transition-colors hover:text-white">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-400">Contatti</h3>
            <div className="mt-5 space-y-4 text-sm font-light text-white/72">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-gold-400" />
                <span>Via Brione 10/c<br />10143 Torino (TO)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-gold-400" />
                <a href="tel:+39011755287" className="transition-colors hover:text-white">+39 011 755 287</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-400" />
                <a href="mailto:info@capellitorino.it" className="transition-colors hover:text-white">info@capellitorino.it</a>
              </div>
              <a href="https://www.treatwell.it/salone/capelli-snc/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors hover:text-gold-400">
                Prenota su Treatwell
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/8 pt-6 text-xs text-sage-500 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Capelli SNC di Iannucci Elisa e Giolito Manuela — P.IVA 08646790017
          </p>
          <div className="flex gap-5">
            <Link to="/contatti" className="transition-colors hover:text-sage-300">Privacy</Link>
            <Link to="/contatti" className="transition-colors hover:text-sage-300">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
