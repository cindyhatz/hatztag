const services = [
  {
    title: 'Release Campaigns',
    description:
      'Strategic press rollouts for singles, EPs, and albums. Premieres, reviews, interviews, and features timed to maximize every release window.',
  },
  {
    title: 'Media Relations',
    description:
      'Direct relationships with editors, journalists, podcasters, and tastemakers across print, digital, radio, and broadcast.',
  },
  {
    title: 'Tour & Live Publicity',
    description:
      'Market-by-market press for tours, festivals, and showcases. Local previews, live reviews, and on-the-road interview scheduling.',
  },
  {
    title: 'Artist Branding & Narrative',
    description:
      'Bios, press kits, one-sheets, and the story that sets you apart. We shape how the world talks about your music.',
  },
  {
    title: 'Media Training',
    description:
      'Interview preparation, talking points, and on-camera coaching so every conversation lands with confidence.',
  },
  {
    title: 'Reputation & Crisis',
    description:
      'Proactive reputation management and calm, discreet counsel when the spotlight turns unexpectedly.',
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:py-32">
      <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">Services</p>
          <h2 className="text-balance font-serif text-4xl leading-tight md:text-6xl">
            Publicity built for the <span className="italic">music</span> business.
          </h2>
        </div>
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground md:justify-self-end">
          From a debut single to a world tour, we design campaigns around your goals, your audience,
          and the moment your music deserves.
        </p>
      </div>

      <ul className="grid border-t border-border md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <li
            key={service.title}
            className="group border-b border-border py-10 md:px-8 md:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r md:first:pl-0 lg:[&:nth-child(3n+1)]:pl-0"
          >
            <span className="font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-4 font-serif text-3xl transition-colors group-hover:text-primary">
              {service.title}
            </h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
