import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, image }) {
  return (
    <section className="px-3 pb-6 pt-28 md:px-5 md:pb-8 md:pt-36 lg:pt-44">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2.2rem] bg-sage-950 text-white shadow-[0_40px_100px_-60px_rgba(26,31,22,0.8)]">
          <div className="absolute inset-0">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(26,31,22,0.9)_0%,rgba(26,31,22,0.72)_42%,rgba(26,31,22,0.26)_100%)]" />
          </div>

          <div className="relative z-10 min-h-[360px] px-6 py-12 md:min-h-[420px] md:px-10 md:py-14 lg:px-14 lg:py-16">
            <div className="flex h-full max-w-3xl flex-col justify-end">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="font-sans text-[11px] font-semibold uppercase tracking-[0.24em] text-white/58"
              >
                {subtitle}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22 }}
                className="mt-4 font-display text-5xl font-medium tracking-[-0.04em] text-white md:text-6xl lg:text-7xl"
              >
                {title}
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
