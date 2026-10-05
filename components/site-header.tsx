'use client'

import { useState } from 'react'
import { Heart, Menu, X } from 'lucide-react'

// Replace with your GoFundMe / donation page link.
const FUNDRAISER_URL = 'https://www.gofundme.com/'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#clients', label: 'Who We Serve' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-serif text-2xl tracking-tight" aria-label="CinnedXO home">
          Cinned<span className="italic text-primary">XO</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={FUNDRAISER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-primary px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            <Heart className="size-4" aria-hidden />
            Fund for School
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            href="#contact"
            className="inline-flex rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start a Campaign
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border/60 md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-2xl"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex flex-wrap gap-3 pt-4">
              <a
                href={FUNDRAISER_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-sm border border-primary px-5 py-3 text-sm font-medium text-primary"
              >
                <Heart className="size-4" aria-hidden />
                Fund for School
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Start a Campaign
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
