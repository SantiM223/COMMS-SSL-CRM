import { Tags } from "lucide-react";
import { ModulePlaceholder } from "@/components/layout/ModulePlaceholder";

export default function DealsPage() {
  return (
    <ModulePlaceholder
      icon={Tags}
      title="Deals de Trade"
      description="Deals disponibles desde Google Sheets. El analista selecciona deals y los envía a Comunicaciones con 'Programar seleccionados'."
    />
  );
}
