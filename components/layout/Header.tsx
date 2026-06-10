"use client";

import { usePathname } from "next/navigation";
import { ChevronDown, Search } from "lucide-react";
import { NAV_ITEMS } from "@/lib/nav";
import { useCurrentUser } from "@/lib/auth/useCurrentUser";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { RoleBadge } from "./RoleBadge";

function useCurrentModule() {
  const pathname = usePathname();
  return (
    NAV_ITEMS.find(
      (item) =>
        pathname === item.href || pathname.startsWith(item.href + "/"),
    ) ?? null
  );
}

export function Header() {
  const current = useCurrentModule();
  const user = useCurrentUser();
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <header className="flex h-12 shrink-0 items-center gap-3 border-b border-border bg-surface px-4">
      {/* Título del módulo actual */}
      <div className="flex min-w-0 flex-col leading-tight">
        <h1 className="truncate text-[14px] font-semibold text-foreground">
          {current?.label ?? "Rappi CRM"}
        </h1>
        {current?.description && (
          <span className="truncate text-[11px] text-muted">
            {current.description}
          </span>
        )}
      </div>

      {/* Buscador (mock) */}
      <div className="ml-4 hidden flex-1 md:flex">
        <div className="relative w-full max-w-sm">
          <Search
            size={14}
            className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-faint"
          />
          <input
            type="text"
            placeholder="Buscar pushes, deals, franjas…"
            className="h-8 w-full rounded-[var(--radius)] border border-border bg-surface-2 pl-8 pr-3 text-[12px] text-foreground placeholder:text-faint focus:border-accent focus:bg-surface focus:outline-none focus:ring-1 focus:ring-accent/30"
          />
        </div>
      </div>

      {/* Acciones a la derecha */}
      <div className="ml-auto flex items-center gap-2">
        <ThemeToggle />

        <div className="mx-1 h-6 w-px bg-border" />

        {/* Usuario + rol */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-[var(--radius)] py-1 pl-1 pr-2 transition-colors hover:bg-surface-2"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-[11px] font-bold uppercase text-accent-foreground">
            {initials}
          </div>
          <div className="hidden flex-col items-start leading-tight sm:flex">
            <span className="text-[12px] font-semibold text-foreground">
              {user.name}
            </span>
            <div className="flex items-center gap-1">
              <RoleBadge role={user.role} />
              <span className="text-[10px] text-faint">{user.country}</span>
            </div>
          </div>
          <ChevronDown size={14} className="text-faint" />
        </button>
      </div>
    </header>
  );
}
