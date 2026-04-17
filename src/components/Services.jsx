import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const services = [
  {
    title: 'Drycut',
    subtitle: 'Taglio Asciutto',
    description: 'Taglio su capello asciutto per leggere movimento, volume e caduta reale.',
    result: 'Più naturale e facile da gestire',
    link: '/servizi#drycut',
  },
  {
    title: 'Colorazione Sostenibile',
    subtitle: 'Senza Ammoniaca',
    description: 'Colorazione professionale che rispetta capello, cute e comfort durante il servizio.',
    result: 'Colore luminoso, più delicato',
    link: '/servizi#colorazione',
  },
  {
    title: 'Laminazione',
    subtitle: 'Liscio Perfetto',
    description: 'Dal controllo dell’effetto crespo a un finish più disciplinato e brillante.',
    result: 'Capello levigato e ordinato',
    link: '/servizi#laminazione',
  },
  {
    title: 'Trattamenti SPA',
    subtitle: 'Cute e Lunghezze',
    description: 'Rituali di benessere per pulire, riequilibrare e nutrire in profondità.',
    result: 'Benessere visibile e sensoriale',
    link: '/servizi#spa',
  },
]

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <AnimatedSection className="lg:sticky lg:top-36 lg:self-start">
            <span className="subheading">Servizi principali</span>
            <h2 className="heading-section mt-4 text-sage-950">
              I trattamenti più richiesti,
              <br />
              <span className="font-light italic text-sage-700">spiegati in modo chiaro.</span>
            </h2>
            <p className="text-body mt-6 max-w-xl">
              Abbiamo portato in evidenza i servizi che raccontano meglio il salone: taglio,
              colore, disciplina e benessere. Così chi arriva sul sito capisce subito cosa fai e perché sceglierti.
            </p>

            <div className="mt-8 space-y-3">
              <div className="info-pill">
                Personalizzazione reale
              </div>
              <div className="info-pill">
                Prodotti professionali Davines
              </div>
              <div className="info-pill">
                Approccio elegante ma concreto
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/servizi" className="btn-primary">
                Tutti i servizi
              </Link>
              <a
                href="https://www.treatwell.it/salone/capelli-snc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-sage-700 transition-colors hover:text-sage-950"
              >
                Prenota un appuntamento
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.08}>
                <Link to={service.link} className="surface-card group block h-full p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-500">
                        {service.subtitle}
                      </p>
                      <h3 className="mt-3 font-display text-3xl tracking-[-0.03em] text-sage-950">
                        {service.title}
                      </h3>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-200 text-sage-500 transition-colors duration-200 group-hover:border-sage-900 group-hover:text-sage-900">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>

                  <p className="mt-5 text-sm font-light leading-7 text-sage-600">
                    {service.description}
                  </p>

                  <div className="mt-6 rounded-[1.5rem] bg-cream-100 px-4 py-4">
                    <span className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-500">
                      <Check className="h-3.5 w-3.5" />
                      Risultato percepito
                    </span>
                    <p className="mt-2 text-sm font-medium text-sage-800">
                      {service.result}
                    </p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
