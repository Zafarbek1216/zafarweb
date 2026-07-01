import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

function useTypedLine(fullText: string) {
  const [text, setText] = useState('')
  useEffect(() => {
    setText('')
    let i = 0
    const interval = setInterval(() => {
      i++
      setText(fullText.slice(0, i))
      if (i >= fullText.length) clearInterval(interval)
    }, 35)
    return () => clearInterval(interval)
  }, [fullText])
  return text
}

export default function TerminalHero() {
  const { t } = useLanguage()
  const [stage, setStage] = useState(0)
  const typed = useTypedLine('$ zafarbek run --service="telegram-bot"')

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1700)
    const t2 = setTimeout(() => setStage(2), 2500)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="w-full rounded-lg border border-base-border bg-base-elevated shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-base-border bg-black/20">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-3 text-xs text-ink-muted font-mono">request.sh</span>
      </div>
      <div className="p-5 sm:p-6 font-mono text-sm sm:text-base leading-relaxed min-h-[180px]">
        <p className="text-ink">
          <span className="text-signal">{typed}</span>
          <span className="cursor-blink text-signal">▌</span>
        </p>
        {stage >= 1 && <p className="mt-3 text-ink-muted">{t('terminal_status')}</p>}
        {stage >= 2 && (
          <p className="mt-2 text-cyan">
            {t('terminal_ticket')} <span className="text-ink">NODE-{new Date().getFullYear()}-8841</span>
          </p>
        )}
      </div>
    </div>
  )
}
