import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { webbingColors } from "@/data/products";

interface WebbingSelectorProps {
  selectedColorId: string | null;
  onSelect: (colorId: string, colorName: string) => void;
}

const WebbingSelector = ({ selectedColorId, onSelect }: WebbingSelectorProps) => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedColors = showAll ? webbingColors : webbingColors.slice(0, 6);
  const remainingCount = webbingColors.length - 6;
  const selectedColor = webbingColors.find(c => c.id === selectedColorId);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-mono text-foreground">Gurtband</h4>
        {selectedColor && (
          <span className="text-xs font-mono text-muted-foreground">{selectedColor.name}</span>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {displayedColors.map(color => (
          <button
            key={color.id}
            onClick={() => onSelect(color.id, color.name)}
            className={`w-10 h-10 overflow-hidden transition-all ${
              selectedColorId === color.id 
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background" 
                : "hover:ring-2 hover:ring-primary/50"
            }`}
            title={color.name}
          >
            {color.image ? (
              <img
                src={color.image}
                alt={color.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div 
                className="w-full h-full" 
                style={{ backgroundColor: color.color || "#333" }}
              />
            )}
          </button>
        ))}
        
        {remainingCount > 0 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-10 h-10 bg-muted text-muted-foreground flex items-center justify-center text-xs font-mono hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {showAll ? <ChevronUp className="h-4 w-4" /> : `+${remainingCount}`}
          </button>
        )}
      </div>
    </div>
  );
};

export default WebbingSelector;
