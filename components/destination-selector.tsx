"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Sparkles } from "lucide-react"

interface DestinationSelectorProps {
  label: string
  value: string
  onChange: (value: string) => void
  excludeId?: string
  icon?: "location" | "destination"
}

const destinations = [
  { id: "accra", name: "Accra, Ghana", flag: "🇬🇭" },
  { id: "lagos", name: "Lagos, Nigeria", flag: "🇳🇬" },
  { id: "newyork", name: "New York, USA", flag: "🇺🇸" },
  { id: "tokyo", name: "Tokyo, Japan", flag: "🇯🇵" },
  { id: "beijing", name: "Beijing, China", flag: "🇨🇳" },
]

export function DestinationSelector({
  label,
  value,
  onChange,
  excludeId,
  icon = "location",
}: DestinationSelectorProps) {
  const availableDestinations = destinations.filter((d) => d.id !== excludeId)

  const IconComponent = icon === "location" ? MapPin : Sparkles
  const iconColor = icon === "location" ? "text-blue-500" : "text-amber-500"

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
        <IconComponent className={`h-4 w-4 ${iconColor}`} />
        {label}
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full h-11 bg-white border-gray-200">
          <SelectValue placeholder={`Select ${icon === "location" ? "your location" : "destination"}`} />
        </SelectTrigger>
        <SelectContent>
          {availableDestinations.map((dest) => (
            <SelectItem key={dest.id} value={dest.id}>
              <span className="flex items-center gap-2">
                <span>{dest.flag}</span>
                <span>{dest.name}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
