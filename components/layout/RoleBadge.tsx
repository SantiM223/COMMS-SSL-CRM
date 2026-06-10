import type { Role } from "@/lib/mock/user";

const ROLE_STYLES: Record<Role, string> = {
  Admin: "bg-accent-soft text-accent border-accent/30",
  "CRM Analyst": "bg-[color-mix(in_srgb,var(--color-info)_12%,transparent)] text-info border-info/30",
  Viewer: "bg-surface-3 text-muted border-border-strong",
};

export function RoleBadge({ role }: { role: Role }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-[1px] text-[10px] font-semibold uppercase tracking-wide ${ROLE_STYLES[role]}`}
    >
      {role}
    </span>
  );
}
