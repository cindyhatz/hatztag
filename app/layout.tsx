import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cinnedxo.com'),
  title: 'CinnedXO — Public Relations Agency In The Music Industry',
  description:
    'CinnedXO is a public relations agency in the music industry, building press campaigns, media strategy, and lasting reputations for artists, labels, and live events.',
  keywords: ['music PR', 'music publicist', 'artist publicity', 'press campaigns', 'music public relations'],
  openGraph: {
    title: 'CinnedXO — Public Relations Agency In The Music Industry',
    description: 'Press campaigns and media strategy for artists, labels, and live events.',
    url: 'https://www.cinnedxo.com',
    siteName: 'CinnedXO',
    images: ['/images/hero-stage.png'],
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1c1917',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
