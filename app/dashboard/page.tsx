import { LayoutDashboard } from "lucide-react";
import { ModulePlaceholder } from "@/components/layout/ModulePlaceholder";

export default function DashboardPage() {
  return (
    <ModulePlaceholder
      icon={LayoutDashboard}
      title="Dashboard"
      description="Resultados de campañas desde Snowflake. Aquí irán KPIs, tablas y gráficos de desempeño de los pushes."
    />
  );
}
