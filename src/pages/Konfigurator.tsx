import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { ZoneSelection, EgonZone } from "@/components/configurator/types";
import EgonSVG from "@/components/configurator/EgonSVG";
import ZoneColorSelector from "@/components/configurator/ZoneColorSelector";
import EgonConfigSummary from "@/components/configurator/EgonConfigSummary";

// EGON+ zones configuration
const egonZones: EgonZone[] = [
  { id: "seite", label: "Seite", colorSource: "stoffe" },
  { id: "spitze", label: "Spitze", colorSource: "stoffe" },
  { id: "oben", label: "Oberseite", colorSource: "stoffe" },
  { id: "gurtoben", label: "Kordelgurt", colorSource: "both" },
  { id: "gurt", label: "Gurtband", colorSource: "gurtbaender" },
  { id: "kordel", label: "Kordel", colorSource: "gummikordel" },
];

const EGON_FIXED_PRICE = 240;

const Konfigurator = () => {
  const { toast } = useToast();
  
  const [selections, setSelections] = useState<ZoneSelection[]>([]);
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const [openPopover, setOpenPopover] = useState<string | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

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
    }).join("\n");
  };

  const handleSendConfiguration = async () => {
    if (!isConfigurationComplete()) {
      toast({
        title: "Bitte alle Flächen auswählen",
        description: "Wähle für jede Fläche eine Farbe aus.",
        variant: "destructive",
      });
      return;
    }

    if (!customerName.trim()) {
      toast({
        title: "Name fehlt",
        description: "Bitte gib deinen Namen ein.",
        variant: "destructive",
      });
      return;
    }

    if (!customerEmail.trim() || !customerEmail.includes("@")) {
      toast({
        title: "E-Mail fehlt",
        description: "Bitte gib eine gültige E-Mail-Adresse ein.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);

    // Build email content with image URLs for production reference
    const configDetails = selections.map(s => {
      const zone = egonZones.find(z => z.id === s.zoneId);
      return `${zone?.label}: ${s.fabricName}\nBild-URL: ${s.fabricImage || "N/A"}`;
    }).join("\n\n");

    const emailBody = `
Neue EGON+ Konfiguration

Modell: EGON+
Preis: ${EGON_FIXED_PRICE} €

Konfiguration:
${configDetails}

Besteller:
Name: ${customerName}
E-Mail: ${customerEmail}
    `.trim();

    // Create mailto link as fallback (until backend is set up)
    const mailtoLink = `mailto:info@reisefix.cc?subject=${encodeURIComponent("EGON+ Konfiguration von " + customerName)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open mailto link
    window.location.href = mailtoLink;

    setIsSending(false);
    
    toast({
      title: "Konfiguration wird gesendet",
      description: "Dein E-Mail-Programm wird geöffnet.",
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
            </div>

            <EgonConfigSummary
              zones={egonZones}
              selections={selections}
              basePrice={EGON_FIXED_PRICE}
            />

            {/* Customer Info Fields */}
            <div className="bg-muted p-4 space-y-4">
              <h4 className="font-display text-foreground">Deine Daten</h4>
              
              <div className="space-y-2">
                <Label htmlFor="customer-name" className="font-mono text-sm text-foreground">
                  Name
                </Label>
                <Input
                  id="customer-name"
                  type="text"
                  placeholder="Dein Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="bg-white text-gray-900 border-2 border-card-foreground/30 focus:border-primary placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customer-email" className="font-mono text-sm text-foreground">
                  E-Mail-Adresse
                </Label>
                <Input
                  id="customer-email"
                  type="email"
                  placeholder="deine@email.de"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="bg-white text-gray-900 border-2 border-card-foreground/30 focus:border-primary placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Send Button */}
            <Button
              onClick={handleSendConfiguration}
              disabled={!isConfigurationComplete() || !customerName.trim() || !customerEmail.trim() || isSending}
              className="w-full bg-primary text-primary-foreground font-mono hover:bg-primary/90 disabled:opacity-50 py-6 text-lg"
            >
              <Send className="h-5 w-5 mr-2" />
              {isSending ? "Wird gesendet..." : "Konfiguration senden"}
            </Button>

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
