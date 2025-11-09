import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
import {
  destinations as destinationsData,
  flightRoutes as flightRoutesData,
  distances as distancesData,
  exchangeRates as exchangeRatesData,
} from "../lib/travel-data";

const db = drizzle(process.env.DATABASE_URL as string);

async function seed() {
  console.log("🌱 Starting database seed...");

  try {
    console.log("🗑️  Cleaning existing data...");
    await db.delete(schema.exchangeRates);
    await db.delete(schema.distances);
    await db.delete(schema.flightRoutes);
    await db.delete(schema.holidays);
    await db.delete(schema.banks);
    await db.delete(schema.hotels);
    await db.delete(schema.localEvents);
    await db.delete(schema.attractions);
    await db.delete(schema.religiousSites);
    await db.delete(schema.restaurants);
    await db.delete(schema.commonPhrases);
    await db.delete(schema.cuisineHighlights);
    await db.delete(schema.transportationInfo);
    await db.delete(schema.bestTimeToVisit);
    await db.delete(schema.healthInfo);
    await db.delete(schema.emergencyContacts);
    await db.delete(schema.costOfLiving);
    await db.delete(schema.visaInfo);
    await db.delete(schema.climateInfo);
    await db.delete(schema.destinations);

    console.log("📍 Seeding destinations...");
    const destinationMap = new Map<string, number>();

    for (const [slug, destination] of Object.entries(destinationsData)) {
      const [insertedDestination] = await db
        .insert(schema.destinations)
        .values({
          slug,
          name: destination.name,
          country: destination.country,
          language: destination.language,
          currency: destination.currency,
          currencyCode: destination.currencyCode,
          timezone: destination.timezone,
          timezoneOffset: destination.timezoneOffset,
          description: destination.description,
          mapEmbedUrl: destination.mapEmbedUrl,
          culturalEtiquette: destination.culturalEtiquette,
          packingList: destination.packingList,
        })
        .returning();

      destinationMap.set(slug, insertedDestination.id);

      console.log(`  ✓ ${destination.name} (${slug})`);

      await db.insert(schema.climateInfo).values({
        destinationId: insertedDestination.id,
        type: destination.climate.type,
        averageTemp: destination.climate.averageTemp,
        rainySeasons: destination.climate.rainySeasons,
        description: destination.climate.description,
      });

      await db.insert(schema.visaInfo).values({
        destinationId: insertedDestination.id,
        required: destination.visaInfo.required,
        notes: destination.visaInfo.notes,
      });

      await db.insert(schema.costOfLiving).values({
        destinationId: insertedDestination.id,
        meal: destination.costOfLiving.meal,
        coffee: destination.costOfLiving.coffee,
        transport: destination.costOfLiving.transport,
        hotel: destination.costOfLiving.hotel,
      });

      await db.insert(schema.emergencyContacts).values({
        destinationId: insertedDestination.id,
        police: destination.emergencyContacts.police,
        ambulance: destination.emergencyContacts.ambulance,
        fire: destination.emergencyContacts.fire,
        embassy: destination.emergencyContacts.embassy,
      });

      await db.insert(schema.healthInfo).values({
        destinationId: insertedDestination.id,
        vaccinations: destination.healthInfo.vaccinations,
        healthTips: destination.healthInfo.healthTips,
      });

      await db.insert(schema.bestTimeToVisit).values({
        destinationId: insertedDestination.id,
        peak: destination.bestTimeToVisit.peak,
        offPeak: destination.bestTimeToVisit.offPeak,
        recommendation: destination.bestTimeToVisit.recommendation,
      });

      await db.insert(schema.transportationInfo).values({
        destinationId: insertedDestination.id,
        metro: destination.transportation.metro,
        taxi: destination.transportation.taxi,
        tips: destination.transportation.tips,
      });

      if (destination.cuisine.length > 0) {
        await db.insert(schema.cuisineHighlights).values(
          destination.cuisine.map((item) => ({
            destinationId: insertedDestination.id,
            dish: item.dish,
            description: item.description,
          }))
        );
      }

      if (destination.commonPhrases.length > 0) {
        await db.insert(schema.commonPhrases).values(
          destination.commonPhrases.map((phrase) => ({
            destinationId: insertedDestination.id,
            english: phrase.english,
            local: phrase.local,
            pronunciation: phrase.pronunciation || null,
          }))
        );
      }

      if (destination.restaurants.length > 0) {
        await db.insert(schema.restaurants).values(
          destination.restaurants.map((restaurant) => ({
            destinationId: insertedDestination.id,
            name: restaurant.name,
            cuisine: restaurant.cuisine,
            priceRange: restaurant.priceRange,
            description: restaurant.description,
            url: restaurant.url || null,
          }))
        );
      }

      if (destination.churches.length > 0) {
        await db.insert(schema.religiousSites).values(
          destination.churches.map((church) => ({
            destinationId: insertedDestination.id,
            type: "church",
            name: church.name,
            address: church.address,
            description: church.description,
            url: church.url || null,
          }))
        );
      }

      if (destination.mosques.length > 0) {
        await db.insert(schema.religiousSites).values(
          destination.mosques.map((mosque) => ({
            destinationId: insertedDestination.id,
            type: "mosque",
            name: mosque.name,
            address: mosque.address,
            description: mosque.description,
            url: mosque.url || null,
          }))
        );
      }

      if (destination.attractions.length > 0) {
        await db.insert(schema.attractions).values(
          destination.attractions.map((attraction) => ({
            destinationId: insertedDestination.id,
            name: attraction.name,
            type: attraction.type,
            description: attraction.description,
            url: attraction.url || null,
          }))
        );
      }

      if (destination.events.length > 0) {
        await db.insert(schema.localEvents).values(
          destination.events.map((event) => ({
            destinationId: insertedDestination.id,
            name: event.name,
            date: event.date,
            description: event.description,
          }))
        );
      }

      if (destination.hotels.length > 0) {
        await db.insert(schema.hotels).values(
          destination.hotels.map((hotel) => ({
            destinationId: insertedDestination.id,
            name: hotel.name,
            stars: hotel.stars,
            area: hotel.area,
            description: hotel.description,
            url: hotel.url || null,
          }))
        );
      }

      if (destination.banks.length > 0) {
        await db.insert(schema.banks).values(
          destination.banks.map((bank) => ({
            destinationId: insertedDestination.id,
            name: bank.name,
            branches: bank.branches,
            url: bank.url || null,
          }))
        );
      }

      if (destination.holidays.length > 0) {
        await db.insert(schema.holidays).values(
          destination.holidays.map((holiday) => ({
            destinationId: insertedDestination.id,
            name: holiday.name,
            date: holiday.date,
          }))
        );
      }
    }

    console.log("\n✈️  Seeding flight routes...");
    for (const route of flightRoutesData) {
      const fromId = destinationMap.get(route.from);
      const toId = destinationMap.get(route.to);

      if (fromId && toId) {
        await db.insert(schema.flightRoutes).values({
          fromDestinationId: fromId,
          toDestinationId: toId,
          airlines: route.airlines,
          duration: route.duration,
          airlineUrls: route.airlineUrls || null,
        });
        console.log(`  ✓ ${route.from} → ${route.to}`);
      }
    }

    console.log("\n📏 Seeding distances...");
    for (const distance of distancesData) {
      const fromId = destinationMap.get(distance.from);
      const toId = destinationMap.get(distance.to);

      if (fromId && toId) {
        await db.insert(schema.distances).values({
          fromDestinationId: fromId,
          toDestinationId: toId,
          distance: distance.distance,
          flightDuration: distance.flightDuration,
        });
        console.log(`  ✓ ${distance.from} ↔ ${distance.to}`);
      }
    }

    console.log("\n💱 Seeding exchange rates...");
    for (const [currencyCode, rate] of Object.entries(exchangeRatesData)) {
      await db.insert(schema.exchangeRates).values({
        currencyCode,
        rateToUSD: rate.toString(),
      });
      console.log(`  ✓ ${currencyCode}: ${rate}`);
    }

    console.log("\n✅ Database seeded successfully!");
    console.log(`
📊 Summary:
  - ${Object.keys(destinationsData).length} destinations
  - ${flightRoutesData.length} flight routes
  - ${distancesData.length} distance records
  - ${Object.keys(exchangeRatesData).length} exchange rates
    `);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    throw error;
  }
}

seed()
  .then(() => {
    console.log("🎉 Seed completed!");
    process.exit(0);
  })
  .catch((error) => {
    console.error("💥 Seed failed:", error);
    process.exit(1);
  });
