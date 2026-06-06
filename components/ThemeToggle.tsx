'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    /* localStorage unavailable */
  }
  return null
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const resolved = getStoredTheme() ?? getSystemTheme()
    setTheme(resolved)
    applyTheme(resolved)
  }, [])

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    applyTheme(next)
    try {
      localStorage.setItem('theme', next)
    } catch {
      /* localStorage unavailable */
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Dark mode' : 'Light mode'}
    >
      {theme === 'light' ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3a1 1 0 0 1 1 1v1.2a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 14.8a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Zm8-5.8a1 1 0 1 1 0 2h-1.2a1 1 0 1 1 0-2H20ZM5.2 12a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h1.2ZM18.3 6.7a1 1 0 0 1 0 1.4l-.85.85a1 1 0 1 1-1.4-1.4l.85-.85a1 1 0 0 1 1.4 0ZM7.95 17.05a1 1 0 0 1 0 1.4l-.85.85a1 1 0 1 1-1.4-1.4l.85-.85a1 1 0 0 1 1.4 0Zm9.8 0a1 1 0 0 1 1.4 0l.85.85a1 1 0 0 1-1.4 1.4l-.85-.85a1 1 0 0 1 0-1.4ZM6.7 6.7a1 1 0 0 1 1.4 0l.85.85a1 1 0 1 1-1.4 1.4l-.85-.85a1 1 0 0 1 0-1.4ZM12 18.8a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-1.2a1 1 0 0 1 1-1Z"
            fill="currentColor"
          />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 14.2A8.2 8.2 0 0 1 9.8 3a8.2 8.2 0 1 0 11.2 11.2Z"
            fill="currentColor"
          />
        </svg>
      )}
    </button>
  )
}
