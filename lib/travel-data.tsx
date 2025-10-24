export interface Destination {
  id: string;
  name: string;
  country: string;
  language: string[];
  currency: string;
  currencyCode: string;
  timezone: string;
  timezoneOffset: string;
  description: string;
  mapEmbedUrl: string;
  climate: ClimateInfo;
  visaInfo: VisaInfo;
  costOfLiving: CostOfLiving;
  emergencyContacts: EmergencyContacts;
  healthInfo: HealthInfo;
  cuisine: CuisineHighlight[];
  commonPhrases: Phrase[];
  culturalEtiquette: string[];
  bestTimeToVisit: BestTimeToVisit;
  packingList: string[];
  transportation: TransportationInfo;
  restaurants: Restaurant[];
  churches: ReligiousSite[];
  mosques: ReligiousSite[];
  attractions: Attraction[];
  events: LocalEvent[];
  hotels: Hotel[];
  banks: Bank[];
  holidays: Holiday[];
}

export interface ClimateInfo {
  type: string;
  averageTemp: string;
  rainySeasons: string[];
  description: string;
}

export interface VisaInfo {
  required: Record<string, string>;
  notes: string;
}

export interface CostOfLiving {
  meal: string;
  coffee: string;
  transport: string;
  hotel: string;
}

export interface EmergencyContacts {
  police: string;
  ambulance: string;
  fire: string;
  embassy: string;
}

export interface HealthInfo {
  vaccinations: string[];
  healthTips: string[];
}

export interface CuisineHighlight {
  dish: string;
  description: string;
}

export interface Phrase {
  english: string;
  local: string;
  pronunciation?: string;
}

export interface BestTimeToVisit {
  peak: string;
  offPeak: string;
  recommendation: string;
}

export interface TransportationInfo {
  metro: string;
  taxi: string[];
  tips: string[];
}

export interface Restaurant {
  name: string;
  cuisine: string;
  priceRange: string;
  description: string;
  url?: string;
}

export interface ReligiousSite {
  name: string;
  address: string;
  description: string;
  url?: string;
}

export interface Attraction {
  name: string;
  type: string;
  description: string;
  url?: string;
}

export interface LocalEvent {
  name: string;
  date: string;
  description: string;
}

export interface Hotel {
  name: string;
  stars: number;
  area: string;
  description: string;
  url?: string;
}

export interface Bank {
  name: string;
  branches: string;
  url?: string;
}

export interface Holiday {
  name: string;
  date: string;
}

export interface FlightRoute {
  from: string;
  to: string;
  airlines: string[];
  duration: string;
  airlineUrls?: string[];
}

