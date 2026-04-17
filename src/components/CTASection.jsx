import { Calendar, MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const contactCards = [
  {
    icon: Calendar,
    title: 'Prenotazione online',
    text: 'Il canale più veloce per fissare un appuntamento in autonomia.',
    action: 'Vai a Treatwell',
    href: 'https://www.treatwell.it/salone/capelli-snc/',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    text: 'Perfetto per chiedere informazioni rapide o capire quale servizio scegliere.',
    action: 'Scrivici ora',
    href: 'https://wa.me/393513346103',
  },
  {
    icon: Phone,
    title: 'Telefono',
    text: 'Se preferisci parlare direttamente con il salone.',
    action: '+39 011 755 287',
    href: 'tel:+39011755287',
  },
]

export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2.2rem] bg-cream-100 p-6 md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <AnimatedSection className="rounded-[1.9rem] bg-sage-950 p-8 text-white md:p-10">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-300">
                Prenota o contattaci
              </span>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-[-0.03em] text-white md:text-5xl">
                Se il sito piace,
                <br />
                <span className="font-light italic text-white/74">il prossimo passo deve essere facilissimo.</span>
              </h2>
              <p className="mt-6 max-w-xl font-sans text-base font-light leading-8 text-white/74 md:text-lg">
                Per questo il blocco finale ora spinge chiaramente all’azione: prenotazione online, WhatsApp e telefono sono subito leggibili e immediati.
              </p>

              <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-gold-400" />
                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                      Dove siamo
                    </p>
                    <p className="mt-2 text-base font-light leading-7 text-white/78">
                      Via Brione 10/c, 10143 Torino — in una zona tranquilla e riservata, ideale per vivere il tempo in salone con calma.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">
              {contactCards.map((card, index) => (
                <AnimatedSection key={card.title} delay={index * 0.08}>
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="surface-card group flex h-full flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                        <card.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-display text-2xl tracking-[-0.03em] text-sage-950">
                        {card.title}
                      </h3>
                      <p className="mt-3 text-sm font-light leading-7 text-sage-600">
                        {card.text}
                      </p>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-sage-800">
                      {card.action}
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
