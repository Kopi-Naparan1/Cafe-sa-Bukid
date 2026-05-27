import {
  cafeSaBukidCoordinates,
  cafeSaBukidGoogleMapsUrl,
} from "./location";

const [latitude, longitude] = cafeSaBukidCoordinates.split(",");

export const siteUrl = "https://cafesabukid.com";

export const businessInfo = {
  name: "Cafe sa Bukid",
  description:
    "Cafe sa Bukid is a Bukidnon cafe serving coffee, comfort food, and relaxed countryside dining near Dahilayan.",
  address: {
    streetAddress: "Sayre Highway, Dahilayan",
    addressLocality: "Manolo Fortich",
    addressRegion: "Bukidnon",
    postalCode: "8703",
    addressCountry: "PH",
  },
  phone: "+63 930 400 9175",
  email: "cafesabukid@gmail.com",
  facebookUrl: "https://www.facebook.com/CafesaBukid",
  mapsUrl: cafeSaBukidGoogleMapsUrl,
  latitude,
  longitude,
  openingHours: "Mo-Su 08:00-20:00",
  priceRange: "PHP",
};

export const defaultSeo = {
  title: "Cafe sa Bukid",
  description: businessInfo.description,
  image: "/images/newImages/cafe%20sa%20bukid.jpg",
};

export const routes = [
  {
    path: "/",
    title: "Coffee, Comfort Food, and Bukidnon Views",
    description:
      "Visit Cafe sa Bukid for coffee, comfort food, local flavors, and a peaceful Bukidnon cafe experience near Dahilayan.",
  },
  {
    path: "/about",
    title: "About the Bukidnon Cafe Experience",
    description:
      "Learn about Cafe sa Bukid, a relaxed countryside cafe in Bukidnon built for slow coffee, good food, and scenic mountain air.",
  },
  {
    path: "/menu",
    title: "Menu, Coffee, Meals, Pasta, and Desserts",
    description:
      "Explore the Cafe sa Bukid menu with hot coffee, specialty drinks, sandwiches, pasta, solo meals, group meals, desserts, and local favorites.",
  },
  {
    path: "/contact",
    title: "Location, Hours, and Inquiries",
    description:
      "Find Cafe sa Bukid on Google Maps, check opening hours, and send inquiries before visiting Manolo Fortich, Bukidnon.",
  },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function metadataForRoute(path) {
  const route = routes.find((item) => item.path === path) ?? routes[0];

  return {
    title: route.title,
    description: route.description,
    alternates: {
      canonical: route.path,
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url: route.path,
      siteName: defaultSeo.title,
      images: [
        {
          url: defaultSeo.image,
          width: 1200,
          height: 630,
          alt: "Cafe sa Bukid dining area and countryside cafe setting",
        },
      ],
      locale: "en_PH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [defaultSeo.image],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: businessInfo.name,
    description: businessInfo.description,
    url: siteUrl,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    image: absoluteUrl(defaultSeo.image),
    sameAs: [businessInfo.facebookUrl, businessInfo.mapsUrl],
    priceRange: businessInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.latitude,
      longitude: businessInfo.longitude,
    },
    openingHours: businessInfo.openingHours,
  };
}
