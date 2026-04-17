import { Star, Quote, ArrowRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const reviews = [
  {
    name: 'Ezio C.',
    text: 'Professionalità, competenza e gentilezza. Il miglior salone di Torino, ambiente accogliente e rilassante. Elisa e Manuela sono eccezionali.',
    rating: 5,
  },
  {
    name: 'Anna A.',
    text: 'Finalmente un salone dove mi sento ascoltata. Il taglio è sempre perfetto e la colorazione rispetta i miei capelli. Consigliatissimo!',
    rating: 5,
  },
  {
    name: 'Silvana M.',
    text: 'Esperienza fantastica! Ambiente curato nei minimi dettagli, prodotti naturali di qualità. I miei capelli non sono mai stati così belli.',
    rating: 5,
  },
  {
    name: 'Loredana V.',
    text: 'Un\'oasi di pace. Elisa e Manuela sono delle vere artiste. La laminazione che ho fatto è stata incredibile, capelli perfetti per settimane.',
    rating: 5,
  },
  {
    name: 'Renny G.',
    text: 'Professionalità al top. Ho provato il drycut e il risultato è stato sorprendente. Il taglio cade in modo naturale, esattamente come volevo.',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section className="section-padding bg-sage-950 text-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <AnimatedSection>
            <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-300">
              Fiducia e recensioni
            </span>
            <h2 className="mt-4 font-display text-4xl font-medium tracking-[-0.03em] text-white md:text-5xl">
              Quando il sito deve convincere,
              <br />
              <span className="font-light italic text-white/75">la reputazione conta davvero.</span>
            </h2>
            <p className="mt-6 max-w-xl font-sans text-base font-light leading-8 text-white/72 md:text-lg">
              Le recensioni raccontano meglio di qualsiasi slogan la qualità dell'esperienza:
              professionalità, ascolto, ambiente curato e risultati che fanno tornare.
            </p>

            <div className="mt-8 flex items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm">
              <div className="flex items-center gap-1 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div>
                <p className="font-display text-3xl text-white">5.0</p>
                <p className="text-sm font-light text-white/65">Valutazione media su Google</p>
              </div>
            </div>

            <a
              href="https://search.google.com/local/reviews?placeid=ChIJVcS8hflsiEcRTTee8g_fET4"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-[0.08em] text-white transition-colors hover:text-gold-400"
            >
              Leggi tutte le recensioni
              <ArrowRight className="h-4 w-4" />
            </a>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2">
            {reviews.slice(0, 4).map((review, index) => (
              <AnimatedSection key={review.name} delay={index * 0.08}>
                <div className="h-full rounded-[1.9rem] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-gold-400">
                      {[...Array(review.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <Quote className="h-5 w-5 rotate-180 text-white/25" />
                  </div>
                  <p className="mt-5 text-base font-light leading-8 text-white/80">
                    “{review.text}”
                  </p>
                  <div className="mt-6 border-t border-white/10 pt-4">
                    <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/52">
                      {review.name}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
