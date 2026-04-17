import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight, Star, MessageCircle, MapPin } from 'lucide-react'

const quickPoints = [
  'Drycut e taglio personalizzato',
  'Colorazione sostenibile senza ammoniaca',
  'Trattamenti Davines e Comfort Zone',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-3 pb-8 pt-28 md:px-5 md:pb-10 md:pt-36 lg:pt-44">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2.25rem] bg-sage-950 text-white shadow-[0_50px_120px_-60px_rgba(26,31,22,0.85)]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&q=80"
              alt="Capelli Lounge Torino"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(26,31,22,0.92)_0%,rgba(26,31,22,0.78)_43%,rgba(26,31,22,0.28)_100%)]" />
            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-gold-400/20 blur-3xl" />
          </div>

          <div className="relative z-10 grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-14 lg:py-16">
            <div className="flex min-h-[540px] flex-col justify-between">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-8 flex flex-wrap gap-3"
                >
                  <span className="info-pill border-white/20 bg-white/10 text-white backdrop-blur-sm">
                    Atelier di hair styling a Torino
                  </span>
                  <span className="info-pill border-white/20 bg-white/10 text-white backdrop-blur-sm">
                    Colorazione sostenibile
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.05 }}
                  className="font-display text-5xl font-medium tracking-[-0.04em] leading-[0.92] text-white md:text-7xl xl:text-[88px]"
                >
                  Il salone a Torino
                  <br />
                  <span className="font-light italic text-white/85">che unisce stile, ascolto e risultato.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="mt-6 max-w-2xl font-sans text-base font-light leading-8 text-white/76 md:text-lg"
                >
                  Capelli Lounge Torino è un atelier elegante e contemporaneo dove taglio,
                  colore e trattamenti vengono costruiti su misura, con prodotti di alta qualità
                  e un approccio davvero personalizzato.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="mt-8 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href="https://www.treatwell.it/salone/capelli-snc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-sage-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-100"
                  >
                    <Calendar className="h-4 w-4" />
                    Prenota online
                  </a>
                  <a
                    href="https://wa.me/393513346103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Scrivici su WhatsApp
                  </a>
                  <Link
                    to="/servizi"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-2 py-3 text-sm font-medium uppercase tracking-[0.08em] text-white/80 transition-colors hover:text-white"
                  >
                    Vedi servizi
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="mt-8 grid gap-3 sm:grid-cols-3"
                >
                  {quickPoints.map((point) => (
                    <div key={point} className="rounded-2xl border border-white/15 bg-white/8 px-4 py-4 text-sm font-light leading-6 text-white/82 backdrop-blur-sm">
                      {point}
                    </div>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 grid gap-4 sm:grid-cols-3"
              >
                <div className="metric-card border-white/15 bg-white/10 text-white backdrop-blur-sm">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 font-display text-3xl">5.0</p>
                  <p className="mt-1 text-sm font-light text-white/70">Recensioni Google eccellenti</p>
                </div>
                <div className="metric-card border-white/15 bg-white/10 text-white backdrop-blur-sm">
                  <p className="font-display text-3xl">15+</p>
                  <p className="mt-1 text-sm font-light text-white/70">Anni di esperienza nel salone</p>
                </div>
                <div className="metric-card border-white/15 bg-white/10 text-white backdrop-blur-sm">
                  <MapPin className="h-5 w-5 text-gold-400" />
                  <p className="mt-3 text-sm font-medium uppercase tracking-[0.08em]">Torino</p>
                  <p className="mt-1 text-sm font-light text-white/70">Zona residenziale, rilassata e riservata</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex items-end lg:justify-end"
            >
              <div className="w-full max-w-[430px] rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <img
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=80"
                    alt="Interno del salone"
                    className="h-[340px] w-full object-cover"
                  />
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                      Perché scegliere Capelli
                    </p>
                    <p className="mt-2 font-display text-2xl leading-tight text-white">
                      Consulenza reale, non standardizzata.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] bg-white px-5 py-4 text-sage-900">
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-500">
                      Focus
                    </p>
                    <p className="mt-2 text-sm font-light leading-6 text-sage-700">
                      Taglio, colore e benessere capelli in un ambiente raccolto, curato e professionale.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
