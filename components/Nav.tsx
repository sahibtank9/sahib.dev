'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavProps {
  name?: string
}

const navLinks = [
  { href: '/',            label: 'Home'        },
  { href: '/about',       label: 'About'       },
  { href: '/work',        label: 'Work'        },
  { href: '/commonplace', label: 'Commonplace' },
]

export default function Nav({ name = 'Sahib Tank' }: NavProps) {
  const pathname = usePathname()

  return (
    <nav
      style={{
        maxWidth: 'var(--content-width)',
        margin: '0 auto',
        padding: '0 var(--page-px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          paddingTop: '2rem',
          paddingBottom: '0',
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1rem',
            fontWeight: 500,
            color: 'var(--color-ink)',
            letterSpacing: '-0.01em',
            borderBottom: 'none',
          }}
        >
          {name}
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'baseline' }}>
          {navLinks.slice(1).map(({ href, label }) => {
            const isActive =
              href === '/'
                ? pathname === '/'
                : pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link${isActive ? ' active' : ''}`}
              >
                {label}
              </Link>
            )
          })}
          
        </div>
      </div>
    </nav>
  )
}
