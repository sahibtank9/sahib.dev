import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Projects and engineering work by Sahib Tank.',
}

type Project = {
  id: string
  title: string
  period: string
  role: string
  company: string
  summary: string
  challenge: string
  what: string[]
  outcome: string
  stack: string[]
}

const projects: Project[] = [
  {
    id: 'realtime-pipeline',
    title: 'Real-Time Event Streaming Platform',
    period: '2024',
    role: 'Lead Engineer',
    company: 'Acme Corp (NDA)',
    summary:
      'Redesigned the core data ingestion pipeline to support near-real-time analytics across multiple product lines.',
    challenge:
      'The existing batch-based ETL pipeline introduced 15–20 minutes of data lag, making it impossible to power live dashboards or trigger time-sensitive automated workflows for enterprise customers.',
    what: [
      'Architected a Kafka-based event streaming topology replacing a legacy cron-driven ETL system.',
      'Designed idempotent consumer groups with exactly-once semantics, eliminating duplicate processing across service restarts.',
      'Built a backpressure mechanism that gracefully degrades under traffic spikes without dropping events.',
      'Instrumented end-to-end latency with OpenTelemetry; set up alerting on p99 lag metrics.',
      'Wrote comprehensive runbooks and onboarded 3 engineers to own the system post-launch.',
    ],
    outcome:
      'Reduced data lag from ~18 minutes to under 3 seconds at p99. Pipeline now processes 500k+ events/day with no data loss incidents since launch.',
    stack: ['Go', 'Apache Kafka', 'Kubernetes', 'PostgreSQL', 'OpenTelemetry', 'Grafana', 'Terraform'],
  },
  {
    id: 'microservices-migration',
    title: 'Monolith-to-Microservices Migration',
    period: '2023–2024',
    role: 'Technical Lead',
    company: 'Acme Corp (NDA)',
    summary:
      'Led the decomposition of a 6-year-old Rails monolith into domain-aligned microservices, enabling independent deployments across 6 product domains.',
    challenge:
      'A tightly-coupled Rails codebase with 300k+ lines had become a bottleneck: a change in the billing module required a full-suite test run and risked breaking unrelated features. Deploy frequency was capped at twice per week.',
    what: [
      'Facilitated domain-modelling workshops with product and engineering to define service boundaries using Domain-Driven Design principles.',
      'Established an inter-service API contract protocol (OpenAPI + contract testing) before writing a single line of service code.',
      'Introduced a service mesh (Linkerd) for mTLS, observability, and load balancing between services.',
      'Used the Strangler Fig pattern to route traffic incrementally — zero big-bang cutover.',
      'Migrated 6 domains over 14 months with no production outages attributable to the migration itself.',
    ],
    outcome:
      'Teams can now deploy independently up to 15× per day. Incident blast radius dropped significantly — a bug in one domain no longer cascades across the platform.',
    stack: ['Go', 'Node.js', 'Linkerd', 'Kubernetes', 'Kafka', 'PostgreSQL', 'Redis', 'OpenAPI'],
  },
  {
    id: 'design-system',
    title: 'Internal Component Library & Design System',
    period: '2023',
    role: 'Frontend Lead',
    company: 'Acme Corp (NDA)',
    summary:
      'Built a production-grade React component library and design system adopted across 4 product teams, eliminating UI inconsistencies and reducing feature development time.',
    challenge:
      'Four separate product teams were maintaining their own button components, form primitives, and modal patterns — leading to a fragmented product experience and duplicated engineering effort.',
    what: [
      'Conducted a component audit across all four products to identify overlapping primitives and diverging patterns.',
      'Designed a token-based theming architecture (color, spacing, typography) that allowed product-level customisation without forking components.',
      'Built 60+ accessible components (WCAG 2.1 AA) with TypeScript, React, and Radix UI primitives.',
      'Set up Storybook with Chromatic for visual regression testing on every PR.',
      'Wrote migration guides and held office hours to support adoption across teams.',
    ],
    outcome:
      'All 4 product teams migrated within 3 months. New feature UI now takes 30–40% less time to build. Zero accessibility audit findings on components covered by the library.',
    stack: ['React', 'TypeScript', 'Radix UI', 'Tailwind CSS', 'Storybook', 'Chromatic', 'Figma'],
  },
  {
    id: 'saas-platform',
    title: 'Multi-Tenant SaaS Platform',
    period: '2023',
    role: 'Architect & Lead Engineer',
    company: 'Acme Corp (NDA)',
    summary:
      'Designed and built the core multi-tenancy infrastructure for a new B2B product line, supporting isolated data, per-tenant feature flags, and custom role hierarchies.',
    challenge:
      'The company was entering a new enterprise market that required strict data isolation, SSO integration, and per-customer permission models — none of which existed in the existing product.',
    what: [
      'Chose a hybrid multi-tenancy model: shared compute with schema-level data isolation in PostgreSQL.',
      'Built a RBAC engine supporting up to 4 role tiers and 200+ granular permissions, evaluated at the API gateway layer.',
      'Integrated with SAML 2.0 and OIDC for enterprise SSO (Okta, Azure AD, Google Workspace).',
      'Implemented per-tenant feature flags backed by a lightweight flag service, enabling safe rollouts to specific customers.',
      'Designed audit logging that captured every state-changing operation for compliance requirements.',
    ],
    outcome:
      'Platform onboarded first 3 enterprise customers within 6 weeks of launch. Passed SOC 2 Type I audit with no major findings.',
    stack: ['Go', 'PostgreSQL', 'React', 'Next.js', 'Redis', 'AWS', 'SAML 2.0', 'OIDC'],
  },
  {
    id: 'e2e-encryption',
    title: 'End-to-End Encrypted Messaging',
    period: '2022',
    role: 'Software Engineer',
    company: 'HealthStack Inc. (NDA)',
    summary:
      'Designed and shipped an end-to-end encrypted in-app messaging system for a healthcare platform, enabling HIPAA-compliant communication between patients and providers.',
    challenge:
      'Healthcare regulations required that message contents be unreadable to the platform itself. Existing solutions were either too complex to implement correctly or didn&apos;t integrate with the existing React Native mobile client.',
    what: [
      'Implemented the Signal Protocol (libsodium bindings) for key exchange and message encryption.',
      'Designed a key management service that handled device registration, key rotation, and multi-device sync.',
      "Built the React Native client-side encryption layer with a clean abstraction so product engineers didn't need to reason about cryptography.",
      'Wrote a threat model document reviewed by an external security auditor.',
      'Shipped with 100% unit test coverage on the encryption primitives.',
    ],
    outcome:
      'Feature passed HIPAA technical safeguards review. Zero security findings in subsequent penetration test. Became a key differentiator in enterprise sales conversations.',
    stack: ['React Native', 'TypeScript', 'Node.js', 'libsodium', 'Signal Protocol', 'PostgreSQL', 'AWS KMS'],
  },
  {
    id: 'cicd-optimisation',
    title: 'CI/CD Pipeline Optimisation',
    period: '2022',
    role: 'Infrastructure Engineer',
    company: 'HealthStack Inc. (NDA)',
    summary:
      'Reduced CI pipeline duration from 28 minutes to 7 minutes, unblocking developer throughput and cutting monthly CI costs by 60%.',
    challenge:
      'A monorepo with a slow, unparallelised test suite meant engineers waited nearly 30 minutes per PR. CI costs were unsustainable, and the slow feedback loop was degrading morale and merge frequency.',
    what: [
      'Audited the existing GitHub Actions pipeline to identify bottlenecks — 60% of time was in a single sequential test job.',
      'Introduced affected-package detection (using nx affected) to run only tests relevant to changed code.',
      "Parallelised the test suite across 8 workers using Jest's --shard flag and GitHub Actions job matrices.",
      'Set up remote build caching (Nx Cloud) to skip unchanged build artifacts.',
      'Added pre-merge lint and type-check as a fast-fail step (< 90 seconds) before the full test suite.',
    ],
    outcome:
      'Median CI time dropped from 28 min to 6:45 min. Monthly CI costs reduced by 62%. PR merge frequency increased by ~2× within the first month.',
    stack: ['GitHub Actions', 'Nx', 'Jest', 'Docker', 'TypeScript', 'Bash'],
  },
  {
    id: 'oss-contributions',
    title: 'Open-Source Contributions',
    period: '2020–Present',
    role: 'Contributor',
    company: 'Various',
    summary:
      'Ongoing contributions to open-source projects in the JavaScript/TypeScript and Go ecosystems.',
    challenge: '',
    what: [
      'Contributed a query-batching optimisation to Prisma ORM that reduced N+1 query patterns in many-to-many relations.',
      'Fixed a type inference bug in tRPC that affected nested router procedures — PR merged within 48 hours.',
      'Authored an open-source CLI scaffolding tool for Go microservices (100+ GitHub stars).',
      'Regularly review issues and mentor first-time contributors in the communities I am part of.',
    ],
    outcome: '',
    stack: ['TypeScript', 'Go', 'Prisma', 'tRPC', 'Node.js'],
  },
]

