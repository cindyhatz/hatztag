import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Process } from '@/components/process'
import { Clients } from '@/components/clients'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Process />
        <Clients />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
