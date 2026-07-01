import { useEffect, useState } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import { DataProvider } from './context/DataContext'
import PublicSite from './components/PublicSite'
import AdminApp from './components/admin/AdminApp'

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return hash
}

export default function App() {
  const hash = useHash()
  const isAdmin = hash.startsWith('#admin')

  return (
    <LanguageProvider>
      <DataProvider>{isAdmin ? <AdminApp /> : <PublicSite />}</DataProvider>
    </LanguageProvider>
  )
}
