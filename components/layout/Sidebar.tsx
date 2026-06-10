"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav";

export function Sidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const pathname = usePathname();

  return (
    <aside
      className={`flex shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground transition-[width] duration-200 ${
        collapsed ? "w-[60px]" : "w-[224px]"
      }`}
    >
      {/* Marca */}
      <div className="flex h-12 items-center gap-2 border-b border-sidebar-border px-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[var(--radius)] bg-accent text-sm font-bold text-accent-foreground">
          R
        </div>
        {!collapsed && (
          <div className="flex flex-col leading-tight">
            <span className="text-[13px] font-semibold text-white">
              Rappi CRM
            </span>
            <span className="text-[10px] uppercase tracking-wider text-sidebar-muted">
              Comms SSL
            </span>
          </div>
        )}
      </div>

      {/* Navegación */}
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-2">
        {!collapsed && (
          <p className="px-2 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wider text-sidebar-muted">
            Módulos
          </p>
        )}
        {NAV_ITEMS.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              title={collapsed ? item.label : item.description}
              className={`group relative flex items-center gap-2.5 rounded-[var(--radius)] px-2.5 py-2 text-[13px] font-medium transition-colors ${
                active
                  ? "bg-sidebar-active-bg text-white"
                  : "text-sidebar-foreground hover:bg-sidebar-active-bg hover:text-white"
              } ${collapsed ? "justify-center" : ""}`}
            >
              {active && (
                <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r bg-accent" />
              )}
              <Icon
                size={17}
                className={active ? "text-accent" : "text-sidebar-muted group-hover:text-white"}
              />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Toggle colapsar */}
      <div className="border-t border-sidebar-border p-2">
        <button
          type="button"
          onClick={onToggle}
          title={collapsed ? "Expandir menú" : "Colapsar menú"}
          className={`flex w-full items-center gap-2.5 rounded-[var(--radius)] px-2.5 py-2 text-[12px] text-sidebar-muted transition-colors hover:bg-sidebar-active-bg hover:text-white ${
            collapsed ? "justify-center" : ""
          }`}
        >
          {collapsed ? (
            <PanelLeftOpen size={17} />
          ) : (
            <>
              <PanelLeftClose size={17} />
              <span>Colapsar</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
