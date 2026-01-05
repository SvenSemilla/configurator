import { BagModel } from "./types";
import { products } from "@/data/products";

// Platzhalter-SVG-Pfade für die Taschen-Zonen
// Diese können später durch echte SVG-Pfade ersetzt werden

export const bagModels: BagModel[] = [
  {
    id: "satteltasche-petra",
    name: "Satteltasche PETRA",
    slug: "satteltasche-petra",
    viewBox: "0 0 400 300",
    basePrice: products.find(p => p.id === "satteltasche-petra")?.basePrice || 240,
    image: products.find(p => p.id === "satteltasche-petra")?.image || "",
    zones: [
      {
        id: "front",
        name: "Vorderseite",
        pathData: "M50 100 L200 80 L350 100 L350 220 L200 240 L50 220 Z",
        defaultColor: "#2d2d2d"
      },
      {
        id: "top",
        name: "Oberseite",
        pathData: "M50 100 L200 80 L350 100 L300 50 L200 35 L100 50 Z",
        defaultColor: "#3d3d3d"
      },
      {
        id: "side-left",
        name: "Seite Links",
        pathData: "M50 100 L100 50 L100 180 L50 220 Z",
        defaultColor: "#4d4d4d"
      },
      {
        id: "side-right",
        name: "Seite Rechts",
        pathData: "M350 100 L300 50 L300 180 L350 220 Z",
        defaultColor: "#4d4d4d"
      },
      {
        id: "straps",
        name: "Gurte",
        pathData: "M120 240 L130 280 L140 240 M260 240 L270 280 L280 240",
        defaultColor: "#1a1a1a"
      }
    ]
  },
  {
    id: "satteltasche-egon",
    name: "Satteltasche EGON",
    slug: "satteltasche-egon",
    viewBox: "0 0 400 300",
    basePrice: products.find(p => p.id === "satteltasche-egon")?.basePrice || 170,
    image: products.find(p => p.id === "satteltasche-egon")?.image || "",
    zones: [
      {
        id: "main-body",
        name: "Hauptteil",
        pathData: "M80 80 L320 80 L340 200 L60 200 Z",
        defaultColor: "#2d2d2d"
      },
      {
        id: "roll-top",
        name: "Rollverschluss",
        pathData: "M80 80 L320 80 L310 40 L90 40 Z",
        defaultColor: "#3d3d3d"
      },
      {
        id: "front-pocket",
        name: "Vordertasche",
        pathData: "M120 120 L280 120 L290 180 L110 180 Z",
        defaultColor: "#4d4d4d"
      },
      {
        id: "straps",
        name: "Gurte",
        pathData: "M150 200 L160 260 L170 200 M230 200 L240 260 L250 200",
        defaultColor: "#1a1a1a"
      }
    ]
  },
  {
    id: "lenkertasche-edgar",
    name: "Lenkertasche EDGAR",
    slug: "lenkertasche-edgar",
    viewBox: "0 0 400 300",
    basePrice: products.find(p => p.id === "lenkertasche-edgar")?.basePrice || 280,
    image: products.find(p => p.id === "lenkertasche-edgar")?.image || "",
    zones: [
      {
        id: "main-bag",
        name: "Haupttasche",
        pathData: "M60 60 L240 60 L240 220 L60 220 Z",
        defaultColor: "#2d2d2d"
      },
      {
        id: "front-pouch",
        name: "Zusatztasche",
        pathData: "M260 90 L360 90 L360 190 L260 190 Z",
        defaultColor: "#3d3d3d"
      },
      {
        id: "lid",
        name: "Deckel",
        pathData: "M60 60 L240 60 L250 30 L50 30 Z",
        defaultColor: "#4d4d4d"
      },
      {
        id: "straps",
        name: "Befestigung",
        pathData: "M80 220 L90 260 L100 220 M200 220 L210 260 L220 220",
        defaultColor: "#1a1a1a"
      }
    ]
  },
  {
    id: "lenkerrolle-bernd",
    name: "Lenkerrolle BERND",
    slug: "lenkerrolle-bernd",
    viewBox: "0 0 400 250",
    basePrice: products.find(p => p.id === "lenkerrolle-bernd")?.basePrice || 150,
    image: products.find(p => p.id === "lenkerrolle-bernd")?.image || "",
    zones: [
      {
        id: "main-roll",
        name: "Hauptrolle",
        pathData: "M60 80 C60 50, 340 50, 340 80 L340 170 C340 200, 60 200, 60 170 Z",
        defaultColor: "#2d2d2d"
      },
      {
        id: "end-cap-left",
        name: "Endkappe Links",
        pathData: "M40 80 C40 60, 80 60, 80 80 L80 170 C80 190, 40 190, 40 170 Z",
        defaultColor: "#3d3d3d"
      },
      {
        id: "end-cap-right",
        name: "Endkappe Rechts",
        pathData: "M320 80 C320 60, 360 60, 360 80 L360 170 C360 190, 320 190, 320 170 Z",
        defaultColor: "#3d3d3d"
      },
      {
        id: "straps",
        name: "Gurte",
        pathData: "M100 200 L110 230 L120 200 M280 200 L290 230 L300 200",
        defaultColor: "#1a1a1a"
      }
    ]
  },
  {
    id: "rahmentasche-charlotte",
    name: "Rahmentasche CHARLOTTE",
    slug: "rahmentasche-charlotte",
    viewBox: "0 0 400 300",
    basePrice: products.find(p => p.id === "rahmentasche-charlotte")?.basePrice || 160,
    image: products.find(p => p.id === "rahmentasche-charlotte")?.image || "",
    zones: [
      {
        id: "main-body",
        name: "Hauptteil",
        pathData: "M50 50 L350 120 L350 250 L50 180 Z",
        defaultColor: "#2d2d2d"
      },
      {
        id: "top-panel",
        name: "Oberseite",
        pathData: "M50 50 L350 120 L340 90 L60 25 Z",
        defaultColor: "#3d3d3d"
      },
      {
        id: "zipper-area",
        name: "Reißverschluss",
        pathData: "M100 80 L320 140 L310 150 L90 90 Z",
        defaultColor: "#4d4d4d"
      }
    ]
  },
  {
    id: "oberrohrtasche-fritz",
    name: "Oberrohrtasche FRITZ",
    slug: "oberrohrtasche-fritz",
    viewBox: "0 0 400 200",
    basePrice: products.find(p => p.id === "oberrohrtasche-fritz")?.basePrice || 65,
    image: products.find(p => p.id === "oberrohrtasche-fritz")?.image || "",
    zones: [
      {
        id: "main-body",
        name: "Hauptteil",
        pathData: "M40 60 L360 60 L360 140 L40 140 Z",
        defaultColor: "#2d2d2d"
      },
      {
        id: "phone-window",
        name: "Sichtfenster",
        pathData: "M80 80 L320 80 L320 120 L80 120 Z",
        defaultColor: "#3d3d3d"
      },
      {
        id: "straps",
        name: "Befestigung",
        pathData: "M60 140 L70 170 L80 140 M320 140 L330 170 L340 140",
        defaultColor: "#1a1a1a"
      }
    ]
  }
];
