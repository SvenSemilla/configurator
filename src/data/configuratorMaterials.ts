// Configurator materials data from finalized list
// Source: https://assets.reisefix.cc

export interface ConfiguratorMaterial {
  id: string;
  name: string;
  imageUrl: string;
  category: "cord" | "webbing" | "rx30" | "ux10" | "vx21" | "x11" | "x50";
}

// Kordeln (Cords)
export const cordMaterials: ConfiguratorMaterial[] = [
  { id: "cord-olive", name: "Oliv", imageUrl: "https://assets.reisefix.cc/cord/cord-olive.jpg", category: "cord" },
  { id: "cord-orange", name: "Orange", imageUrl: "https://assets.reisefix.cc/cord/cord-orange.jpg", category: "cord" },
  { id: "cord-papaya", name: "Papaya", imageUrl: "https://assets.reisefix.cc/cord/cord-papaya.jpg", category: "cord" },
  { id: "cord-pink", name: "Pink", imageUrl: "https://assets.reisefix.cc/cord/cord-pink.jpg", category: "cord" },
  { id: "cord-plum", name: "Plum", imageUrl: "https://assets.reisefix.cc/cord/cord-plum.jpg", category: "cord" },
  { id: "cord-teal", name: "Teal", imageUrl: "https://assets.reisefix.cc/cord/cord-teal.jpg", category: "cord" },
  { id: "cord-violett", name: "Violett", imageUrl: "https://assets.reisefix.cc/cord/cord-violett.jpg", category: "cord" },
  { id: "cord-white", name: "Weiß", imageUrl: "https://assets.reisefix.cc/cord/cord-white.jpg", category: "cord" },
  { id: "cord-yellow", name: "Gelb", imageUrl: "https://assets.reisefix.cc/cord/cord-yellow.jpg", category: "cord" },
  { id: "cord-beige", name: "Beige", imageUrl: "https://assets.reisefix.cc/cord/cord-beige.jpg", category: "cord" },
  { id: "cord-black", name: "Schwarz", imageUrl: "https://assets.reisefix.cc/cord/cord-black.jpg", category: "cord" },
  { id: "cord-bordeaux", name: "Bordeaux", imageUrl: "https://assets.reisefix.cc/cord/cord-bordeaux.jpg", category: "cord" },
  { id: "cord-bunablue", name: "Bunablau", imageUrl: "https://assets.reisefix.cc/cord/cord-bunablue.jpg", category: "cord" },
  { id: "cord-darkblue", name: "Dunkelblau", imageUrl: "https://assets.reisefix.cc/cord/cord-darkblue.jpg", category: "cord" },
  { id: "cord-darkgreen", name: "Dunkelgrün", imageUrl: "https://assets.reisefix.cc/cord/cord-darkgreen.jpg", category: "cord" },
  { id: "cord-evergreen", name: "Immergrün", imageUrl: "https://assets.reisefix.cc/cord/cord-evergreen.jpg", category: "cord" },
  { id: "cord-grey", name: "Grau", imageUrl: "https://assets.reisefix.cc/cord/cord-grey.jpg", category: "cord" },
  { id: "cord-mulberry", name: "Flieder", imageUrl: "https://assets.reisefix.cc/cord/cord-mulberry.jpg", category: "cord" },
  { id: "cord-neon", name: "Leuchtgelb", imageUrl: "https://assets.reisefix.cc/cord/cord-neon.jpg", category: "cord" },
];

