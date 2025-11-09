"use server";

import db from "@/db";
import * as schema from "@/db/schema";
import { eq, and } from "drizzle-orm";
import type {
  Destination,
  FlightRoute,
  DistanceInfo,
  ClimateInfo,
  VisaInfo,
  CostOfLiving,
  EmergencyContacts,
  HealthInfo,
  BestTimeToVisit,
  TransportationInfo,
  CuisineHighlight,
  Phrase,
  Restaurant,
  ReligiousSite,
  Attraction,
  LocalEvent,
  Hotel,
  Bank,
  Holiday,
} from "@/lib/travel-data";

export async function getAllDestinations() {
  try {
    const destinations = await db.query.destinations.findMany({
      columns: {
        id: true,
        slug: true,
        name: true,
        country: true,
      },
    });

    return destinations.map((dest) => ({
      id: dest.slug,
      name: `${dest.name}, ${dest.country}`,
      slug: dest.slug,
    }));
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return [];
  }
}

export async function getDestinationBySlug(
  slug: string
): Promise<Destination | null> {
  try {
    const destination = await db.query.destinations.findFirst({
      where: eq(schema.destinations.slug, slug),
      with: {
        climate: true,
        visa: true,
        costOfLiving: true,
        emergencyContacts: true,
        health: true,
        bestTime: true,
        transportation: true,
        cuisine: true,
        phrases: true,
        restaurants: true,
        religiousSites: true,
        attractions: true,
        events: true,
        hotels: true,
        banks: true,
        holidays: true,
      },
    });

    if (!destination) return null;

    const churchSites = destination.religiousSites.filter(
      (site) => site.type === "church"
    );
    const mosqueSites = destination.religiousSites.filter(
      (site) => site.type === "mosque"
    );

    return {
      id: destination.slug,
      name: destination.name,
      country: destination.country,
      language: destination.language as string[],
      currency: destination.currency,
      currencyCode: destination.currencyCode,
      timezone: destination.timezone,
      timezoneOffset: destination.timezoneOffset,
      description: destination.description,
      mapEmbedUrl: destination.mapEmbedUrl,
      climate: {
        type: destination.climate!.type,
        averageTemp: destination.climate!.averageTemp,
        rainySeasons: destination.climate!.rainySeasons as string[],
        description: destination.climate!.description,
      } as ClimateInfo,
      visaInfo: {
        required: destination.visa!.required as Record<string, string>,
        notes: destination.visa!.notes,
      } as VisaInfo,
      costOfLiving: {
        meal: destination.costOfLiving!.meal,
        coffee: destination.costOfLiving!.coffee,
        transport: destination.costOfLiving!.transport,
        hotel: destination.costOfLiving!.hotel,
      } as CostOfLiving,
      emergencyContacts: {
        police: destination.emergencyContacts!.police,
        ambulance: destination.emergencyContacts!.ambulance,
        fire: destination.emergencyContacts!.fire,
        embassy: destination.emergencyContacts!.embassy,
      } as EmergencyContacts,
      healthInfo: {
        vaccinations: destination.health!.vaccinations as string[],
        healthTips: destination.health!.healthTips as string[],
      } as HealthInfo,
      cuisine: destination.cuisine.map((item) => ({
        dish: item.dish,
        description: item.description,
      })) as CuisineHighlight[],
      commonPhrases: destination.phrases.map((phrase) => ({
        english: phrase.english,
        local: phrase.local,
        pronunciation: phrase.pronunciation || undefined,
      })) as Phrase[],
      culturalEtiquette: destination.culturalEtiquette as string[],
      bestTimeToVisit: {
        peak: destination.bestTime!.peak,
        offPeak: destination.bestTime!.offPeak,
        recommendation: destination.bestTime!.recommendation,
      } as BestTimeToVisit,
      packingList: destination.packingList as string[],
      transportation: {
        metro: destination.transportation!.metro,
        taxi: destination.transportation!.taxi as string[],
        tips: destination.transportation!.tips as string[],
      } as TransportationInfo,
      restaurants: destination.restaurants.map((rest) => ({
        name: rest.name,
        cuisine: rest.cuisine,
        priceRange: rest.priceRange,
        description: rest.description,
        url: rest.url || undefined,
      })) as Restaurant[],
      churches: churchSites.map((church) => ({
        name: church.name,
        address: church.address,
        description: church.description,
        url: church.url || undefined,
      })) as ReligiousSite[],
      mosques: mosqueSites.map((mosque) => ({
        name: mosque.name,
        address: mosque.address,
        description: mosque.description,
        url: mosque.url || undefined,
      })) as ReligiousSite[],
      attractions: destination.attractions.map((attr) => ({
        name: attr.name,
        type: attr.type,
        description: attr.description,
        url: attr.url || undefined,
      })) as Attraction[],
      events: destination.events.map((event) => ({
        name: event.name,
        date: event.date,
        description: event.description,
      })) as LocalEvent[],
      hotels: destination.hotels.map((hotel) => ({
        name: hotel.name,
        stars: hotel.stars,
        area: hotel.area,
        description: hotel.description,
        url: hotel.url || undefined,
      })) as Hotel[],
      banks: destination.banks.map((bank) => ({
        name: bank.name,
        branches: bank.branches,
        url: bank.url || undefined,
      })) as Bank[],
      holidays: destination.holidays.map((holiday) => ({
        name: holiday.name,
        date: holiday.date,
      })) as Holiday[],
    };
  } catch (error) {
    console.error("Error fetching destination:", error);
    return null;
  }
}

