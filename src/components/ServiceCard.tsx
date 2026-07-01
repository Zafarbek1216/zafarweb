import type { Service } from '../types'
import { useLanguage } from '../i18n/LanguageContext'

export default function ServiceCard({ service, onSelect }: { service: Service; onSelect: (s: Service) => void }) {
  const { t } = useLanguage()
  return (
    <button
      onClick={() => onSelect(service)}
      className="text-left bg-base p-6 hover:bg-base-elevated transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-signal group"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display font-semibold text-xl text-ink">{service.title}</h3>
        <span className="font-mono text-xs text-signal whitespace-nowrap shrink-0 mt-1">{service.price}</span>
      </div>
      <p className="text-ink-muted text-sm leading-relaxed mt-2">{service.description}</p>
      <span className="inline-flex items-center gap-1 mt-4 font-mono text-xs text-cyan group-hover:gap-2 transition-all">
        {t('service_order_button')} →
      </span>
    </button>
  )
}
