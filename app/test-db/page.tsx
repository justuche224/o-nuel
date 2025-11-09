"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import {
  useDestinations,
  useDestination,
  useFlightRoute,
  useDistance,
  useExchangeRates,
} from "@/hooks/use-destinations";
import Link from "next/link";

export default function TestDBPage() {
  const { data: destinations, isLoading: loadingDestinations, isError: errorDestinations } = useDestinations();
  const { data: accra, isLoading: loadingAccra, isError: errorAccra } = useDestination("accra");
  const { data: route, isLoading: loadingRoute, isError: errorRoute } = useFlightRoute("accra", "lagos");
  const { data: distance, isLoading: loadingDistance, isError: errorDistance } = useDistance("accra", "lagos");
  const { data: rates, isLoading: loadingRates, isError: errorRates } = useExchangeRates();

  const tests = [
    {
      name: "Get All Destinations",
      loading: loadingDestinations,
      error: errorDestinations,
      success: !!destinations && destinations.length > 0,
      result: destinations ? `${destinations.length} destinations found` : "No data",
    },
    {
      name: "Get Single Destination (Accra)",
      loading: loadingAccra,
      error: errorAccra,
      success: !!accra && accra.name === "Accra",
      result: accra ? `${accra.name}, ${accra.country}` : "No data",
    },
    {
      name: "Get Flight Route (Accra → Lagos)",
      loading: loadingRoute,
      error: errorRoute,
      success: !!route && route.airlines.length > 0,
      result: route ? `${route.airlines.length} airlines, ${route.duration}` : "No data",
    },
    {
      name: "Get Distance (Accra → Lagos)",
      loading: loadingDistance,
      error: errorDistance,
      success: !!distance && distance.distance !== "",
      result: distance ? `${distance.distance}, ${distance.flightDuration}` : "No data",
    },
    {
      name: "Get Exchange Rates",
      loading: loadingRates,
      error: errorRates,
      success: !!rates && Object.keys(rates).length > 0,
      result: rates ? `${Object.keys(rates).length} currencies` : "No data",
    },
  ];

  const allSuccess = tests.every((test) => test.success && !test.loading && !test.error);
  const anyLoading = tests.some((test) => test.loading);
  const anyError = tests.some((test) => test.error);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Database Connection Test</h1>
        <p className="text-muted-foreground">
          Testing React Query hooks and server actions
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Overall Status</span>
            {anyLoading && <Loader2 className="h-5 w-5 animate-spin text-blue-500" />}
            {!anyLoading && allSuccess && <CheckCircle2 className="h-5 w-5 text-green-500" />}
            {!anyLoading && anyError && <XCircle className="h-5 w-5 text-red-500" />}
          </CardTitle>
          <CardDescription>
            {anyLoading && "Running tests..."}
            {!anyLoading && allSuccess && "All tests passed! Database is working correctly."}
            {!anyLoading && anyError && "Some tests failed. Check database connection and seed data."}
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {tests.map((test, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                <span>{test.name}</span>
                <div className="flex items-center gap-2">
                  {test.loading && <Loader2 className="h-4 w-4 animate-spin text-blue-500" />}
                  {!test.loading && test.error && <Badge variant="destructive">Error</Badge>}
                  {!test.loading && test.success && <Badge className="bg-green-500">Success</Badge>}
                  {!test.loading && !test.success && !test.error && <Badge variant="secondary">No Data</Badge>}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {test.loading ? "Loading..." : test.result}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {!anyLoading && allSuccess && (
        <Card className="mt-6 border-green-500">
          <CardHeader>
            <CardTitle className="text-green-600 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Migration Successful!
            </CardTitle>
            <CardDescription>
              Your application is ready to use. All database queries are working correctly.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">✅ Server actions configured correctly</p>
            <p className="text-sm">✅ React Query hooks working</p>
            <p className="text-sm">✅ Database connection established</p>
            <p className="text-sm">✅ Data seeded successfully</p>
            <p className="text-sm font-semibold mt-4 text-green-600">
              You can now use the main application!
            </p>
          </CardContent>
        </Card>
      )}

      {!anyLoading && anyError && (
        <Card className="mt-6 border-red-500">
          <CardHeader>
            <CardTitle className="text-red-600 flex items-center gap-2">
              <XCircle className="h-5 w-5" />
              Setup Required
            </CardTitle>
            <CardDescription>
              Run these commands to set up your database:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-md font-mono text-sm">
              <div>$ npm run db:setup</div>
              <div className="text-muted-foreground"># Push schema and seed database</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Then refresh this page to see the results.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