// Gurtbänder (Webbing)
export const webbingMaterials: ConfiguratorMaterial[] = [
  { id: "web-babyblue", name: "Babyblau", imageUrl: "https://assets.reisefix.cc/webbing/web-babyblue.jpg", category: "webbing" },
  { id: "web-black", name: "Schwarz", imageUrl: "https://assets.reisefix.cc/webbing/web-black.jpg", category: "webbing" },
  { id: "web-coyote", name: "Coyote", imageUrl: "https://assets.reisefix.cc/webbing/web-coyote.jpg", category: "webbing" },
  { id: "web-grey", name: "Grau", imageUrl: "https://assets.reisefix.cc/webbing/web-grey.jpg", category: "webbing" },
  { id: "web-lightpink", name: "Hellrosa", imageUrl: "https://assets.reisefix.cc/webbing/web-lightpink.jpg", category: "webbing" },
  { id: "web-lilac", name: "Lila", imageUrl: "https://assets.reisefix.cc/webbing/web-lilac.jpg", category: "webbing" },
  { id: "web-limegreen", name: "Leuchtgrün", imageUrl: "https://assets.reisefix.cc/webbing/web-limegreen.jpg", category: "webbing" },
  { id: "web-marigold", name: "Marigold", imageUrl: "https://assets.reisefix.cc/webbing/web-marigold.jpg", category: "webbing" },
  { id: "web-mint", name: "Mint", imageUrl: "https://assets.reisefix.cc/webbing/web-mint.jpg", category: "webbing" },
  { id: "web-neonorange", name: "Neonorange", imageUrl: "https://assets.reisefix.cc/webbing/web-neonorange.jpg", category: "webbing" },
  { id: "web-olive", name: "Oliv", imageUrl: "https://assets.reisefix.cc/webbing/web-olive.jpg", category: "webbing" },
  { id: "web-red", name: "Rot", imageUrl: "https://assets.reisefix.cc/webbing/web-red.jpg", category: "webbing" },
  { id: "web-teal", name: "Petrol", imageUrl: "https://assets.reisefix.cc/webbing/web-teal.jpg", category: "webbing" },
  { id: "web-white", name: "Weiß", imageUrl: "https://assets.reisefix.cc/webbing/web-white.jpg", category: "webbing" },
  { id: "web-yellow", name: "Gelb", imageUrl: "https://assets.reisefix.cc/webbing/web-yellow.jpg", category: "webbing" },
];

