import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { Leaf, Heart, Sparkles, Award, ArrowRight } from 'lucide-react'

const values = [
  {
    icon: Leaf,
    title: 'Sostenibilità',
    description: 'Utilizziamo prodotti ecologici e pratiche rispettose dell\'ambiente, perché la bellezza non deve avere un costo per il pianeta.',
  },
  {
    icon: Heart,
    title: 'Accoglienza',
    description: 'Un luogo dove sentirsi a casa, dove ogni cliente viene ascoltato e coccolato con attenzione personalizzata.',
  },
  {
    icon: Sparkles,
    title: 'Artigianalità',
    description: 'Ogni trattamento è un\'opera unica, realizzata con sapienza e tecniche all\'avanguardia combinate con metodi tradizionali.',
  },
  {
    icon: Award,
    title: 'Eccellenza',
    description: 'Formazione continua e prodotti premium Davines per garantire risultati che superano le aspettative.',
  },
]

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        title="Chi Siamo"
        subtitle="La nostra storia"
        image="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1920&q=80"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-14">
            <AnimatedSection>
              <span className="subheading">Capelli Lounge Torino</span>
              <h2 className="heading-section mt-4 text-sage-950">
                Un atelier costruito
                <br />
                <span className="font-light italic text-sage-700">per far sentire bene e apparire meglio.</span>
              </h2>
              <div className="mt-7 space-y-5">
                <p className="text-body">
                  Lounge è la parola chiave: un luogo raccolto, elegante e lontano dal rumore,
                  dove Elisa e Manuela hanno dato forma a un salone fatto di ascolto, competenza e cura autentica.
                </p>
                <p className="text-body">
                  L'idea non è offrire un semplice servizio, ma costruire un'esperienza coerente:
                  accoglienza, consulenza, tecnica, prodotti scelti bene e un risultato che ti rappresenti davvero.
                </p>
                <p className="text-body">
                  Tecniche contemporanee, sensibilità artigianale e attenzione etica convivono nello stesso spazio,
                  per dare alla cliente un motivo concreto per tornare.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://www.treatwell.it/salone/capelli-snc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Prenota ora
                </a>
                <a
                  href="https://wa.me/393513346103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-sage-700 transition-colors hover:text-sage-950"
                >
                  Chiedi informazioni
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_30px_90px_-55px_rgba(26,31,22,0.35)]">
                <div className="overflow-hidden rounded-[1.6rem]">
                  <img
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80"
                    alt="Elisa e Manuela al lavoro"
                    className="h-[560px] w-full object-cover"
                  />
                </div>
                <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] border border-white/70 bg-white/90 p-5 backdrop-blur-md md:right-24">
                  <p className="font-display text-2xl leading-tight text-sage-950">
                    “La bellezza autentica nasce quando tecnica e sensibilità lavorano insieme.”
                  </p>
                  <span className="mt-3 block font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-500">
                    Elisa & Manuela
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <AnimatedSection className="mb-14 max-w-3xl">
            <span className="subheading">I nostri valori</span>
            <h2 className="heading-section mt-4 text-sage-950">
              Ciò che rende il salone
              <br />
              <span className="font-light italic text-sage-700">più credibile, non solo più bello.</span>
            </h2>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.08}>
                <div className="surface-card h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-sage-950">{value.title}</h3>
                  <p className="mt-3 text-sm font-light leading-7 text-sage-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-100">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[2rem] bg-sage-950 text-white lg:grid lg:grid-cols-[0.95fr_1.05fr]">
            <AnimatedSection className="p-8 md:p-10 lg:p-12">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-300">
                Partner e qualità prodotti
              </span>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-[-0.03em] text-white md:text-5xl">
                Davines & Comfort Zone
              </h2>
              <p className="mt-6 max-w-xl font-sans text-base font-light leading-8 text-white/72 md:text-lg">
                La scelta dei prodotti rafforza la promessa del salone: qualità professionale,
                sostenibilità e attenzione vera a capelli, cute e pelle.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.12} className="relative min-h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1920&q=80"
                alt="Prodotti Davines"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-950/70 to-transparent" />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
