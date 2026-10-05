const steps = [
  {
    phase: 'Listen',
    text: 'We dig into your music, your goals, and your audience to find the story only you can tell.',
  },
  {
    phase: 'Strategize',
    text: 'A tailored campaign plan with target outlets, timelines, assets, and clear milestones.',
  },
  {
    phase: 'Amplify',
    text: 'Pitching, premieres, interviews, and placements — executed with precision and persistence.',
  },
  {
    phase: 'Report',
    text: 'Detailed coverage reports and debriefs so you know exactly what landed and what comes next.',
  },
]

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:py-32">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">How We Work</p>
      <h2 className="max-w-3xl text-balance font-serif text-4xl leading-tight md:text-6xl">
        A campaign in four <span className="italic">movements.</span>
      </h2>

      <ol className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.phase} className="flex flex-col bg-background p-8">
            <span className="font-serif text-6xl italic text-primary">{i + 1}</span>
            <h3 className="mt-8 text-lg font-medium uppercase tracking-widest">{step.phase}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
