import { useState } from 'react'
import AdminGate, { isAdminAuthed } from './AdminGate'
import AdminPanel from './AdminPanel'

export default function AdminApp() {
  const [authed, setAuthed] = useState(isAdminAuthed)

  if (!authed) {
    return <AdminGate onAuthed={() => setAuthed(true)} />
  }

  return <AdminPanel onLogout={() => setAuthed(false)} />
}
