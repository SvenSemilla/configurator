import { xpacRX30, xpacVX21, xpacX11, webbingColors } from "@/data/products";

const fabricCategories = [
  {
    id: "xpac-rx30",
    name: "X-Pac® RX30",
    description: "X-Pac®'s neueste Innovation, die RX-Reihe, setzt einen Maßstab für nachhaltige Textilien. Das Außengewebe und die X-Ply-Fasern bestehen aus Post-Consumer Recycling-Polyester. Diese hochwertige Textilserie ist nicht nur umweltfreundlich, sondern auch komplett CO2-neutral produziert. Die Verwendung einer PFC-freien C0-Imprägnierung unterstreicht das Engagement für maximale Umweltverträglichkeit.",
    details: "X-Pac® RX30 hebt sich als die vielseitigste Variante der RX-Reihe hervor. Mit einem robusten 300den Polyester-Außengewebe, charakteristischen 22° X-Ply-Polyester-Fasern und einem transparenten 0,5mil Polyester-Film bietet dieser Stoff nicht nur eine feine, matte Textur und Abriebfestigkeit, sondern auch das markante Rautenmuster. Die transparente Schicht gewährleistet eine zuverlässige Wasserdichtigkeit, ideal für langlebige Fahrradtaschen, die Stabilität und Funktionalität verbinden.",
    fabrics: xpacRX30,
    properties: ["Recycling-Polyester", "CO2-neutral", "PFC-frei", "Wasserdicht", "Matte Textur"],
  },
  {
    id: "xpac-vx21",
    name: "X-Pac® VX21",
    description: "Ursprünglich für die Herstellung von Schiffssegeln entwickelt, erzeugt die X-PLY Faser nicht nur die beliebte Rautenoptik. Sie macht den Stoff extrem reiß- und weiterreißfest.",
    details: "Die X-PLY Fasern werden auf einer 0,25 mm PET-Trägerfolie zwischen die 210den Nylon Außenschicht und die 30den Polyester Innenschicht laminiert. Das macht den X-Pac® VX21 dauerhaft absolut wasserdicht. Eine DWR-Beschichtung auf der Oberfläche verhindert dabei bereits jegliche Feuchtigkeitsaufnahme. Mit 205g/m² ist der Stoff zudem, im Verhältnis zu seiner Festigkeit, sehr leicht.",
    fabrics: xpacVX21,
    properties: ["Absolut wasserdicht", "Ultraleicht (205g/m²)", "Reiß- & weiterreißfest", "DWR-Beschichtung"],
  },
  {
    id: "xpac-x11",
    name: "X-Pac® X11",
    description: "Mit seiner Oberfläche aus kräftiger Baumwolle erzeugt X-Pac® X11 eine wunderschöne und natürliche Optik mit weichem Griff.",
    details: "Die auflaminierte 0,25 mm PET-Trägerfolie auf der Rückseite macht den Stoff dabei absolut wasserdicht. Zwischen diesen Schichten sorgen die bekannten X-Ply Fasern für eine hervorragende Reiß- und Weiterreißfestigkeit. Die beliebte Rautenoptik kommt bei X-Pac® X11 nur sehr dezent zum Vorschein.",
    fabrics: xpacX11,
    properties: ["Baumwoll-Oberfläche", "Natürliche Optik", "Weicher Griff", "Wasserdicht"],
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
            und weiß genau, was die können. Hier ist die Auswahl.
          </p>
        </div>
      </section>

      {/* Fabric Categories */}
      {fabricCategories.map((category, index) => (
        <section 
          key={category.id} 
          className={`py-16 ${index % 2 === 0 ? "" : "cream-stripe"}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h2 className={`text-3xl md:text-4xl font-display mb-4 ${index % 2 === 0 ? "" : "text-card-foreground"}`}>
                {category.name}
              </h2>
              <p className={`font-mono mb-4 ${index % 2 === 0 ? "text-muted-foreground" : "text-card-foreground/70"}`}>
                {category.description}
              </p>
              <p className={`font-mono text-sm mb-6 ${index % 2 === 0 ? "text-muted-foreground/80" : "text-card-foreground/60"}`}>
                {category.details}
              </p>
              
              {/* Properties */}
              <div className="flex flex-wrap gap-2 mb-8">
                {category.properties.map((prop) => (
                  <span 
                    key={prop}
                    className={`px-3 py-1 text-sm font-mono ${
                      index % 2 === 0 
                        ? "bg-primary/10 text-primary" 
                        : "bg-card-foreground/10 text-card-foreground"
                    }`}
                  >
                    {prop}
                  </span>
                ))}
              </div>

              {/* Fabric Colors Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {category.fabrics.map((fabric) => (
                  <div
                    key={fabric.id}
                    className={`p-3 text-center border-2 transition-colors ${
                      index % 2 === 0 
                        ? "border-foreground/30 hover:border-primary bg-muted" 
                        : "border-card-foreground/30 hover:border-primary bg-card-foreground/5"
                    }`}
                  >
                    <span className={`font-mono text-xs ${index % 2 === 0 ? "" : "text-card-foreground"}`}>
                      {fabric.name.replace("X-Pac RX30 ", "").replace("X-Pac VX21 ", "").replace("X-Pac X11 ", "")}
                    </span>
                    {fabric.priceModifier > 0 && (
                      <p className={`text-xs font-mono mt-1 ${index % 2 === 0 ? "text-muted-foreground" : "text-card-foreground/60"}`}>
                        +€{fabric.priceModifier}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Gurtband Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-display mb-4">Gurtband</h2>
            <p className="font-mono text-muted-foreground mb-8">
              Neben Gurtband in der typischen Farbe Schwarz kannst du für deine Tasche 
              auch Gurtband in einer der vielen weiteren verfügbaren Farben fertigen lassen. 
              Perfekt, um ein farbiges Detail oder Kontrast zu setzen.
            </p>

            {/* Webbing Colors Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-3">
              {webbingColors.map((color) => (
                <div
                  key={color.id}
                  className="flex flex-col items-center gap-2 p-3 border-2 border-foreground/30 hover:border-primary transition-colors"
                >
                  <div 
                    className="w-8 h-8 border border-foreground/20"
                    style={{ backgroundColor: color.color }}
                  />
                  <span className="font-mono text-xs text-center">{color.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Request Section */}
      <section className="cream-stripe py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display text-card-foreground mb-4">
              Nimm was ich kriegen kann!
            </h2>
            <p className="font-mono text-card-foreground/70 mb-6">
              Du hast für den Stoff deiner Tasche einen ganz besonderen Wunsch oder 
              möchtest deine alte zerlodderte Lieblingstasche neu verwerten? Kein Problem! 
              Teile mir deine Vorstellungen mit und ich mache alles möglich. 
              Jedenfalls versuche ich es. ;)
            </p>
            <a 
              href="/anfrage"
              className="inline-block bg-card-foreground text-card px-6 py-3 font-display hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              JA! ICH WILL!
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stoffe;
