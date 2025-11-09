import type { DestinationWithRelations } from "@/types/database";
import type { Destination } from "@/lib/travel-data";

export function transformDbDestinationToLegacy(
  dbDest: DestinationWithRelations
): Destination {
  const churchSites = dbDest.religiousSites.filter(
    (site) => site.type === "church"
  );
  const mosqueSites = dbDest.religiousSites.filter(
    (site) => site.type === "mosque"
  );

  return {
    id: dbDest.slug,
    name: dbDest.name,
    country: dbDest.country,
    language: dbDest.language as string[],
    currency: dbDest.currency,
    currencyCode: dbDest.currencyCode,
    timezone: dbDest.timezone,
    timezoneOffset: dbDest.timezoneOffset,
    description: dbDest.description,
    mapEmbedUrl: dbDest.mapEmbedUrl,
    climate: {
      type: dbDest.climate!.type,
      averageTemp: dbDest.climate!.averageTemp,
      rainySeasons: dbDest.climate!.rainySeasons as string[],
      description: dbDest.climate!.description,
    },
    visaInfo: {
      required: dbDest.visa!.required as Record<string, string>,
      notes: dbDest.visa!.notes,
    },
    costOfLiving: {
      meal: dbDest.costOfLiving!.meal,
      coffee: dbDest.costOfLiving!.coffee,
      transport: dbDest.costOfLiving!.transport,
      hotel: dbDest.costOfLiving!.hotel,
    },
    emergencyContacts: {
      police: dbDest.emergencyContacts!.police,
      ambulance: dbDest.emergencyContacts!.ambulance,
      fire: dbDest.emergencyContacts!.fire,
      embassy: dbDest.emergencyContacts!.embassy,
    },
    healthInfo: {
      vaccinations: dbDest.health!.vaccinations as string[],
      healthTips: dbDest.health!.healthTips as string[],
    },
    cuisine: dbDest.cuisine.map((item) => ({
      dish: item.dish,
      description: item.description,
    })),
    commonPhrases: dbDest.phrases.map((phrase) => ({
      english: phrase.english,
      local: phrase.local,
      pronunciation: phrase.pronunciation || undefined,
    })),
    culturalEtiquette: dbDest.culturalEtiquette as string[],
    bestTimeToVisit: {
      peak: dbDest.bestTime!.peak,
      offPeak: dbDest.bestTime!.offPeak,
      recommendation: dbDest.bestTime!.recommendation,
    },
    packingList: dbDest.packingList as string[],
    transportation: {
      metro: dbDest.transportation!.metro,
      taxi: dbDest.transportation!.taxi as string[],
      tips: dbDest.transportation!.tips as string[],
    },
    restaurants: dbDest.restaurants.map((rest) => ({
      name: rest.name,
      cuisine: rest.cuisine,
      priceRange: rest.priceRange,
      description: rest.description,
      url: rest.url || undefined,
    })),
    churches: churchSites.map((church) => ({
      name: church.name,
      address: church.address,
      description: church.description,
      url: church.url || undefined,
    })),
    mosques: mosqueSites.map((mosque) => ({
      name: mosque.name,
      address: mosque.address,
      description: mosque.description,
      url: mosque.url || undefined,
    })),
    attractions: dbDest.attractions.map((attr) => ({
      name: attr.name,
      type: attr.type,
      description: attr.description,
      url: attr.url || undefined,
    })),
    events: dbDest.events.map((event) => ({
      name: event.name,
      date: event.date,
      description: event.description,
    })),
    hotels: dbDest.hotels.map((hotel) => ({
      name: hotel.name,
      stars: hotel.stars,
      area: hotel.area,
      description: hotel.description,
      url: hotel.url || undefined,
    })),
    banks: dbDest.banks.map((bank) => ({
      name: bank.name,
      branches: bank.branches,
      url: bank.url || undefined,
    })),
    holidays: dbDest.holidays.map((holiday) => ({
      name: holiday.name,
      date: holiday.date,
    })),
  };
}

export function createDestinationListItem(dest: {
  slug: string;
  name: string;
  country: string;
}) {
  return {
    id: dest.slug,
    name: `${dest.name}, ${dest.country}`,
    slug: dest.slug,
  };
}

export function formatCurrencyRate(rate: number): string {
  return rate.toFixed(6);
}

export function calculateTimeDifference(
  originOffset: string,
  destOffset: string
): string {
  const originNum = Number.parseFloat(originOffset.split("/")[0]);
  const destNum = Number.parseFloat(destOffset.split("/")[0]);
  const diff = destNum - originNum;

  if (diff === 0) return "Same timezone";
  return diff > 0 ? `+${diff} hours` : `${diff} hours`;
}

export function convertCurrency(
  amount: number,
  fromRate: number,
  toRate: number
): number {
  const inUSD = amount / fromRate;
  return inUSD * toRate;
}
