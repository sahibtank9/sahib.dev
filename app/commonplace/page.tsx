import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Commonplace',
  description:
    'A commonplace book — curated notes, quotes, links, and ideas worth returning to.',
}

type CPEntry = {
  id: string
  date: string
  type: 'note' | 'quote' | 'link' | 'idea'
  title?: string
  body: string
  attribution?: string
  href?: string
  tags: string[]
}

const entries: CPEntry[] = [
  {
    id: 'cp-1',
    date: 'May 2025',
    type: 'quote',
    body: 'The purpose of abstraction is not to be vague, but to create a new semantic level in which one can be absolutely precise.',
    attribution: 'Edsger W. Dijkstra',
    tags: ['software design', 'abstraction'],
  },
  {
    id: 'cp-2',
    date: 'Apr 2025',
    type: 'note',
    title: 'On the cost of distributed systems',
    body: `Every distributed system is eventually a consistency problem in disguise. 
    The CAP theorem doesn't tell you which tradeoffs to make — it tells you that you 
    cannot avoid making them. The best architecture decisions I've seen were made by 
    engineers who understood the business domain well enough to know which consistency 
    guarantees actually mattered to their users, and which ones were theoretical 
    concerns they could trade away for simplicity.`,
    tags: ['distributed systems', 'architecture'],
  },
  {
    id: 'cp-3',
    date: 'Mar 2025',
    type: 'link',
    title: 'A Philosophy of Software Design — John Ousterhout',
    href: 'https://www.amazon.com/Philosophy-Software-Design-2nd/dp/173210221X',
    body: `The best book on software design I've read in years. Ousterhout's core 
    argument is that complexity is the root cause of nearly all software problems, 
    and that good design is about managing complexity through deep modules with 
    simple interfaces. His concept of "classitis" — excessive decomposition creating 
    shallow, leaky abstractions — perfectly describes a mistake I've made and seen 
    made countless times.`,
    tags: ['books', 'software design', 'recommended'],
  },
  {
    id: 'cp-4',
    date: 'Feb 2025',
    type: 'idea',
    title: 'Runbooks as design documents',
    body: `I've started writing the runbook before writing the code. If I can't 
    explain how to operate a system in plain English — how to know it's healthy, 
    what degrades gracefully, what fails hard, how to restore it — then I don't 
    understand the system well enough to build it. The runbook becomes a forcing 
    function for operational clarity that no amount of code review achieves.`,
    tags: ['operations', 'process', 'writing'],
  },
  {
    id: 'cp-5',
    date: 'Jan 2025',
    type: 'quote',
    body: 'Make it work, make it right, make it fast. In that order, and only that order.',
    attribution: 'Kent Beck',
    tags: ['engineering', 'pragmatism'],
  },
  {
    id: 'cp-6',
    date: 'Dec 2024',
    type: 'link',
    title: 'An Illustrated Proof of the CAP Theorem — Henry Robinson',
    href: 'https://mwhittaker.github.io/blog/an_illustrated_proof_of_the_cap_theorem/',
    body: `The clearest visual explanation of CAP I have found. I link this to every 
    new engineer on my team during onboarding. Worth bookmarking.`,
    tags: ['distributed systems', 'learning resources'],
  },
  {
    id: 'cp-7',
    date: 'Nov 2024',
    type: 'note',
    title: 'The two types of technical debt',
    body: `I distinguish between deliberate and accidental technical debt. Deliberate 
    debt is a conscious tradeoff — we shipped fast knowing we'd need to refactor. 
    Accidental debt is the result of not knowing better at the time. The former is 
    manageable if you track it. The latter is dangerous because it's invisible until 
    it compounds. Most teams conflate the two and end up with neither type addressed.`,
    tags: ['engineering culture', 'technical debt'],
  },
  {
    id: 'cp-8',
    date: 'Oct 2024',
    type: 'idea',
    title: 'Slow is smooth, smooth is fast',
    body: `Borrowed from military training. The engineers I most admire don't type 
    faster — they think more clearly before they type. They ask the question behind 
    the question. They resist the urge to immediately reach for a solution. The extra 
    10 minutes of upfront thinking reliably saves hours downstream.`,
    tags: ['engineering mindset'],
  },
  {
    id: 'cp-9',
    date: 'Sep 2024',
    type: 'quote',
    body: 'Good software is software that changes well.',
    attribution: 'Michael Feathers, Working Effectively with Legacy Code',
    tags: ['software design', 'books'],
  },
  {
    id: 'cp-10',
    date: 'Aug 2024',
    type: 'link',
    title: 'Designing Data-Intensive Applications — Martin Kleppmann',
    href: 'https://dataintensive.net/',
    body: `The single most impactful technical book I've read. If you work on 
    backends and haven't read it, stop and read it. Chapter 9 on consistency 
    and consensus alone is worth the price.`,
    tags: ['books', 'distributed systems', 'recommended'],
  },
]

const typeStyles: Record<CPEntry['type'], { label: string; bg: string; color: string }> = {
  note:  { label: 'Note',  bg: '#EEF0F8', color: '#3A4A7A' },
  quote: { label: 'Quote', bg: '#F5EEF8', color: '#6B3A7A' },
  link:  { label: 'Link',  bg: '#EEF6F8', color: '#2F6B6B' },
  idea:  { label: 'Idea',  bg: '#F8F0EE', color: '#7A4A3A' },
}

export default function CommonplacePage() {
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
        {/* Heading */}
        <section
          className="fade-up fade-up-1"
          style={{ paddingTop: '4rem', paddingBottom: '1.5rem' }}
        >
          <h1>Commonplace</h1>
          <p
            style={{
              marginTop: '0.75rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              color: 'var(--color-muted)',
              maxWidth: '520px',
              lineHeight: '1.7',
            }}
          >
            A commonplace book — notes I've written to myself, quotes I keep
            returning to, links worth bookmarking, and ideas I'm working
            through. Updated irregularly.
          </p>
        </section>

        {/* Entries */}
        <section
          className="fade-up fade-up-2"
          style={{ paddingBottom: '5rem' }}
        >
          {entries.map((entry) => {
            const ts = typeStyles[entry.type]
            return (
              <article key={entry.id} className="cp-entry">
                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '0.6rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {/* Type badge */}
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        fontWeight: 500,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        padding: '0.1rem 0.45rem',
                        borderRadius: '3px',
                        background: ts.bg,
                        color: ts.color,
                      }}
                    >
                      {ts.label}
                    </span>

                    {/* Title */}
                    {entry.title && (
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          fontSize: '0.95rem',
                          fontWeight: 500,
                          color: 'var(--color-ink)',
                        }}
                      >
                        {entry.href ? (
                          <a
                            href={entry.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {entry.title} ↗
                          </a>
                        ) : (
                          entry.title
                        )}
                      </span>
                    )}
                  </div>

                  <span className="meta">{entry.date}</span>
                </div>

                {/* Body */}
                {entry.type === 'quote' ? (
                  <blockquote>
                    {entry.body}
                    {entry.attribution && <cite>— {entry.attribution}</cite>}
                  </blockquote>
                ) : (
                  <p
                    style={{
                      fontSize: '0.93rem',
                      lineHeight: '1.75',
                      color: 'var(--color-body)',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {entry.body}
                  </p>
                )}

                {/* Tags */}
                {entry.tags.length > 0 && (
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.3rem',
                      marginTop: '0.75rem',
                    }}
                  >
                    {entry.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            )
          })}
        </section>
      </main>
      <Footer />
    </>
  )
}
