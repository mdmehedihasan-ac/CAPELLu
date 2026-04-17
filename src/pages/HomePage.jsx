import Hero from '../components/Hero'
import Reviews from '../components/Reviews'
import Services from '../components/Services'
import AboutPreview from '../components/AboutPreview'
import ParallaxBanner from '../components/ParallaxBanner'
import CTASection from '../components/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reviews />
      <Services />
      <AboutPreview />
      <ParallaxBanner />
      <CTASection />
    </>
  )
}
