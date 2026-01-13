import { ZoneSelection, EgonZone } from "./types";

interface EgonConfigSummaryProps {
  zones: EgonZone[];
  selections: ZoneSelection[];
  basePrice: number;
}

const EgonConfigSummary = ({ zones, selections, basePrice }: EgonConfigSummaryProps) => {
  return (
    <div className="bg-muted p-4 space-y-3">
      <h4 className="font-display text-foreground">Zusammenfassung</h4>
      
      <div className="space-y-2 text-sm font-mono">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Modell:</span>
          <span className="text-foreground">EGON+</span>
        </div>
        
        {zones.map(zone => {
          const selection = selections.find(s => s.zoneId === zone.id);
          return (
            <div key={zone.id} className="flex justify-between">
              <span className="text-muted-foreground">{zone.label}:</span>
              <span className="text-foreground truncate max-w-[150px]">
                {selection?.fabricName || "Nicht gewählt"}
              </span>
            </div>
          );
        })}
        
        <div className="border-t border-foreground/20 pt-2 mt-2 flex justify-between text-lg">
          <span className="font-display text-foreground">Preis:</span>
          <span className="font-display text-primary">{basePrice} €</span>
        </div>
      </div>
    </div>
  );
};

export default EgonConfigSummary;
