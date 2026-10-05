import { ArrowUpRight, Mail } from 'lucide-react'

const EMAIL = 'hello@cinnedxo.com'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-24 md:py-40">
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">{"Let's Talk"}</p>
      <h2 className="max-w-5xl text-balance font-serif text-5xl leading-[0.95] md:text-8xl">
        Ready for your <span className="italic text-primary">next chapter?</span>
      </h2>

      <div className="mt-12 grid gap-10 border-t border-border pt-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us about your project — upcoming releases, tour dates, and what success looks like to you.
            We&apos;ll get back to you within two business days.
          </p>
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent('New Campaign Inquiry')}`}
            className="mt-8 inline-flex items-center gap-3 rounded-sm bg-primary px-7 py-4 font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a Campaign
            <ArrowUpRight className="size-5" aria-hidden />
          </a>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Email</h3>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-2 inline-flex items-center gap-2 font-serif text-2xl transition-colors hover:text-primary"
            >
              <Mail className="size-5" aria-hidden />
              {EMAIL}
            </a>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Press Inquiries</h3>
            <p className="mt-2 leading-relaxed">
              Journalists seeking interviews or assets for our artists — reach out anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
