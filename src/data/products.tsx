export interface ProductVariant {
  id: string;
  name: string;
  priceModifier: number;
  color?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  basePrice: number;
  image: string;
  category: string;
  fabrics: ProductVariant[];
  sizes: ProductVariant[];
  colors: ProductVariant[];
  customizable: boolean;
  measurements?: {
    name: string;
    unit: string;
    min: number;
    max: number;
    default: number;
  }[];
}

// X-Pac RX30 Farben (aus der Website)
export const xpacRX30: ProductVariant[] = [
  { id: "rx30-black", name: "X-Pac RX30 Schwarz", priceModifier: 0 },
  { id: "rx30-olive", name: "X-Pac RX30 Olive", priceModifier: 0 },
  { id: "rx30-coyote", name: "X-Pac RX30 Coyote", priceModifier: 0 },
  { id: "rx30-navy", name: "X-Pac RX30 Navy", priceModifier: 0 },
  { id: "rx30-burgundy", name: "X-Pac RX30 Burgundy", priceModifier: 0 },
  { id: "rx30-grey", name: "X-Pac RX30 Grau", priceModifier: 0 },
  { id: "rx30-white", name: "X-Pac RX30 Weiß", priceModifier: 0 },
  { id: "rx30-orange", name: "X-Pac RX30 Orange", priceModifier: 0 },
  { id: "rx30-red", name: "X-Pac RX30 Rot", priceModifier: 0 },
  { id: "rx30-teal", name: "X-Pac RX30 Petrol", priceModifier: 0 },
  { id: "rx30-purple", name: "X-Pac RX30 Lila", priceModifier: 0 },
  { id: "rx30-yellow", name: "X-Pac RX30 Gelb", priceModifier: 0 },
];

// X-Pac VX21 Farben
export const xpacVX21: ProductVariant[] = [
  { id: "vx21-black", name: "X-Pac VX21 Schwarz", priceModifier: 10 },
  { id: "vx21-white", name: "X-Pac VX21 Weiß", priceModifier: 10 },
  { id: "vx21-olive", name: "X-Pac VX21 Olive", priceModifier: 10 },
  { id: "vx21-coyote", name: "X-Pac VX21 Coyote", priceModifier: 10 },
  { id: "vx21-grey", name: "X-Pac VX21 Grau", priceModifier: 10 },
  { id: "vx21-navy", name: "X-Pac VX21 Navy", priceModifier: 10 },
  { id: "vx21-burgundy", name: "X-Pac VX21 Burgundy", priceModifier: 10 },
  { id: "vx21-teal", name: "X-Pac VX21 Petrol", priceModifier: 10 },
  { id: "vx21-orange", name: "X-Pac VX21 Orange", priceModifier: 10 },
  { id: "vx21-red", name: "X-Pac VX21 Rot", priceModifier: 10 },
  { id: "vx21-multicam", name: "X-Pac VX21 Multicam", priceModifier: 20 },
  { id: "vx21-multicam-black", name: "X-Pac VX21 Multicam Black", priceModifier: 20 },
  { id: "vx21-multicam-alpine", name: "X-Pac VX21 Multicam Alpine", priceModifier: 20 },
  { id: "vx21-multicam-arid", name: "X-Pac VX21 Multicam Arid", priceModifier: 20 },
  { id: "vx21-multicam-tropic", name: "X-Pac VX21 Multicam Tropic", priceModifier: 20 },
  { id: "vx21-purple", name: "X-Pac VX21 Lila", priceModifier: 10 },
  { id: "vx21-pink", name: "X-Pac VX21 Pink", priceModifier: 10 },
  { id: "vx21-yellow", name: "X-Pac VX21 Gelb", priceModifier: 10 },
  { id: "vx21-cyan", name: "X-Pac VX21 Cyan", priceModifier: 10 },
];

// X-Pac X11 (Baumwolle)
export const xpacX11: ProductVariant[] = [
  { id: "x11-black", name: "X-Pac X11 Schwarz", priceModifier: 5 },
  { id: "x11-olive", name: "X-Pac X11 Olive", priceModifier: 5 },
  { id: "x11-coyote", name: "X-Pac X11 Coyote", priceModifier: 5 },
  { id: "x11-grey", name: "X-Pac X11 Grau", priceModifier: 5 },
  { id: "x11-navy", name: "X-Pac X11 Navy", priceModifier: 5 },
];

