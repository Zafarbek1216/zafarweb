import { useState } from "react";
import ServicesEditor from "./ServicesEditor";
import OrdersTable from "./OrdersTable";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "../../i18n/LanguageContext";
import { ADMIN_KEY } from "./AdminGate";

type Tab = "services" | "orders";

export default function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const { t } = useLanguage();
  const [tab, setTab] = useState<Tab>("services");

  const handleLogout = () => {
    try {
      sessionStorage.removeItem(ADMIN_KEY);
    } catch {
      // ignore
    }
    onLogout();
  };

  return (
    <div className="min-h-screen bg-base">
      <header className="border-b border-base-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <a
            href="#top"
            className="font-mono text-sm text-ink-muted hover:text-ink"
          >
            {t("admin_back_to_site")}
          </a>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={handleLogout}
              className="font-mono text-sm text-signal hover:text-signal-soft"
            >
              {t("admin_logout")}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex gap-2 mb-8 border-b border-base-border">
          <button
            onClick={() => setTab("services")}
            className={`px-4 py-3 font-mono text-sm border-b-2 -mb-px transition-colors ${
              tab === "services"
                ? "border-signal text-ink"
                : "border-transparent text-ink-muted hover:text-ink"
            }`}
          >
            {t("admin_tab_services")}
          </button>
          <button
            onClick={() => setTab("orders")}
            className={`px-4 py-3 font-mono text-sm border-b-2 -mb-px transition-colors ${
              tab === "orders"
                ? "border-signal text-ink"
                : "border-transparent text-ink-muted hover:text-ink"
            }`}
          >
            {t("admin_tab_orders")}
          </button>
        </div>

        {tab === "services" ? <ServicesEditor /> : <OrdersTable />}
      </div>
    </div>
  );
}
