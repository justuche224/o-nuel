import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { jsPDF } from "jspdf";
import { destinations } from "./travel-data";

interface ExportPDFOptions {
  toId: string;
  fromId: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function exportTravelGuidePDF({ toId, fromId }: ExportPDFOptions) {
  const destination = destinations[toId];

  if (!destination) return;

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  const addText = (
    text: string,
    fontSize: number,
    fontWeight: "normal" | "bold" = "normal",
    color: [number, number, number] = [0, 0, 0]
  ) => {
    doc.setFontSize(fontSize);
    doc.setFont("helvetica", fontWeight);
    doc.setTextColor(color[0], color[1], color[2]);

    const lines = doc.splitTextToSize(text, contentWidth);
    doc.text(lines, margin, yPosition);
    yPosition += fontSize / 2.5 + lines.length * 4;
  };

  const addSeparator = () => {
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 5;
  };

  const checkPageBreak = (neededSpace: number = 20) => {
    if (yPosition + neededSpace > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
    }
  };

  doc.setFont("helvetica", "bold");

  addText(destination.name, 24, "bold", [15, 76, 129]);
  addText(destination.country, 12, "normal", [100, 100, 100]);
  yPosition += 5;

  addText(destination.description, 10, "normal");
  addSeparator();

  checkPageBreak(30);
  addText("Quick Facts", 14, "bold", [15, 76, 129]);
  addText(`Language: ${destination.language.join(", ")}`, 10);
  addText(`Currency: ${destination.currency}`, 10);
  addText(`Timezone: ${destination.timezone}`, 10);
  addText(`Time Difference: ${getTimeDifference(fromId, toId)}`, 10);
  yPosition += 5;
  addSeparator();

  checkPageBreak(30);
  addText("Climate & Weather", 14, "bold", [15, 76, 129]);
  addText(`Type: ${destination.climate.type}`, 10);
  addText(`Average Temperature: ${destination.climate.averageTemp}`, 10);
  addText(`Rainy Seasons: ${destination.climate.rainySeasons.join(", ")}`, 10);
  addText(destination.climate.description, 10);
  yPosition += 5;
  addSeparator();

  checkPageBreak(30);
  addText("Best Time to Visit", 14, "bold", [15, 76, 129]);
  addText(`Peak Season: ${destination.bestTimeToVisit.peak}`, 10);
  addText(`Off-Peak Season: ${destination.bestTimeToVisit.offPeak}`, 10);
  addText(`Recommendation: ${destination.bestTimeToVisit.recommendation}`, 10);
  yPosition += 5;
  addSeparator();

  checkPageBreak(40);
  addText("Attractions", 14, "bold", [15, 76, 129]);
  destination.attractions.slice(0, 3).forEach((attraction) => {
    addText(attraction.name, 11, "bold");
    addText(attraction.description, 9);
    yPosition += 3;
  });
  yPosition += 5;
  addSeparator();

  checkPageBreak(40);
  addText("Restaurants", 14, "bold", [15, 76, 129]);
  destination.restaurants.slice(0, 3).forEach((restaurant) => {
    addText(restaurant.name, 11, "bold");
    addText(`${restaurant.cuisine} - ${restaurant.priceRange}`, 9);
    addText(restaurant.description, 9);
    yPosition += 3;
  });
  yPosition += 5;
  addSeparator();

  checkPageBreak(30);
  addText("Hotels", 14, "bold", [15, 76, 129]);
  destination.hotels.slice(0, 3).forEach((hotel) => {
    addText(`${hotel.name} - ${hotel.stars} stars`, 11, "bold");
    addText(hotel.area, 9);
    addText(hotel.description, 9);
    yPosition += 3;
  });
  yPosition += 5;
  addSeparator();

  checkPageBreak(30);
  addText("Visa Requirements", 14, "bold", [15, 76, 129]);
  Object.entries(destination.visaInfo.required).forEach(
    ([country, requirement]) => {
      addText(`${country}: ${requirement}`, 10);
    }
  );
  addText(`Note: ${destination.visaInfo.notes}`, 9);
  yPosition += 5;
  addSeparator();

  checkPageBreak(30);
  addText("Cost of Living", 14, "bold", [15, 76, 129]);
  addText(`Meal: ${destination.costOfLiving.meal}`, 10);
  addText(`Coffee: ${destination.costOfLiving.coffee}`, 10);
  addText(`Transport: ${destination.costOfLiving.transport}`, 10);
  addText(`Hotel: ${destination.costOfLiving.hotel}`, 10);
  yPosition += 5;
  addSeparator();

  checkPageBreak(30);
  addText("Emergency Contacts", 14, "bold", [15, 76, 129]);
  addText(`Police: ${destination.emergencyContacts.police}`, 10);
  addText(`Ambulance: ${destination.emergencyContacts.ambulance}`, 10);
  addText(`Fire: ${destination.emergencyContacts.fire}`, 10);
  addText(`Embassy: ${destination.emergencyContacts.embassy}`, 10);
  yPosition += 5;
  addSeparator();

  checkPageBreak(30);
  addText("Health & Safety", 14, "bold", [15, 76, 129]);
  addText(
    `Vaccinations: ${destination.healthInfo.vaccinations.join(", ")}`,
    10
  );
  yPosition += 5;

  destination.healthInfo.healthTips.slice(0, 3).forEach((tip) => {
    addText(`• ${tip}`, 9);
  });

  doc.save(`${destination.name}-Travel-Guide.pdf`);
}

function getTimeDifference(fromId: string, toId: string): string {
  const originOffset = Number.parseFloat(
    destinations[fromId].timezoneOffset.split("/")[0]
  );
  const destOffset = Number.parseFloat(
    destinations[toId].timezoneOffset.split("/")[0]
  );
  const diff = destOffset - originOffset;
  if (diff === 0) return "Same timezone";
  return diff > 0 ? `+${diff} hours` : `${diff} hours`;
}
