import { BagModel, ZoneSelection } from "./types";
import { webbingColors } from "@/data/products";

interface ConfigurationSummaryProps {
  model: BagModel;
  selections: ZoneSelection[];
  webbingColorId: string | null;
}

const ConfigurationSummary = ({ model, selections, webbingColorId }: ConfigurationSummaryProps) => {
  const webbingColor = webbingColors.find(c => c.id === webbingColorId);
  
  return (
    <div className="bg-muted p-4 space-y-3">
      <h4 className="font-display text-foreground">Zusammenfassung</h4>
      
      <div className="space-y-2 text-sm font-mono">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Modell:</span>
          <span className="text-foreground">{model.name}</span>
        </div>
        
        {model.zones.map(zone => {
          const selection = selections.find(s => s.zoneId === zone.id);
          return (
            <div key={zone.id} className="flex justify-between">
              <span className="text-muted-foreground">{zone.name}:</span>
              <span className="text-foreground truncate max-w-[150px]">
                {selection?.fabricName || "Nicht gewählt"}
              </span>
            </div>
          );
        })}
        
        <div className="flex justify-between">
          <span className="text-muted-foreground">Gurtband:</span>
          <span className="text-foreground">{webbingColor?.name || "Nicht gewählt"}</span>
        </div>
        
        <div className="border-t border-foreground/20 pt-2 mt-2 flex justify-between text-lg">
          <span className="font-display text-foreground">Preis:</span>
          <span className="font-display text-primary">{model.basePrice} €</span>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationSummary;
