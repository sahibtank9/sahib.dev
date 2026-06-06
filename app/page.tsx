import Nav from '@/components/Nav'
import Link from 'next/link'
import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Sahib Tank — Software Engineer',
  description:
    'Full-stack software engineer with 5+ years building scalable systems, developer tools, and product-grade web applications.',
}

const posts = [
  {
    year: '2024',
    items: [
      { label: 'Redesigned real-time data pipeline — 10× throughput improvement', href: '/work#realtime-pipeline' },
      { label: 'Led migration of monolith to microservices across 6 domains', href: '/work#microservices-migration' },
    ],
  },
  {
    year: '2023',
    items: [
      { label: 'Built internal design system adopted by 4 product teams', href: '/work#design-system' },
      { label: 'Architected multi-tenant SaaS platform from scratch', href: '/work#saas-platform' },
    ],
  },
  {
    year: '2022',
    items: [
      { label: 'Shipped end-to-end encryption layer for messaging feature', href: '/work#e2e-encryption' },
      { label: 'Reduced CI/CD pipeline time from 28 min → 7 min', href: '/work#cicd-optimisation' },
    ],
  },
  {
    year: '2021',
    items: [
      { label: 'Joined current employer as Senior Software Engineer', href: '/about' },
      { label: 'Contributed to open-source React state-management library', href: '/work#oss-contributions' },
    ],
  },
  {
    year: '2020',
    items: [
      { label: 'Published technical article on distributed caching — 40k reads', href: '/commonplace' },
    ],
  },
  {
    year: '2019',
    items: [
      { label: 'Promoted to Lead Engineer, managing a team of 5', href: '/about' },
    ],
  },
  {
    year: '2017',
    items: [
      { label: 'First full-time role — Software Engineer at a fintech startup', href: '/about' },
    ],
  },
]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main
        style={{
          maxWidth: 'var(--content-width)',
          margin: '0 auto',
          padding: '0 var(--page-px)',
        }}
      >
        {/* Hero */}
        <section
          className="fade-up fade-up-1"
          style={{ paddingTop: '4rem', paddingBottom: '3rem' }}
        >
          <h1 style={{ marginBottom: '1.25rem' }}>
            Sahib Tank
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              lineHeight: '1.75',
              color: 'var(--color-body)',
              maxWidth: '580px',
            }}
          >
            I'm a Software Engineer based in{' '}
            <strong>Ahmedabad, India</strong>. I build scalable systems,
            developer tooling, and product-grade web applications. Currently
            a Senior Engineer at{' '}
            <a href="/about">Infynno Solutions</a>, where I lead frontend infrastructure.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.05rem',
              lineHeight: '1.75',
              color: 'var(--color-body)',
              maxWidth: '580px',
              marginTop: '1rem',
            }}
          >
            I care deeply about system design, clean abstractions, and shipping
            applications that{' '}
            <em>actually works at scale</em>. When I'm not writing code I'm
            reading, taking notes in my{' '}
            <Link href="/commonplace">commonplace book</Link>, or contributing
            to open source.
          </p>
        </section>

        <hr className="section-divider" style={{ margin: '0 0 0' }} />

        {/* Timeline list — mirrors rauchg.com's index */}
        <section
          className="fade-up fade-up-2"
          style={{ paddingTop: '0', paddingBottom: '4rem' }}
        >
          {posts.map((group, gi) => (
            <div key={group.year}>
              {group.items.map((item, ii) => (
                <Link
                  key={ii}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '1.25rem',
                    padding: '0.65rem 0',
                    borderBottom: '1px solid var(--color-border)',
                    textDecoration: 'none',
                    transition: 'background 140ms',
                    borderBottomColor:
                      gi === posts.length - 1 &&
                      ii === group.items.length - 1
                        ? 'transparent'
                        : 'var(--color-border)',
                  }}
                  className="hover-row"
                >
                  {/* Year badge — only show on first item of each group */}
                  <span
                    className="meta"
                    style={{
                      minWidth: '3rem',
                      opacity: ii === 0 ? 1 : 0,
                      userSelect: 'none',
                    }}
                  >
                    {ii === 0 ? group.year : ''}
                  </span>

                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.95rem',
                      color: 'var(--color-body)',
                      lineHeight: '1.5',
                      flex: 1,
                      transition: 'color 140ms',
                    }}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          ))}
        </section>
      </main>
      <Footer />

      <style>{`
        .hover-row:hover span:last-child { color: var(--color-accent); }
      `}</style>
    </>
  )
}
