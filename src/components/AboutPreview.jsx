import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Sparkles, HeartHandshake } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const values = [
  {
    icon: HeartHandshake,
    title: 'Ascolto reale',
    text: 'Ogni percorso parte da una consulenza precisa, non da una proposta standard.',
  },
  {
    icon: Sparkles,
    title: 'Tecnica e stile',
    text: 'Taglio, colore e trattamenti vengono calibrati sulla persona e sulla quotidianità.',
  },
  {
    icon: Leaf,
    title: 'Scelta sostenibile',
    text: 'Lavoriamo con prodotti professionali di qualità, rispettosi del capello e dell’ambiente.',
  },
]

export default function AboutPreview() {
  return (
    <section className="section-padding bg-cream-50">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-[2rem] bg-sage-100 p-3 shadow-[0_30px_90px_-55px_rgba(26,31,22,0.4)]">
              <div className="overflow-hidden rounded-[1.6rem]">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80"
                  alt="Capelli Lounge interno"
                  className="h-[520px] w-full object-cover"
                />
              </div>
              <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/60 bg-white/88 p-5 backdrop-blur-md md:right-20">
                <p className="font-display text-2xl tracking-[-0.03em] text-sage-950">
                  Un luogo raccolto, elegante e lontano dal caos.
                </p>
                <p className="mt-2 text-sm font-light leading-6 text-sage-600">
                  In zona residenziale a Torino, per vivere il tempo in salone come un'esperienza curata e rilassante.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <span className="subheading">Il nostro modo di lavorare</span>
            <h2 className="heading-section mt-4 text-sage-950">
              Un salone contemporaneo,
              <br />
              <span className="font-light italic text-sage-700">con attenzione artigianale.</span>
            </h2>

            <div className="mt-7 space-y-5">
              <p className="text-body">
                Elisa e Manuela hanno costruito Capelli Lounge Torino come un atelier in cui
                professionalità, cura del dettaglio e ascolto della cliente convivono davvero.
              </p>
              <p className="text-body">
                Qui non si propone un servizio “uguale per tutti”: si lavora per creare un risultato
                credibile, elegante e sostenibile nel tempo, in armonia con i capelli, il viso e lo stile di vita.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="surface-card p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-xl text-sage-900">{value.title}</h3>
                  <p className="mt-2 text-sm font-light leading-6 text-sage-600">{value.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link to="/chi-siamo" className="btn-outline">
                Scopri il salone
              </Link>
              <Link
                to="/chi-siamo"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-sage-700 transition-colors hover:text-sage-950"
              >
                La nostra storia
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