export const destinations: Record<string, Destination> = {
  accra: {
    id: "accra",
    name: "Accra",
    country: "Ghana",
    language: ["English", "Twi", "Ga"],
    currency: "Ghanaian Cedi (GHS)",
    currencyCode: "GHS",
    timezone: "GMT",
    timezoneOffset: "+0",
    description:
      "The vibrant capital of Ghana, known for its rich history, bustling markets, and beautiful beaches.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.62279090634!2d-0.3909426842041016!3d5.603716899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1761212700000!5m2!1sen!2sus",
    climate: {
      type: "Tropical",
      averageTemp: "26-28°C (79-82°F)",
      rainySeasons: ["April-June", "September-November"],
      description: "Hot and humid year-round with two rainy seasons",
    },
    visaInfo: {
      required: {
        "US Citizens": "Visa required - can obtain on arrival",
        "EU Citizens": "Visa required - can obtain on arrival",
        "African Union": "Visa-free for most AU countries",
      },
      notes:
        "Visa on arrival costs approximately $150 USD. E-visa available online.",
    },
    costOfLiving: {
      meal: "$5-15",
      coffee: "$2-4",
      transport: "$0.50-2 per ride",
      hotel: "$40-150 per night",
    },
    emergencyContacts: {
      police: "191",
      ambulance: "193",
      fire: "192",
      embassy: "US Embassy: +233 30 274 1000",
    },
    healthInfo: {
      vaccinations: [
        "Yellow Fever (required)",
        "Hepatitis A & B",
        "Typhoid",
        "Malaria prophylaxis recommended",
      ],
      healthTips: [
        "Drink bottled water only",
        "Use mosquito repellent",
        "Avoid street food if sensitive stomach",
        "Carry hand sanitizer",
      ],
    },
    cuisine: [
      {
        dish: "Jollof Rice",
        description: "Spicy tomato rice dish, a West African staple",
      },
      {
        dish: "Banku & Tilapia",
        description: "Fermented corn dough with grilled fish",
      },
      {
        dish: "Fufu",
        description: "Pounded cassava or plantain served with soup",
      },
      {
        dish: "Kelewele",
        description: "Spicy fried plantains, popular street food",
      },
      {
        dish: "Red Red",
        description: "Black-eyed peas stew with fried plantains",
      },
    ],
    commonPhrases: [
      { english: "Hello", local: "Akwaaba", pronunciation: "ah-KWAH-bah" },
      { english: "Thank you", local: "Medaase", pronunciation: "meh-DAH-seh" },
      { english: "How much?", local: "Ɛyɛ sɛn?", pronunciation: "eh-yeh-sen" },
      {
        english: "Goodbye",
        local: "Nante yie",
        pronunciation: "nan-teh yee-eh",
      },
      { english: "Yes", local: "Aane", pronunciation: "ah-neh" },
      { english: "No", local: "Daabi", pronunciation: "dah-bee" },
    ],
    culturalEtiquette: [
      "Greet elders with respect, often with a slight bow",
      "Use right hand for eating and greeting",
      "Remove shoes when entering homes",
      "Dress modestly, especially in rural areas",
      "Bargaining is expected in markets",
      "Photography: Ask permission before taking photos of people",
    ],
    bestTimeToVisit: {
      peak: "November-March (dry season)",
      offPeak: "April-October (rainy seasons)",
      recommendation:
        "Visit during November-February for the best weather and cultural festivals",
    },
    packingList: [
      "Light, breathable clothing",
      "Mosquito repellent",
      "Sunscreen (SPF 50+)",
      "Rain jacket or umbrella",
      "Comfortable walking shoes",
      "Power adapter (UK-style plugs)",
      "Anti-malaria medication",
      "Hand sanitizer",
    ],
    transportation: {
      metro:
        "No metro system - taxis and tro-tros (minibuses) are main transport",
      taxi: ["Uber", "Bolt", "Yango"],
      tips: [
        "Negotiate taxi fares before starting journey",
        "Tro-tros are cheap but crowded",
        "Uber/Bolt are reliable and safe",
        "Traffic is heavy during rush hours (7-9am, 5-7pm)",
      ],
    },
    restaurants: [
      {
        name: "Buka Restaurant",
        cuisine: "Ghanaian",
        priceRange: "$$",
        description: "Authentic local dishes in a traditional setting",
        url: "https://www.buka-restaurant.com",
      },
      {
        name: "Azmera Restaurant",
        cuisine: "Ethiopian/African",
        priceRange: "$$$",
        description: "Fine dining with Pan-African flavors",
        url: "https://www.azmeraaccra.com",
      },
      {
        name: "Chez Clarisse",
        cuisine: "Ivorian",
        priceRange: "$$",
        description: "Popular spot for West African cuisine",
        url: "https://www.chezclarisse.com",
      },
      {
        name: "Santoku",
        cuisine: "Japanese",
        priceRange: "$$$",
        description: "Modern Japanese dining experience",
        url: "https://www.santoku-accra.com",
      },
      {
        name: "Skybar 25",
        cuisine: "International",
        priceRange: "$$$",
        description: "Rooftop dining with city views",
        url: "https://www.skybar25.com.gh",
      },
    ],
    churches: [
      {
        name: "Holy Trinity Cathedral",
        address: "High Street, Accra",
        description: "Historic Anglican cathedral built in 1894",
        url: "https://www.tripadvisor.com/Attraction_Review-g293713-d317159-Reviews-Holy_Trinity_Cathedral-Accra_Greater_Accra_Region.html",
      },
      {
        name: "Christ the King Catholic Church",
        address: "Cantonments, Accra",
        description: "Beautiful Catholic church with modern architecture",
        url: "https://www.tripadvisor.com/Attraction_Review-g293713-d7455627-Reviews-Christ_The_King_Catholic_Church-Accra_Greater_Accra_Region.html",
      },
      {
        name: "Lighthouse Chapel International",
        address: "Spintex Road",
        description: "Large contemporary worship center",
        url: "https://www.tripadvisor.com/Attraction_Review-g293713-d1137533-Reviews-Lighthouse_Chapel_International-Accra_Greater_Accra_Region.html",
      },
    ],
    mosques: [
      {
        name: "Accra Central Mosque",
        address: "Kingsway, Accra Central",
        description: "The largest mosque in Accra with stunning architecture",
        url: "https://www.tripadvisor.com/Attraction_Review-g293713-d2401952-Reviews-Accra_Central_Mosque-Accra_Greater_Accra_Region.html",
      },
      {
        name: "Nima Mosque",
        address: "Nima, Accra",
        description: "Historic community mosque",
        url: "https://www.tripadvisor.com/Attraction_Review-g293713-d8945678-Reviews-Nima_Mosque-Accra_Greater_Accra_Region.html",
      },
    ],
    attractions: [
      {
        name: "Kwame Nkrumah Memorial Park",
        type: "Historical",
        description: "Memorial dedicated to Ghana's first president",
        url: "https://www.tripadvisor.com/Attraction_Review-g293713-d317162-Reviews-Kwame_Nkrumah_Mausoleum-Accra_Greater_Accra_Region.html",
      },
      {
        name: "Labadi Beach",
        type: "Beach",
        description: "Popular beach with live music and local food",
        url: "https://www.tripadvisor.com/Attraction_Review-g293713-d456638-Reviews-Labadi_Beach-Accra_Greater_Accra_Region.html",
      },
      {
        name: "Makola Market",
        type: "Market",
        description: "Bustling traditional market for local goods",
        url: "https://www.tripadvisor.com/Attraction_Review-g293713-d3267945-Reviews-Makola_Market-Accra_Greater_Accra_Region.html",
      },
      {
        name: "National Museum of Ghana",
        type: "Museum",
        description: "Showcases Ghana's cultural heritage",
        url: "https://www.tripadvisor.com/Attraction_Review-g293713-d316867-Reviews-National_Museum_of_Ghana-Accra_Greater_Accra_Region.html",
      },
      {
        name: "Jamestown",
        type: "Historical District",
        description: "Historic fishing community with colonial architecture",
        url: "https://www.tripadvisor.com/Attraction_Review-g293713-d687996-Reviews-Jamestown-Accra_Greater_Accra_Region.html",
      },
    ],
    events: [
      {
        name: "Chale Wote Street Art Festival",
        date: "August",
        description: "Annual street art and music festival in Jamestown",
      },
      {
        name: "Afrochella",
        date: "December",
        description: "Celebration of African culture and music",
      },
      {
        name: "Homowo Festival",
        date: "May-August",
        description: "Traditional Ga harvest festival",
      },
    ],
    hotels: [
      {
        name: "Kempinski Hotel Gold Coast City",
        stars: 5,
        area: "Airport City",
        description: "Luxury hotel with modern amenities",
        url: "https://www.kempinski.com/en/accra",
      },
      {
        name: "Labadi Beach Hotel",
        stars: 4,
        area: "La",
        description: "Beachfront resort with pools and spa",
        url: "https://www.labadibeachhotel.com",
      },
      {
        name: "Movenpick Ambassador Hotel",
        stars: 5,
        area: "Ridge",
        description: "Elegant hotel in diplomatic area",
        url: "https://www.movenpick.com/en/africa/ghana/accra",
      },
      {
        name: "Alisa Hotel",
        stars: 4,
        area: "North Ridge",
        description: "Boutique hotel with rooftop pool",
        url: "https://www.alisahotel.com",
      },
    ],
    banks: [
      {
        name: "Ecobank Ghana",
        branches: "Multiple locations across Accra",
        url: "https://www.ecobank.com",
      },
      {
        name: "Standard Chartered Bank",
        branches: "High Street, Osu, Airport",
        url: "https://www.sc.com/gh",
      },
      {
        name: "Stanbic Bank",
        branches: "Independence Avenue, Tema",
        url: "https://www.stanbicbank.com.gh",
      },
    ],
    holidays: [
      { name: "Independence Day", date: "March 6" },
      { name: "Founders' Day", date: "August 4" },
      { name: "Kwame Nkrumah Memorial Day", date: "September 21" },
      { name: "Christmas", date: "December 25" },
    ],
  },
  lagos: {
    id: "lagos",
    name: "Lagos",
    country: "Nigeria",
    language: ["English", "Yoruba", "Igbo", "Pidgin"],
    currency: "Nigerian Naira (NGN)",
    currencyCode: "NGN",
    timezone: "WAT (GMT+1)",
    timezoneOffset: "+1",
    description:
      "Nigeria's largest city and economic hub, known for its vibrant culture, music scene, and entrepreneurial spirit.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126841.3131214536!2d3.2015587376529253!3d6.548048387074895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1761212528086!5m2!1sen!2sus",
    climate: {
      type: "Tropical Savanna",
      averageTemp: "25-32°C (77-90°F)",
      rainySeasons: ["April-July", "September-November"],
      description: "Hot and humid with distinct wet and dry seasons",
    },
    visaInfo: {
      required: {
        "US Citizens": "Visa required - apply before travel",
        "EU Citizens": "Visa required - apply before travel",
        "ECOWAS Countries": "Visa-free entry",
      },
      notes:
        "E-visa available online. Processing takes 5-7 business days. Cost: $160 USD for tourist visa.",
    },
    costOfLiving: {
      meal: "$3-12",
      coffee: "$2-5",
      transport: "$0.30-3 per ride",
      hotel: "$30-200 per night",
    },
    emergencyContacts: {
      police: "112 or 767",
      ambulance: "112",
      fire: "112",
      embassy: "US Embassy: +234 9 461 4000",
    },
    healthInfo: {
      vaccinations: [
        "Yellow Fever (required)",
        "Hepatitis A & B",
        "Typhoid",
        "Meningitis",
        "Malaria prophylaxis",
      ],
      healthTips: [
        "Only drink bottled or filtered water",
        "Malaria prevention is essential",
        "Avoid raw foods and street food initially",
        "Keep medications in original packaging",
      ],
    },
    cuisine: [
      { dish: "Jollof Rice", description: "Nigeria's famous spicy rice dish" },
      { dish: "Suya", description: "Spicy grilled meat skewers" },
      { dish: "Pounded Yam & Egusi", description: "Yam with melon seed soup" },
      { dish: "Pepper Soup", description: "Spicy broth with meat or fish" },
      {
        dish: "Akara",
        description: "Fried bean cakes, popular breakfast item",
      },
    ],
    commonPhrases: [
      { english: "Hello", local: "Bawo ni", pronunciation: "bah-wo nee" },
      { english: "Thank you", local: "E se", pronunciation: "eh-sheh" },
      { english: "How much?", local: "Elo ni?", pronunciation: "eh-lo nee" },
      { english: "Goodbye", local: "O dabo", pronunciation: "oh dah-boh" },
      { english: "Yes", local: "Beeni", pronunciation: "beh-nee" },
      { english: "No", local: "Rara", pronunciation: "rah-rah" },
    ],
    culturalEtiquette: [
      "Respect for elders is paramount",
      "Greet people before starting conversations",
      "Use right hand for giving and receiving",
      "Dress conservatively, especially in religious areas",
      "Bargaining is common in markets",
      "Be patient with 'African time' - punctuality varies",
    ],
    bestTimeToVisit: {
      peak: "November-February (dry season, cooler weather)",
      offPeak: "March-October (hot and rainy)",
      recommendation:
        "December-February offers the best weather and numerous cultural events",
    },
    packingList: [
      "Light cotton clothing",
      "Strong mosquito repellent",
      "Sunscreen and sunglasses",
      "Rain gear (if visiting during rainy season)",
      "Comfortable sandals and closed shoes",
      "Power adapter (UK-style plugs)",
      "Anti-malaria medication",
      "Cash (USD or Naira)",
    ],
    transportation: {
      metro: "Lagos Blue Line (limited route) - expanding",
      taxi: ["Uber", "Bolt", "InDriver"],
      tips: [
        "Use ride-hailing apps for safety and convenience",
        "BRT buses are affordable and reliable",
        "Avoid yellow danfo buses unless familiar with routes",
        "Traffic (go-slow) is severe - plan extra travel time",
        "Water taxis available for island routes",
      ],
    },
    restaurants: [
      {
        name: "Terra Kulture",
        cuisine: "Nigerian",
        priceRange: "$$",
        description: "Cultural center with authentic Nigerian cuisine",
        url: "https://www.terrakulture.com",
      },
      {
        name: "Nkoyo",
        cuisine: "Nigerian",
        priceRange: "$$$",
        description: "Upscale Nigerian dining experience",
        url: "https://www.nkoyolagos.com",
      },
      {
        name: "Shiro",
        cuisine: "Asian Fusion",
        priceRange: "$$$",
        description: "Contemporary Asian cuisine",
        url: "https://www.shiro-restaurant.com",
      },
      {
        name: "Yellow Chilli",
        cuisine: "Indian",
        priceRange: "$$",
        description: "Popular Indian restaurant chain",
        url: "https://www.yellowchilli.com",
      },
      {
        name: "Cactus Restaurant",
        cuisine: "Lebanese",
        priceRange: "$$$",
        description: "Fine Lebanese dining on Victoria Island",
        url: "https://www.cactusrestaurant.com.ng",
      },
    ],
    churches: [
      {
        name: "Cathedral Church of Christ",
        address: "Marina, Lagos Island",
        description: "Historic Anglican cathedral from 1867",
        url: "https://www.tripadvisor.com/Attraction_Review-g293738-d316842-Reviews-Cathedral_Church_of_Christ-Lagos_Lagos_State.html",
      },
      {
        name: "Holy Cross Cathedral",
        address: "Catholic Mission Street",
        description: "Beautiful Catholic cathedral",
        url: "https://www.tripadvisor.com/Attraction_Review-g293738-d4566814-Reviews-Holy_Cross_Cathedral-Lagos_Lagos_State.html",
      },
      {
        name: "The Redeemed Christian Church of God",
        address: "Redemption Camp, Lagos-Ibadan Expressway",
        description: "Mega church and spiritual headquarters",
        url: "https://www.rccg.org",
      },
    ],
    mosques: [
      {
        name: "Central Mosque Lagos",
        address: "Nnamdi Azikiwe Street, Lagos Island",
        description: "Historic central mosque with beautiful architecture",
        url: "https://www.tripadvisor.com/Attraction_Review-g293738-d2464181-Reviews-Central_Mosque_Lagos-Lagos_Lagos_State.html",
      },
      {
        name: "Lekki Central Mosque",
        address: "Lekki Phase 1",
        description: "Modern mosque serving the Lekki community",
        url: "https://www.tripadvisor.com/Attraction_Review-g293738-d8912345-Reviews-Lekki_Central_Mosque-Lagos_Lagos_State.html",
      },
    ],
    attractions: [
      {
        name: "Nike Art Gallery",
        type: "Art Gallery",
        description: "Largest art gallery in West Africa",
        url: "https://www.nikeartgallery.com",
      },
      {
        name: "Lekki Conservation Centre",
        type: "Nature Reserve",
        description: "Nature reserve with canopy walkway",
        url: "https://www.lekki-conservationcentre.com",
      },
      {
        name: "Freedom Park",
        type: "Historical Park",
        description: "Former colonial prison turned cultural center",
        url: "https://www.freedompark.ng",
      },
      {
        name: "Elegushi Beach",
        type: "Beach",
        description: "Popular private beach with entertainment",
        url: "https://www.elegushibeach.com",
      },
      {
        name: "National Museum Lagos",
        type: "Museum",
        description: "Showcases Nigerian art and archaeology",
        url: "https://www.tripadvisor.com/Attraction_Review-g293738-d316940-Reviews-National_Museum_Lagos-Lagos_Lagos_State.html",
      },
    ],
    events: [
      {
        name: "Lagos Fashion Week",
        date: "October",
        description: "Premier fashion event in Africa",
      },
      {
        name: "Felabration",
        date: "October",
        description: "Annual music festival celebrating Fela Kuti",
      },
      {
        name: "Lagos International Jazz Festival",
        date: "April",
        description: "Celebration of jazz music",
      },
    ],
    hotels: [
      {
        name: "Eko Hotel & Suites",
        stars: 5,
        area: "Victoria Island",
        description: "Iconic luxury hotel with convention center",
        url: "https://www.ekohotels.com",
      },
      {
        name: "The Wheatbaker",
        stars: 5,
        area: "Ikoyi",
        description: "Boutique luxury hotel",
        url: "https://www.thewheatbaker.com",
      },
      {
        name: "Radisson Blu Anchorage Hotel",
        stars: 4,
        area: "Victoria Island",
        description: "Modern hotel with marina views",
        url: "https://www.radissonblu.com/hotel-lagos",
      },
      {
        name: "Four Points by Sheraton",
        stars: 4,
        area: "Oniru",
        description: "Contemporary hotel near the beach",
        url: "https://www.fourpoints.com/lagos",
      },
    ],
    banks: [
      {
        name: "GTBank",
        branches: "Widespread across Lagos",
        url: "https://www.gtbank.com",
      },
      {
        name: "Access Bank",
        branches: "Multiple locations in VI, Ikoyi, Lekki",
        url: "https://www.accessbankng.com",
      },
      {
        name: "Zenith Bank",
        branches: "Marina, Ikeja, Victoria Island",
        url: "https://www.zenithbank.com",
      },
    ],
    holidays: [
      { name: "New Year's Day", date: "January 1" },
      { name: "Independence Day", date: "October 1" },
      { name: "Democracy Day", date: "June 12" },
      { name: "Christmas", date: "December 25" },
    ],
  },
  newyork: {
    id: "newyork",
    name: "New York",
    country: "United States",
    language: ["English", "Spanish"],
    currency: "US Dollar (USD)",
    currencyCode: "USD",
    timezone: "EST (GMT-5) / EDT (GMT-4)",
    timezoneOffset: "-5/-4",
    description:
      "The city that never sleeps, a global center for culture, finance, and entertainment.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193597.01649873922!2d-74.1443110068152!3d40.6970243232665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1761212588110!5m2!1sen!2sus",
    climate: {
      type: "Humid Subtropical",
      averageTemp: "Winter: -3 to 4°C (27-39°F), Summer: 21-29°C (70-85°F)",
      rainySeasons: ["Year-round, heaviest in spring and summer"],
      description:
        "Four distinct seasons with cold winters and hot, humid summers",
    },
    visaInfo: {
      required: {
        "Visa Waiver Program":
          "ESTA required for 90-day stays (most EU, Japan, etc.)",
        "Other Countries": "B-2 tourist visa required",
        "Canadian Citizens": "No visa required",
      },
      notes:
        "ESTA costs $21 and is valid for 2 years. Apply at least 72 hours before travel.",
    },
    costOfLiving: {
      meal: "$15-40",
      coffee: "$4-7",
      transport: "$2.90 per subway ride",
      hotel: "$150-500+ per night",
    },
    emergencyContacts: {
      police: "911",
      ambulance: "911",
      fire: "911",
      embassy: "N/A - domestic travel",
    },
    healthInfo: {
      vaccinations: [
        "No special vaccinations required",
        "Routine vaccinations recommended",
      ],
      healthTips: [
        "Tap water is safe to drink",
        "Healthcare is excellent but expensive - get travel insurance",
        "Pharmacies (CVS, Walgreens) widely available",
        "Walk-in clinics available for minor issues",
      ],
    },
    cuisine: [
      {
        dish: "New York Pizza",
        description: "Thin-crust pizza sold by the slice",
      },
      {
        dish: "Bagels with Lox",
        description: "Toasted bagel with cream cheese and smoked salmon",
      },
      { dish: "Pastrami on Rye", description: "Classic deli sandwich" },
      {
        dish: "Hot Dogs",
        description: "Street cart staple with various toppings",
      },
      {
        dish: "Cheesecake",
        description: "Rich, creamy New York-style dessert",
      },
    ],
    commonPhrases: [
      {
        english: "Hello",
        local: "Hey / What's up",
        pronunciation: "standard English",
      },
      {
        english: "Thank you",
        local: "Thanks",
        pronunciation: "standard English",
      },
      {
        english: "Excuse me",
        local: "Excuse me / Sorry",
        pronunciation: "standard English",
      },
      {
        english: "Subway",
        local: "Train",
        pronunciation: "New Yorkers call it 'the train'",
      },
      {
        english: "Manhattan",
        local: "The City",
        pronunciation: "locals refer to Manhattan as 'the city'",
      },
    ],
    culturalEtiquette: [
      "Walk fast and stay to the right on sidewalks",
      "Don't block subway doors or stand on the left of escalators",
      "Tipping: 18-20% at restaurants, $1-2 per drink at bars",
      "Make eye contact and be direct in communication",
      "Don't stop in the middle of sidewalks",
      "It's okay to eat while walking",
    ],
    bestTimeToVisit: {
      peak: "September-November (fall foliage) and April-June (spring)",
      offPeak: "January-March (cold) and July-August (hot and humid)",
      recommendation:
        "Late spring (May) or early fall (September-October) for pleasant weather and fewer crowds",
    },
    packingList: [
      "Comfortable walking shoes (you'll walk a lot)",
      "Layers for varying temperatures",
      "Winter: Heavy coat, gloves, scarf (Dec-Feb)",
      "Summer: Light clothing, sunscreen",
      "Backpack or crossbody bag",
      "Reusable water bottle",
      "Portable phone charger",
      "Umbrella (rain is unpredictable)",
    ],
    transportation: {
      metro:
        "Extensive subway system (24/7) - use MetroCard or OMNY contactless payment",
      taxi: ["Yellow Cabs", "Uber", "Lyft", "Via"],
      tips: [
        "Subway is fastest and cheapest option",
        "Get unlimited MetroCard for multiple days",
        "Avoid taxis during rush hour (gridlock)",
        "Citi Bike for short trips",
        "Walking is often faster than driving in Manhattan",
      ],
    },
    restaurants: [
      {
        name: "Katz's Delicatessen",
        cuisine: "Jewish Deli",
        priceRange: "$$",
        description: "Iconic deli since 1888",
        url: "https://www.katzsdelicatessen.com",
      },
      {
        name: "Le Bernardin",
        cuisine: "French Seafood",
        priceRange: "$$$$",
        description: "Three Michelin star restaurant",
        url: "https://www.le-bernardin.com",
      },
      {
        name: "Joe's Pizza",
        cuisine: "Pizza",
        priceRange: "$",
        description: "Classic New York slice",
        url: "https://www.joespizzanyc.com",
      },
      {
        name: "Peter Luger Steak House",
        cuisine: "Steakhouse",
        priceRange: "$$$$",
        description: "Legendary Brooklyn steakhouse",
        url: "https://www.peterluger.com",
      },
      {
        name: "Momofuku Noodle Bar",
        cuisine: "Asian",
        priceRange: "$$",
        description: "Innovative Asian cuisine",
        url: "https://www.momofuku.com",
      },
    ],
    churches: [
      {
        name: "St. Patrick's Cathedral",
        address: "Fifth Avenue, Midtown",
        description: "Neo-Gothic Roman Catholic cathedral",
        url: "https://www.saintpatrickscathedral.org",
      },
      {
        name: "Trinity Church",
        address: "Wall Street, Financial District",
        description: "Historic Episcopal church from 1846",
        url: "https://www.trinitywallstreet.org",
      },
      {
        name: "Riverside Church",
        address: "Morningside Heights",
        description: "Interdenominational church with Gothic architecture",
        url: "https://www.riverside-church.org",
      },
    ],
    mosques: [
      {
        name: "Islamic Cultural Center of New York",
        address: "Third Avenue, Upper East Side",
        description: "Largest mosque in New York City",
        url: "https://www.iccny.org",
      },
      {
        name: "Masjid Malcolm Shabazz",
        address: "Harlem",
        description: "Historic mosque in Harlem",
        url: "https://www.tripadvisor.com/Attraction_Review-g60763-d108925-Reviews-Masjid_Malcolm_Shabazz-New_York_City_New_York.html",
      },
    ],
    attractions: [
      {
        name: "Statue of Liberty",
        type: "Monument",
        description: "Iconic symbol of freedom",
        url: "https://www.statuecruises.com",
      },
      {
        name: "Central Park",
        type: "Park",
        description: "843-acre urban park in Manhattan",
        url: "https://www.centralparknyc.org",
      },
      {
        name: "Times Square",
        type: "Entertainment District",
        description: "Bright lights and Broadway shows",
        url: "https://www.timessquarenyc.org",
      },
      {
        name: "Metropolitan Museum of Art",
        type: "Museum",
        description: "World-renowned art museum",
        url: "https://www.metmuseum.org",
      },
      {
        name: "Brooklyn Bridge",
        type: "Landmark",
        description: "Historic suspension bridge",
        url: "https://www.nycgo.com/brooklyn-bridge",
      },
    ],
    events: [
      {
        name: "New Year's Eve Ball Drop",
        date: "December 31",
        description: "Iconic Times Square celebration",
      },
      {
        name: "Macy's Thanksgiving Day Parade",
        date: "November",
        description: "Annual parade with giant balloons",
      },
      {
        name: "US Open Tennis",
        date: "August-September",
        description: "Grand Slam tennis tournament",
      },
    ],
    hotels: [
      {
        name: "The Plaza Hotel",
        stars: 5,
        area: "Midtown",
        description: "Legendary luxury hotel",
        url: "https://www.theplazany.com",
      },
      {
        name: "The Standard High Line",
        stars: 4,
        area: "Meatpacking District",
        description: "Modern hotel with Hudson River views",
        url: "https://www.standardhotels.com/new-york",
      },
      {
        name: "1 Hotel Brooklyn Bridge",
        stars: 5,
        area: "Brooklyn",
        description: "Eco-luxury hotel with Manhattan views",
        url: "https://www.1hotels.com/brooklyn-bridge",
      },
      {
        name: "The Bowery Hotel",
        stars: 4,
        area: "Lower East Side",
        description: "Boutique hotel with vintage charm",
        url: "https://www.theboweryhotel.com",
      },
    ],
    banks: [
      {
        name: "Chase Bank",
        branches: "Extensive network citywide",
        url: "https://www.chase.com",
      },
      {
        name: "Bank of America",
        branches: "Multiple locations in all boroughs",
        url: "https://www.bankofamerica.com",
      },
      {
        name: "Citibank",
        branches: "Widespread across Manhattan and outer boroughs",
        url: "https://www.citibank.com",
      },
    ],
    holidays: [
      { name: "Independence Day", date: "July 4" },
      { name: "Thanksgiving", date: "Fourth Thursday in November" },
      { name: "Memorial Day", date: "Last Monday in May" },
      { name: "Labor Day", date: "First Monday in September" },
    ],
  },
  tokyo: {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    language: ["Japanese"],
    currency: "Japanese Yen (JPY)",
    currencyCode: "JPY",
    timezone: "JST (GMT+9)",
    timezoneOffset: "+9",
    description:
      "A fascinating blend of traditional culture and cutting-edge technology, Japan's bustling capital.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d831455.1959383457!2d139.11045819162405!3d35.50744663467818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e0!3m2!1sen!2sus!4v1761212628381!5m2!1sen!2sus",
    climate: {
      type: "Humid Subtropical",
      averageTemp: "Winter: 5-10°C (41-50°F), Summer: 25-31°C (77-88°F)",
      rainySeasons: [
        "June-July (rainy season)",
        "September-October (typhoon season)",
      ],
      description: "Four distinct seasons with humid summers and mild winters",
    },
    visaInfo: {
      required: {
        "US Citizens": "Visa-free for up to 90 days",
        "EU Citizens": "Visa-free for up to 90 days",
        "Other Countries": "Check with Japanese embassy",
      },
      notes:
        "Tourist visa waiver for many countries. Ensure passport valid for duration of stay.",
    },
    costOfLiving: {
      meal: "$8-25",
      coffee: "$3-6",
      transport: "$2-5 per ride",
      hotel: "$60-300 per night",
    },
    emergencyContacts: {
      police: "110",
      ambulance: "119",
      fire: "119",
      embassy: "US Embassy: +81-3-3224-5000",
    },
    healthInfo: {
      vaccinations: [
        "No special vaccinations required",
        "Routine vaccinations up to date",
      ],
      healthTips: [
        "Tap water is safe to drink",
        "Excellent healthcare system",
        "Pharmacies widely available",
        "Bring prescription medications in original packaging",
        "Air quality is generally excellent",
      ],
    },
    cuisine: [
      {
        dish: "Sushi & Sashimi",
        description: "Fresh raw fish, an art form in Japan",
      },
      {
        dish: "Ramen",
        description: "Noodle soup with various broths and toppings",
      },
      {
        dish: "Tempura",
        description: "Lightly battered and fried seafood and vegetables",
      },
      { dish: "Tonkatsu", description: "Breaded and fried pork cutlet" },
      {
        dish: "Okonomiyaki",
        description: "Savory pancake with various ingredients",
      },
    ],
    commonPhrases: [
      {
        english: "Hello",
        local: "こんにちは (Konnichiwa)",
        pronunciation: "kon-nee-chee-wah",
      },
      {
        english: "Thank you",
        local: "ありがとう (Arigatou)",
        pronunciation: "ah-ree-gah-toh",
      },
      {
        english: "Excuse me",
        local: "すみません (Sumimasen)",
        pronunciation: "soo-mee-mah-sen",
      },
      {
        english: "How much?",
        local: "いくらですか (Ikura desu ka)",
        pronunciation: "ee-koo-rah dess kah",
      },
      { english: "Yes", local: "はい (Hai)", pronunciation: "high" },
      { english: "No", local: "いいえ (Iie)", pronunciation: "ee-eh" },
    ],
    culturalEtiquette: [
      "Bow when greeting (slight bow is sufficient)",
      "Remove shoes when entering homes and some restaurants",
      "Don't tip - it can be considered rude",
      "Be quiet on public transportation",
      "Don't eat while walking",
      "Slurp your noodles - it's a compliment to the chef",
      "Use both hands when giving/receiving business cards",
    ],
    bestTimeToVisit: {
      peak: "March-May (cherry blossoms) and October-November (fall colors)",
      offPeak: "December-February (cold) and July-August (hot and humid)",
      recommendation:
        "Late March-April for cherry blossoms or October-November for autumn foliage and pleasant weather",
    },
    packingList: [
      "Comfortable walking shoes (remove easily for temples)",
      "Modest clothing for temple visits",
      "Light layers (buildings are climate-controlled)",
      "Pocket WiFi or SIM card",
      "Cash (many places don't accept cards)",
      "Portable phone charger",
      "Umbrella (for rain or sun)",
      "Hand towel (restrooms may not have paper towels)",
    ],
    transportation: {
      metro:
        "Extensive and punctual subway/train system - get Suica or Pasmo IC card",
      taxi: ["Regular taxis (expensive)", "Uber (limited)", "JapanTaxi app"],
      tips: [
        "Trains are the best way to get around",
        "Get IC card (Suica/Pasmo) for easy payment",
        "Download Tokyo Metro app for navigation",
        "Taxis are clean but expensive",
        "Most signs have English translations",
        "Last trains run around midnight",
      ],
    },
    restaurants: [
      {
        name: "Sukiyabashi Jiro",
        cuisine: "Sushi",
        priceRange: "$$$$",
        description: "Three Michelin star sushi restaurant",
        url: "https://www.sushi-jiro.jp",
      },
      {
        name: "Ichiran Ramen",
        cuisine: "Ramen",
        priceRange: "$",
        description: "Famous tonkotsu ramen chain",
        url: "https://www.ichiran.com",
      },
      {
        name: "Narisawa",
        cuisine: "Innovative Japanese",
        priceRange: "$$$$",
        description: "Two Michelin star innovative cuisine",
        url: "https://www.narisawa.com",
      },
      {
        name: "Tsukiji Outer Market",
        cuisine: "Seafood/Various",
        priceRange: "$$",
        description: "Fresh seafood and street food",
        url: "https://www.tsukiji.or.jp",
      },
      {
        name: "Gonpachi",
        cuisine: "Japanese",
        priceRange: "$$",
        description: "Traditional izakaya, inspiration for Kill Bill",
        url: "https://www.gonpachi.jp",
      },
    ],
    churches: [
      {
        name: "St. Mary's Cathedral",
        address: "Sekiguchi, Bunkyo",
        description: "Modern Catholic cathedral with unique architecture",
        url: "https://www.stmaryscathedral.jp",
      },
      {
        name: "Nikolai-do",
        address: "Kanda, Chiyoda",
        description: "Russian Orthodox cathedral",
        url: "https://www.nikolaido.jp",
      },
    ],
    mosques: [
      {
        name: "Tokyo Camii",
        address: "Yoyogi, Shibuya",
        description: "Largest mosque in Japan with Turkish architecture",
        url: "https://www.tokyo-camii.org",
      },
    ],
    attractions: [
      {
        name: "Senso-ji Temple",
        type: "Temple",
        description: "Tokyo's oldest Buddhist temple",
        url: "https://www.senso-ji.jp",
      },
      {
        name: "Tokyo Skytree",
        type: "Observation Tower",
        description: "Tallest structure in Japan",
        url: "https://www.tokyo-skytree.jp",
      },
      {
        name: "Meiji Shrine",
        type: "Shinto Shrine",
        description: "Peaceful shrine in forested grounds",
        url: "https://www.meijijingu.or.jp",
      },
      {
        name: "Shibuya Crossing",
        type: "Landmark",
        description: "World's busiest pedestrian crossing",
        url: "https://www.gotokyo.org/en/spot/1513",
      },
      {
        name: "Tsukiji Outer Market",
        type: "Market",
        description: "Famous fish market and food stalls",
        url: "https://www.tsukiji.or.jp",
      },
    ],
    events: [
      {
        name: "Cherry Blossom Season",
        date: "Late March - Early April",
        description: "Hanami flower viewing celebrations",
      },
      {
        name: "Sumida River Fireworks",
        date: "July",
        description: "Spectacular fireworks festival",
      },
      {
        name: "Sanja Matsuri",
        date: "May",
        description: "One of Tokyo's largest festivals",
      },
    ],
    hotels: [
      {
        name: "The Peninsula Tokyo",
        stars: 5,
        area: "Marunouchi",
        description: "Luxury hotel near Imperial Palace",
        url: "https://www.peninsula.com/en/tokyo",
      },
      {
        name: "Park Hyatt Tokyo",
        stars: 5,
        area: "Shinjuku",
        description: "Iconic hotel featured in Lost in Translation",
        url: "https://www.hyatt.com/park-hyatt-tokyo",
      },
      {
        name: "Aman Tokyo",
        stars: 5,
        area: "Otemachi",
        description: "Serene luxury in the city center",
        url: "https://www.aman.com/resorts/aman-tokyo",
      },
      {
        name: "Hotel Gracery Shinjuku",
        stars: 3,
        area: "Shinjuku",
        description: "Modern hotel with Godzilla head",
        url: "https://www.gracery.com/shinjuku",
      },
    ],
    banks: [
      {
        name: "MUFG Bank",
        branches: "Extensive network across Tokyo",
        url: "https://www.mufg.jp",
      },
      {
        name: "Mizuho Bank",
        branches: "Major branches in business districts",
        url: "https://www.mizuhobank.co.jp",
      },
      {
        name: "Japan Post Bank",
        branches: "Post offices throughout the city",
        url: "https://www.jp-bank.japanpost.jp",
      },
    ],
    holidays: [
      { name: "New Year's Day", date: "January 1" },
      { name: "Golden Week", date: "Late April - Early May" },
      { name: "Respect for the Aged Day", date: "Third Monday in September" },
      { name: "Culture Day", date: "November 3" },
    ],
  },
  beijing: {
    id: "beijing",
    name: "Beijing",
    country: "China",
    language: ["Mandarin Chinese"],
    currency: "Chinese Yuan (CNY)",
    currencyCode: "CNY",
    timezone: "CST (GMT+8)",
    timezoneOffset: "+8",
    description:
      "China's capital, a city where ancient imperial history meets modern development.",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391569.00982833456!2d116.0678284320727!3d39.938417075170065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f05296e7142cb9%3A0xb9625620af0fa98a!2sBeijing%2C%20China!5e0!3m2!1sen!2sus!4v1761212650891!5m2!1sen!2sus",
    climate: {
      type: "Continental Monsoon",
      averageTemp: "Winter: -5 to 2°C (23-36°F), Summer: 26-31°C (79-88°F)",
      rainySeasons: ["July-August"],
      description:
        "Hot, humid summers and cold, dry winters with four distinct seasons",
    },
    visaInfo: {
      required: {
        "Most Countries": "Visa required - apply before travel",
        "144-hour Transit":
          "Visa-free transit available for some nationalities",
        "Special Cases": "Check with Chinese embassy",
      },
      notes:
        "Tourist visa (L visa) required for most visitors. Processing takes 4-7 days. Cost varies by nationality.",
    },
    costOfLiving: {
      meal: "$3-15",
      coffee: "$3-6",
      transport: "$0.30-1 per ride",
      hotel: "$40-200 per night",
    },
    emergencyContacts: {
      police: "110",
      ambulance: "120",
      fire: "119",
      embassy: "US Embassy: +86-10-8531-3000",
    },
    healthInfo: {
      vaccinations: [
        "Routine vaccinations",
        "Hepatitis A & B recommended",
        "Typhoid recommended",
      ],
      healthTips: [
        "Don't drink tap water - use bottled water",
        "Air quality can be poor - check AQI daily",
        "Bring face masks for pollution",
        "International hospitals available but expensive",
        "Bring prescription medications (with documentation)",
      ],
    },
    cuisine: [
      {
        dish: "Peking Duck",
        description: "Crispy roasted duck, Beijing's signature dish",
      },
      {
        dish: "Jiaozi (Dumplings)",
        description: "Steamed or fried dumplings with various fillings",
      },
      {
        dish: "Zhajiangmian",
        description: "Noodles with savory soybean paste",
      },
      {
        dish: "Hot Pot",
        description: "Interactive dining with boiling broth and ingredients",
      },
      {
        dish: "Baozi",
        description: "Steamed buns with meat or vegetable filling",
      },
    ],
    commonPhrases: [
      { english: "Hello", local: "你好 (Nǐ hǎo)", pronunciation: "nee how" },
      {
        english: "Thank you",
        local: "谢谢 (Xièxiè)",
        pronunciation: "shyeh-shyeh",
      },
      {
        english: "How much?",
        local: "多少钱 (Duōshao qián)",
        pronunciation: "dwor-shaow chyen",
      },
      {
        english: "Excuse me",
        local: "不好意思 (Bù hǎoyìsi)",
        pronunciation: "boo how-ee-suh",
      },
      { english: "Yes", local: "是 (Shì)", pronunciation: "shir" },
      { english: "No", local: "不是 (Bù shì)", pronunciation: "boo shir" },
    ],
    culturalEtiquette: [
      "Learn basic Mandarin phrases - English is limited",
      "Bring business cards if meeting locals",
      "Don't tip - not customary in China",
      "Bargaining expected in markets",
      "Avoid discussing politics",
      "Use both hands when giving/receiving items",
      "Finish your plate to show appreciation",
    ],
    bestTimeToVisit: {
      peak: "September-October (fall) and April-May (spring)",
      offPeak: "December-February (very cold) and July-August (hot and rainy)",
      recommendation:
        "September-October for comfortable weather, clear skies, and autumn colors",
    },
    packingList: [
      "VPN service (for accessing blocked websites)",
      "Translation app (download offline)",
      "Cash (many places don't accept foreign cards)",
      "Winter: Heavy coat, thermal layers (Dec-Feb)",
      "Face masks (for pollution)",
      "Comfortable walking shoes",
      "Power adapter (Type A/C/I plugs)",
      "Portable WiFi or local SIM card",
    ],
    transportation: {
      metro: "Extensive subway system (22 lines) - get Yikatong card",
      taxi: ["DiDi (Chinese Uber)", "Regular taxis (metered)"],
      tips: [
        "Subway is cheap, clean, and efficient",
        "Get Yikatong card for easy payment",
        "Download DiDi app for ride-hailing",
        "Have destination written in Chinese characters",
        "Avoid taxis during rush hour",
        "Bike-sharing widely available (Mobike, Ofo)",
      ],
    },
    restaurants: [
      {
        name: "Quanjude",
        cuisine: "Peking Duck",
        priceRange: "$$",
        description: "Famous for authentic Peking duck since 1864",
        url: "https://www.quanjude.com.cn",
      },
      {
        name: "Din Tai Fung",
        cuisine: "Taiwanese",
        priceRange: "$$",
        description: "Renowned for xiaolongbao dumplings",
        url: "https://www.dintaifung.com.cn",
      },
      {
        name: "TRB Hutong",
        cuisine: "European",
        priceRange: "$$$",
        description: "Fine dining in a historic temple",
        url: "https://www.trbhutong.com",
      },
      {
        name: "Ghost Street (Gui Jie)",
        cuisine: "Various Chinese",
        priceRange: "$-$$",
        description: "Famous food street with numerous restaurants",
        url: "https://www.guijie.com.cn",
      },
      {
        name: "King's Joy",
        cuisine: "Vegetarian",
        priceRange: "$$$",
        description: "Michelin-starred vegetarian restaurant",
        url: "https://www.kingsjoy.com.cn",
      },
    ],
    churches: [
      {
        name: "St. Joseph's Church (Wangfujing)",
        address: "Wangfujing Street",
        description: "Historic Catholic church built in 1655",
        url: "https://www.tripadvisor.com/Attraction_Review-g294212-d1179395-Reviews-St_Joseph_s_Church_Wangfujing_Church-Beijing.html",
      },
      {
        name: "South Cathedral",
        address: "Xuanwumen",
        description: "Oldest Catholic church in Beijing",
        url: "https://www.tripadvisor.com/Attraction_Review-g294212-d1179390-Reviews-South_Cathedral-Beijing.html",
      },
    ],
    mosques: [
      {
        name: "Niujie Mosque",
        address: "Niujie, Xicheng District",
        description: "Oldest mosque in Beijing, built in 996 AD",
        url: "https://www.tripadvisor.com/Attraction_Review-g294212-d1179508-Reviews-Niujie_Mosque-Beijing.html",
      },
      {
        name: "Dongsi Mosque",
        address: "Dongsi South Street",
        description: "Historic mosque with Chinese architectural style",
        url: "https://www.tripadvisor.com/Attraction_Review-g294212-d1179509-Reviews-Dongsi_Mosque-Beijing.html",
      },
    ],
    attractions: [
      {
        name: "The Great Wall",
        type: "Historical Monument",
        description: "Ancient fortification, UNESCO World Heritage Site",
        url: "https://www.greatwall.cn",
      },
      {
        name: "Forbidden City",
        type: "Palace Museum",
        description: "Imperial palace complex from Ming and Qing dynasties",
        url: "https://www.dpm.org.cn",
      },
      {
        name: "Temple of Heaven",
        type: "Temple",
        description: "Imperial complex for ceremonial purposes",
        url: "https://www.tiantanpark.com.cn",
      },
      {
        name: "Summer Palace",
        type: "Palace",
        description: "Vast ensemble of lakes, gardens and palaces",
        url: "https://www.summerpalace.com.cn",
      },
      {
        name: "Tiananmen Square",
        type: "Public Square",
        description: "One of the world's largest public squares",
        url: "https://www.tripadvisor.com/Attraction_Review-g294212-d318897-Reviews-Tiananmen_Square-Beijing.html",
      },
    ],
    events: [
      {
        name: "Chinese New Year",
        date: "January/February (Lunar Calendar)",
        description: "Major celebration with fireworks and festivities",
      },
      {
        name: "Mid-Autumn Festival",
        date: "September/October (Lunar Calendar)",
        description: "Moon viewing and mooncake celebration",
      },
      {
        name: "Dragon Boat Festival",
        date: "June (Lunar Calendar)",
        description: "Traditional boat races and zongzi",
      },
    ],
    hotels: [
      {
        name: "The Peninsula Beijing",
        stars: 5,
        area: "Wangfujing",
        description: "Luxury hotel near Forbidden City",
        url: "https://www.peninsula.com/en/beijing",
      },
      {
        name: "Aman at Summer Palace",
        stars: 5,
        area: "Summer Palace",
        description: "Exclusive resort in historic setting",
        url: "https://www.aman.com/resorts/aman-summer-palace-beijing",
      },
      {
        name: "The Opposite House",
        stars: 5,
        area: "Sanlitun",
        description: "Contemporary design hotel",
        url: "https://www.theoppositehouse.com",
      },
      {
        name: "Hotel Jen Beijing",
        stars: 4,
        area: "CBD",
        description: "Modern hotel in business district",
        url: "https://www.jenbeijing.com",
      },
    ],
    banks: [
      {
        name: "Bank of China",
        branches: "Extensive network throughout Beijing",
        url: "https://www.boc.cn",
      },
      {
        name: "ICBC",
        branches: "Major branches in all districts",
        url: "https://www.icbc.com.cn",
      },
      {
        name: "China Construction Bank",
        branches: "Widespread across the city",
        url: "https://www.ccb.com",
      },
    ],
    holidays: [
      { name: "National Day", date: "October 1" },
      { name: "Labour Day", date: "May 1" },
      { name: "Qingming Festival", date: "April 4-6" },
      { name: "Dragon Boat Festival", date: "Varies (Lunar Calendar)" },
    ],
  },
};

