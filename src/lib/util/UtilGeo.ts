import { STATES_AND_TERRITORIES } from "../const/nonUIContent";
import { STATE_CODE_REGEX } from "../const/regex";
import type {
  GeoapifyProperties,
  GeoapifyResponse
} from "../interface/InterfaceGeoapify";

export default class UtilGeo {
  static geoapifyKey = import.meta.env.GEOAPIFY_ACCESS_KEY;
  static geoapifyBaseUrl = "https://api.geoapify.com/v1/geocode/search";
  public static async getCoordinatesFromGeoapify(
    location: string
  ): Promise<GeoapifyProperties | null> {
    if (!UtilGeo.geoapifyKey) {
      console.error("Geoapify key is missing.");
      return null;
    }
    const textParameter = encodeURIComponent(location);
    const apiKeyParameter = UtilGeo.geoapifyKey;
    const url = `${UtilGeo.geoapifyBaseUrl}?text=${textParameter}&apiKey=${apiKeyParameter}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.error("Geoapify error.");
        return null;
      }
      const data: GeoapifyResponse = await response.json();

      if (data.features && data.features.length > 0) {
        return data.features[0].properties;
      }
    } catch (error) {
      console.error("Geoapify error.", error);
    }
    return null;
  }
  public static isLocationInUSA(location: string): boolean {
    if (STATE_CODE_REGEX.test(location)) {
      return true;
    }
    const statesAndTerritories = new Set(STATES_AND_TERRITORIES);
    return statesAndTerritories.has(location);
  }
  public static formatLocationLabel(label: string): string {
    return label.replace("United States of America", "United States");
  }
}