// Alle Stoffe kombiniert
export const fabrics: ProductVariant[] = [
  ...xpacRX30,
  ...xpacVX21,
  ...xpacX11,
];

// Gurtband Farben
export const webbingColors: ProductVariant[] = [
  { id: "webbing-black", name: "Schwarz", priceModifier: 0, color: "#1a1a1a" },
  { id: "webbing-grey", name: "Grau", priceModifier: 0, color: "#6b7280" },
  { id: "webbing-white", name: "Weiß", priceModifier: 0, color: "#f5f5f4" },
  { id: "webbing-olive", name: "Olive", priceModifier: 0, color: "#556b2f" },
  { id: "webbing-coyote", name: "Coyote", priceModifier: 0, color: "#8b7355" },
  { id: "webbing-navy", name: "Navy", priceModifier: 0, color: "#1e3a5f" },
  { id: "webbing-red", name: "Rot", priceModifier: 0, color: "#dc2626" },
  { id: "webbing-orange", name: "Orange", priceModifier: 0, color: "#ea580c" },
  { id: "webbing-yellow", name: "Gelb", priceModifier: 0, color: "#eab308" },
  { id: "webbing-neon-yellow", name: "Neongelb", priceModifier: 0, color: "#d4ff00" },
  { id: "webbing-neon-orange", name: "Neonorange", priceModifier: 0, color: "#ff6b00" },
  { id: "webbing-teal", name: "Petrol", priceModifier: 0, color: "#0d9488" },
  { id: "webbing-purple", name: "Lila", priceModifier: 0, color: "#7c3aed" },
  { id: "webbing-pink", name: "Pink", priceModifier: 0, color: "#ec4899" },
  { id: "webbing-burgundy", name: "Burgundy", priceModifier: 0, color: "#7f1d1d" },
];

