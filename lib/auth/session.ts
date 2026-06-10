import { MOCK_USER, type User } from "@/lib/mock/user";

/**
 * Usuario actual en Server Components y Route Handlers.
 *
 * HOY: devuelve MOCK_USER.
 * DESPUÉS (feat/auth-okta): leer la sesión real
 * (p.ej. `const session = await getServerSession(authOptions)`) y mapearla
 * a User. La firma no cambia para quien la consume.
 */
export async function getCurrentUser(): Promise<User> {
  return MOCK_USER;
}
