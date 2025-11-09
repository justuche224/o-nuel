CREATE TABLE "attractions" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"url" text
);
--> statement-breakpoint
CREATE TABLE "banks" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"branches" text NOT NULL,
	"url" text
);
--> statement-breakpoint
CREATE TABLE "best_time_to_visit" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"peak" varchar(255) NOT NULL,
	"off_peak" varchar(255) NOT NULL,
	"recommendation" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "climate_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"type" varchar(255) NOT NULL,
	"average_temp" varchar(255) NOT NULL,
	"rainy_seasons" jsonb NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "common_phrases" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"english" varchar(255) NOT NULL,
	"local" varchar(255) NOT NULL,
	"pronunciation" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "cost_of_living" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"meal" varchar(100) NOT NULL,
	"coffee" varchar(100) NOT NULL,
	"transport" varchar(100) NOT NULL,
	"hotel" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cuisine_highlights" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"dish" varchar(255) NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "destinations" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(100) NOT NULL,
	"name" varchar(255) NOT NULL,
	"country" varchar(255) NOT NULL,
	"language" jsonb NOT NULL,
	"currency" varchar(255) NOT NULL,
	"currency_code" varchar(10) NOT NULL,
	"timezone" varchar(100) NOT NULL,
	"timezone_offset" varchar(20) NOT NULL,
	"description" text NOT NULL,
	"map_embed_url" text NOT NULL,
	"cultural_etiquette" jsonb NOT NULL,
	"packing_list" jsonb NOT NULL,
	CONSTRAINT "destinations_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "distances" (
	"id" serial PRIMARY KEY NOT NULL,
	"from_destination_id" integer NOT NULL,
	"to_destination_id" integer NOT NULL,
	"distance" varchar(100) NOT NULL,
	"flight_duration" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "emergency_contacts" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"police" varchar(100) NOT NULL,
	"ambulance" varchar(100) NOT NULL,
	"fire" varchar(100) NOT NULL,
	"embassy" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "exchange_rates" (
	"id" serial PRIMARY KEY NOT NULL,
	"currency_code" varchar(10) NOT NULL,
	"rate_to_usd" numeric(12, 6) NOT NULL,
	CONSTRAINT "exchange_rates_currency_code_unique" UNIQUE("currency_code")
);
--> statement-breakpoint
CREATE TABLE "flight_routes" (
	"id" serial PRIMARY KEY NOT NULL,
	"from_destination_id" integer NOT NULL,
	"to_destination_id" integer NOT NULL,
	"airlines" jsonb NOT NULL,
	"duration" varchar(100) NOT NULL,
	"airline_urls" jsonb
);
--> statement-breakpoint
CREATE TABLE "health_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"vaccinations" jsonb NOT NULL,
	"health_tips" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "holidays" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"date" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "hotels" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"stars" integer NOT NULL,
	"area" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"url" text
);
--> statement-breakpoint
CREATE TABLE "local_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"date" varchar(255) NOT NULL,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "religious_sites" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"type" varchar(50) NOT NULL,
	"name" varchar(255) NOT NULL,
	"address" text NOT NULL,
	"description" text NOT NULL,
	"url" text
);
--> statement-breakpoint
CREATE TABLE "restaurants" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"cuisine" varchar(255) NOT NULL,
	"price_range" varchar(50) NOT NULL,
	"description" text NOT NULL,
	"url" text
);
--> statement-breakpoint
CREATE TABLE "transportation_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"metro" text NOT NULL,
	"taxi" jsonb NOT NULL,
	"tips" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "visa_info" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer NOT NULL,
	"required" jsonb NOT NULL,
	"notes" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "attractions" ADD CONSTRAINT "attractions_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "banks" ADD CONSTRAINT "banks_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "best_time_to_visit" ADD CONSTRAINT "best_time_to_visit_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "climate_info" ADD CONSTRAINT "climate_info_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "common_phrases" ADD CONSTRAINT "common_phrases_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cost_of_living" ADD CONSTRAINT "cost_of_living_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cuisine_highlights" ADD CONSTRAINT "cuisine_highlights_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "distances" ADD CONSTRAINT "distances_from_destination_id_destinations_id_fk" FOREIGN KEY ("from_destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "distances" ADD CONSTRAINT "distances_to_destination_id_destinations_id_fk" FOREIGN KEY ("to_destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emergency_contacts" ADD CONSTRAINT "emergency_contacts_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "flight_routes" ADD CONSTRAINT "flight_routes_from_destination_id_destinations_id_fk" FOREIGN KEY ("from_destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "flight_routes" ADD CONSTRAINT "flight_routes_to_destination_id_destinations_id_fk" FOREIGN KEY ("to_destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "health_info" ADD CONSTRAINT "health_info_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "holidays" ADD CONSTRAINT "holidays_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "hotels" ADD CONSTRAINT "hotels_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "local_events" ADD CONSTRAINT "local_events_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "religious_sites" ADD CONSTRAINT "religious_sites_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "restaurants" ADD CONSTRAINT "restaurants_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transportation_info" ADD CONSTRAINT "transportation_info_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "visa_info" ADD CONSTRAINT "visa_info_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE cascade ON UPDATE no action;