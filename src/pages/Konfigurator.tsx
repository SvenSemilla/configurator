import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { ZoneSelection, EgonZone } from "@/components/configurator/types";
import EgonSVG from "@/components/configurator/EgonSVG";
import ZoneColorSelector from "@/components/configurator/ZoneColorSelector";
import EgonConfigSummary from "@/components/configurator/EgonConfigSummary";

// EGON+ zones configuration
const egonZones: EgonZone[] = [
  { id: "seite", label: "Seite", colorSource: "stoffe" },
  { id: "spitze", label: "Spitze", colorSource: "stoffe" },
  { id: "gurtoben", label: "Kordelgurt", colorSource: "both" },
  { id: "gurt", label: "Gurtband", colorSource: "gurtbaender" },
  { id: "kordel", label: "Kordel", colorSource: "gurtbaender" },
];

const EGON_BASE_PRICE = 170;

const Konfigurator = () => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [selections, setSelections] = useState<ZoneSelection[]>([]);
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const handleZoneClick = (zoneId: string) => {
    setActiveZone(zoneId);
    setOpenPopover(zoneId);
  };

  const handleColorSelect = (zoneId: string, fabricId: string, fabricName: string, fabricImage?: string, colorHex?: string) => {
    setSelections(prev => {
      const filtered = prev.filter(s => s.zoneId !== zoneId);
      return [...filtered, { zoneId, fabricId, fabricName, fabricImage, colorHex }];
    });
    setOpenPopover(null);
  };

  const isConfigurationComplete = () => {
    return egonZones.every(zone => 
      selections.some(s => s.zoneId === zone.id)
    );
  };

  const getConfigurationDescription = () => {
    return selections.map(s => {
      const zone = egonZones.find(z => z.id === s.zoneId);
      return `${zone?.label}: ${s.fabricName}`;
    }).join(", ");
  };

  const handleAddToCart = () => {
    if (!isConfigurationComplete()) return;
    
    addItem({
      id: `config-egon-plus-${Date.now()}`,
      name: "Satteltasche EGON+ (Konfiguriert)",
      price: EGON_BASE_PRICE,
      quantity: 1,
      image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/1d13059c-6c45-4ed4-bb93-d56c60b1bcd3/768-576/1fc30cb1fcb8bf2a2df400cd04021e55f8cbf691",
      variants: {
        fabric: getConfigurationDescription(),
        color: "",
      }
    });
    
    toast({
      title: "In die Tasche!",
      description: "EGON+ wurde zum Warenkorb hinzugefügt.",
    });
  };

  const handleSendInquiry = () => {
    if (!isConfigurationComplete()) {
      toast({
        title: "Bitte alle Flächen auswählen",
        description: "Wähle für jede Fläche eine Farbe aus.",
        variant: "destructive",
      });
      return;
    }

    // Build inquiry data
    const configData = {
      model: "EGON+",
      selections: selections.map(s => {
        const zone = egonZones.find(z => z.id === s.zoneId);
        return {
          zone: zone?.label,
          color: s.fabricName,
        };
      }),
    };

    // Navigate to inquiry page with config data
    navigate("/anfrage", { 
      state: { 
        configuratorData: configData,
        configDescription: getConfigurationDescription(),
      } 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="cream-stripe py-8 border-b-2 border-card-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display text-card-foreground mb-2">
            EGON+ KONFIGURATOR
          </h1>
          <p className="text-card-foreground/80 font-mono text-sm max-w-2xl">
            Gestalte deine individuelle Satteltasche EGON+! Klicke auf die verschiedenen 
            Flächen und wähle deine Wunschfarben aus Stoffen und Gurtbändern.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* SVG Configurator */}
          <div className="bg-muted p-4 md:p-6 flex items-center justify-center min-h-[350px] md:min-h-[500px]">
            <EgonSVG
              zones={egonZones}
              selections={selections}
              activeZone={activeZone}
              onZoneClick={handleZoneClick}
            />
          </div>

          {/* Configuration Panel */}
          <div className="space-y-6">
            <div className="cream-stripe p-4 border-2 border-card-foreground">
              <h3 className="font-display text-card-foreground mb-4">Flächen auswählen</h3>
              <p className="text-xs font-mono text-card-foreground/70 mb-4">
                Klicke auf eine Fläche in der Grafik oder wähle sie hier aus:
              </p>
              
              <div className="space-y-3">
                {egonZones.map(zone => {
                  const selection = selections.find(s => s.zoneId === zone.id);
                  return (
                    <ZoneColorSelector
                      key={zone.id}
                      zone={zone}
                      selectedFabricId={selection?.fabricId || null}
                      selectedFabricName={selection?.fabricName || null}
                      onSelect={(fabricId, fabricName, fabricImage, colorHex) => 
                        handleColorSelect(zone.id, fabricId, fabricName, fabricImage, colorHex)
                      }
                      open={openPopover === zone.id}
                      onOpenChange={(open) => setOpenPopover(open ? zone.id : null)}
                    />
                  );
                })}
              </div>
              
              {/* Legend */}
              <div className="mt-4 pt-4 border-t border-card-foreground/20">
                <p className="text-xs font-mono text-card-foreground/60 mb-2">Legende:</p>
                <div className="flex flex-wrap gap-3 text-xs font-mono text-card-foreground/80">
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-primary/30 border border-primary"></span>
                    Stoffe
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-secondary/30 border border-secondary"></span>
                    Gurtbänder
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-3 h-3 bg-accent/30 border border-accent"></span>
                    Stoffe + Gurtbänder
                  </span>
                </div>
              </div>
            </div>

            <EgonConfigSummary
              zones={egonZones}
              selections={selections}
              basePrice={EGON_BASE_PRICE}
            />

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleAddToCart}
                disabled={!isConfigurationComplete()}
                className="flex-1 bg-primary text-primary-foreground font-mono hover:bg-primary/90 disabled:opacity-50"
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                In die Tasche
              </Button>
              
              <Button 
                onClick={handleSendInquiry}
                variant="outline"
                className="flex-1 bg-card text-card-foreground border-2 border-card-foreground hover:bg-primary hover:text-primary-foreground font-mono"
              >
                <Send className="h-4 w-4 mr-2" />
                Anfrage senden
              </Button>
            </div>

            {!isConfigurationComplete() && (
              <p className="text-xs font-mono text-muted-foreground text-center">
                Bitte wähle alle {egonZones.length} Flächen, um fortzufahren.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Konfigurator;
