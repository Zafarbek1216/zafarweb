import { useState, type FormEvent } from "react";
import { ADMIN_PASSWORD } from "../../data/constants";
import { useLanguage } from "../../i18n/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher";

const ADMIN_KEY = "z9090zafar";

export function isAdminAuthed(): boolean {
  try {
    return sessionStorage.getItem(ADMIN_KEY) === "1";
  } catch {
    return false;
  }
}

export default function AdminGate({ onAuthed }: { onAuthed: () => void }) {
  const { t } = useLanguage();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      try {
        sessionStorage.setItem(ADMIN_KEY, "1");
      } catch {
        // ignore storage errors — auth still holds for this render
      }
      onAuthed();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-base flex items-center justify-center p-5">
      <div className="w-full max-w-sm">
        <div className="flex justify-end mb-4">
          <LanguageSwitcher />
        </div>
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-base-border bg-base-elevated p-8"
        >
          <h1 className="font-display font-bold text-xl text-ink mb-1">
            {t("admin_login_title")}
          </h1>
          <p className="text-ink-muted text-sm mb-6">
            {t("admin_login_subtitle")}
          </p>
          <label className="block font-mono text-xs text-ink-muted mb-2">
            {t("admin_password_label")}
          </label>
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            className="w-full rounded-md bg-base border border-base-border px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-signal"
            placeholder={t("admin_password_placeholder")}
          />
          {error && (
            <p className="mt-3 text-sm text-signal font-mono">
              {t("admin_wrong_password")}
            </p>
          )}
          <button
            type="submit"
            className="mt-6 w-full inline-flex items-center justify-center rounded-md bg-signal px-6 py-3 font-medium text-[#0F1420] hover:bg-signal-soft transition-colors"
          >
            {t("admin_login_button")}
          </button>
          <a
            href="#top"
            className="block mt-4 text-center font-mono text-xs text-ink-muted hover:text-ink"
          >
            {t("admin_back_to_site")}
          </a>
        </form>
      </div>
    </div>
  );
}

export { ADMIN_KEY };
