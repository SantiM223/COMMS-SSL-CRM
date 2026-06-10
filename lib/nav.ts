import {
  LayoutDashboard,
  Tags,
  CalendarRange,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  /** Texto corto para tooltip / descripción */
  description: string;
};

/** Módulos principales de la app (ver CLAUDE.md). */
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    description: "Resultados de campañas",
  },
  {
    label: "Deals de Trade",
    href: "/deals",
    icon: Tags,
    description: "Deals disponibles desde Google Sheets",
  },
  {
    label: "Comunicaciones",
    href: "/comunicaciones",
    icon: CalendarRange,
    description: "Calendario semanal y priorizador",
  },
  {
    label: "Campañas",
    href: "/campanas",
    icon: Megaphone,
    description: "Plantillas y comms manuales segmentadas",
  },
];
