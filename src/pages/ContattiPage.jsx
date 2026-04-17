import { useState } from 'react'
import PageHero from '../components/PageHero'
import AnimatedSection from '../components/AnimatedSection'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', message: '', privacy: false })
  }

  return (
    <>
      <PageHero
        title="Contatti"
        subtitle="Vieni a trovarci"
        image="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
      />

      <section className="section-padding bg-cream-50">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            <AnimatedSection>
              <span className="subheading">Prenotazioni e informazioni</span>
              <h2 className="heading-section mt-4 text-sage-950">
                Contattare il salone
                <br />
                <span className="font-light italic text-sage-700">deve richiedere pochi secondi.</span>
              </h2>
              <p className="text-body mt-6 max-w-xl">
                Ho riorganizzato questa pagina per dare priorità ai canali che convertono meglio:
                prenotazione online, WhatsApp, telefono e indicazioni chiare.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a href="https://www.treatwell.it/salone/capelli-snc/" target="_blank" rel="noopener noreferrer" className="surface-card group p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-sage-950">Prenota online</h3>
                  <p className="mt-2 text-sm font-light leading-7 text-sage-600">
                    Il modo più veloce per fissare il tuo appuntamento su Treatwell.
                  </p>
                </a>

                <a href="https://wa.me/393513346103" target="_blank" rel="noopener noreferrer" className="surface-card group p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-sage-950">WhatsApp</h3>
                  <p className="mt-2 text-sm font-light leading-7 text-sage-600">
                    Ideale per chiedere consiglio sul trattamento più adatto.
                  </p>
                </a>
              </div>

              <div className="mt-8 space-y-5 rounded-[2rem] bg-white p-7 shadow-[0_20px_60px_-35px_rgba(26,31,22,0.22)]">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-sage-700" />
                  <div>
                    <h3 className="font-display text-xl text-sage-950">Indirizzo</h3>
                    <p className="mt-1 text-sm font-light leading-7 text-sage-600">Via Brione 10/c, 10143 Torino (TO)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-sage-700" />
                  <div>
                    <h3 className="font-display text-xl text-sage-950">Telefono</h3>
                    <a href="tel:+39011755287" className="mt-1 block text-sm font-light leading-7 text-sage-600 transition-colors hover:text-sage-950">+39 011 755 287</a>
                    <a href="tel:+393513346103" className="block text-sm font-light leading-7 text-sage-600 transition-colors hover:text-sage-950">+39 351 334 6103</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-sage-700" />
                  <div>
                    <h3 className="font-display text-xl text-sage-950">Email</h3>
                    <a href="mailto:info@capellitorino.it" className="mt-1 block text-sm font-light leading-7 text-sage-600 transition-colors hover:text-sage-950">info@capellitorino.it</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-sage-700" />
                  <div>
                    <h3 className="font-display text-xl text-sage-950">Orari</h3>
                    <div className="mt-1 space-y-1 text-sm font-light leading-7 text-sage-600">
                      <p>Martedì - Venerdì: 9:00 - 19:00</p>
                      <p>Sabato: 9:00 - 17:00</p>
                      <p>Domenica - Lunedì: Chiuso</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="surface-card p-7 md:p-9">
                <h3 className="font-display text-3xl text-sage-950">
                  Scrivici un messaggio
                </h3>
                <p className="mt-2 text-sm font-light leading-7 text-sage-500">
                  Se preferisci essere ricontattata, usa il form qui sotto.
                </p>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage-100">
                      <Send className="h-7 w-7 text-sage-600" />
                    </div>
                    <h4 className="mt-5 font-display text-2xl text-sage-950">Messaggio inviato</h4>
                    <p className="mt-2 text-body">Ti ricontatteremo il prima possibile.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                      <label className="mb-2 block font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-500">
                        Nome e Cognome *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-2xl border border-sage-200 bg-cream-50 px-4 py-3 font-sans text-sm text-sage-900 outline-none transition-colors focus:border-sage-500"
                      />
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-500">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-2xl border border-sage-200 bg-cream-50 px-4 py-3 font-sans text-sm text-sage-900 outline-none transition-colors focus:border-sage-500"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-500">
                          Telefono
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-2xl border border-sage-200 bg-cream-50 px-4 py-3 font-sans text-sm text-sage-900 outline-none transition-colors focus:border-sage-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-sage-500">
                        Messaggio *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full resize-none rounded-2xl border border-sage-200 bg-cream-50 px-4 py-3 font-sans text-sm text-sage-900 outline-none transition-colors focus:border-sage-500"
                      />
                    </div>
                    <label className="flex cursor-pointer items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        checked={formData.privacy}
                        onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                        className="mt-1 accent-sage-700"
                      />
                      <span className="text-xs font-light leading-6 text-sage-500">
                        Ho letto l'informativa sulla privacy e autorizzo il trattamento dei dati personali. *
                      </span>
                    </label>
                    <button type="submit" className="btn-primary w-full">
                      <Send className="h-4 w-4" />
                      Invia messaggio
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white pt-0">
        <div className="container-shell overflow-hidden rounded-[2rem]">
          <div className="h-[400px] md:h-[520px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.8!2d7.63!3d45.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478872f9f984c455%3A0x3e11df0ff29e374d!2sCapelli%20Snc%20Di%20Iannucci%20E.%20E%20Giolito%20M.!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Capelli Lounge Torino - Mappa"
            />
          </div>
        </div>
      </section>
    </>
  )
}
