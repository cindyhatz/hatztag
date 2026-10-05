import Image from 'next/image'

const values = [
  { title: 'Artist-first', text: 'Every campaign starts with your vision, not a template.' },
  { title: 'Relationship-driven', text: 'Real connections with the people who shape culture.' },
  { title: 'Transparent', text: 'Clear reporting, honest feedback, no surprises.' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
        <div className="relative grid grid-cols-2 gap-4 md:col-span-6">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/images/studio-artist.png"
              alt="Recording artist wearing headphones in a dimly lit studio"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="relative mt-16 aspect-[3/4] overflow-hidden rounded-sm">
            <Image
              src="/images/press-room.png"
              alt="Press microphones lined up at a music press conference"
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center md:col-span-5 md:col-start-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">About CinnedXO</p>
          <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
            We turn great music into <span className="italic">great stories.</span>
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            CinnedXO is a boutique public relations agency dedicated exclusively to the music industry.
            We partner with emerging and established artists, independent labels, producers, and live
            event brands to earn meaningful coverage and build careers that last.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Small by design, we give every client senior-level attention and a campaign as distinct as
            their sound.
          </p>

          <div className="mt-8 border-l-2 border-primary pl-5">
            <p className="font-serif text-2xl">Cindy Hatzikontos</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Founder &middot; Established August 1, 2025
            </p>
          </div>

          <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <dt className="font-serif text-xl text-primary">{v.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
