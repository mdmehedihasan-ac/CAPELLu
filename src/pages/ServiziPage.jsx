import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'drycut',
    title: 'Drycut',
    subtitle: 'Taglio Asciutto',
    description: 'La tecnica del taglio asciutto permette di lavorare il capello nella sua forma naturale, ottenendo un risultato personalizzato e armonioso. Il drycut valorizza il movimento naturale dei capelli, rispettandone la struttura e il volume. Ideale per chi cerca un taglio che cada perfettamente senza bisogno di piega quotidiana.',
    image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&q=80',
    reverse: false,
  },
  {
    id: 'colorazione',
    title: 'Colorazione Sostenibile',
    subtitle: 'Senza Ammoniaca',
    description: 'Capelli Lounge Torino crede fermamente nella colorazione sostenibile e, grazie alla propria esperienza, ha maturato una notevole pratica e conoscenza nell\'utilizzo di prodotti di alta qualità. Usiamo prodotti senza ammoniaca che rispettano il capello e l\'ambiente, garantendo risultati brillanti e duraturi.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
    reverse: true,
  },
  {
    id: 'laminazione',
    title: 'Laminazione',
    subtitle: 'Liscio Perfetto',
    description: 'Il nostro trattamento di laminazione per capelli è sviluppabile su diversi livelli, da un semplice risultato anticrespo fino all\'ottenimento di un liscio perfetto. Il trattamento è composto da prodotti naturali che nutrono e proteggono il capello, donando una lucentezza straordinaria che dura nel tempo.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80',
    reverse: false,
  },
  {
    id: 'spa',
    title: 'Trattamenti SPA',
    subtitle: 'Benessere per i Capelli',
    description: 'Capelli Lounge Torino offre una serie di servizi di trattamento per capelli a partire da 30 euro. La durata media si aggira intorno ai 40 minuti circa. Ci piace definirlo yoga per capelli: rituali di benessere che purificano la cute, nutrono il capello e rigenerano lo spirito. Include pulizia del cuoio capelluto e trattamenti specifici per capelli fini.',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&q=80',
    reverse: true,
  },
  {
    id: 'colorazione-light',
    title: 'Colorazione Light',
    subtitle: 'Luminosità Naturale',
    description: 'Uno dei servizi più amati dalle nostre clienti è la Colorazione Light: un effetto di colore che dona luminosità e naturalezza alla chioma. Particolarmente consigliata a chi desidera liberarsi dalla schiavitù del colore, ottenendo un risultato sofisticato con una manutenzione minima e un look sempre fresco.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80',
    reverse: false,
  },
  {
    id: 'comfort-zone',
    title: 'Comfort Zone',
    subtitle: 'Skincare Professionale',
    description: 'Comfort Zone è un marchio di skincare professionale che nasce con l\'obiettivo di far stare bene la pelle, aiutandola a ritrovare il suo equilibrio naturale. L\'idea di base è semplice: quando la pelle è in equilibrio, è più bella, più sana, più luminosa. Trattamenti viso e corpo per un benessere completo.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    reverse: true,
  },
]

export default function ServiziPage() {
  return (
    <>
      <PageHero
        title="I Nostri Servizi"
        subtitle="Trattamenti su misura"
        image="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-shell">
          <AnimatedSection className="mb-14 max-w-3xl">
            <span className="subheading">Panoramica servizi</span>
            <h2 className="heading-section mt-4 text-sage-950">
              Una pagina servizi
              <br />
              <span className="font-light italic text-sage-700">più leggibile e più utile.</span>
            </h2>
            <p className="text-body mt-6">
              Ogni trattamento ora ha più respiro, una descrizione chiara e una CTA coerente,
              per aiutare chi visita il sito a capire rapidamente quale soluzione prenotare.
            </p>
          </AnimatedSection>

          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="surface-card overflow-hidden p-4 md:p-5 lg:p-6">
                <div className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12 ${service.reverse ? '' : ''}`}>
                  <AnimatedSection className={service.reverse ? 'lg:order-2' : ''}>
                    <div className="overflow-hidden rounded-[1.7rem]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[420px]"
                      />
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.15} className={service.reverse ? 'lg:order-1' : ''}>
                    <span className="subheading">{service.subtitle}</span>
                    <h2 className="mt-4 font-display text-4xl tracking-[-0.03em] text-sage-950 md:text-5xl">
                      {service.title}
                    </h2>
                    <p className="mt-6 text-body">
                      {service.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href="https://www.treatwell.it/salone/capelli-snc/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        Prenota questo servizio
                      </a>
                      <a
                        href="https://wa.me/393513346103"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-sage-700 transition-colors hover:text-sage-950"
                      >
                        Chiedi consiglio
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <div className="overflow-hidden rounded-[2rem] bg-sage-950 text-white">
            <AnimatedSection className="p-8 text-center md:p-10 lg:p-12">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-300">
                Hai bisogno di orientamento?
              </span>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-[-0.03em] text-white md:text-5xl">
                Ti aiutiamo a capire
                <br />
                <span className="font-light italic text-white/74">quale trattamento scegliere.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-light leading-8 text-white/72 md:text-lg">
                Se non sai da dove partire, scrivici o prenota una consulenza: così il sito non si limita a mostrare servizi, ma accompagna davvero la decisione.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="https://www.treatwell.it/salone/capelli-snc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-sage-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream-100"
                >
                  Prenota una consulenza
                </a>
                <a
                  href="https://wa.me/393513346103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/16 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
                >
                  WhatsApp diretto
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
