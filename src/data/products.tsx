import saddleBag from "@/assets/hero-saddle-bag.jpg";
import handlebarRoll from "@/assets/product-handlebar-roll.jpg";
import frameBag from "@/assets/product-frame-bag.jpg";
import handlebarBag from "@/assets/product-handlebar-bag.jpg";

export interface ProductVariant {
  id: string;
  name: string;
  priceModifier: number;
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

export const fabrics: ProductVariant[] = [
  { id: "cordura-black", name: "Cordura Schwarz", priceModifier: 0 },
  { id: "cordura-olive", name: "Cordura Olive", priceModifier: 0 },
  { id: "cordura-navy", name: "Cordura Navy", priceModifier: 0 },
  { id: "cordura-camo", name: "Cordura Camouflage", priceModifier: 15 },
  { id: "xpac-black", name: "X-Pac Schwarz", priceModifier: 25 },
  { id: "xpac-white", name: "X-Pac Weiß", priceModifier: 25 },
];

export const products: Product[] = [
  {
    id: "satteltasche-egon",
    name: "Satteltasche Egon",
    slug: "satteltasche-egon",
    description: "Die klassische Satteltasche für große Touren. Alles drin, alles dran.",
    longDescription: "Die Satteltasche Egon ist unser Flaggschiff für Bikepacking-Abenteuer. Mit durchdachtem Rollverschluss, verstärkten Befestigungspunkten und optionalen Außentaschen bietet sie maximalen Stauraum bei minimalistischem Design. Jede Tasche wird individuell an Ihr Fahrrad angepasst.",
    basePrice: 189,
    image: saddleBag,
    category: "Satteltaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "small", name: "Klein (8L)", priceModifier: 0 },
      { id: "medium", name: "Mittel (12L)", priceModifier: 20 },
      { id: "large", name: "Groß (16L)", priceModifier: 40 },
    ],
    colors: [
      { id: "black", name: "Schwarze Details", priceModifier: 0 },
      { id: "orange", name: "Orange Details", priceModifier: 5 },
      { id: "brown", name: "Braune Lederdetails", priceModifier: 15 },
    ],
    measurements: [
      { name: "Sattelbreite", unit: "mm", min: 130, max: 180, default: 145 },
      { name: "Sattelstützenlänge", unit: "mm", min: 100, max: 300, default: 200 },
    ],
  },
  {
    id: "lenkerrolle-bernd",
    name: "Lenkerrolle Bernd",
    slug: "lenkerrolle-bernd",
    description: "Völlig von der Rolle. Die perfekte Lenkerrolle für Ihr Gepäck.",
    longDescription: "Die Lenkerrolle Bernd bietet schnellen Zugriff auf Ihre wichtigsten Sachen. Mit Rollverschluss und optionalem Innenfach ist sie ideal für Schlafsack, Jacke oder Proviant. Die Befestigung erfolgt über robuste Gurte direkt am Lenker.",
    basePrice: 129,
    image: handlebarRoll,
    category: "Lenkertaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "compact", name: "Kompakt (5L)", priceModifier: 0 },
      { id: "standard", name: "Standard (8L)", priceModifier: 15 },
      { id: "xl", name: "XL (12L)", priceModifier: 30 },
    ],
    colors: [
      { id: "black", name: "Schwarze Details", priceModifier: 0 },
      { id: "orange", name: "Orange Details", priceModifier: 5 },
    ],
    measurements: [
      { name: "Lenkerbreite", unit: "mm", min: 400, max: 800, default: 600 },
    ],
  },
  {
    id: "rahmentasche-max",
    name: "Rahmentasche Max",
    slug: "rahmentasche-max",
    description: "Bleibt im Rahmen. Perfekt angepasst an Ihr Fahrrad.",
    longDescription: "Die Rahmentasche Max wird exakt auf Ihren Rahmen zugeschnitten. Durch die Maßanfertigung nutzt sie jeden Zentimeter optimal aus. Ideal für Werkzeug, Snacks oder Wertsachen – immer griffbereit in der Mitte Ihres Rades.",
    basePrice: 159,
    image: frameBag,
    category: "Rahmentaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "half", name: "Halber Rahmen", priceModifier: 0 },
      { id: "full", name: "Voller Rahmen", priceModifier: 40 },
    ],
    colors: [
      { id: "black", name: "Schwarze Details", priceModifier: 0 },
      { id: "orange", name: "Orange Details", priceModifier: 5 },
    ],
    measurements: [
      { name: "Oberrohrlänge", unit: "mm", min: 400, max: 650, default: 550 },
      { name: "Sitzrohrlänge", unit: "mm", min: 400, max: 600, default: 500 },
      { name: "Unterrohrlänge", unit: "mm", min: 500, max: 700, default: 600 },
    ],
  },
  {
    id: "lenkertasche-edgar",
    name: "Lenkertasche Edgar",
    slug: "lenkertasche-edgar",
    description: "Darf es etwas mehr sein? Die große Lenkertasche mit System.",
    longDescription: "Die Lenkertasche Edgar bietet großzügigen Stauraum direkt im Blickfeld. Mit modularem Innenleben, Kartenfach und optionalem Regenschutz ist sie perfekt für lange Touren. Die Befestigung ist kompatibel mit allen gängigen Lenkern.",
    basePrice: 169,
    image: handlebarBag,
    category: "Lenkertaschen",
    customizable: true,
    fabrics: fabrics,
    sizes: [
      { id: "medium", name: "Mittel (6L)", priceModifier: 0 },
      { id: "large", name: "Groß (9L)", priceModifier: 25 },
    ],
    colors: [
      { id: "black", name: "Schwarze Details", priceModifier: 0 },
      { id: "brown", name: "Braune Lederdetails", priceModifier: 20 },
      { id: "orange", name: "Orange Details", priceModifier: 5 },
    ],
    measurements: [
      { name: "Lenkerbreite", unit: "mm", min: 400, max: 800, default: 600 },
      { name: "Steuerrohrhöhe", unit: "mm", min: 80, max: 200, default: 120 },
    ],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
