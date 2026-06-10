/** Roles del sistema (ver CLAUDE.md): Admin > CRM Analyst > Viewer */
export type Role = "Admin" | "CRM Analyst" | "Viewer";

export type User = {
  name: string;
  email: string;
  role: Role;
  /** País principal del analista */
  country: string;
};

/**
 * Usuario mock para construir la UI sin auth real.
 * Más adelante esto vendrá de NextAuth + Okta.
 */
export const MOCK_USER: User = {
  name: "Santiago Múnera",
  email: "santiago.munera@rappi.com",
  role: "Admin",
  country: "Colombia",
};

// Los permisos por rol viven en @/lib/auth/permissions (can / canEdit).
