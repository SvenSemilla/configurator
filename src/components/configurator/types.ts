export interface ConfiguratorZone {
  id: string;
  name: string;
  pathData: string;
  defaultColor: string;
}

export interface BagModel {
  id: string;
  name: string;
  slug: string;
  zones: ConfiguratorZone[];
  viewBox: string;
  basePrice: number;
  image: string;
}

export interface ZoneSelection {
  zoneId: string;
  fabricId: string;
  fabricName: string;
  fabricImage?: string;
}

export interface ConfiguredBag {
  modelId: string;
  modelName: string;
  zones: ZoneSelection[];
  webbingColorId: string;
  webbingColorName: string;
  price: number;
}
