import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { EgonZone } from "./types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  cordMaterials,
  webbingMaterials,
  fabricGroups,
  handleImageError,
  ConfiguratorMaterial,
} from "@/data/configuratorMaterials";

interface ZoneColorSelectorProps {
  zone: EgonZone;
  selectedFabricId: string | null;
  selectedFabricName: string | null;
  onSelect: (fabricId: string, fabricName: string, fabricImage?: string, colorHex?: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MaterialButton = ({ 
  material, 
  isSelected, 
  onSelect,
  onClose
}: { 
  material: ConfiguratorMaterial; 
  isSelected: boolean;
  onSelect: (id: string, name: string, imageUrl: string) => void;
  onClose: () => void;
}) => (
  <button
    onClick={() => {
      onSelect(material.id, material.name, material.imageUrl);
      onClose();
    }}
    className={`aspect-square overflow-hidden transition-all ${
      isSelected 
        ? "ring-2 ring-primary ring-offset-2" 
        : "hover:ring-2 hover:ring-primary/50"
    }`}
    title={material.name}
  >
    <img
      src={material.imageUrl}
      alt={material.name}
      className="w-full h-full object-cover"
      onError={() => handleImageError(material.imageUrl, material.name)}
    />
  </button>
);

const ZoneColorSelector = ({ zone, selectedFabricId, selectedFabricName, onSelect, open, onOpenChange }: ZoneColorSelectorProps) => {
  const [expandedGroup, setExpandedGroup] = useState<string | null>("RX30");
  const [activeTab, setActiveTab] = useState<"stoffe" | "gurtbaender">(
    zone.colorSource === "gurtbaender" ? "gurtbaender" : "stoffe"
  );

  const showFabrics = zone.colorSource === "stoffe" || zone.colorSource === "both";
  const showWebbing = zone.colorSource === "gurtbaender" || zone.colorSource === "both";
  const showRubberCord = zone.colorSource === "gummikordel";

  const handleMaterialSelect = (id: string, name: string, imageUrl: string) => {
    onSelect(id, name, imageUrl, undefined);
  };

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full justify-between bg-card text-card-foreground border-2 border-card-foreground hover:bg-primary hover:text-primary-foreground"
        >
          <span className="truncate">
            {selectedFabricName || `${zone.label} auswählen`}
          </span>
          <ChevronDown className="h-4 w-4 ml-2 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 p-0 bg-card border-2 border-card-foreground z-50"
        align="start"
      >
        <div className="p-3 border-b-2 border-card-foreground flex items-center justify-between">
          <span className="font-display text-card-foreground">{zone.label}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 text-card-foreground hover:text-primary"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Tab switcher for zones with both sources */}
        {zone.colorSource === "both" && (
          <div className="flex border-b-2 border-card-foreground">
            <button
              onClick={() => setActiveTab("stoffe")}
              className={`flex-1 py-2 text-xs font-mono transition-colors ${
                activeTab === "stoffe" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card text-card-foreground hover:bg-primary/10"
              }`}
            >
              Stoffe
            </button>
            <button
              onClick={() => setActiveTab("gurtbaender")}
              className={`flex-1 py-2 text-xs font-mono transition-colors ${
                activeTab === "gurtbaender" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-card text-card-foreground hover:bg-primary/10"
              }`}
            >
              Gurtbänder
            </button>
          </div>
        )}
        
        <div className="max-h-[300px] overflow-y-auto">
          {/* Fabric selection */}
          {((showFabrics && !showWebbing && !showRubberCord) || (zone.colorSource === "both" && activeTab === "stoffe")) && (
            <>
              {fabricGroups.map(group => (
                <div key={group.name} className="border-b border-card-foreground/20 last:border-0">
                  <button
                    onClick={() => setExpandedGroup(expandedGroup === group.name ? null : group.name)}
                    className="w-full px-3 py-2 flex items-center justify-between text-card-foreground hover:bg-primary/10 transition-colors"
                  >
                    <span className="font-mono text-sm font-bold">{group.name}</span>
                    {expandedGroup === group.name ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  
                  {expandedGroup === group.name && (
                    <div className="grid grid-cols-4 gap-1 p-2 bg-card-foreground/5">
                      {group.materials.map(material => (
                        <MaterialButton
                          key={material.id}
                          material={material}
                          isSelected={selectedFabricId === material.id}
                          onSelect={handleMaterialSelect}
                          onClose={() => onOpenChange(false)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Webbing color selection */}
          {((showWebbing && !showFabrics && !showRubberCord) || (zone.colorSource === "both" && activeTab === "gurtbaender")) && (
            <div className="p-3">
              <p className="text-xs font-mono text-card-foreground/70 mb-3">Gurtbandfarbe wählen:</p>
              <div className="grid grid-cols-4 gap-2">
                {webbingMaterials.map(material => (
                  <MaterialButton
                    key={material.id}
                    material={material}
                    isSelected={selectedFabricId === material.id}
                    onSelect={handleMaterialSelect}
                    onClose={() => onOpenChange(false)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Rubber cord color selection */}
          {showRubberCord && (
            <div className="p-3">
              <p className="text-xs font-mono text-card-foreground/70 mb-3">Gummikordelfarbe wählen:</p>
              <div className="grid grid-cols-4 gap-2">
                {cordMaterials.map(material => (
                  <MaterialButton
                    key={material.id}
                    material={material}
                    isSelected={selectedFabricId === material.id}
                    onSelect={handleMaterialSelect}
                    onClose={() => onOpenChange(false)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ZoneColorSelector;