export const products: Product[] = [
  {
    id: "satteltasche-petra",
    name: "Satteltasche PETRA",
    slug: "satteltasche-petra",
    description: "Wenn es mal mehr werden soll!",
    longDescription: "Mit bis zu 17 Liter Volumen in einem wasserdichten Packsack bekommst du in diese Satteltasche alles rein, selbst für die längsten Ausfahrten. Der wasserdichte Packsack ist vollständig entnehmbar und erleichtert dir so das Packen enorm. Der Packsack selber ist immer aus wasserdichtem Material gefertigt und alle Nähte werden verschweißt, so hat kein Wasser der Welt eine Chance!",
    basePrice: 240,
    image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/31bd7a72-7fe3-4a7d-92ad-5600a3bb9fa9/768-576/f6d9cbfdfbd70885326e3c37df69a5604fae6005",
    category: "Satteltaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "standard", name: "Standard (bis 17L)", priceModifier: 0 },
    ],
    colors: webbingColors,
    measurements: [
      { name: "Sattelbreite", unit: "mm", min: 130, max: 180, default: 145 },
    ],
  },
  {
    id: "satteltasche-egon",
    name: "Satteltasche EGON",
    slug: "satteltasche-egon",
    description: "Der perfekte Begleiter für eine entspannte Tagestour!",
    longDescription: "Mit gut 8 Liter Volumen bekommst du in diese Satteltasche alles für eine entspannte Ausfahrt. Gummikordeln auf der Oberseite ermöglichen das Anbringen weiterer Ausrüstung an der Außenseite der Tasche. Durch die Verwendung eines Rollverschlusses musst du dir selbst bei Regenwetter keine Sorgen um den Inhalt machen.",
    basePrice: 170,
    image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/1d13059c-6c45-4ed4-bb93-d56c60b1bcd3/768-576/1fc30cb1fcb8bf2a2df400cd04021e55f8cbf691",
    category: "Satteltaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "standard", name: "Standard (ca. 8L)", priceModifier: 0 },
    ],
    colors: webbingColors,
    measurements: [
      { name: "Sattelbreite", unit: "mm", min: 130, max: 180, default: 145 },
    ],
  },
  {
    id: "lenkertasche-edgar",
    name: "Lenkertasche EDGAR",
    slug: "lenkertasche-edgar",
    description: "Wenn es mal mehr werden soll!",
    longDescription: "Mit bis zu 15+3 Liter Volumen bekommst du mit diesem Lenkertaschen-System auch die umfangreichste Ausrüstung verpackt. Der vollständig wasserdichte Packsack ist entnehmbar und erleichtert dir so das Packen enorm. Die Zusatztasche kann durch magnetische FIDLOCK-Verschlüsse mit einem Handgriff abgenommen und auch wieder angesteckt werden. Mit den verstaubaren Gurten dient sie abseits vom Fahrrad als praktische Hüfttasche.",
    basePrice: 280,
    image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/d1e6b67d-6c36-4054-94f5-e3b8e762e87d/768-576/8452804f573ab5cdcf1f2d14cb67443a717af2fe",
    category: "Lenkertaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "standard", name: "Standard (15+3L)", priceModifier: 0 },
    ],
    colors: webbingColors,
    measurements: [
      { name: "Lenkerbreite", unit: "mm", min: 400, max: 800, default: 600 },
    ],
  },
  {
    id: "lenkerrolle-bernd",
    name: "Lenkerrolle BERND",
    slug: "lenkerrolle-bernd",
    description: "Der perfekte Begleiter für eine entspannte Tagestour!",
    longDescription: "Mit knapp 4 Liter Volumen, 2 gesonderten Fächern außen bekommst du in diese Lenkerrolle alles für eine entspannte Ausfahrt. Gummikordeln auf der Vorderseite ermöglichen das Anbringen weiterer Ausrüstung an der Außenseite der Tasche. Durch die Verwendung eines wasserfesten Reißverschlusses musst du dir selbst bei Regenwetter keine Sorgen um den Inhalt machen.",
    basePrice: 150,
    image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/3c1f4f93-8190-4d40-8139-15246a7a33ba/768-576/cb49765e66e7b2b53c84412b9b2265f6cbae4149",
    category: "Lenkertaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "standard", name: "Standard (ca. 4L)", priceModifier: 0 },
      { id: "custom", name: "Nach Wunsch", priceModifier: 0 },
    ],
    colors: webbingColors,
    measurements: [
      { name: "Breite", unit: "mm", min: 200, max: 300, default: 240 },
      { name: "Durchmesser", unit: "mm", min: 100, max: 180, default: 140 },
    ],
  },
  {
    id: "lenkerrolle-bernd-fidlock",
    name: "Lenkerrolle BERND FIDLOCK+",
    slug: "lenkerrolle-bernd-fidlock",
    description: "Mit FIDLOCK SNAP System!",
    longDescription: "Mit dem FIDLOCK SNAP System kann diese Tasche mit einer Hand vom Lenker abgenommen und wieder angebracht werden. Magnetische Verschlüsse ermöglichen diesen Zauber. Bei einer Bruchlast von 60kg pro Verschluss brauchst du dir über den Halt garantiert keine Sorgen machen. Mit knapp 4 Liter Volumen, 2 gesonderten Fächern außen bekommst du in diese Lenkerrolle alles für eine entspannte Ausfahrt.",
    basePrice: 200,
    image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/254d7811-6e44-4f81-b463-8fe09114da2b/768-576/2f8eb5c134551443a72c3816e6094d9e3acccb96",
    category: "Lenkertaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "standard", name: "Standard (ca. 4L)", priceModifier: 0 },
    ],
    colors: webbingColors,
    measurements: [
      { name: "Breite", unit: "mm", min: 200, max: 300, default: 240 },
      { name: "Durchmesser", unit: "mm", min: 100, max: 180, default: 140 },
    ],
  },
  {
    id: "rahmentasche-anfertigung",
    name: "Rahmentasche nach Wunsch",
    slug: "rahmentasche-anfertigung",
    description: "Perfekt zu deinem Fahrrad passend!",
    longDescription: "Reisefix fertigt deine Rahmentasche perfekt zu deinem Fahrrad passend und ganz nach deinen Wünschen gestaltet. Halbrahmentasche ab 230€, Vollrahmentasche ab 270€, teilbare Vollrahmentasche ab 340€.",
    basePrice: 230,
    image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/1d853b55-3880-4e15-9d0d-9ada9fc19457/768-576/d2bd5d89f73d7cf7171b2b5c3ff0da52fc830803",
    category: "Rahmentaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "half", name: "Halbrahmentasche", priceModifier: 0 },
      { id: "full", name: "Vollrahmentasche", priceModifier: 40 },
      { id: "full-split", name: "Teilbare Vollrahmentasche", priceModifier: 110 },
    ],
    colors: webbingColors,
    measurements: [
      { name: "Oberrohrlänge", unit: "mm", min: 400, max: 650, default: 550 },
      { name: "Sitzrohrlänge", unit: "mm", min: 400, max: 600, default: 500 },
      { name: "Unterrohrlänge", unit: "mm", min: 500, max: 700, default: 600 },
    ],
  },
  {
    id: "oberrohrtasche",
    name: "Oberrohrtasche nach Wunsch",
    slug: "oberrohrtasche",
    description: "Perfekt zu deinem Fahrrad passend!",
    longDescription: "Reisefix fertigt deine Oberrohrtasche perfekt zu deinem Fahrrad passend und ganz nach deinen Wünschen gestaltet. Für die Befestigungsart kann zwischen Gurt-/Kordelbefestigung, Schraubbefestigung oder praktischen FIDLOCK Magnetverschlüssen gewählt werden.",
    basePrice: 110,
    image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/8e7ad5c9-fc9a-4dfc-99fa-eb089c7ea173/768-576/13927493a2f52c36ccfc5203b9a6f8fc21c08006",
    category: "Rahmentaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "custom", name: "Maßanfertigung", priceModifier: 0 },
    ],
    colors: webbingColors,
    measurements: [
      { name: "Länge", unit: "mm", min: 100, max: 300, default: 200 },
      { name: "Breite", unit: "mm", min: 50, max: 120, default: 80 },
    ],
  },
  {
    id: "lenkertasche-carsten",
    name: "Lenkertasche CARSTEN",
    slug: "lenkertasche-carsten",
    description: "Ganz nach deinen Wünschen gestaltet!",
    longDescription: "Reisefix fertigt deine Lenkertasche perfekt zu deinem Fahrrad passend und ganz nach deinen Wünschen gestaltet. Maße frei nach Wahl.",
    basePrice: 230,
    image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/0d5a17b3-c648-4451-8a81-bdb92b172495/768-576/f5ba7108e2d59a3c0ebf81d0f5dd619d39cf4dca",
    category: "Lenkertaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "custom", name: "Nach Wunsch", priceModifier: 0 },
    ],
    colors: webbingColors,
    measurements: [
      { name: "Breite", unit: "mm", min: 150, max: 350, default: 250 },
      { name: "Höhe", unit: "mm", min: 100, max: 250, default: 180 },
    ],
  },
  {
    id: "bemmentasche-karin",
    name: "Bemmentasche KARIN",
    slug: "bemmentasche-karin",
    description: "Ohne Mampf kein Kampf!",
    longDescription: "Die Bemmentasche lässt sich zwischen Lenker und Vorbau befestigen, so dass du deine Verpflegung immer in Griffweite hast. Die verjüngende Form sorgt für viel Beinfreiheit beim Wiegetritt. Dennoch fasst die Tasche bequem eine reguläre Trinkflasche... na, oder natürlich 'ne ganze Menge Pommes! Der Verschluss kann natürlich bequem einhändig bedient werden. Eine kleine Netztasche an der Außenseite kann dann gleich als Müllkorb für die Verpackung der Naschereien verwendet werden.",
    basePrice: 70,
    image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/82f67fcb-bd48-436e-9230-9b46f997e896/768-576/9936f3dee2cced3677b3fd1f31ddc31c538eb421",
    category: "Lenkertaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "standard", name: "Standard (100x170x75mm)", priceModifier: 0 },
    ],
    colors: webbingColors,
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
