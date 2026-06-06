import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Sahib Tank — Software Engineer',
    template: '%s — Sahib Tank',
  },
  description:
    'Full-stack software engineer specialising in scalable web systems, distributed architecture, and developer tooling.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sahibtank.com',
    siteName: 'Sahib Tank',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@alexmorgan_dev',
  },
}

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.dataset.theme = 'dark';
    }
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
