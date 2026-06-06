import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Background, experience, and technical contributions of Sahib Tank, senior software engineer.',
}

export default function AboutPage() {
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
        {/* Page heading */}
        <section
          className="fade-up fade-up-1"
          style={{ paddingTop: '4rem', paddingBottom: '0' }}
        >
          <h1>About</h1>
        </section>

        {/* Avatar + intro block */}
        <section
          className="fade-up fade-up-2 prose"
          style={{ paddingTop: '2rem' }}
        >
          {/* Avatar placeholder — replace with <Image> */}
          <div
            style={{
              float: 'right',
              marginLeft: '2rem',
              marginBottom: '1rem',
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              background: 'var(--color-surface)',
              border: '2px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif)',
              fontSize: '2rem',
              color: 'var(--color-muted)',
            }}
            aria-hidden
          >
            AM
          </div>

          <p>
            I'm Sahib Tank, a frontend engineer based in India with nearly 5 years
            of experience building web applications with React, Next.js, and
            TypeScript.
          </p>



          <p>
            Currently, I work as a Senior Software Engineer, where I build and
            maintain large-scale web applications and real-time features such as
            chat and video calling. I enjoy taking products from idea to
            production and finding ways to make them faster, simpler, and more
            enjoyable to use.
          </p>

          <p>
            Over the years, I've developed a strong interest in frontend
            architecture, performance optimization, and developer experience. I
            enjoy solving complex problems, improving workflows, and building
            products that remain easy to maintain as they grow.
          </p>

          <p>
            Outside of work, I enjoy exploring new technologies, contributing to
            open source when I can, and building side projects to learn something
            new.
          </p>
        </section>

        <hr className="section-divider" />

        {/* Experience */}
        <section className="fade-up fade-up-3 prose">
          <h2>Experience</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {[
              {
                role: 'Senior Software Engineer',
                company: 'Acme Corp',
                period: '2021 — Present',
                desc: `Lead backend infrastructure for a B2B SaaS platform serving 2M+ active users.
                       Architect and own the real-time data pipeline, multi-tenant access control layer,
                       and internal developer platform. Manage a sub-team of 3 engineers.`,
                stack: ['Go', 'TypeScript', 'Kubernetes', 'Kafka', 'PostgreSQL', 'Redis'],
              },
              {
                role: 'Software Engineer → Lead Engineer',
                company: 'HealthStack Inc.',
                period: '2019 — 2021',
                desc: `Joined as an individual contributor and was promoted to lead within 18 months.
                       Designed FHIR-compliant patient data APIs, built an end-to-end encrypted messaging
                       system, and reduced infrastructure costs by 35% through caching and query optimisation.`,
                stack: ['Node.js', 'React', 'AWS', 'DynamoDB', 'GraphQL'],
              },
              {
                role: 'Software Engineer',
                company: 'Finova (Fintech Startup)',
                period: '2017 — 2019',
                desc: `Early engineer (hire #8) at a payments startup. Built the core transaction processing
                       API, PCI-DSS compliant card tokenisation flow, and internal reconciliation dashboard.
                       Helped grow the engineering team from 3 to 12.`,
                stack: ['Python', 'Django', 'React', 'Stripe', 'PostgreSQL'],
              },
            ].map((job) => (
              <div key={job.company}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '0.25rem',
                    marginBottom: '0.35rem',
                  }}
                >
                  <h3 style={{ margin: 0, fontSize: '0.95rem' }}>
                    {job.role} ·{' '}
                    <span style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-sans)' }}>
                      {job.company}
                    </span>
                  </h3>
                  <span className="meta">{job.period}</span>
                </div>
                <p style={{ fontSize: '0.93rem', color: 'var(--color-body)', marginBottom: '0.6rem' }}>
                  {job.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {job.stack.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="section-divider" />

        {/* Technical contributions — mirrors rauchg's bullet list */}
        <section className="fade-up fade-up-4 prose">
          <h2>Technical contributions</h2>
          <ul>
            <li>
              Designed and built a <strong>real-time event streaming platform</strong> processing
              500k+ events/day using Kafka and Go, cutting data latency from minutes to
              sub-second.
            </li>
            <li>
              Authored an <strong>internal CLI tool</strong> (open-sourced) that scaffolds
              new microservices with opinionated defaults — adopted by 4 teams within 2 months
              of release.
            </li>
            <li>
              Led the <strong>monolith-to-microservices migration</strong> of a 6-year-old
              Rails application, defining domain boundaries, establishing inter-service
              contracts, and introducing a service mesh.
            </li>
            <li>
              Implemented a <strong>zero-downtime blue/green deployment pipeline</strong> on
              Kubernetes, eliminating the team's reliance on scheduled maintenance windows.
            </li>
            <li>
              Built a <strong>multi-tenant RBAC system</strong> supporting 200+ permission
              combinations, used in production with zero privilege escalation incidents to date.
            </li>
            <li>
              Contributed performance fixes to{' '}
              <a href="https://github.com/prisma/prisma" target="_blank" rel="noopener noreferrer">
                Prisma ORM
              </a>{' '}
              and{' '}
              <a href="https://github.com/trpc/trpc" target="_blank" rel="noopener noreferrer">
                tRPC
              </a>{' '}
              — combined 200+ GitHub stars on those PRs.
            </li>
            <li>
              Published a technical deep-dive on{' '}
              <strong>distributed caching strategies</strong> that reached 40,000 readers and
              was featured in the{' '}
              <em>JavaScript Weekly</em> newsletter.
            </li>
            <li>
              Built a <strong>React component library</strong> (design system) from the ground
              up, documenting 60+ components with Storybook and automated accessibility tests.
            </li>
          </ul>
        </section>

        <hr className="section-divider" />

        {/* Education & Credentials */}
        <section className="fade-up fade-up-5 prose" style={{ paddingBottom: '5rem' }}>
          <h2>Education & credentials</h2>
          <ul>
            <li>
              <strong>B.S. Computer Science</strong> — University of Texas at Austin, 2017
            </li>
            <li>
              <strong>AWS Certified Solutions Architect</strong> — Associate, 2022
            </li>
            <li>
              <strong>Certified Kubernetes Administrator (CKA)</strong> — CNCF, 2023
            </li>
          </ul>

          <h2 style={{ marginTop: 'var(--space-xl)' }}>Skills at a glance</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'Languages', tags: ['TypeScript', 'Go', 'Python', 'SQL', 'Bash'] },
              { label: 'Frontend', tags: ['React', 'Next.js', 'Tailwind CSS', 'Zustand', 'Storybook'] },
              { label: 'Backend', tags: ['Node.js', 'Express', 'Fastify', 'gRPC', 'REST', 'GraphQL'] },
              { label: 'Infrastructure', tags: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions'] },
              { label: 'Data', tags: ['PostgreSQL', 'Redis', 'Kafka', 'DynamoDB', 'Elasticsearch'] },
            ].map((row) => (
              <div
                key={row.label}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}
              >
                <span
                  className="meta"
                  style={{
                    minWidth: '90px',
                    paddingTop: '2px',
                    color: 'var(--color-muted)',
                    flexShrink: 0,
                  }}
                >
                  {row.label}
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {row.tags.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
