import { useLanguage } from '../i18n/LanguageContext'
import { OWNER } from '../data/constants'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-base-border">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-muted">
          © {new Date().getFullYear()} {OWNER.name}. {t('footer_rights')}
        </p>
        <a href="#admin" className="font-mono text-xs text-ink-muted hover:text-ink">
          [ {t('footer_admin_link')} ]
        </a>
      </div>
    </footer>
  )
}
