"use client";

import { createContext, useContext, type ReactNode } from "react";
import { MOCK_USER, type User } from "@/lib/mock/user";

const AuthContext = createContext<User | null>(null);

/**
 * Provee el usuario actual a toda la app (client components).
 *
 * HOY: usa MOCK_USER para construir la UI sin Okta.
 * DESPUÉS (feat/auth-okta): envolver con el SessionProvider de NextAuth
 * y pasar aquí el usuario mapeado desde la sesión real. Los módulos que
 * consumen useCurrentUser() / useCan() no cambian.
 */
export function AuthProvider({
  children,
  user = MOCK_USER,
}: {
  children: ReactNode;
  user?: User;
}) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

/** Lectura interna del contexto. Usar useCurrentUser() en los componentes. */
export function useAuthContext(): User {
  const user = useContext(AuthContext);
  if (!user) {
    throw new Error("useCurrentUser debe usarse dentro de <AuthProvider>");
  }
  return user;
}
