import { useState } from 'react'
import ServiceCard from './ServiceCard'
import ServiceModal from './ServiceModal'
import { useData } from '../context/DataContext'
import { useLanguage } from '../i18n/LanguageContext'
import type { Service } from '../types'

export default function Services() {
  const { t } = useLanguage()
  const { services } = useData()
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <section id="services" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <h2 className="font-display font-bold text-3xl text-ink">{t('services_title')}</h2>
        <p className="font-mono text-xs text-ink-muted max-w-sm">{t('services_subtitle')}</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-base-border rounded-lg overflow-hidden">
        {services.map((s) => (
          <ServiceCard key={s.id} service={s} onSelect={setSelected} />
        ))}
      </div>

      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