export const flightRoutes: FlightRoute[] = [
  {
    from: "accra",
    to: "lagos",
    airlines: ["Africa World Airlines", "Air Peace", "ASKY Airlines"],
    duration: "1h 15m",
    airlineUrls: [
      "https://www.africaworldairlines.com",
      "https://www.flyairpeace.com",
      "https://www.flyasky.com",
    ],
  },
  {
    from: "accra",
    to: "newyork",
    airlines: ["Delta Air Lines", "United Airlines", "KLM (via Amsterdam)"],
    duration: "11h 30m",
    airlineUrls: [
      "https://www.delta.com",
      "https://www.united.com",
      "https://www.klm.com",
    ],
  },
  {
    from: "accra",
    to: "tokyo",
    airlines: ["Ethiopian Airlines (via Addis Ababa)", "Emirates (via Dubai)"],
    duration: "18h+",
    airlineUrls: [
      "https://www.ethiopianairlines.com",
      "https://www.emirates.com",
    ],
  },
  {
    from: "accra",
    to: "beijing",
    airlines: [
      "Ethiopian Airlines (via Addis Ababa)",
      "Kenya Airways (via Nairobi)",
    ],
    duration: "17h+",
    airlineUrls: [
      "https://www.ethiopianairlines.com",
      "https://www.kenya-airways.com",
    ],
  },

  {
    from: "lagos",
    to: "accra",
    airlines: ["Africa World Airlines", "Air Peace", "ASKY Airlines"],
    duration: "1h 15m",
    airlineUrls: [
      "https://www.africaworldairlines.com",
      "https://www.flyairpeace.com",
      "https://www.flyasky.com",
    ],
  },
  {
    from: "lagos",
    to: "newyork",
    airlines: ["Delta Air Lines", "United Airlines", "Virgin Atlantic"],
    duration: "11h",
    airlineUrls: [
      "https://www.delta.com",
      "https://www.united.com",
      "https://www.virgin-atlantic.com",
    ],
  },
  {
    from: "lagos",
    to: "tokyo",
    airlines: ["Ethiopian Airlines (via Addis Ababa)", "Emirates (via Dubai)"],
    duration: "17h+",
    airlineUrls: [
      "https://www.ethiopianairlines.com",
      "https://www.emirates.com",
    ],
  },
  {
    from: "lagos",
    to: "beijing",
    airlines: ["Ethiopian Airlines (via Addis Ababa)", "Air China (via Dubai)"],
    duration: "16h+",
    airlineUrls: [
      "https://www.ethiopianairlines.com",
      "https://www.airchina.com",
    ],
  },

  {
    from: "newyork",
    to: "accra",
    airlines: ["Delta Air Lines", "United Airlines", "KLM (via Amsterdam)"],
    duration: "11h 30m",
    airlineUrls: [
      "https://www.delta.com",
      "https://www.united.com",
      "https://www.klm.com",
    ],
  },
  {
    from: "newyork",
    to: "lagos",
    airlines: ["Delta Air Lines", "United Airlines", "Virgin Atlantic"],
    duration: "11h",
    airlineUrls: [
      "https://www.delta.com",
      "https://www.united.com",
      "https://www.virgin-atlantic.com",
    ],
  },
  {
    from: "newyork",
    to: "tokyo",
    airlines: ["ANA", "Japan Airlines", "United Airlines"],
    duration: "14h",
    airlineUrls: [
      "https://www.ana.co.jp",
      "https://www.jal.co.jp",
      "https://www.united.com",
    ],
  },
  {
    from: "newyork",
    to: "beijing",
    airlines: ["Air China", "United Airlines", "American Airlines"],
    duration: "13h 30m",
    airlineUrls: [
      "https://www.airchina.com",
      "https://www.united.com",
      "https://www.aa.com",
    ],
  },

  {
    from: "tokyo",
    to: "accra",
    airlines: ["Ethiopian Airlines (via Addis Ababa)", "Emirates (via Dubai)"],
    duration: "18h+",
    airlineUrls: [
      "https://www.ethiopianairlines.com",
      "https://www.emirates.com",
    ],
  },
  {
    from: "tokyo",
    to: "lagos",
    airlines: ["Ethiopian Airlines (via Addis Ababa)", "Emirates (via Dubai)"],
    duration: "17h+",
    airlineUrls: [
      "https://www.ethiopianairlines.com",
      "https://www.emirates.com",
    ],
  },
  {
    from: "tokyo",
    to: "newyork",
    airlines: ["ANA", "Japan Airlines", "United Airlines"],
    duration: "13h",
    airlineUrls: [
      "https://www.ana.co.jp",
      "https://www.jal.co.jp",
      "https://www.united.com",
    ],
  },
  {
    from: "tokyo",
    to: "beijing",
    airlines: ["ANA", "Air China", "Japan Airlines"],
    duration: "3h 30m",
    airlineUrls: [
      "https://www.ana.co.jp",
      "https://www.airchina.com",
      "https://www.jal.co.jp",
    ],
  },

  {
    from: "beijing",
    to: "accra",
    airlines: [
      "Ethiopian Airlines (via Addis Ababa)",
      "Kenya Airways (via Nairobi)",
    ],
    duration: "17h+",
    airlineUrls: [
      "https://www.ethiopianairlines.com",
      "https://www.kenya-airways.com",
    ],
  },
  {
    from: "beijing",
    to: "lagos",
    airlines: ["Ethiopian Airlines (via Addis Ababa)", "Air China (via Dubai)"],
    duration: "16h+",
    airlineUrls: [
      "https://www.ethiopianairlines.com",
      "https://www.airchina.com",
    ],
  },
  {
    from: "beijing",
    to: "newyork",
    airlines: ["Air China", "United Airlines", "American Airlines"],
    duration: "13h 30m",
    airlineUrls: [
      "https://www.airchina.com",
      "https://www.united.com",
      "https://www.aa.com",
    ],
  },
  {
    from: "beijing",
    to: "tokyo",
    airlines: ["ANA", "Air China", "Japan Airlines"],
    duration: "3h 30m",
    airlineUrls: [
      "https://www.ana.co.jp",
      "https://www.airchina.com",
      "https://www.jal.co.jp",
    ],
  },
];