export async function getFlightRoute(
  fromSlug: string,
  toSlug: string
): Promise<FlightRoute | null> {
  try {
    const fromDest = await db.query.destinations.findFirst({
      where: eq(schema.destinations.slug, fromSlug),
      columns: { id: true },
    });

    const toDest = await db.query.destinations.findFirst({
      where: eq(schema.destinations.slug, toSlug),
      columns: { id: true },
    });

    if (!fromDest || !toDest) return null;

    const route = await db.query.flightRoutes.findFirst({
      where: and(
        eq(schema.flightRoutes.fromDestinationId, fromDest.id),
        eq(schema.flightRoutes.toDestinationId, toDest.id)
      ),
    });

    if (!route) return null;

    return {
      from: fromSlug,
      to: toSlug,
      airlines: route.airlines as string[],
      duration: route.duration,
      airlineUrls: route.airlineUrls as string[] | undefined,
    };
  } catch (error) {
    console.error("Error fetching flight route:", error);
    return null;
  }
}

export async function getDistance(
  fromSlug: string,
  toSlug: string
): Promise<DistanceInfo | null> {
  try {
    const fromDest = await db.query.destinations.findFirst({
      where: eq(schema.destinations.slug, fromSlug),
      columns: { id: true },
    });

    const toDest = await db.query.destinations.findFirst({
      where: eq(schema.destinations.slug, toSlug),
      columns: { id: true },
    });

    if (!fromDest || !toDest) return null;

    const distance = await db.query.distances.findFirst({
      where: and(
        eq(schema.distances.fromDestinationId, fromDest.id),
        eq(schema.distances.toDestinationId, toDest.id)
      ),
    });

    if (!distance) {
      const reverseDistance = await db.query.distances.findFirst({
        where: and(
          eq(schema.distances.fromDestinationId, toDest.id),
          eq(schema.distances.toDestinationId, fromDest.id)
        ),
      });

      if (!reverseDistance) return null;

      return {
        from: fromSlug,
        to: toSlug,
        distance: reverseDistance.distance,
        flightDuration: reverseDistance.flightDuration,
      };
    }

    return {
      from: fromSlug,
      to: toSlug,
      distance: distance.distance,
      flightDuration: distance.flightDuration,
    };
  } catch (error) {
    console.error("Error fetching distance:", error);
    return null;
  }
}

export async function getAllExchangeRates(): Promise<Record<string, number>> {
  try {
    const rates = await db.query.exchangeRates.findMany();

    const ratesObject: Record<string, number> = {};
    for (const rate of rates) {
      ratesObject[rate.currencyCode] = Number.parseFloat(rate.rateToUSD);
    }

    return ratesObject;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return {};
  }
}

export async function getExchangeRate(
  currencyCode: string
): Promise<number | null> {
  try {
    const rate = await db.query.exchangeRates.findFirst({
      where: eq(schema.exchangeRates.currencyCode, currencyCode),
    });

    if (!rate) return null;

    return Number.parseFloat(rate.rateToUSD);
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    return null;
  }
}

export async function searchDestinations(query: string) {
  try {
    const destinations = await db.query.destinations.findMany();

    const searchQuery = query.toLowerCase();
    const filtered = destinations.filter(
      (dest) =>
        dest.name.toLowerCase().includes(searchQuery) ||
        dest.country.toLowerCase().includes(searchQuery) ||
        dest.slug.toLowerCase().includes(searchQuery)
    );

    return filtered.map((dest) => ({
      id: dest.slug,
      slug: dest.slug,
      name: dest.name,
      country: dest.country,
    }));
  } catch (error) {
    console.error("Error searching destinations:", error);
    return [];
  }
}

export async function getDestinationSummary(slug: string) {
  try {
    const destination = await db.query.destinations.findFirst({
      where: eq(schema.destinations.slug, slug),
      columns: {
        slug: true,
        name: true,
        country: true,
        description: true,
        currency: true,
        currencyCode: true,
        timezone: true,
        timezoneOffset: true,
      },
    });

    return destination;
  } catch (error) {
    console.error("Error fetching destination summary:", error);
    return null;
  }
}

export async function getDestinationsByCountry(country: string) {
  try {
    const destinations = await db.query.destinations.findMany();

    const filtered = destinations.filter(
      (dest) => dest.country.toLowerCase() === country.toLowerCase()
    );

    return filtered.map((dest) => ({
      id: dest.slug,
      slug: dest.slug,
      name: dest.name,
      country: dest.country,
    }));
  } catch (error) {
    console.error("Error fetching destinations by country:", error);
    return [];
  }
}

export async function getAllCountries() {
  try {
    const destinations = await db.query.destinations.findMany({
      columns: {
        country: true,
      },
    });

    const uniqueCountries = Array.from(
      new Set(destinations.map((d) => d.country))
    );
    return uniqueCountries.sort();
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
}
