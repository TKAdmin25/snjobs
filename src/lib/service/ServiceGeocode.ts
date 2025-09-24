import type { geocode as GeocodeModel } from "@prisma/client";
import prisma from "../../config/prisma";
import type { GeoapifyProperties } from "../interface/InterfaceGeoapify";
import UtilFormat from "../util/UtilFormat";
import UtilGeo from "../util/UtilGeo";

export default class ServiceGeocode {
  public static async getCoordinates(
    location: string
  ): Promise<GeocodeModel | null> {
    if (
      !location ||
      location.length <= 3 ||
      location.toLowerCase().trim() === "anywhere"
    ) {
      return null;
    }

    const cachedGeo = await this.getByLocation(location);
    if (cachedGeo) {
      return cachedGeo;
    }

    const apiData = await UtilGeo.getCoordinatesFromGeoapify(location);

    if (apiData && apiData.lat) {
      try {
        const newGeo = await this.create(location, apiData);
        return newGeo;
      } catch (error) {
        console.error(`Error al guardar geocode para '${location}':`, error);
        return null;
      }
    }
    return null;
  }

  private static async getByLocation(
    location: string
  ): Promise<GeocodeModel | null> {
    const locationSlug = UtilFormat.slugify(location);
    return await prisma.geocode.findUnique({
      where: { location: locationSlug }
    });
  }

  private static async create(
    originalLocation: string,
    apiData: GeoapifyProperties
  ): Promise<GeocodeModel> {
    const locationSlug = UtilFormat.slugify(originalLocation);
    const formattedLabel = UtilGeo.formatLocationLabel(apiData.formatted);

    return await prisma.geocode.create({
      data: {
        id: crypto.randomUUID(),
        location: locationSlug,
        label: formattedLabel,
        lat: apiData.lat.toString(),
        lon: apiData.lon.toString(),
        city: apiData.city,
        state: apiData.state,
        country: apiData.country || ""
      }
    });
  }
}
