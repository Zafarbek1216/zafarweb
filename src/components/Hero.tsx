import TerminalHero from './TerminalHero'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section id="top" className="max-w-6xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="font-mono text-xs text-cyan tracking-widest uppercase mb-4">{t('hero_eyebrow')}</p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl leading-[1.08] tracking-tight text-ink">
          {t('hero_title')}
        </h1>
        <p className="mt-5 text-ink-muted text-lg leading-relaxed max-w-xl">{t('hero_subtitle')}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#services"
            className="inline-flex items-center rounded-md bg-signal px-6 py-3 font-medium text-[#0F1420] hover:bg-signal-soft transition-colors"
          >
            {t('hero_cta_primary')}
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-md border border-base-border px-6 py-3 font-medium text-ink hover:border-ink-muted transition-colors"
          >
            {t('hero_cta_secondary')}
          </a>
        </div>
      </div>
      <TerminalHero />
    </section>
  )
}
