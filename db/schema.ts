import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  varchar,
  text,
  decimal,
  serial,
  jsonb,
} from "drizzle-orm/pg-core";

export const destinations = pgTable("destinations", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  country: varchar("country", { length: 255 }).notNull(),
  language: jsonb("language").$type<string[]>().notNull(),
  currency: varchar("currency", { length: 255 }).notNull(),
  currencyCode: varchar("currency_code", { length: 10 }).notNull(),
  timezone: varchar("timezone", { length: 100 }).notNull(),
  timezoneOffset: varchar("timezone_offset", { length: 20 }).notNull(),
  description: text("description").notNull(),
  mapEmbedUrl: text("map_embed_url").notNull(),
  culturalEtiquette: jsonb("cultural_etiquette").$type<string[]>().notNull(),
  packingList: jsonb("packing_list").$type<string[]>().notNull(),
});

export const climateInfo = pgTable("climate_info", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  type: varchar("type", { length: 255 }).notNull(),
  averageTemp: varchar("average_temp", { length: 255 }).notNull(),
  rainySeasons: jsonb("rainy_seasons").$type<string[]>().notNull(),
  description: text("description").notNull(),
});

export const visaInfo = pgTable("visa_info", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  required: jsonb("required").$type<Record<string, string>>().notNull(),
  notes: text("notes").notNull(),
});

export const costOfLiving = pgTable("cost_of_living", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  meal: varchar("meal", { length: 100 }).notNull(),
  coffee: varchar("coffee", { length: 100 }).notNull(),
  transport: varchar("transport", { length: 100 }).notNull(),
  hotel: varchar("hotel", { length: 100 }).notNull(),
});

export const emergencyContacts = pgTable("emergency_contacts", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  police: varchar("police", { length: 100 }).notNull(),
  ambulance: varchar("ambulance", { length: 100 }).notNull(),
  fire: varchar("fire", { length: 100 }).notNull(),
  embassy: varchar("embassy", { length: 255 }).notNull(),
});

export const healthInfo = pgTable("health_info", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  vaccinations: jsonb("vaccinations").$type<string[]>().notNull(),
  healthTips: jsonb("health_tips").$type<string[]>().notNull(),
});

export const bestTimeToVisit = pgTable("best_time_to_visit", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  peak: varchar("peak", { length: 255 }).notNull(),
  offPeak: varchar("off_peak", { length: 255 }).notNull(),
  recommendation: text("recommendation").notNull(),
});

export const transportationInfo = pgTable("transportation_info", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  metro: text("metro").notNull(),
  taxi: jsonb("taxi").$type<string[]>().notNull(),
  tips: jsonb("tips").$type<string[]>().notNull(),
});

export const cuisineHighlights = pgTable("cuisine_highlights", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  dish: varchar("dish", { length: 255 }).notNull(),
  description: text("description").notNull(),
});

export const commonPhrases = pgTable("common_phrases", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  english: varchar("english", { length: 255 }).notNull(),
  local: varchar("local", { length: 255 }).notNull(),
  pronunciation: varchar("pronunciation", { length: 255 }),
});

export const restaurants = pgTable("restaurants", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  cuisine: varchar("cuisine", { length: 255 }).notNull(),
  priceRange: varchar("price_range", { length: 50 }).notNull(),
  description: text("description").notNull(),
  url: text("url"),
});

export const religiousSites = pgTable("religious_sites", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  type: varchar("type", { length: 50 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  address: text("address").notNull(),
  description: text("description").notNull(),
  url: text("url"),
});

export const attractions = pgTable("attractions", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  type: varchar("type", { length: 255 }).notNull(),
  description: text("description").notNull(),
  url: text("url"),
});

export const localEvents = pgTable("local_events", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  date: varchar("date", { length: 255 }).notNull(),
  description: text("description").notNull(),
});

export const hotels = pgTable("hotels", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  stars: integer("stars").notNull(),
  area: varchar("area", { length: 255 }).notNull(),
  description: text("description").notNull(),
  url: text("url"),
});

export const banks = pgTable("banks", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  branches: text("branches").notNull(),
  url: text("url"),
});