export function getFlightRoute(
  from: string,
  to: string
): FlightRoute | undefined {
  return flightRoutes.find((route) => route.from === from && route.to === to);
}

export interface DistanceInfo {
  from: string;
  to: string;
  distance: string;
  flightDuration: string;
}

export const distances: DistanceInfo[] = [
  { from: "accra", to: "lagos", distance: "540 km", flightDuration: "1h 15m" },
  {
    from: "accra",
    to: "newyork",
    distance: "8,270 km",
    flightDuration: "11h 30m",
  },
  { from: "accra", to: "tokyo", distance: "13,800 km", flightDuration: "18h+" },
  {
    from: "accra",
    to: "beijing",
    distance: "12,900 km",
    flightDuration: "17h+",
  },
  { from: "lagos", to: "newyork", distance: "8,500 km", flightDuration: "11h" },
  { from: "lagos", to: "tokyo", distance: "13,600 km", flightDuration: "17h+" },
  {
    from: "lagos",
    to: "beijing",
    distance: "12,700 km",
    flightDuration: "16h+",
  },
  {
    from: "newyork",
    to: "tokyo",
    distance: "10,850 km",
    flightDuration: "14h",
  },
  {
    from: "newyork",
    to: "beijing",
    distance: "11,000 km",
    flightDuration: "13h 30m",
  },
  {
    from: "tokyo",
    to: "beijing",
    distance: "2,100 km",
    flightDuration: "3h 30m",
  },
];

export function getDistance(
  from: string,
  to: string
): DistanceInfo | undefined {
  return (
    distances.find((d) => d.from === from && d.to === to) ||
    distances.find((d) => d.from === to && d.to === from)
  );
}

// Static exchange rates (as of reference date - for calculation purposes only)
export const exchangeRates: Record<string, number> = {
  USD: 1,
  GHS: 15.8, // Ghanaian Cedi
  NGN: 1650, // Nigerian Naira
  JPY: 149, // Japanese Yen
  CNY: 7.24, // Chinese Yuan
};
