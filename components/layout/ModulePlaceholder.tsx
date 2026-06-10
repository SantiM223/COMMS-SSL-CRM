import type { LucideIcon } from "lucide-react";

/**
 * Placeholder para módulos cuya UI aún no está construida.
 * El shell (sidebar + header) ya funciona; cada módulo se irá llenando.
 */
export function ModulePlaceholder({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="p-4">
      <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-border-strong bg-surface">
        <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-accent-soft text-accent">
          <Icon size={24} />
        </div>
        <h2 className="mt-4 text-[15px] font-semibold text-foreground">
          {title}
        </h2>
        <p className="mt-1 max-w-md text-center text-[12px] text-muted">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center rounded-full border border-border bg-surface-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted">
          UI en construcción · datos mock
        </span>
      </div>
    </div>
  );
}
