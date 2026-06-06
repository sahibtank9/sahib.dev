'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

interface NavProps {
  name?: string
}

const navLinks = [
  { href: '/',            label: 'Home'        },
  { href: '/about',       label: 'About'       },
  { href: '/work',        label: 'Work'        },
  { href: '/commonplace', label: 'Commonplace' },
]

const navLinkClass =
  'border-b-0! font-sans text-sm tracking-[0.01em] transition-colors duration-(--duration-fast) hover:border-b-0! hover:text-ink'

export default function Nav({ name = 'Sahib Tank' }: NavProps) {
  const pathname = usePathname()

  return (
    <nav className="max-w-content mx-auto">
      <div className="flex items-baseline justify-between pt-6 px-6">
        <Link
          href="/"
          className="border-b-0! font-serif text-base font-medium tracking-[-0.01em] text-ink hover:border-b-0!"
        >
          {name}
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-baseline gap-5">
            {navLinks.slice(1).map(({ href, label }) => {
              const isActive =
                href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(href)

              return (
                <Link
                  key={href}
                  href={href}
                  className={`${navLinkClass} ${
                    isActive ? 'font-medium text-ink' : 'font-normal text-muted'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
