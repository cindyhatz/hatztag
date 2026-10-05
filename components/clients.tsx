const audiences = [
  'Independent Artists',
  'Record Labels',
  'Producers & Songwriters',
  'Festivals & Venues',
  'Music Brands',
  'Tours & Live Events',
]

export function Clients() {
  return (
    <section id="clients" className="scroll-mt-20 border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Who We Serve</p>
            <h2 className="text-balance font-serif text-4xl leading-tight md:text-5xl">
              Every corner of the <span className="italic">industry.</span>
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              Across genres and career stages, we bring the same focus: the right story, in front of the
              right people, at the right time.
            </p>
          </div>

          <ul className="md:col-span-7 md:col-start-6">
            {audiences.map((a) => (
              <li
                key={a}
                className="flex items-baseline justify-between border-b border-border py-6 first:border-t"
              >
                <span className="font-serif text-3xl md:text-4xl">{a}</span>
                <span className="text-primary" aria-hidden>
                  ✦
                </span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="mx-auto mt-24 max-w-4xl text-center">
          <blockquote className="text-balance font-serif text-3xl italic leading-snug md:text-5xl">
            {'“Great music deserves to be heard. Our job is to make sure it is.”'}
          </blockquote>
          <figcaption className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            The CinnedXO Philosophy
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
