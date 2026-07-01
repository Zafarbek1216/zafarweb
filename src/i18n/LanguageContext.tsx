import React, { createContext, useContext, useMemo, useState } from 'react'
import type { Language } from '../types'
import { translations, type TranslationKey } from './translations'

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'zafarbek_lang'

function loadLang(): Language {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw === 'ru' || raw === 'en' || raw === 'uz') return raw
  } catch {
    // ignore
  }
  return 'ru'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(loadLang)

  const setLang = (next: Language) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore storage errors
    }
  }

  const t = useMemo(() => {
    return (key: TranslationKey) => translations[lang][key] ?? translations.ru[key] ?? key
  }, [lang])

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
