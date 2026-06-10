import type { Role } from "@/lib/mock/user";

/** Acciones que un usuario puede intentar sobre un recurso. */
export type Action = "view" | "create" | "edit" | "delete";

/**
 * Matriz de permisos por rol (ver CLAUDE.md).
 * Regla central del negocio: Viewer es solo lectura.
 *
 * Admin y CRM Analyst comparten permisos operativos por ahora; si más
 * adelante aparecen acciones exclusivas de Admin (p.ej. gestión de usuarios),
 * se agregan aquí como una nueva Action sin tocar los módulos.
 */
const PERMISSIONS: Record<Role, Action[]> = {
  Admin: ["view", "create", "edit", "delete"],
  "CRM Analyst": ["view", "create", "edit", "delete"],
  Viewer: ["view"],
};

/** ¿El rol puede ejecutar la acción? Única fuente de verdad de permisos. */
export function can(role: Role, action: Action): boolean {
  return PERMISSIONS[role].includes(action);
}

/** Atajo: ¿puede crear/editar/eliminar? (todo lo que no es Viewer). */
export function canEdit(role: Role): boolean {
  return can(role, "edit");
}
