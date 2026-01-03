import fabricSwatches from "@/assets/fabric-swatches.jpg";
import { fabrics } from "@/data/products";

const fabricDetails = [
  {
    id: "cordura",
    name: "Cordura",
    description: "Det Arbeitstier unter den Stoffen. Hält alles aus, wat du ihm zumutest. Der Klassiker für Leute, die ihr Zeug ordentlich beanspruchen.",
    properties: ["Wasserabweisend", "Praktisch unkaputtbar", "UV-beständig", "Leicht zu reinigen"],
    colors: ["Schwarz", "Olive", "Navy", "Camo"],
  },
  {
    id: "xpac",
    name: "X-Pac",
    description: "Det gute Zeug. Ultraleicht, komplett dicht, und sieht auch noch ordentlich aus. Wenn du's ernst meinst mit dem Bikepacking.",
    properties: ["100% wasserdicht", "Federleicht", "Verzieht sich nich", "Hält ordentlich wat aus"],
    colors: ["Schwarz", "Weiß"],
  },
];

const Stoffe = () => {
  return (
    <div className="min-h-screen">
      {/* Hero - Cream Stripe */}
      <section className="cream-stripe py-12 border-b-2 border-card-foreground">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-display text-card-foreground mb-3">Stoffe</h1>
          <p className="font-mono text-card-foreground/70 max-w-xl">
            Kein Billig-Kram hier. Ich such mir die Materialien selber aus 
            und weiß genau, wat die können. Hier is die Auswahl.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="relative">
            <img
              src={fabricSwatches}
              alt="Stoffauswahl"
              className="w-full h-64 md:h-80 object-cover border-2 border-foreground"
            />
          </div>
        </div>
      </section>

      {/* Fabric Details */}
      <section className="cream-stripe py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {fabricDetails.map((fabric, index) => (
              <div
                key={fabric.id}
                className={`grid md:grid-cols-2 gap-10 items-start`}
              >
                <div className={`space-y-5 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <h2 className="text-3xl md:text-4xl font-display text-card-foreground">{fabric.name}</h2>
                  <p className="text-card-foreground/70 font-mono">{fabric.description}</p>
                  
                  <div className="bg-card-foreground/10 p-5">
                    <h3 className="font-display text-card-foreground mb-3">Wat der kann</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {fabric.properties.map((prop) => (
                        <li key={prop} className="flex items-center text-sm font-mono text-card-foreground/80">
                          <span className="w-2 h-2 bg-primary mr-2" />
                          {prop}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-card-foreground mb-3">Farben</h3>
                    <div className="flex flex-wrap gap-2">
                      {fabric.colors.map((color) => (
                        <span
                          key={color}
                          className="px-3 py-1 bg-card-foreground text-card font-mono text-sm"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`bg-card-foreground/10 aspect-square flex items-center justify-center ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <span className="text-6xl md:text-7xl font-display text-card-foreground/20">
                    {fabric.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Fabrics List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display mb-3">Alle Stoffe</h2>
            <p className="font-mono text-muted-foreground">Such dir wat aus – geht alles</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {fabrics.map((fabric) => (
              <div
                key={fabric.id}
                className="bg-muted p-4 text-center border-2 border-foreground/30 hover:border-primary transition-colors cursor-pointer"
              >
                <span className="font-display text-sm">{fabric.name}</span>
                {fabric.priceModifier > 0 && (
                  <p className="text-xs font-mono text-muted-foreground mt-1">
                    +€{fabric.priceModifier}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stoffe;
