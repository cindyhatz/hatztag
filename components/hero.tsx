import Image from 'next/image'
import { ArrowDownRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden">
      <Image
        src="/images/hero-stage.png"
        alt="Musician performing on stage under stage lights in front of a crowd"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-32 md:pb-24">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">Public Relations Agency In The Music Industry</p>
        <h1 className="max-w-5xl text-balance font-serif text-5xl leading-[0.95] sm:text-7xl md:text-8xl lg:text-9xl">
          Your sound, <span className="italic text-primary neon-text">heard</span> everywhere it matters.
        </h1>
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            CinnedXO builds press campaigns, media relationships, and lasting reputations for artists,
            labels, and live events.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground neon-glow transition-opacity hover:opacity-90"
            >
              Start a Campaign
              <ArrowDownRight className="size-4" aria-hidden />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-sm border border-foreground/30 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
