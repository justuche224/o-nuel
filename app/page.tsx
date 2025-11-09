"use client";

import { useState } from "react";
import { DestinationSelector } from "@/components/destination-selector";
import { DestinationInfo } from "@/components/destination-info";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export default function Home() {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (fromLocation && toLocation && fromLocation !== toLocation) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setFromLocation("");
    setToLocation("");
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/nasa-Q1p7bh3SHj8-unsplash.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-linear-to-b from-blue-600/60 via-purple-500/50 to-blue-400/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
              Explore the World
            </h1>
            <p className="text-xl text-white/90 text-balance">
              Your personalized travel guide to amazing destinations
            </p>
          </div>

          {/* Selection Card */}
          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">
              Plan Your Journey
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Select your current location and dream destination
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <DestinationSelector
                label="Current Location"
                value={fromLocation}
                onChange={setFromLocation}
                excludeId={toLocation}
                icon="location"
              />
              <DestinationSelector
                label="Destination"
                value={toLocation}
                onChange={setToLocation}
                excludeId={fromLocation}
                icon="destination"
              />
            </div>

            <Button
              onClick={handleSearch}
              disabled={
                !fromLocation || !toLocation || fromLocation === toLocation
              }
              className="w-full h-12 text-base bg-linear-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white border-0"
            >
              <Plane className="mr-2 h-5 w-5" />
              Explore Destination
            </Button>

            {showResults && (
              <Button
                onClick={handleReset}
                variant="outline"
                className="w-full mt-3 bg-transparent"
              >
                Reset Search
              </Button>
            )}
          </div>
        </div>
      </div>
      {/* </CHANGE> */}

      {/* Results Section */}
      {showResults && fromLocation && toLocation && (
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <DestinationInfo fromId={fromLocation} toId={toLocation} />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t mt-16 bg-card">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-muted-foreground">
            Travel information for Accra, Lagos, New York, Tokyo, and Beijing
          </p>
        </div>
      </footer>
    </div>
  );
}
