import fabricSwatches from "@/assets/fabric-swatches.jpg";
import { fabrics } from "@/data/products";

const fabricDetails = [
  {
    id: "cordura",
    name: "Cordura",
    description: "Das Arbeitstier unter den Stoffen. Hält alles aus, was du ihm zumutest. Der Klassiker, wenn's robust sein soll.",
    properties: ["Wasserabweisend", "Praktisch unkaputtbar", "UV-beständig", "Easy zu reinigen"],
    colors: ["Schwarz", "Olive", "Navy", "Camo"],
  },
  {
    id: "xpac",
    name: "X-Pac",
    description: "Das Fancy-Zeug. Ultraleicht, komplett dicht, und sieht auch noch gut aus. Wenn du's ernst meinst.",
    properties: ["100% wasserdicht", "Federleicht", "Verzieht sich nicht", "Das gute Zeug"],
    colors: ["Schwarz", "Weiß"],
  },
];

const Stoffe = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-40 h-40 border-4 border-card/30 rotate-12" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/30 rotate-45" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-card text-card-foreground px-4 py-2 mb-6 retro-border text-sm font-display">
              MATERIAL-KUNDE
            </div>
            <h1 className="text-5xl md:text-7xl font-display mb-6">
              STOFFE, DIE<br />
              <span className="text-accent">WAS TAUGEN</span>
            </h1>
            <p className="text-xl font-mono text-secondary-foreground/80 max-w-xl">
              Kein Billig-Kram hier. Ich such mir die Materialien selber aus 
              und weiß genau, was die können.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-4 bg-primary" />
        <div className="container mx-auto px-4 py-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-accent rotate-1" />
            <img
              src={fabricSwatches}
              alt="Stoffauswahl"
              className="relative w-full h-64 md:h-96 object-cover retro-border"
            />
            <div className="absolute bottom-0 left-0 bg-foreground text-background px-8 py-4">
              <span className="font-display text-xl">ALLES HANDVERLESEN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Details */}
      <section className="py-20 bg-muted geometric-pattern">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {fabricDetails.map((fabric, index) => (
              <div
                key={fabric.id}
                className={`grid md:grid-cols-2 gap-12 items-center`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <h2 className="text-4xl md:text-5xl font-display">{fabric.name.toUpperCase()}</h2>
                  <p className="text-muted-foreground font-mono text-lg">{fabric.description}</p>
                  
                  <div className="bg-card p-6 retro-border">
                    <h3 className="font-display text-lg mb-4">WAS DER KANN</h3>
                    <ul className="grid grid-cols-2 gap-3">
                      {fabric.properties.map((prop) => (
                        <li key={prop} className="flex items-center text-sm font-mono">
                          <span className="w-3 h-3 bg-primary mr-3" />
                          {prop}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display text-lg mb-4">FARBEN</h3>
                    <div className="flex flex-wrap gap-3">
                      {fabric.colors.map((color) => (
                        <span
                          key={color}
                          className="px-4 py-2 bg-secondary text-secondary-foreground font-mono text-sm border-2 border-foreground"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`bg-card retro-border retro-shadow aspect-square flex items-center justify-center ${
                    index % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <div className="text-center p-8">
                    <span className="text-7xl md:text-8xl font-display text-primary/20">
                      {fabric.name.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Fabrics List */}
      <section className="py-20 bg-card border-t-4 border-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display mb-4">ALLE STOFFE</h2>
            <p className="font-mono text-muted-foreground">Such dir was aus – geht alles</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {fabrics.map((fabric) => (
              <div
                key={fabric.id}
                className="bg-background p-6 text-center border-2 border-foreground hover:bg-accent hover:text-accent-foreground transition-colors hover-lift cursor-pointer"
              >
                <span className="font-display text-sm">{fabric.name.toUpperCase()}</span>
                {fabric.priceModifier > 0 && (
                  <p className="text-xs font-mono text-muted-foreground mt-2">
                    +{fabric.priceModifier}€
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
