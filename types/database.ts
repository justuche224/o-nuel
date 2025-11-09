import type { InferSelectModel } from "drizzle-orm";
import type * as schema from "@/db/schema";

export type DestinationRow = InferSelectModel<typeof schema.destinations>;
export type ClimateInfoRow = InferSelectModel<typeof schema.climateInfo>;
export type VisaInfoRow = InferSelectModel<typeof schema.visaInfo>;
export type CostOfLivingRow = InferSelectModel<typeof schema.costOfLiving>;
export type EmergencyContactsRow = InferSelectModel<
  typeof schema.emergencyContacts
>;
export type HealthInfoRow = InferSelectModel<typeof schema.healthInfo>;
export type BestTimeToVisitRow = InferSelectModel<
  typeof schema.bestTimeToVisit
>;
export type TransportationInfoRow = InferSelectModel<
  typeof schema.transportationInfo
>;
export type CuisineHighlightRow = InferSelectModel<
  typeof schema.cuisineHighlights
>;
export type CommonPhraseRow = InferSelectModel<typeof schema.commonPhrases>;
export type RestaurantRow = InferSelectModel<typeof schema.restaurants>;
export type ReligiousSiteRow = InferSelectModel<typeof schema.religiousSites>;
export type AttractionRow = InferSelectModel<typeof schema.attractions>;
export type LocalEventRow = InferSelectModel<typeof schema.localEvents>;
export type HotelRow = InferSelectModel<typeof schema.hotels>;
export type BankRow = InferSelectModel<typeof schema.banks>;
export type HolidayRow = InferSelectModel<typeof schema.holidays>;
export type FlightRouteRow = InferSelectModel<typeof schema.flightRoutes>;
export type DistanceRow = InferSelectModel<typeof schema.distances>;
export type ExchangeRateRow = InferSelectModel<typeof schema.exchangeRates>;

export type DestinationWithRelations = DestinationRow & {
  climate: ClimateInfoRow | null;
  visa: VisaInfoRow | null;
  costOfLiving: CostOfLivingRow | null;
  emergencyContacts: EmergencyContactsRow | null;
  health: HealthInfoRow | null;
  bestTime: BestTimeToVisitRow | null;
  transportation: TransportationInfoRow | null;
  cuisine: CuisineHighlightRow[];
  phrases: CommonPhraseRow[];
  restaurants: RestaurantRow[];
  religiousSites: ReligiousSiteRow[];
  attractions: AttractionRow[];
  events: LocalEventRow[];
  hotels: HotelRow[];
  banks: BankRow[];
  holidays: HolidayRow[];
};

export type DestinationListItem = {
  id: string;
  slug: string;
  name: string;
  country?: string;
};
