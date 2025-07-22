const properties = [
  {
    id: 1,
    title: "Luxury Beverly Hills Estate",
    price: 12500000,
    status: "sale", // sale, sold, lease
    images: [
      "/images/beverly-hills.jpg",
      "/images/slider1.jpg",
      "/images/slider2.jpg",
      "/images/slider3.jpeg"
    ],
    lat: 34.0736,
    lng: -118.4004,
    description: "Spectacular luxury estate in the heart of Beverly Hills featuring panoramic city views, chef's kitchen, and resort-style amenities. This architectural masterpiece offers the ultimate in sophisticated living with premium finishes throughout.",
    area: 8500, // square feet
    bedrooms: 6,
    bathrooms: 8,
    address: "123 Summit Drive, Beverly Hills, CA 90210",
    features: [
      "Panoramic city views",
      "Chef's kitchen",
      "Resort-style pool",
      "Wine cellar",
      "Home theater",
      "3-car garage"
    ],
    contactDealer: {
      name: "Bachir Chihani",
      phone: "(310)-722-7727",
      email: "bachir@oueida.com"
    }
  },
  {
    id: 2,
    title: "Modern Malibu Oceanfront",
    price: 8750000,
    status: "sale",
    images: [
      "/images/malibu.jpg",
      "/images/highrises1.jpg",
      "/images/highrises2.jpg",
      "/images/bg-house.jpg"
    ],
    lat: 34.0259,
    lng: -118.7798,
    description: "Stunning oceanfront property with direct beach access. This contemporary home features floor-to-ceiling windows, open-concept design, and breathtaking Pacific Ocean views from every room.",
    area: 6200,
    bedrooms: 4,
    bathrooms: 5,
    address: "456 Pacific Coast Highway, Malibu, CA 90265",
    features: [
      "Direct beach access",
      "Ocean views",
      "Open concept design",
      "Infinity pool",
      "Outdoor kitchen",
      "Private beach"
    ],
    contactDealer: {
      name: "Bachir Chihani",
      phone: "(310)-722-7727",
      email: "bachir@oueida.com"
    }
  },
  {
    id: 3,
    title: "Bel Air Mansion",
    price: 15000000,
    status: "sold",
    images: [
      "/images/bel-air.jpg",
      "/images/highrises3.jpg",
      "/images/slider1.jpg",
      "/images/bg-century.png"
    ],
    lat: 34.0813,
    lng: -118.4311,
    description: "Magnificent Bel Air estate with classic architecture and modern amenities. This property offers complete privacy and luxury living in one of LA's most prestigious neighborhoods.",
    area: 12000,
    bedrooms: 8,
    bathrooms: 10,
    address: "789 Stone Canyon Road, Bel Air, CA 90077",
    features: [
      "Gated entrance",
      "Tennis court",
      "Guest house",
      "Formal gardens",
      "Library",
      "Gym and spa"
    ],
    contactDealer: {
      name: "Bachir Chihani",
      phone: "(310)-722-7727",
      email: "bachir@oueida.com"
    }
  },
  {
    id: 4,
    title: "Marina del Rey High-Rise",
    price: 12000,
    status: "lease",
    images: [
      "/images/marina-del-rey.jpg",
      "/images/highrises1.jpg",
      "/images/highrises2.jpg",
      "/images/highrises3.jpg"
    ],
    lat: 33.9806,
    lng: -118.4517,
    description: "Luxurious high-rise apartment with stunning marina and ocean views. Located in a full-service building with concierge, fitness center, and rooftop amenities.",
    area: 2800,
    bedrooms: 3,
    bathrooms: 3,
    address: "4101 Via Marina, Marina del Rey, CA 90292",
    features: [
      "Marina views",
      "Concierge service",
      "Fitness center",
      "Rooftop deck",
      "Parking included",
      "24-hour security"
    ],
    contactDealer: {
      name: "Bachir Chihani",
      phone: "(310)-722-7727",
      email: "bachir@oueida.com"
    }
  },
  {
    id: 5,
    title: "Pacific Palisades Family Home",
    price: 6500000,
    status: "sale",
    images: [
      "/images/pacific-palisades.jpg",
      "/images/slider2.jpg",
      "/images/bg-house.jpg",
      "/images/slider3.jpeg"
    ],
    lat: 34.0522,
    lng: -118.5158,
    description: "Beautifully renovated family home in prestigious Pacific Palisades. Features include a gourmet kitchen, spacious family room, and a stunning backyard perfect for entertaining.",
    area: 4500,
    bedrooms: 5,
    bathrooms: 4,
    address: "101 Sunset Boulevard, Pacific Palisades, CA 90272",
    features: [
      "Gourmet kitchen",
      "Spacious backyard",
      "Hardwood floors",
      "Fireplace",
      "Walk to beach",
      "Top-rated schools"
    ],
    contactDealer: {
      name: "Bachir Chihani",
      phone: "(310)-722-7727",
      email: "bachir@oueida.com"
    }
  },
  {
    id: 6,
    title: "Holmby Hills Estate",
    price: 18500000,
    status: "sold",
    images: [
      "/images/holmby-hills.jpg",
      "/images/slider1.jpg",
      "/images/bg-century.png",
      "/images/slider2.jpg"
    ],
    lat: 34.0813,
    lng: -118.4311,
    description: "Extraordinary estate in the prestigious Holmby Hills neighborhood. This property offers unparalleled luxury with custom finishes, extensive grounds, and complete privacy.",
    area: 15000,
    bedrooms: 10,
    bathrooms: 12,
    address: "202 Carolwood Drive, Holmby Hills, CA 90077",
    features: [
      "Custom finishes",
      "Extensive grounds",
      "Pool and spa",
      "Motor court",
      "Staff quarters",
      "Complete privacy"
    ],
    contactDealer: {
      name: "Bachir Chihani",
      phone: "(310)-722-7727",
      email: "bachir@oueida.com"
    }
  },
  {
    id: 7,
    title: "Brentwood Penthouse",
    price: 8500,
    status: "lease",
    images: [
      "/images/brentwood.jpg",
      "/images/highrises2.jpg",
      "/images/highrises3.jpg",
      "/images/slider3.jpeg"
    ],
    lat: 34.0522,
    lng: -118.4719,
    description: "Stunning penthouse apartment in the heart of Brentwood. Features include floor-to-ceiling windows, private terrace, and high-end finishes throughout.",
    area: 3200,
    bedrooms: 3,
    bathrooms: 3,
    address: "11777 San Vicente Boulevard, Brentwood, CA 90049",
    features: [
      "Penthouse level",
      "Private terrace",
      "High-end finishes",
      "Concierge service",
      "Valet parking",
      "Building amenities"
    ],
    contactDealer: {
      name: "Bachir Chihani",
      phone: "(310)-722-7727",
      email: "bachir@oueida.com"
    }
  },
  {
    id: 8,
    title: "Trousdale Estates Modern",
    price: 11200000,
    status: "sale",
    images: [
      "/images/trousdale-estates.jpg",
      "/images/slider1.jpg",
      "/images/highrises1.jpg",
      "/images/bg-house.jpg"
    ],
    lat: 34.0913,
    lng: -118.4157,
    description: "Ultra-modern architectural masterpiece in exclusive Trousdale Estates. This property showcases the finest in contemporary design with breathtaking city and ocean views.",
    area: 7800,
    bedrooms: 5,
    bathrooms: 6,
    address: "1234 Loma Vista Drive, Trousdale Estates, CA 90210",
    features: [
      "Architectural design",
      "City and ocean views",
      "Modern amenities",
      "Infinity pool",
      "Smart home technology",
      "Private setting"
    ],
    contactDealer: {
      name: "Bachir Chihani",
      phone: "(310)-722-7727",
      email: "bachir@oueida.com"
    }
  }
];

export default properties; 