export const holidays = pgTable("holidays", {
  id: serial("id").primaryKey(),
  destinationId: integer("destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  name: varchar("name", { length: 255 }).notNull(),
  date: varchar("date", { length: 255 }).notNull(),
});

export const flightRoutes = pgTable("flight_routes", {
  id: serial("id").primaryKey(),
  fromDestinationId: integer("from_destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  toDestinationId: integer("to_destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  airlines: jsonb("airlines").$type<string[]>().notNull(),
  duration: varchar("duration", { length: 100 }).notNull(),
  airlineUrls: jsonb("airline_urls").$type<string[]>(),
});

export const distances = pgTable("distances", {
  id: serial("id").primaryKey(),
  fromDestinationId: integer("from_destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  toDestinationId: integer("to_destination_id")
    .notNull()
    .references(() => destinations.id, { onDelete: "cascade" }),
  distance: varchar("distance", { length: 100 }).notNull(),
  flightDuration: varchar("flight_duration", { length: 100 }).notNull(),
});

export const exchangeRates = pgTable("exchange_rates", {
  id: serial("id").primaryKey(),
  currencyCode: varchar("currency_code", { length: 10 }).notNull().unique(),
  rateToUSD: decimal("rate_to_usd", { precision: 12, scale: 6 }).notNull(),
});

export const destinationsRelations = relations(
  destinations,
  ({ one, many }) => ({
    climate: one(climateInfo, {
      fields: [destinations.id],
      references: [climateInfo.destinationId],
    }),
    visa: one(visaInfo, {
      fields: [destinations.id],
      references: [visaInfo.destinationId],
    }),
    costOfLiving: one(costOfLiving, {
      fields: [destinations.id],
      references: [costOfLiving.destinationId],
    }),
    emergencyContacts: one(emergencyContacts, {
      fields: [destinations.id],
      references: [emergencyContacts.destinationId],
    }),
    health: one(healthInfo, {
      fields: [destinations.id],
      references: [healthInfo.destinationId],
    }),
    bestTime: one(bestTimeToVisit, {
      fields: [destinations.id],
      references: [bestTimeToVisit.destinationId],
    }),
    transportation: one(transportationInfo, {
      fields: [destinations.id],
      references: [transportationInfo.destinationId],
    }),
    cuisine: many(cuisineHighlights),
    phrases: many(commonPhrases),
    restaurants: many(restaurants),
    religiousSites: many(religiousSites),
    attractions: many(attractions),
    events: many(localEvents),
    hotels: many(hotels),
    banks: many(banks),
    holidays: many(holidays),
    flightRoutesFrom: many(flightRoutes, { relationName: "from" }),
    flightRoutesTo: many(flightRoutes, { relationName: "to" }),
    distancesFrom: many(distances, { relationName: "from" }),
    distancesTo: many(distances, { relationName: "to" }),
  })
);

export const climateInfoRelations = relations(climateInfo, ({ one }) => ({
  destination: one(destinations, {
    fields: [climateInfo.destinationId],
    references: [destinations.id],
  }),
}));

export const visaInfoRelations = relations(visaInfo, ({ one }) => ({
  destination: one(destinations, {
    fields: [visaInfo.destinationId],
    references: [destinations.id],
  }),
}));

export const costOfLivingRelations = relations(costOfLiving, ({ one }) => ({
  destination: one(destinations, {
    fields: [costOfLiving.destinationId],
    references: [destinations.id],
  }),
}));

export const emergencyContactsRelations = relations(
  emergencyContacts,
  ({ one }) => ({
    destination: one(destinations, {
      fields: [emergencyContacts.destinationId],
      references: [destinations.id],
    }),
  })
);

export const healthInfoRelations = relations(healthInfo, ({ one }) => ({
  destination: one(destinations, {
    fields: [healthInfo.destinationId],
    references: [destinations.id],
  }),
}));

export const bestTimeToVisitRelations = relations(
  bestTimeToVisit,
  ({ one }) => ({
    destination: one(destinations, {
      fields: [bestTimeToVisit.destinationId],
      references: [destinations.id],
    }),
  })
);

export const transportationInfoRelations = relations(
  transportationInfo,
  ({ one }) => ({
    destination: one(destinations, {
      fields: [transportationInfo.destinationId],
      references: [destinations.id],
    }),
  })
);

export const cuisineHighlightsRelations = relations(
  cuisineHighlights,
  ({ one }) => ({
    destination: one(destinations, {
      fields: [cuisineHighlights.destinationId],
      references: [destinations.id],
    }),
  })
);

export const commonPhrasesRelations = relations(commonPhrases, ({ one }) => ({
  destination: one(destinations, {
    fields: [commonPhrases.destinationId],
    references: [destinations.id],
  }),
}));

export const restaurantsRelations = relations(restaurants, ({ one }) => ({
  destination: one(destinations, {
    fields: [restaurants.destinationId],
    references: [destinations.id],
  }),
}));

export const religiousSitesRelations = relations(religiousSites, ({ one }) => ({
  destination: one(destinations, {
    fields: [religiousSites.destinationId],
    references: [destinations.id],
  }),
}));

export const attractionsRelations = relations(attractions, ({ one }) => ({
  destination: one(destinations, {
    fields: [attractions.destinationId],
    references: [destinations.id],
  }),
}));

export const localEventsRelations = relations(localEvents, ({ one }) => ({
  destination: one(destinations, {
    fields: [localEvents.destinationId],
    references: [destinations.id],
  }),
}));

export const hotelsRelations = relations(hotels, ({ one }) => ({
  destination: one(destinations, {
    fields: [hotels.destinationId],
    references: [destinations.id],
  }),
}));

export const banksRelations = relations(banks, ({ one }) => ({
  destination: one(destinations, {
    fields: [banks.destinationId],
    references: [destinations.id],
  }),
}));

export const holidaysRelations = relations(holidays, ({ one }) => ({
  destination: one(destinations, {
    fields: [holidays.destinationId],
    references: [destinations.id],
  }),
}));

export const flightRoutesRelations = relations(flightRoutes, ({ one }) => ({
  fromDestination: one(destinations, {
    fields: [flightRoutes.fromDestinationId],
    references: [destinations.id],
    relationName: "from",
  }),
  toDestination: one(destinations, {
    fields: [flightRoutes.toDestinationId],
    references: [destinations.id],
    relationName: "to",
  }),
}));

export const distancesRelations = relations(distances, ({ one }) => ({
  fromDestination: one(destinations, {
    fields: [distances.fromDestinationId],
    references: [destinations.id],
    relationName: "from",
  }),
  toDestination: one(destinations, {
    fields: [distances.toDestinationId],
    references: [destinations.id],
    relationName: "to",
  }),
}));
