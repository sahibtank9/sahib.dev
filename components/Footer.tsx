'use client'
export default function Footer() {
  return (
    <footer
      style={{
        maxWidth: 'var(--content-width)',
        margin: '0 auto',
        padding: '0 var(--page-px)',
        paddingBottom: '2.5rem',
        paddingTop: '3rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span className="meta">
          Sahib Tank (
          <a
            href="https://github.com/alexmorgan-dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
            }}
          >
            @alexmorgan-dev
          </a>
          )
        </span>
        <a
          href="https://github.com/alexmorgan-dev/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="meta"
          style={{
            color: 'var(--color-muted)',
            borderBottom: '1px solid transparent',
            transition: 'border-color 140ms',
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLAnchorElement).style.borderBottomColor =
              'var(--color-muted)')
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLAnchorElement).style.borderBottomColor =
              'transparent')
          }
        >
          Source
        </a>
      </div>
    </footer>
  )
}
