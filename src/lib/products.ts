import carportImage from "@/assets/carports.jpg";
import compositeDeckCover from "@/assets/composite-deck.jpg";
import logCabinCover from "@/assets/log-cabin.jpg";
import nutecCabinCover from "@/assets/nutec-cabin.jpg";
import pergolaCover from "@/assets/pergola.jpg";
import wendyHouseCover from "@/assets/wendy-house.jpg";
import woodenDeckCover from "@/assets/wooden-deck.jpg";

export type Product = {
  id: string;
  name: string;
  portfolioCategory:
    | "Nutec Cabins"
    | "Log Cabins"
    | "Wendy Houses"
    | "Decking"
    | "Pergolas"
    | "Other";
  description: string;
  details: string[];
  idealFor: string[];
  coverImage: string;
  images: string[];
};
const numberedImages = (folder: string, count: number, extensions?: Record<number, string>) =>
  Array.from(
    { length: count },
    (_, index) =>
      `/products/${folder}/image-${String(index + 1).padStart(2, "0")}.${extensions?.[index + 1] ?? "jpg"}`,
  );
export const products: Product[] = [
  {
    id: "nutec-cabins",
    name: "Nutec Cabins",
    portfolioCategory: "Nutec Cabins",
    description:
      "Versatile cabin projects with a clean, practical exterior finish for garden and additional-space applications.",
    details: [
      "Cabin exteriors with visible windows and entry doors",
      "Examples of interior layouts and covered outdoor areas",
      "A range of facade and roof treatments shown across the gallery",
    ],
    idealFor: ["Backyard accommodation", "Garden offices", "Guest or utility space"],
    coverImage: nutecCabinCover,
    images: numberedImages("nutec-cabins", 29),
  },
  {
    id: "log-cabins",
    name: "Log Cabins",
    portfolioCategory: "Log Cabins",
    description:
      "Warm timber cabin designs with visible log-style walls, doors and windows in the completed projects shown.",
    details: [
      "Log-style timber wall finish",
      "Timber-framed doors and windows visible in the projects",
      "Interior and exterior views in this gallery",
    ],
    idealFor: ["Garden rooms", "Guest space", "Outdoor living"],
    coverImage: logCabinCover,
    images: numberedImages("log-cabins", 5),
  },
  {
    id: "wendy-houses",
    name: "Wendy Houses",
    portfolioCategory: "Wendy Houses",
    description:
      "Practical timber structures shown in a variety of shapes, entrances, windows and garden settings.",
    details: [
      "Timber-clad exterior designs",
      "Visible windows, doors and pitched roof profiles",
      "Projects suited to compact garden footprints",
    ],
    idealFor: ["Storage", "Workshops", "Garden rooms"],
    coverImage: wendyHouseCover,
    images: numberedImages("wendy-houses", 27),
  },
  {
    id: "wooden-decking",
    name: "Wooden Decking",
    portfolioCategory: "Decking",
    description:
      "Natural timber deck installations that extend outdoor living areas around homes and garden spaces.",
    details: [
      "Timber board layouts visible in completed installations",
      "Steps, edges and level changes shown across selected projects",
      "Decking integrated with outdoor seating and access areas",
    ],
    idealFor: ["Outdoor entertainment", "Garden access", "Raised outdoor areas"],
    coverImage: woodenDeckCover,
    images: numberedImages("wooden-decking", 12),
  },
  {
    id: "composite-decking",
    name: "Composite Decking",
    portfolioCategory: "Decking",
    description:
      "Contemporary deck surfaces with neat board lines and a refined outdoor finish, as shown in the projects.",
    details: [
      "Clean linear board patterns",
      "Visible detailing at edges and steps",
      "Outdoor installations alongside pools, patios and gardens",
    ],
    idealFor: ["Entertainment areas", "Patio upgrades", "Low-maintenance outdoor surfaces"],
    coverImage: compositeDeckCover,
    images: numberedImages("composite-decking", 15),
  },
  {
    id: "pergola-shades",
    name: "Pergola Shades",
    portfolioCategory: "Pergolas",
    description:
      "Custom open-frame shade structures that define patios, braai areas and outdoor gathering spaces.",
    details: [
      "Timber posts, beams and open roof slats visible in the gallery",
      "Freestanding and house-adjacent examples",
      "A variety of proportions and outdoor settings",
    ],
    idealFor: ["Patio shade", "Outdoor dining", "Garden entertainment"],
    coverImage: pergolaCover,
    images: numberedImages("pergola-shades", 44, {
      1: "jpeg",
      2: "jpeg",
      3: "jpeg",
      4: "jpeg",
      6: "jpeg",
      16: "jpeg",
      17: "jpeg",
      18: "jpeg",
      19: "jpeg",
      20: "jpeg",
      21: "jpeg",
      28: "jpeg",
      29: "jpeg",
      30: "jpeg",
      31: "jpeg",
      32: "jpeg",
      33: "jpeg",
      34: "jpeg",
      35: "jpeg",
    }),
  },
  {
    id: "carports",
    name: "Carports",
    portfolioCategory: "Other",
    description:
      "The existing service range also includes neatly finished carport structures designed around your property.",
    details: [
      "Custom outdoor structure service",
      "Project design is discussed around your site and intended use",
    ],
    idealFor: ["Vehicle cover", "Property upgrades", "Outdoor protection"],
    coverImage: carportImage,
    images: [carportImage],
  },
];
export const portfolioImages = products.flatMap((product) =>
  product.images.map((src, index) => ({
    src,
    productName: product.name,
    category: product.portfolioCategory,
    alt: `${product.name} project ${index + 1} by Hot Mix Holdings`,
  })),
);
