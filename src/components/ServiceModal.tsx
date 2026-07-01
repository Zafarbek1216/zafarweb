import { useEffect, useState, type FormEvent } from 'react'
import type { Service } from '../types'
import { useData } from '../context/DataContext'
import { useLanguage } from '../i18n/LanguageContext'

export default function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const { t } = useLanguage()
  const { addOrder } = useData()

  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [ticket, setTicket] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !contact.trim() || !message.trim()) {
      setError(t('modal_error'))
      return
    }
    setError(null)
    const id = addOrder({
      serviceId: service.id,
      serviceTitle: service.title,
      name: name.trim(),
      contact: contact.trim(),
      message: message.trim(),
    })
    setTicket(id)
  }

  const resetForm = () => {
    setName('')
    setContact('')
    setMessage('')
    setTicket(null)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-lg border border-base-border bg-base-elevated shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-base-border">
          <div>
            <p className="font-mono text-xs text-cyan uppercase tracking-widest">{t('modal_request_for')}</p>
            <h3 className="font-display font-semibold text-lg text-ink">{service.title}</h3>
          </div>
          <button onClick={onClose} aria-label={t('modal_close')} className="text-ink-muted hover:text-ink text-xl leading-none px-2">
            ×
          </button>
        </div>

        {ticket ? (
          <div className="p-8 text-center">
            <p className="font-mono text-xs text-cyan uppercase tracking-widest mb-2">{t('modal_success_title')}</p>
            <p className="font-display font-bold text-2xl text-ink mb-3">
              {t('modal_success_ticket')} {ticket}
            </p>
            <p className="text-ink-muted text-sm max-w-sm mx-auto">{t('modal_success_subtitle')}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={resetForm} className="font-mono text-sm text-signal hover:text-signal-soft">
                {t('modal_success_again')}
              </button>
              <button onClick={onClose} className="font-mono text-sm text-ink-muted hover:text-ink">
                {t('modal_close')}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="flex items-center justify-between rounded-md bg-base border border-base-border px-4 py-2">
              <span className="font-mono text-xs text-ink-muted">{t('modal_price_label')}</span>
              <span className="font-mono text-sm text-signal">{service.price}</span>
            </div>
            <div>
              <label className="block font-mono text-xs text-ink-muted mb-2">{t('modal_name_label')} *</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md bg-base border border-base-border px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-signal"
                placeholder={t('modal_name_placeholder')}
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-ink-muted mb-2">{t('modal_contact_label')} *</label>
              <input
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full rounded-md bg-base border border-base-border px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-signal"
                placeholder={t('modal_contact_placeholder')}
              />
            </div>
            <div>
              <label className="block font-mono text-xs text-ink-muted mb-2">{t('modal_message_label')} *</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full rounded-md bg-base border border-base-border px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-signal resize-none"
                placeholder={t('modal_message_placeholder')}
              />
            </div>
            {error && <p className="text-sm text-signal font-mono">{error}</p>}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-md bg-signal px-6 py-3 font-medium text-[#0F1420] hover:bg-signal-soft transition-colors"
            >
              {t('modal_submit')}
            </button>
            <p className="text-xs text-ink-muted font-mono">{t('modal_required_note')}</p>
          </form>
        )}
      </div>
    </div>
  )
}
