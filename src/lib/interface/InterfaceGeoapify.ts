export interface GeoapifyProperties {
  formatted: string;
  lat: number;
  lon: number;
  city?: string;
  state?: string;
  country?: string;
}

export interface GeoapifyFeature {
  properties: GeoapifyProperties;
}

export interface GeoapifyResponse {
  features: GeoapifyFeature[];
}
