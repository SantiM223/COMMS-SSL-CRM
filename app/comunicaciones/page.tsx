import { CalendarRange } from "lucide-react";
import { ModulePlaceholder } from "@/components/layout/ModulePlaceholder";

export default function ComunicacionesPage() {
  return (
    <ModulePlaceholder
      icon={CalendarRange}
      title="Comunicaciones"
      description="Calendario semanal de pushes y priorizador de franjas. Aquí se programan los envíos y se exporta el catálogo de Braze con el orden de prioridad."
    />
  );
}
