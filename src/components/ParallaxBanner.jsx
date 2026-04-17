import { Leaf, Sparkles, Droplets } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const pillars = [
  {
    icon: Sparkles,
    title: 'Metodo personalizzato',
    text: 'Ogni servizio viene calibrato sul risultato desiderato e sulla praticità quotidiana.',
  },
  {
    icon: Leaf,
    title: 'Scelta sostenibile',
    text: 'Prodotti e approccio orientati al rispetto del capello, della cute e dell’ambiente.',
  },
  {
    icon: Droplets,
    title: 'Cura profonda',
    text: 'Non solo estetica: benessere di cute e lunghezze per un risultato che dura.',
  },
]

export default function ParallaxBanner() {
  return (
    <section className="section-padding bg-cream-100">
      <div className="container-shell">
        <div className="surface-card overflow-hidden bg-sage-950 text-white">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <AnimatedSection className="p-8 md:p-10 lg:p-12">
              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-sage-300">
                Prodotti e filosofia
              </span>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-[-0.03em] text-white md:text-5xl">
                Bellezza curata,
                <br />
                <span className="font-light italic text-white/72">senza compromessi inutili.</span>
              </h2>
              <p className="mt-6 max-w-xl font-sans text-base font-light leading-8 text-white/72 md:text-lg">
                Davines e Comfort Zone non sono solo brand “belli da nominare”: rafforzano il posizionamento del salone e danno credibilità a tutto il racconto del sito.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {pillars.map((pillar, index) => (
                  <AnimatedSection key={pillar.title} delay={index * 0.08}>
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-gold-400">
                        <pillar.icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-display text-xl text-white">{pillar.title}</h3>
                      <p className="mt-2 text-sm font-light leading-6 text-white/68">{pillar.text}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="relative min-h-[320px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?w=1200&q=80"
                alt="Prodotti professionali nel salone"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-950/75 via-sage-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="max-w-sm rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55">
                    In salone
                  </p>
                  <p className="mt-3 font-display text-2xl leading-tight text-white">
                    Davines e Comfort Zone per elevare l’esperienza, non solo il risultato visivo.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
