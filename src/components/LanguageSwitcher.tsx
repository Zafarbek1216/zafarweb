import { useLanguage } from '../i18n/LanguageContext'
import type { Language } from '../types'

const OPTIONS: { code: Language; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'uz', label: 'UZ' },
]

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-md border border-base-border p-1 font-mono text-xs">
      {OPTIONS.map((opt) => (
        <button
          key={opt.code}
          onClick={() => setLang(opt.code)}
          aria-pressed={lang === opt.code}
          className={`px-2 py-1 rounded transition-colors ${
            lang === opt.code ? 'bg-signal text-[#0F1420]' : 'text-ink-muted hover:text-ink'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
