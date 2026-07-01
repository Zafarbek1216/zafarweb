import { OWNER } from '../data/constants'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="border-y border-base-border bg-base-elevated/40">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 grid sm:grid-cols-[auto,1fr] gap-8 items-center">
        <div className="h-20 w-20 rounded-full bg-signal/15 border border-signal/30 flex items-center justify-center font-display font-bold text-2xl text-signal shrink-0">
          {OWNER.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <p className="font-mono text-xs text-cyan uppercase tracking-widest mb-2">{t('about_eyebrow')}</p>
          <h2 className="font-display font-bold text-3xl text-ink">{OWNER.name}</h2>
          <p className="text-ink-muted mt-1">{t('about_role')}</p>
          <p className="text-ink-muted text-sm leading-relaxed mt-4 max-w-xl">{t('about_description')}</p>
          <p className="font-mono text-sm text-ink mt-4">
            <span className="text-ink-muted">{t('about_phone_label')}: </span>
            <a href={`tel:${OWNER.phone.replace(/\s/g, '')}`} className="text-signal hover:text-signal-soft">
              {OWNER.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
