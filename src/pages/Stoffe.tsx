import fabricSwatches from "@/assets/fabric-swatches.jpg";
import { fabrics } from "@/data/products";

const fabricDetails = [
  {
    id: "cordura",
    name: "Cordura",
    description: "Extrem strapazierfähiges Nylongewebe mit hoher Abriebfestigkeit. Der Klassiker für Outdoor-Ausrüstung.",
    properties: ["Wasserabweisend", "Abriebfest", "UV-beständig", "Leicht zu reinigen"],
    colors: ["Schwarz", "Olive", "Navy", "Camouflage"],
  },
  {
    id: "xpac",
    name: "X-Pac",
    description: "Hochleistungslaminat mit X-förmiger Verstärkung. Ultraleicht und extrem wasserdicht.",
    properties: ["100% wasserdicht", "Ultraleicht", "Keine Dehnung", "Premium-Material"],
    colors: ["Schwarz", "Weiß"],
  },
];

const Stoffe = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Unsere Stoffe</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wir verwenden nur hochwertigste Materialien für unsere Fahrradtaschen. 
            Jeder Stoff wurde sorgfältig für Langlebigkeit und Funktionalität ausgewählt.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-lg overflow-hidden mb-16">
          <img
            src={fabricSwatches}
            alt="Stoffauswahl"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-accent-foreground">
              Premium Materialien für Ihr Abenteuer
            </h2>
          </div>
        </div>

        {/* Fabric Details */}
        <div className="space-y-16">
          {fabricDetails.map((fabric, index) => (
            <div
              key={fabric.id}
              className={`grid md:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <h2 className="text-3xl font-serif font-bold">{fabric.name}</h2>
                <p className="text-muted-foreground text-lg">{fabric.description}</p>
                
                <div>
                  <h3 className="font-semibold mb-3">Eigenschaften</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {fabric.properties.map((prop) => (
                      <li key={prop} className="flex items-center text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                        {prop}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Verfügbare Farben</h3>
                  <div className="flex flex-wrap gap-2">
                    {fabric.colors.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`bg-muted rounded-lg aspect-video flex items-center justify-center ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <div className="text-center p-8">
                  <span className="text-6xl font-serif font-bold text-primary/20">
                    {fabric.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Available Fabrics List */}
        <div className="mt-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-8">
            Alle verfügbaren Stoffe
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {fabrics.map((fabric) => (
              <div
                key={fabric.id}
                className="bg-card p-4 rounded-lg text-center border border-border hover:border-primary transition-colors"
              >
                <span className="font-medium text-sm">{fabric.name}</span>
                {fabric.priceModifier > 0 && (
                  <p className="text-xs text-muted-foreground mt-1">
                    +€{fabric.priceModifier}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stoffe;
