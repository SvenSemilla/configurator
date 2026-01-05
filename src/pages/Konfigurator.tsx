import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";
import { bagModels } from "@/components/configurator/bagModels";
import { BagModel, ZoneSelection } from "@/components/configurator/types";
import ModelSelector from "@/components/configurator/ModelSelector";
import BagSVG from "@/components/configurator/BagSVG";
import FabricSelector from "@/components/configurator/FabricSelector";
import WebbingSelector from "@/components/configurator/WebbingSelector";
import ConfigurationSummary from "@/components/configurator/ConfigurationSummary";

const Konfigurator = () => {
  const { addItem } = useCart();
  const { toast } = useToast();
  
  const [selectedModel, setSelectedModel] = useState<BagModel | null>(null);
  const [selections, setSelections] = useState<ZoneSelection[]>([]);
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [webbingColorId, setWebbingColorId] = useState<string | null>(null);
  const [webbingColorName, setWebbingColorName] = useState<string>("");
  const [openPopover, setOpenPopover] = useState<string | null>(null);

  const handleModelSelect = (model: BagModel) => {
    setSelectedModel(model);
    setSelections([]);
    setActiveZone(null);
    setWebbingColorId(null);
    setWebbingColorName("");
  };

  const handleZoneClick = (zoneId: string) => {
    setActiveZone(zoneId);
    setOpenPopover(zoneId);
  };

  const handleFabricSelect = (zoneId: string, fabricId: string, fabricName: string, fabricImage?: string) => {
    setSelections(prev => {
      const filtered = prev.filter(s => s.zoneId !== zoneId);
      return [...filtered, { zoneId, fabricId, fabricName, fabricImage }];
    });
    setOpenPopover(null);
  };

  const handleWebbingSelect = (colorId: string, colorName: string) => {
    setWebbingColorId(colorId);
    setWebbingColorName(colorName);
  };

  const isConfigurationComplete = () => {
    if (!selectedModel) return false;
    const allZonesSelected = selectedModel.zones.every(zone => 
      selections.some(s => s.zoneId === zone.id)
    );
    return allZonesSelected && webbingColorId;
  };

  const getConfigurationDescription = () => {
    if (!selectedModel) return "";
    const zoneDescriptions = selections.map(s => {
      const zone = selectedModel.zones.find(z => z.id === s.zoneId);
      return `${zone?.name}: ${s.fabricName}`;
    }).join(", ");
    return `${zoneDescriptions}, Gurtband: ${webbingColorName}`;
  };

  const handleAddToCart = () => {
    if (!selectedModel || !isConfigurationComplete()) return;
    
    addItem({
      id: `config-${selectedModel.id}-${Date.now()}`,
      name: `${selectedModel.name} (Konfiguriert)`,
      price: selectedModel.basePrice,
      quantity: 1,
      image: selectedModel.image,
      variants: {
        fabric: getConfigurationDescription(),
        color: webbingColorName,
      }
    });
    
    toast({
      title: "In die Tasche!",
      description: `${selectedModel.name} wurde zum Warenkorb hinzugefügt.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="cream-stripe py-8 border-b-2 border-card-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-display text-card-foreground mb-2">
            TASCHEN-KONFIGURATOR
          </h1>
          <p className="text-card-foreground/80 font-mono text-sm max-w-2xl">
            Gestalte deine individuelle Fahrradtasche! Wähle ein Modell und klicke auf die 
            verschiedenen Flächen, um Stoffe und Farben nach deinem Geschmack auszuwählen.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Model Selector */}
        <ModelSelector 
          models={bagModels}
          selectedModel={selectedModel}
          onSelect={handleModelSelect}
        />

        {selectedModel && (
          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            {/* SVG Configurator */}
            <div className="bg-muted p-6 flex items-center justify-center min-h-[400px]">
              <BagSVG
                model={selectedModel}
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
                  {selectedModel.zones.map(zone => (
                    <FabricSelector
                      key={zone.id}
                      zone={zone}
                      selectedFabricId={selections.find(s => s.zoneId === zone.id)?.fabricId || null}
                      onSelect={(fabricId, fabricName, fabricImage) => 
                        handleFabricSelect(zone.id, fabricId, fabricName, fabricImage)
                      }
                      open={openPopover === zone.id}
                      onOpenChange={(open) => setOpenPopover(open ? zone.id : null)}
                    />
                  ))}
                </div>
              </div>

              <div className="cream-stripe p-4 border-2 border-card-foreground">
                <WebbingSelector
                  selectedColorId={webbingColorId}
                  onSelect={handleWebbingSelect}
                />
              </div>

              <ConfigurationSummary
                model={selectedModel}
                selections={selections}
                webbingColorId={webbingColorId}
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
                
                <Link to="/anfrage" className="flex-1">
                  <Button 
                    variant="outline"
                    className="w-full bg-card text-card-foreground border-2 border-card-foreground hover:bg-primary hover:text-primary-foreground font-mono"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Direkt anfragen
                  </Button>
                </Link>
              </div>

              {!isConfigurationComplete() && (
                <p className="text-xs font-mono text-muted-foreground text-center">
                  Bitte wähle alle Flächen und ein Gurtband, um fortzufahren.
                </p>
              )}
            </div>
          </div>
        )}

        {!selectedModel && (
          <div className="mt-12 text-center py-16 bg-muted">
            <p className="text-muted-foreground font-mono">
              Wähle oben ein Taschenmodell, um mit der Konfiguration zu beginnen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Konfigurator;