export default function WorkPage() {
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
          style={{ paddingTop: '4rem', paddingBottom: '1rem' }}
        >
          <h1>Work</h1>
          <p
            style={{
              marginTop: '0.75rem',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.95rem',
              color: 'var(--color-muted)',
              maxWidth: '520px',
            }}
          >
            A detailed account of projects I've shipped. Specific product names
            and screenshots are omitted due to NDAs, but I've written each entry
            with enough technical depth to convey the problem, approach, and
            outcome.
          </p>
        </section>

        {/* Project list */}
        <section
          className="fade-up fade-up-2"
          style={{ paddingBottom: '5rem' }}
        >
          {projects.map((p) => (
            <article key={p.id} id={p.id} className="work-card">
              {/* Card header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '0.5rem',
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-serif)',
                    fontWeight: 500,
                  }}
                >
                  {p.title}
                </h2>
                <span className="meta">{p.period}</span>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  className="meta"
                  style={{ color: 'var(--color-accent)', fontWeight: 500 }}
                >
                  {p.role}
                </span>
                <span className="meta">·</span>
                <span className="meta">{p.company}</span>
              </div>

              {/* Summary */}
              <p
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  color: 'var(--color-body)',
                  marginBottom: '1rem',
                }}
              >
                {p.summary}
              </p>

              {/* Challenge */}
              {p.challenge && (
                <div style={{ marginBottom: '1rem' }}>
                  <span
                    className="meta"
                    style={{
                      display: 'block',
                      marginBottom: '0.4rem',
                      color: 'var(--color-ink)',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontSize: '0.68rem',
                    }}
                  >
                    The Challenge
                  </span>
                  <p
                    style={{
                      fontSize: '0.93rem',
                      lineHeight: '1.7',
                      color: 'var(--color-body)',
                    }}
                  >
                    {p.challenge}
                  </p>
                </div>
              )}

              {/* What I did */}
              <div style={{ marginBottom: '1rem' }}>
                <span
                  className="meta"
                  style={{
                    display: 'block',
                    marginBottom: '0.4rem',
                    color: 'var(--color-ink)',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontSize: '0.68rem',
                  }}
                >
                  What I Did
                </span>
                <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
                  {p.what.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: '0.93rem',
                        lineHeight: '1.7',
                        color: 'var(--color-body)',
                        marginBottom: '0.3rem',
                        listStyleType: 'disc',
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome */}
              {p.outcome && (
                <div style={{ marginBottom: '1.25rem' }}>
                  <span
                    className="meta"
                    style={{
                      display: 'block',
                      marginBottom: '0.4rem',
                      color: 'var(--color-ink)',
                      fontWeight: 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      fontSize: '0.68rem',
                    }}
                  >
                    Outcome
                  </span>
                  <p
                    style={{
                      fontSize: '0.93rem',
                      lineHeight: '1.7',
                      color: 'var(--color-accent)',
                      fontWeight: 400,
                    }}
                  >
                    {p.outcome}
                  </p>
                </div>
              )}

              {/* Stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {p.stack.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
