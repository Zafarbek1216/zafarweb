import { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../i18n/LanguageContext'

export default function Header() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#services', label: t('nav_services') },
    { href: '#about', label: t('nav_about') },
  ]

  return (
    <header className="sticky top-0 z-40 border-b border-base-border bg-base/85 backdrop-blur">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#top" className="font-display font-bold text-lg tracking-tight text-ink shrink-0">
          zafarbek<span className="text-signal">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-sm text-ink-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#services"
            className="inline-flex items-center rounded-md bg-signal px-4 py-2 text-sm font-medium text-[#0F1420] hover:bg-signal-soft transition-colors"
          >
            {t('nav_cta')}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink-muted hover:text-ink"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-base-border px-5 py-4 flex flex-col gap-4 font-mono text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink-muted hover:text-ink">
              {l.label}
            </a>
          ))}
          <a href="#services" onClick={() => setOpen(false)} className="text-signal">
            {t('nav_cta')} →
          </a>
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
