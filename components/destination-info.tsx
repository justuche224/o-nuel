"use client";

import { destinations, getFlightRoute, getDistance } from "@/lib/travel-data";
import { InfoCard } from "./info-card";
import {
  Utensils,
  Church,
  MapPin,
  Calendar,
  Hotel,
  Building2,
  Globe,
  Coins,
  Plane,
  PartyPopper,
  CloudRain,
  FileText,
  DollarSign,
  Phone,
  Heart,
  UtensilsCrossed,
  MessageSquare,
  Users,
  Sun,
  Package,
  Bus,
  Clock,
  Navigation,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurrencyConverter } from "./currency-converter";
import { exportTravelGuidePDF } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DestinationInfoProps {
  fromId: string;
  toId: string;
}

export function DestinationInfo({ fromId, toId }: DestinationInfoProps) {
  const destination = destinations[toId];
  const origin = destinations[fromId];
  const flightRoute = getFlightRoute(fromId, toId);
  const distance = getDistance(fromId, toId);

  if (!destination) return null;

  const getTimeDifference = () => {
    const originOffset = Number.parseFloat(origin.timezoneOffset.split("/")[0]);
    const destOffset = Number.parseFloat(
      destination.timezoneOffset.split("/")[0]
    );
    const diff = destOffset - originOffset;
    if (diff === 0) return "Same timezone";
    return diff > 0 ? `+${diff} hours` : `${diff} hours`;
  };
  // </CHANGE>

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-card rounded-lg p-6 border">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-3xl font-bold text-balance">
              {destination.name}
            </h2>
            <p className="text-muted-foreground mt-1">{destination.country}</p>
          </div>
          <Button
            onClick={() => exportTravelGuidePDF({ toId, fromId })}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Export PDF
          </Button>
        </div>
        <p className="text-foreground leading-relaxed">
          {destination.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Globe className="h-4 w-4" />
              <span>Language</span>
            </div>
            <p className="text-sm font-medium">
              {destination.language.join(", ")}
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Coins className="h-4 w-4" />
              <span>Currency</span>
            </div>
            <p className="text-sm font-medium">{destination.currency}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Timezone</span>
            </div>
            <p className="text-sm font-medium">{destination.timezone}</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Navigation className="h-4 w-4" />
              <span>Time Difference</span>
            </div>
            <p className="text-sm font-medium">{getTimeDifference()}</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="places">Places</TabsTrigger>
          <TabsTrigger value="practical">Practical Info</TabsTrigger>
          <TabsTrigger value="culture">Culture</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6 mt-6">
          {/* Interactive Map Section */}
          <div className="bg-card rounded-lg border overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="font-semibold flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Explore {destination.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Interactive map of the destination
              </p>
            </div>
            <div className="relative w-full h-[400px]">
              <iframe
                src={destination.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Travel Information Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Flight Information */}
            {flightRoute && distance && (
              <InfoCard title="Flight Information" icon={Plane}>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Distance
                    </p>
                    <p className="text-lg font-semibold">{distance.distance}</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Estimated Duration
                    </p>
                    <p className="text-lg font-semibold">
                      {flightRoute.duration}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Airlines
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {flightRoute.airlines.map((airline, idx) => (
                        <a
                          key={idx}
                          href={flightRoute.airlineUrls?.[idx] || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            flightRoute.airlineUrls?.[idx]
                              ? "hover:underline"
                              : ""
                          }
                        >
                          <Badge
                            variant="secondary"
                            className={
                              flightRoute.airlineUrls?.[idx]
                                ? "cursor-pointer"
                                : ""
                            }
                          >
                            {airline}
                          </Badge>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </InfoCard>
            )}

            {/* Climate Information */}
            <InfoCard title="Climate & Weather" icon={CloudRain}>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Climate Type
                  </p>
                  <p className="font-semibold">{destination.climate.type}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Average Temperature
                  </p>
                  <p className="font-semibold">
                    {destination.climate.averageTemp}
                  </p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Rainy Seasons
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {destination.climate.rainySeasons.map((season, idx) => (
                      <Badge key={idx} variant="outline">
                        {season}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm pt-2">
                  {destination.climate.description}
                </p>
              </div>
            </InfoCard>
          </div>

          {/* Best Time to Visit */}
          <InfoCard title="Best Time to Visit" icon={Sun}>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Peak Season
                </p>
                <p className="font-semibold">
                  {destination.bestTimeToVisit.peak}
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Off-Peak Season
                </p>
                <p className="font-semibold">
                  {destination.bestTimeToVisit.offPeak}
                </p>
              </div>
              <Separator />
              <div className="bg-muted p-3 rounded-md">
                <p className="text-sm font-medium">Recommendation:</p>
                <p className="text-sm mt-1">
                  {destination.bestTimeToVisit.recommendation}
                </p>
              </div>
            </div>
          </InfoCard>

          {/* Currency Converter */}
          <CurrencyConverter
            fromCurrency={origin.currencyCode}
            toCurrency={destination.currencyCode}
          />
        </TabsContent>

        <TabsContent value="places" className="space-y-6 mt-6">
          {/* Restaurants */}
          <InfoCard
            title="Restaurants"
            description="Local dining experiences"
            icon={Utensils}
          >
            <div className="space-y-4">
              {destination.restaurants.map((restaurant, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold">
                      {restaurant.url ? (
                        <a
                          href={restaurant.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {restaurant.name}
                        </a>
                      ) : (
                        restaurant.name
                      )}
                    </h4>
                    <Badge variant="outline">{restaurant.priceRange}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {restaurant.cuisine}
                  </p>
                  <p className="text-sm">{restaurant.description}</p>
                  {idx < destination.restaurants.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </div>
          </InfoCard>

          {/* Attractions */}
          <InfoCard
            title="Attractions"
            description="Must-see places"
            icon={MapPin}
          >
            <div className="space-y-4">
              {destination.attractions.map((attraction, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold">
                      {attraction.url ? (
                        <a
                          href={attraction.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {attraction.name}
                        </a>
                      ) : (
                        attraction.name
                      )}
                    </h4>
                    <Badge variant="secondary">{attraction.type}</Badge>
                  </div>
                  <p className="text-sm">{attraction.description}</p>
                  {idx < destination.attractions.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </div>
          </InfoCard>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Churches */}
            {destination.churches.length > 0 && (
              <InfoCard title="Churches" icon={Church}>
                <div className="space-y-3">
                  {destination.churches.map((church, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="font-semibold text-sm">
                        {church.url ? (
                          <a
                            href={church.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {church.name}
                          </a>
                        ) : (
                          church.name
                        )}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {church.address}
                      </p>
                      <p className="text-sm">{church.description}</p>
                      {idx < destination.churches.length - 1 && (
                        <Separator className="mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </InfoCard>
            )}

            {/* Mosques */}
            {destination.mosques.length > 0 && (
              <InfoCard title="Mosques" icon={Church}>
                <div className="space-y-3">
                  {destination.mosques.map((mosque, idx) => (
                    <div key={idx} className="space-y-1">
                      <h4 className="font-semibold text-sm">
                        {mosque.url ? (
                          <a
                            href={mosque.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            {mosque.name}
                          </a>
                        ) : (
                          mosque.name
                        )}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {mosque.address}
                      </p>
                      <p className="text-sm">{mosque.description}</p>
                      {idx < destination.mosques.length - 1 && (
                        <Separator className="mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </InfoCard>
            )}
          </div>

          {/* Events */}
          <InfoCard
            title="Local Events"
            description="Annual celebrations"
            icon={PartyPopper}
          >
            <div className="space-y-4">
              {destination.events.map((event, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold">{event.name}</h4>
                    <Badge variant="outline">{event.date}</Badge>
                  </div>
                  <p className="text-sm">{event.description}</p>
                  {idx < destination.events.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </div>
          </InfoCard>

          {/* Hotels */}
          <InfoCard
            title="Hotels"
            description="Accommodation options"
            icon={Hotel}
          >
            <div className="space-y-4">
              {destination.hotels.map((hotel, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold">
                      {hotel.url ? (
                        <a
                          href={hotel.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {hotel.name}
                        </a>
                      ) : (
                        hotel.name
                      )}
                    </h4>
                    <Badge variant="secondary">
                      {"⭐".repeat(hotel.stars)}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{hotel.area}</p>
                  <p className="text-sm">{hotel.description}</p>
                  {idx < destination.hotels.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </div>
          </InfoCard>
        </TabsContent>

        <TabsContent value="practical" className="space-y-6 mt-6">
          {/* Visa Information */}
          <InfoCard title="Visa Requirements" icon={FileText}>
            <div className="space-y-3">
              {Object.entries(destination.visaInfo.required).map(
                ([country, requirement], idx) => (
                  <div key={idx}>
                    <div className="flex items-start justify-between">
                      <p className="font-semibold text-sm">{country}</p>
                      <Badge
                        variant={
                          requirement.includes("Visa-free")
                            ? "default"
                            : "secondary"
                        }
                      >
                        {requirement}
                      </Badge>
                    </div>
                    {idx <
                      Object.entries(destination.visaInfo.required).length -
                        1 && <Separator className="mt-3" />}
                  </div>
                )
              )}
              <div className="bg-muted p-3 rounded-md mt-4">
                <p className="text-sm">{destination.visaInfo.notes}</p>
              </div>
            </div>
          </InfoCard>

          {/* Cost of Living */}
          <InfoCard title="Cost of Living" icon={DollarSign}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Meal</p>
                <p className="font-semibold">{destination.costOfLiving.meal}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Coffee</p>
                <p className="font-semibold">
                  {destination.costOfLiving.coffee}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Transport</p>
                <p className="font-semibold">
                  {destination.costOfLiving.transport}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Hotel</p>
                <p className="font-semibold">
                  {destination.costOfLiving.hotel}
                </p>
              </div>
            </div>
          </InfoCard>

          {/* Emergency Contacts */}
          <InfoCard title="Emergency Contacts" icon={Phone}>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Police</p>
                  <p className="font-semibold text-lg">
                    {destination.emergencyContacts.police}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Ambulance
                  </p>
                  <p className="font-semibold text-lg">
                    {destination.emergencyContacts.ambulance}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Fire</p>
                  <p className="font-semibold text-lg">
                    {destination.emergencyContacts.fire}
                  </p>
                </div>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-1">Embassy</p>
                <p className="font-semibold">
                  {destination.emergencyContacts.embassy}
                </p>
              </div>
            </div>
          </InfoCard>

          {/* Health Information */}
          <InfoCard title="Health & Safety" icon={Heart}>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-2">
                  Required/Recommended Vaccinations
                </p>
                <div className="flex flex-wrap gap-2">
                  {destination.healthInfo.vaccinations.map((vax, idx) => (
                    <Badge key={idx} variant="outline">
                      {vax}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-semibold mb-2">Health Tips</p>
                <ul className="space-y-2">
                  {destination.healthInfo.healthTips.map((tip, idx) => (
                    <li key={idx} className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </InfoCard>

          {/* Transportation */}
          <InfoCard title="Getting Around" icon={Bus}>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Metro/Subway
                </p>
                <p className="font-semibold">
                  {destination.transportation.metro}
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Ride-Hailing Apps
                </p>
                <div className="flex flex-wrap gap-2">
                  {destination.transportation.taxi.map((app, idx) => (
                    <Badge key={idx} variant="secondary">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <p className="text-sm font-semibold mb-2">
                  Transportation Tips
                </p>
                <ul className="space-y-2">
                  {destination.transportation.tips.map((tip, idx) => (
                    <li key={idx} className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </InfoCard>

          {/* Packing List */}
          <InfoCard title="Packing Checklist" icon={Package}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {destination.packingList.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <div className="h-4 w-4 rounded border border-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </InfoCard>

          {/* Two Column Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Banks */}
            <InfoCard title="Banks" icon={Building2}>
              <div className="space-y-3">
                {destination.banks.map((bank, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="font-semibold text-sm">
                      {bank.url ? (
                        <a
                          href={bank.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {bank.name}
                        </a>
                      ) : (
                        bank.name
                      )}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {bank.branches}
                    </p>
                    {idx < destination.banks.length - 1 && (
                      <Separator className="mt-3" />
                    )}
                  </div>
                ))}
              </div>
            </InfoCard>

            {/* Holidays */}
            <InfoCard title="Public Holidays" icon={Calendar}>
              <div className="space-y-3">
                {destination.holidays.map((holiday, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{holiday.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {holiday.date}
                    </Badge>
                  </div>
                ))}
              </div>
            </InfoCard>
          </div>
        </TabsContent>

        <TabsContent value="culture" className="space-y-6 mt-6">
          {/* Local Cuisine */}
          <InfoCard title="Local Cuisine Highlights" icon={UtensilsCrossed}>
            <div className="space-y-4">
              {destination.cuisine.map((dish, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="font-semibold">{dish.dish}</h4>
                  <p className="text-sm">{dish.description}</p>
                  {idx < destination.cuisine.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </div>
          </InfoCard>

          {/* Common Phrases */}
          <InfoCard title="Common Phrases" icon={MessageSquare}>
            <div className="space-y-3">
              {destination.commonPhrases.map((phrase, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-start justify-between">
                    <p className="font-semibold text-sm">{phrase.english}</p>
                    <p className="font-semibold text-sm text-primary">
                      {phrase.local}
                    </p>
                  </div>
                  {phrase.pronunciation && (
                    <p className="text-xs text-muted-foreground italic">
                      Pronunciation: {phrase.pronunciation}
                    </p>
                  )}
                  {idx < destination.commonPhrases.length - 1 && (
                    <Separator className="mt-3" />
                  )}
                </div>
              ))}
            </div>
          </InfoCard>

          {/* Cultural Etiquette */}
          <InfoCard title="Cultural Etiquette" icon={Users}>
            <ul className="space-y-3">
              {destination.culturalEtiquette.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </InfoCard>
        </TabsContent>
      </Tabs>
      {/* </CHANGE> */}
    </div>
  );
}
