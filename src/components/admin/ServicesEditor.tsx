import { useState } from 'react'
import type { Service } from '../../types'
import { useData } from '../../context/DataContext'
import { useLanguage } from '../../i18n/LanguageContext'

type DraftFields = { title: string; description: string; price: string }
const emptyDraft: DraftFields = { title: '', description: '', price: '' }

function ServiceForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: DraftFields
  onSave: (fields: DraftFields) => void
  onCancel: () => void
}) {
  const { t } = useLanguage()
  const [fields, setFields] = useState<DraftFields>(initial)

  return (
    <div className="rounded-md border border-base-border bg-base p-4 space-y-3">
      <div>
        <label className="block font-mono text-xs text-ink-muted mb-1">{t('admin_field_title')}</label>
        <input
          value={fields.title}
          onChange={(e) => setFields((f) => ({ ...f, title: e.target.value }))}
          className="w-full rounded-md bg-base-elevated border border-base-border px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-signal"
        />
      </div>
      <div>
        <label className="block font-mono text-xs text-ink-muted mb-1">{t('admin_field_description')}</label>
        <textarea
          value={fields.description}
          onChange={(e) => setFields((f) => ({ ...f, description: e.target.value }))}
          rows={2}
          className="w-full rounded-md bg-base-elevated border border-base-border px-3 py-2 text-ink resize-none focus:outline-none focus:ring-2 focus:ring-signal"
        />
      </div>
      <div>
        <label className="block font-mono text-xs text-ink-muted mb-1">{t('admin_field_price')}</label>
        <input
          value={fields.price}
          onChange={(e) => setFields((f) => ({ ...f, price: e.target.value }))}
          placeholder="от $150"
          className="w-full rounded-md bg-base-elevated border border-base-border px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-signal"
        />
      </div>
      <div className="flex gap-3 pt-1">
        <button
          onClick={() => fields.title.trim() && onSave(fields)}
          className="rounded-md bg-signal px-4 py-2 text-sm font-medium text-[#0F1420] hover:bg-signal-soft transition-colors"
        >
          {t('admin_save')}
        </button>
        <button onClick={onCancel} className="font-mono text-sm text-ink-muted hover:text-ink">
          {t('admin_cancel')}
        </button>
      </div>
    </div>
  )
}

export default function ServicesEditor() {
  const { t } = useLanguage()
  const { services, addService, updateService, deleteService } = useData()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [adding, setAdding] = useState(false)

  const startEdit = (s: Service) => setEditingId(s.id)

  const handleDelete = (id: string) => {
    if (window.confirm(t('admin_delete_confirm'))) {
      deleteService(id)
    }
  }

  return (
    <div>
      {services.length === 0 && !adding && (
        <p className="text-ink-muted font-mono text-sm mb-4">{t('admin_services_empty')}</p>
      )}

      <div className="space-y-3">
        {services.map((s) =>
          editingId === s.id ? (
            <ServiceForm
              key={s.id}
              initial={{ title: s.title, description: s.description, price: s.price }}
              onCancel={() => setEditingId(null)}
              onSave={(fields) => {
                updateService(s.id, fields)
                setEditingId(null)
              }}
            />
          ) : (
            <div
              key={s.id}
              className="rounded-md border border-base-border bg-base-elevated p-4 flex items-start justify-between gap-4 flex-wrap"
            >
              <div className="min-w-[200px]">
                <div className="flex items-center gap-3">
                  <h3 className="font-display font-semibold text-ink">{s.title}</h3>
                  <span className="font-mono text-xs text-signal">{s.price}</span>
                </div>
                <p className="text-ink-muted text-sm mt-1 max-w-xl">{s.description}</p>
              </div>
              <div className="flex gap-4 font-mono text-xs shrink-0">
                <button onClick={() => startEdit(s)} className="text-cyan hover:text-ink">
                  {t('admin_edit_service')}
                </button>
                <button onClick={() => handleDelete(s.id)} className="text-signal hover:text-ink">
                  {t('admin_delete_service')}
                </button>
              </div>
            </div>
          ),
        )}
      </div>

      <div className="mt-4">
        {adding ? (
          <ServiceForm
            initial={emptyDraft}
            onCancel={() => setAdding(false)}
            onSave={(fields) => {
              addService(fields)
              setAdding(false)
            }}
          />
        ) : (
          <button
            onClick={() => setAdding(true)}
            className="font-mono text-sm text-signal hover:text-signal-soft"
          >
            + {t('admin_add_service')}
          </button>
        )}
      </div>
    </div>
  )
}
