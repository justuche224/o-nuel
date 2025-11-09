"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Sparkles, Loader2 } from "lucide-react";
import { useDestinations } from "@/hooks/use-destinations";

interface DestinationSelectorProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  excludeId?: string;
  icon?: "location" | "destination";
}

const destinationFlags: Record<string, string> = {
  accra: "🇬🇭",
  lagos: "🇳🇬",
  newyork: "🇺🇸",
  tokyo: "🇯🇵",
  beijing: "🇨🇳",
};

export function DestinationSelector({
  label,
  value,
  onChange,
  excludeId,
  icon = "location",
}: DestinationSelectorProps) {
  const { data: destinations, isLoading } = useDestinations();

  const availableDestinations =
    destinations?.filter((d) => d.id !== excludeId) || [];

  const IconComponent = icon === "location" ? MapPin : Sparkles;
  const iconColor = icon === "location" ? "text-blue-500" : "text-amber-500";

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
        <IconComponent className={`h-4 w-4 ${iconColor}`} />
        {label}
      </label>
      <Select value={value} onValueChange={onChange} disabled={isLoading}>
        <SelectTrigger className="w-full h-11 bg-white border-gray-200">
          <SelectValue
            placeholder={
              isLoading
                ? "Loading destinations..."
                : `Select ${
                    icon === "location" ? "your location" : "destination"
                  }`
            }
          />
        </SelectTrigger>
        <SelectContent>
          {isLoading ? (
            <div className="flex items-center justify-center py-4">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          ) : (
            availableDestinations.map((dest) => (
              <SelectItem key={dest.id} value={dest.id}>
                <span className="flex items-center gap-2">
                  <span>{destinationFlags[dest.id] || "🌍"}</span>
                  <span>{dest.name}</span>
                </span>
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    </div>
  );
}
