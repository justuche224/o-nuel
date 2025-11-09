"use client";

import { useQuery } from "@tanstack/react-query";
import {
  getAllDestinations,
  getDestinationBySlug,
  getFlightRoute,
  getDistance,
  getAllExchangeRates,
} from "@/actions";

export function useDestinations() {
  return useQuery({
    queryKey: ["destinations"],
    queryFn: () => getAllDestinations(),
  });
}

export function useDestination(slug: string | null) {
  return useQuery({
    queryKey: ["destination", slug],
    queryFn: () => (slug ? getDestinationBySlug(slug) : null),
    enabled: !!slug,
  });
}

export function useFlightRoute(fromSlug: string | null, toSlug: string | null) {
  return useQuery({
    queryKey: ["flight-route", fromSlug, toSlug],
    queryFn: () =>
      fromSlug && toSlug ? getFlightRoute(fromSlug, toSlug) : null,
    enabled: !!fromSlug && !!toSlug,
  });
}

export function useDistance(fromSlug: string | null, toSlug: string | null) {
  return useQuery({
    queryKey: ["distance", fromSlug, toSlug],
    queryFn: () => (fromSlug && toSlug ? getDistance(fromSlug, toSlug) : null),
    enabled: !!fromSlug && !!toSlug,
  });
}

export function useExchangeRates() {
  return useQuery({
    queryKey: ["exchange-rates"],
    queryFn: () => getAllExchangeRates(),
    staleTime: 1000 * 60 * 60,
  });
}
