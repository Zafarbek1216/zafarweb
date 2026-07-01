import type { OrderStatus } from '../../types'
import { useData } from '../../context/DataContext'
import { useLanguage } from '../../i18n/LanguageContext'

export default function OrdersTable() {
  const { t, lang } = useLanguage()
  const { orders, updateOrderStatus, clearOrders } = useData()

  const statusLabel = (status: OrderStatus) =>
    status === 'new' ? t('admin_status_new') : status === 'in_progress' ? t('admin_status_in_progress') : t('admin_status_done')

  return (
    <div>
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <p className="font-mono text-xs text-cyan">
          {orders.length} {t('admin_orders_count')}
        </p>
        {orders.length > 0 && (
          <button onClick={clearOrders} className="font-mono text-xs text-ink-muted hover:text-signal">
            {t('admin_clear_orders')}
          </button>
        )}
      </div>

      {orders.length === 0 ? (
        <p className="text-ink-muted font-mono text-sm">{t('admin_orders_empty')}</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-base-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-base-elevated text-left font-mono text-xs text-ink-muted uppercase tracking-wide">
                <th className="px-4 py-3">{t('admin_table_ticket')}</th>
                <th className="px-4 py-3">{t('admin_table_name')}</th>
                <th className="px-4 py-3">{t('admin_table_contact')}</th>
                <th className="px-4 py-3">{t('admin_table_service')}</th>
                <th className="px-4 py-3">{t('admin_table_message')}</th>
                <th className="px-4 py-3">{t('admin_table_date')}</th>
                <th className="px-4 py-3">{t('admin_table_status')}</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t border-base-border hover:bg-base-elevated/60">
                  <td className="px-4 py-3 font-mono text-cyan whitespace-nowrap">{o.id}</td>
                  <td className="px-4 py-3">{o.name}</td>
                  <td className="px-4 py-3">{o.contact}</td>
                  <td className="px-4 py-3">{o.serviceTitle}</td>
                  <td className="px-4 py-3 max-w-xs">{o.message}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-ink-muted">
                    {new Date(o.createdAt).toLocaleString(lang === 'ru' ? 'ru-RU' : lang === 'uz' ? 'uz-UZ' : 'en-US')}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={o.status}
                      onChange={(e) => updateOrderStatus(o.id, e.target.value as OrderStatus)}
                      className="rounded-md bg-base border border-base-border px-2 py-1 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-signal"
                    >
                      <option value="new">{statusLabel('new')}</option>
                      <option value="in_progress">{statusLabel('in_progress')}</option>
                      <option value="done">{statusLabel('done')}</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-4 text-xs text-ink-muted font-mono max-w-xl">{t('admin_storage_note')}</p>
    </div>
  )
}
