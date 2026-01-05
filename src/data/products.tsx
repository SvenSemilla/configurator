export interface ProductVariant {
  id: string;
  name: string;
  priceModifier: number;
  color?: string;
  image?: string;
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
  { id: "rx30-weiss", name: "RX30 Weiß", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/6b651d5c-e245-4bea-845c-bacfdc2304b4/768-768/f57ec97f12ec46479eb2ab0a2593749c7d00c80e" },
  { id: "rx30-schiefergrau", name: "RX30 Schiefergrau", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/6ed7eb0c-22d3-4653-9e28-d2cd1a2fb24b/768-768/63a1c33222416a810c68e4692b7f949650cfde73" },
  { id: "rx30-schwarz", name: "RX30 Schwarz", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/fc1b1ef6-81e4-4fe0-a211-8e874dbb08ce/768-768/34e6738643d9b587dff351157241b00bbea1fe2f" },
  { id: "rx30-seeschaum", name: "RX30 Seeschaum", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/dd84cb73-52ef-49bd-bb14-c450df0ab3c6/768-768/58a5f11c0610b0c58b3b2306ea601f894a940c3b" },
  { id: "rx30-immergruen", name: "RX30 Immergrün", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/eae10c8a-96ca-47c4-ae39-662c72456f43/768-768/bd0c7492d03c40649fddfcf8842e05703337c86d" },
  { id: "rx30-goldrute", name: "RX30 Goldrute", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/de2c8d45-40c0-4165-aebf-effc040d293c/768-768/0a702243b91b0c89889b6c0c78e49490c0f96610" },
  { id: "rx30-coyotebraun", name: "RX30 Coyotebraun", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/ab081aca-b66b-4381-bbe5-42a29e95573c/768-768/1824fa052f4c96ef05f5e8fbf8a4297f26f4e251" },
  { id: "rx30-cayenne", name: "RX30 Cayenne", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/c7189d01-5de8-4a2e-86cf-74ed3503398f/768-768/886e7ec80d5b8d4b0062f29024cd10d78748b43c" },
  { id: "rx30-koenigsblau", name: "RX30 Königsblau", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/51b03f7d-ded0-47dc-80d0-4502a1251bda/768-768/caf369420c030d088a3359987b7e849820cb2863" },
  { id: "rx30-lavendel", name: "RX30 Lavendel", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/645c18a7-08c4-49ed-b1ce-6e25810f37a6/768-768/079165bb917cf020d7d8e5b6d50f9852667b662e" },
  { id: "rx30-olive", name: "RX30 Olive", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/7915655a-ff44-4f7d-8257-3c392f05e441/768-768/6d953d4699f9c91488633acaa4996dc22c9dd4ae" },
  { id: "rx30-petrol", name: "RX30 Petrol", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/9af939a0-ddb3-4f8c-85e4-c09cfb11034f/768-768/bd278c51504bf07db832f92d8824998861483cc9" },
];

// X-Pac VX21 Farben
export const xpacVX21: ProductVariant[] = [
  { id: "vx21-schwarz", name: "VX21 Schwarz", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/22dd821b-1077-40c9-9daf-90394f50e89c/768-768/c418ba4a3b76088faf6a4d31214008bc7ac20f16" },
  { id: "vx21-weiss", name: "VX21 Weiß", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/5c4d87fb-a85e-4f97-b6cc-c9a8852e293e/768-768/24e9d99314de93da8f18a120300eaf8db6445835" },
  { id: "vx21-coyote", name: "VX21 Coyote", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/ad4a02c4-f344-4b35-8af1-456ed28f5caf/768-768/a32c26c9e8406656589ab1641c2365fe8b6028ef" },
  { id: "vx21-olive", name: "VX21 Olive", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/d48a0c64-f046-47dc-ab5a-1efb94f664ae/768-768/416e93d03056ee5e0b7fa796576c3f11596e83be" },
  { id: "vx21-grau", name: "VX21 Grau", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/4c08ddef-946d-4e36-9f14-d4a490d4d201/768-768/d29894623e1790e9368cd25e7e02ebdf9f559347" },
  { id: "vx21-navy", name: "VX21 Navy", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/82e0c8f8-2a06-4583-9182-e703c588d2b6/768-768/7935b39e14bd02b41e361803d415a6b98b81cf82" },
  { id: "vx21-burgundy", name: "VX21 Burgundy", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/cae98888-5ceb-45cf-871f-9878eec2b841/768-768/82f9962954857a8e6952d44070c02b5d1be785f3" },
  { id: "vx21-petrol", name: "VX21 Petrol", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/b38acee9-dfa0-4589-b5e6-e4c0493561c9/768-768/2211f82fd39b6d796a44555ec73ec89d9d76e1ce" },
  { id: "vx21-orange", name: "VX21 Orange", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/f731a45b-fd9e-475a-afd2-08d8b102dbcb/768-768/410e79beec51394419299ae4b8fbc05f1fe28b14" },
  { id: "vx21-rot", name: "VX21 Rot", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/fb88f976-b5a1-4f04-9bc9-a0e9794228b7/768-768/ac107b0e64db00cfe11afbe9a99dd9b1b94e2864" },
  { id: "vx21-lila", name: "VX21 Lila", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/a8bf7418-91bd-417e-a5d5-bb0046e7ae34/768-768/1f74aca1a045509cb56bc29d2452cf4a0d8614dd" },
  { id: "vx21-pink", name: "VX21 Pink", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/2240f8b1-3078-4b2a-bbe2-44acc2c21b6d/768-768/3d916564ec6262c1acbdf5b4cf89cc8abf52dffc" },
  { id: "vx21-gelb", name: "VX21 Gelb", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/571ce306-55bc-4058-82ce-399fbc227740/768-768/384f85e283590d223262a7db5ec5901ca5358c42" },
  { id: "vx21-cyan", name: "VX21 Cyan", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/42a99c87-0406-4528-af1f-a41917a65936/768-768/323516be137cd54a2740f85cef34024fd3e7fb0b" },
  { id: "vx21-multicam-black", name: "VX21 Multicam Black", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/828adb1d-0e7c-4043-baeb-49ea82e8759a/768-768/54a337d47089e949cce96602f732e490506af9d9" },
  { id: "vx21-multicam", name: "VX21 Multicam", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/ac5cabff-bf72-4515-8fef-60c54e3ddcfa/768-768/0a760f5b97b5a5b13828dc99fbf7f52a4d4f74aa" },
  { id: "vx21-multicam-alpine", name: "VX21 Multicam Alpine", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/33d55cba-74fb-447d-8b0f-f6d0eeeff8cb/768-768/2b3c220c536faba634dfd7423257a72350600d90" },
  { id: "vx21-multicam-arid", name: "VX21 Multicam Arid", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/e6b84bab-c891-4706-bdda-502f6126938a/768-768/f50bc07bf13f4d989e1a1c39cc74b9b78a1e1143" },
  { id: "vx21-multicam-tropic", name: "VX21 Multicam Tropic", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/9b6ebbb4-9019-4077-ba1a-b10397ee2634/768-768/074dab12deac8e5310313347f9bd592770cccfb1" },
  { id: "vx21-woodland", name: "VX21 Woodland", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/77b5a945-e1ec-4223-aaa5-b65642ff4eed/768-768/1c7d079fd2d53449f7d7288f36a92e427d9e58c6" },
  { id: "vx21-flecktarn", name: "VX21 Flecktarn", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/46f96a63-1a6a-4b8e-ab78-b6af3631bc5d/768-768/8dafa5836846353c768f4e6c51628f2b7b65fdb9" },
];

// X-Pac X11 (Baumwolle)
export const xpacX11: ProductVariant[] = [
  { id: "x11-schwarz", name: "X11 Schwarz", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/2da3a9b7-3e4d-4705-abd8-74ed4bac56b9/768-768/91b57fad6a47dededffddcc2828c524119bba160" },
  { id: "x11-olive", name: "X11 Olive", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/f9fc5da0-7064-44a6-bba5-11b0d218a3b2/768-768/94db76baa38276f484fd7c794404fb2a2854f333" },
  { id: "x11-coyote", name: "X11 Coyote", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/e40d759a-0d9d-40ee-8378-f67ba61509c9/768-768/c70cbcc15630789abfb9a1793a44d48a92f47426" },
  { id: "x11-grau", name: "X11 Grau", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/5f4c5625-f017-4ab7-bcc8-2addeb7b03bb/768-768/c6a6bc990ca6b83435931653f1ba24498142f2d1" },
  { id: "x11-navy", name: "X11 Navy", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/e379be5c-4eee-4bd3-b4f5-6b1a48167101/768-768/4c0d2cf2291d4386d95b063d29ac19872ed1c57c" },
];

// Alle Stoffe kombiniert
export const fabrics: ProductVariant[] = [
  ...xpacRX30,
  ...xpacVX21,
  ...xpacX11,
];

// Gurtband Farben
export const webbingColors: ProductVariant[] = [
  { id: "webbing-schwarz", name: "Schwarz", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/2ad79199-8cb9-4847-8284-4317dadea8fc/768-768/edb70232522f07365a2bdb5b13acc48332fcc1df" },
  { id: "webbing-weiss", name: "Weiß", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/52c8fac2-106a-4938-a5f6-c6613911ec40/768-768/b1192e04fd50b97bca611dd8adc15b57515d5a1b" },
  { id: "webbing-grau", name: "Grau", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/c7ba92bc-6982-4be4-a42e-2d559ceaa4b3/768-768/99925ec11240729a95a06b1c96b3505782341625" },
  { id: "webbing-olive", name: "Olive", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/1230eecc-eb44-43b3-981f-737f52db7d38/768-768/afbd926407e548eb7e6383e2fd2228f6f6d3ba1d" },
  { id: "webbing-coyote", name: "Coyote", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/89f4c9b4-9626-40a0-94df-244119e9d4f1/768-768/b5bb3df276cff38fedd322c6f11da1b8cc44bb4b" },
  { id: "webbing-rot", name: "Rot", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/6ee884f7-dcdc-4a2f-b49e-68851903e73e/768-768/27a1aa14c0521566fcce66a68229c678cc82408d" },
  { id: "webbing-orange", name: "Orange", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/bb49f791-f8b0-43e8-9c4a-8a0a80b09c8f/768-768/b7936cc57fd1d01afb628eb0af7a2f8a3096393c" },
  { id: "webbing-gelb", name: "Gelb", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/88e9d30f-f3d8-41c9-be47-bee59c718cc2/768-768/a16bc759be76a16850f4e1a3f598046fac46a778" },
  { id: "webbing-neongelb", name: "Neongelb", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/43c34b7b-db1a-4e87-a741-0364116d51df/768-768/d333f8f605907dff276825aec7b9701fac596e09" },
  { id: "webbing-neonorange", name: "Neonorange", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/f3815953-84fd-4c28-99f5-0bd97b255972/768-768/a40413e2dc9a60c64372698ea9117112e9d4dca1" },
  { id: "webbing-petrol", name: "Petrol", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/265bcadb-1717-4bc4-959a-5246e8a7f01f/768-768/da2937236e28ad54440142dfa22959289bb56be4" },
  { id: "webbing-lila", name: "Lila", priceModifier: 0, image: "https://www.reisefix.cc/-_-/res/4a8dc1eb-6909-4c55-bd55-60b21be0276e/images/files/4a8dc1eb-6909-4c55-bd55-60b21be0276e/64a557fb-8e6a-4a36-90be-4c1a4c343696/768-768/7ba1ee59bde92b3a5258b077df59d679afc5f890" },
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
