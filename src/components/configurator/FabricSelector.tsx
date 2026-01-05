import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { fabrics, xpacRX30, xpacVX21, xpacX11 } from "@/data/products";
import { ConfiguratorZone } from "./types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface FabricSelectorProps {
  zone: ConfiguratorZone;
  selectedFabricId: string | null;
  onSelect: (fabricId: string, fabricName: string, fabricImage?: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const fabricGroups = [
  { name: "RX30", fabrics: xpacRX30 },
  { name: "VX21", fabrics: xpacVX21 },
  { name: "X11", fabrics: xpacX11 },
];

const FabricSelector = ({ zone, selectedFabricId, onSelect, open, onOpenChange }: FabricSelectorProps) => {
  const [expandedGroup, setExpandedGroup] = useState<string | null>("RX30");

  const selectedFabric = fabrics.find(f => f.id === selectedFabricId);

  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full justify-between bg-card text-card-foreground border-2 border-card-foreground hover:bg-primary hover:text-primary-foreground"
        >
          <span className="truncate">
            {selectedFabric ? selectedFabric.name : `${zone.name} auswählen`}
          </span>
          <ChevronDown className="h-4 w-4 ml-2 shrink-0" />
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-80 p-0 bg-card border-2 border-card-foreground z-50"
        align="start"
      >
        <div className="p-3 border-b-2 border-card-foreground flex items-center justify-between">
          <span className="font-display text-card-foreground">{zone.name}</span>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-6 w-6 text-card-foreground hover:text-primary"
            onClick={() => onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="max-h-[300px] overflow-y-auto">
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
                  {group.fabrics.map(fabric => (
                    <button
                      key={fabric.id}
                      onClick={() => {
                        onSelect(fabric.id, fabric.name, fabric.image);
                        onOpenChange(false);
                      }}
                      className={`aspect-square overflow-hidden transition-all ${
                        selectedFabricId === fabric.id 
                          ? "ring-2 ring-primary ring-offset-2" 
                          : "hover:ring-2 hover:ring-primary/50"
                      }`}
                      title={fabric.name}
                    >
                      {fabric.image ? (
                        <img
                          src={fabric.image}
                          alt={fabric.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div 
                          className="w-full h-full" 
                          style={{ backgroundColor: fabric.color || "#333" }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FabricSelector;