// RX30 Stoffe
export const rx30Materials: ConfiguratorMaterial[] = [
  { id: "rx30-slategrey", name: "Grau", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-slategrey.jpg", category: "rx30" },
  { id: "rx30-white", name: "Weiß", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-white.jpg", category: "rx30" },
  { id: "rx30-alpenglow", name: "Alpenglühen", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-alpenglow.jpg", category: "rx30" },
  { id: "rx30-black", name: "Schwarz", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-black.jpg", category: "rx30" },
  { id: "rx30-bluebell", name: "Glockenblume", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-bluebell.jpg", category: "rx30" },
  { id: "rx30-cayenne", name: "Cavenne", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-cayenne.jpg", category: "rx30" },
  { id: "rx30-coyotebrown", name: "Coyote (VX21)", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-coyotebrown.jpg", category: "rx30" },
  { id: "rx30-evergreen", name: "Immergrün", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-evergreen.jpg", category: "rx30" },
  { id: "rx30-goldenrod", name: "Goldrute", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-goldenrod.jpg", category: "rx30" },
  { id: "rx30-oceanblue", name: "Meerblau", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-oceanblue.jpg", category: "rx30" },
  { id: "rx30-plum", name: "Pflaume", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-plum.jpg", category: "rx30" },
  { id: "rx30-seafoam", name: "Seeschaum", imageUrl: "https://assets.reisefix.cc/fabrics/rx30/rx30-seafoam.jpg", category: "rx30" },
];

// UX10 Stoffe
export const ux10Materials: ConfiguratorMaterial[] = [
  { id: "ux10-white", name: "Weiß", imageUrl: "https://assets.reisefix.cc/fabrics/ux10/ux10-white.jpg", category: "ux10" },
  { id: "ux10-black", name: "Schwarz", imageUrl: "https://assets.reisefix.cc/fabrics/ux10/ux10-black.jpg", category: "ux10" },
];

// VX21 Stoffe
export const vx21Materials: ConfiguratorMaterial[] = [
  { id: "vx21-mulberry", name: "Flieder", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-mulberry.jpg", category: "vx21" },
  { id: "vx21-olive", name: "Oliv", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-olive.jpg", category: "vx21" },
  { id: "vx21-orange", name: "Orange", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-orange.jpg", category: "vx21" },
  { id: "vx21-red", name: "Rot", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-red.jpg", category: "vx21" },
  { id: "vx21-teal", name: "Türkis", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-teal.jpg", category: "vx21" },
  { id: "vx21-violett", name: "Violett", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-violett.jpg", category: "vx21" },
  { id: "vx21-black", name: "Schwarz", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-black.jpg", category: "vx21" },
  { id: "vx21-bunablue", name: "Bunablau", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-bunablue.jpg", category: "vx21" },
  { id: "vx21-cadmium", name: "Cadmium", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-cadmium.jpg", category: "vx21" },
  { id: "vx21-coral", name: "Koralle", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-coral.jpg", category: "vx21" },
  { id: "vx21-coyote", name: "Coyote", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-coyote.jpg", category: "vx21" },
  { id: "vx21-deepblue", name: "Dunkelblau", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-deepblue.jpg", category: "vx21" },
  { id: "vx21-grey", name: "Grau", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-grey.jpg", category: "vx21" },
  { id: "vx21-leopard", name: "Leopard", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-leopard.jpg", category: "vx21" },
  { id: "vx21-leoparty", name: "Leoparty", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-leoparty.jpg", category: "vx21" },
  { id: "vx21-lime", name: "Leuchtgelb", imageUrl: "https://assets.reisefix.cc/fabrics/vx21/vx21-lime.jpg", category: "vx21" },
];

// X11 Stoffe
export const x11Materials: ConfiguratorMaterial[] = [
  { id: "x11-glacierblue", name: "Gletscherblau", imageUrl: "https://assets.reisefix.cc/fabrics/x11/x11-glacierblue.jpg", category: "x11" },
  { id: "x11-moonstone", name: "Mondstein", imageUrl: "https://assets.reisefix.cc/fabrics/x11/x11-moonstone.jpg", category: "x11" },
  { id: "x11-mountainbrown", name: "Erdbraun", imageUrl: "https://assets.reisefix.cc/fabrics/x11/x11-mountainbrown.jpg", category: "x11" },
  { id: "x11-oceanblue", name: "Ozeanblau", imageUrl: "https://assets.reisefix.cc/fabrics/x11/x11-oceanblue.jpg", category: "x11" },
  { id: "x11-storm", name: "Sturmgrau", imageUrl: "https://assets.reisefix.cc/fabrics/x11/x11-storm.jpg", category: "x11" },
];

// X50 Stoffe
export const x50Materials: ConfiguratorMaterial[] = [
  { id: "x50-tropics", name: "Tropen", imageUrl: "https://assets.reisefix.cc/fabrics/x50/x50-tropics.jpg", category: "x50" },
  { id: "x50-snow", name: "Schnee", imageUrl: "https://assets.reisefix.cc/fabrics/x50/x50-snow.jpg", category: "x50" },
  { id: "x50-urban", name: "Stadt", imageUrl: "https://assets.reisefix.cc/fabrics/x50/x50-urban.jpg", category: "x50" },
  { id: "x50-woodland", name: "Wald", imageUrl: "https://assets.reisefix.cc/fabrics/x50/x50-woodland.jpg", category: "x50" },
];

// Grouped fabrics for UI
export const fabricGroups = [
  { name: "RX30", materials: rx30Materials },
  { name: "UX10", materials: ux10Materials },
  { name: "VX21", materials: vx21Materials },
  { name: "X11", materials: x11Materials },
  { name: "X50", materials: x50Materials },
];

// All fabrics combined
export const allFabricMaterials: ConfiguratorMaterial[] = [
  ...rx30Materials,
  ...ux10Materials,
  ...vx21Materials,
  ...x11Materials,
  ...x50Materials,
];

// Helper function to get material by ID
export const getMaterialById = (id: string): ConfiguratorMaterial | undefined => {
  return [
    ...cordMaterials,
    ...webbingMaterials,
    ...allFabricMaterials,
  ].find(m => m.id === id);
};

// Helper to handle image load errors
export const handleImageError = (imageUrl: string, materialName: string) => {
  console.warn(`Failed to load material image: ${materialName} (${imageUrl})`);
};
