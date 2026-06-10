"use client";

import { useAuthContext } from "./AuthProvider";
import { can, type Action } from "./permissions";

/** Usuario actual en client components. */
export function useCurrentUser() {
  return useAuthContext();
}

/**
 * ¿El usuario actual puede ejecutar la acción?
 * Útil para deshabilitar/ocultar botones (p.ej. Viewer no edita).
 */
export function useCan(action: Action): boolean {
  const user = useAuthContext();
  return can(user.role, action);
}
