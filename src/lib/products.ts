import carportImage from "@/assets/carports.jpg";
import compositeDeckCover from "@/assets/composite-deck.jpg";
import logCabinCover from "@/assets/log-cabin.jpg";
import nutecCabinCover from "@/assets/nutec-cabin.jpg";
import pergolaCover from "@/assets/pergola.jpg";
import wendyHouseCover from "@/assets/wendy-house.jpg";
import woodenDeckCover from "@/assets/wooden-deck.jpg";
import { productImageManifest } from "@/lib/product-image-manifest";

export type Product = {
  id: string;
  name: string;
  portfolioCategory:
    "Nutec Cabins" | "Log Cabins" | "Wendy Houses" | "Decking" | "Pergolas" | "Other";
  description: string;
  details: string[];
  idealFor: string[];
  reasonsToChoose: string[];
  quotePrompt: string;
  coverImage: string;
  images: string[];
  transformations?: ProjectTransformation[];
};

export type ProjectStage = "Before" | "During" | "After";

export type ProjectTransformation = {
  number: number;
  stages: Partial<Record<ProjectStage, string>>;
};

const productImage = (folder: string, filename: string) => `/products/${folder}/${filename}`;

const galleryImages = (folder: string, filenames: string[]) =>
  [...new Set([...(productImageManifest[folder] ?? []), ...filenames])].map((filename) =>
    productImage(folder, filename),
  );

const nutecTransformations: ProjectTransformation[] = [
  [2, "nutec cabins 2 before.jpeg", undefined, "nutec cabins 2 after.jpeg"],
  [3, "nutec cabins 3 before.jpeg", undefined, "nutec cabins 3 after.jpeg"],
  [4, "nutec cabins 4 before.jpeg", undefined, "nutec cabins 4 after.jpeg"],
  [5, "nutec cabins 5 before.jpeg", "nutec cabins 5 during.jpeg", "nutec cabins 5 after.jpeg"],
  [6, "nutec cabins 6 before.jpeg", "nutec cabins 6 during .jpeg", "nutec cabins 6 after.jpeg"],
  [7, "nutec cabins 7 before.jpeg", "nutec cabins 7 during.jpeg", "nutec cabins 7 after.jpeg"],
  [8, "nutec cabins 8 before.jpeg", "nutec cabins 8 during.jpeg", "nutec cabins 8 after.jpeg"],
].map(([number, before, during, after]) => ({
  number: number as number,
  stages: {
    Before: productImage("Nutec cabins ", before as string),
    ...(during ? { During: productImage("Nutec cabins ", during as string) } : {}),
    After: productImage("Nutec cabins ", after as string),
  },
}));

const pergolaTransformations: ProjectTransformation[] = [
  [1, "pergola shades 1 before.jpeg", undefined, "pergola shades 1 after.jpeg"],
  [2, "pergola shades 2 before.jpeg.jpg", undefined, "pergola shades 2 after.jpeg"],
  [
    3,
    "pergola shades 3 before.jpeg",
    "pergola shades 3 during.jpeg",
    "pergola shades 3 after.jpeg.jpg",
  ],
  [
    4,
    "pergola shades 4 before.jpeg",
    "pergola shades 4 during.jpeg",
    "pergola shades 4 after.jpeg",
  ],
  [5, "pergola shades 5 before.jpeg", undefined, "pergola shades 5 after.jpeg"],
  [6, "pergola shades 6 before.jpeg", undefined, "pergola shades 6 after.jpeg"],
  [7, "pergola shades 7 before.jpeg", undefined, "pergola shades 7 after.jpeg"],
].map(([number, before, during, after]) => ({
  number: number as number,
  stages: {
    Before: productImage("Pergola shades", before as string),
    ...(during ? { During: productImage("Pergola shades", during as string) } : {}),
    After: productImage("Pergola shades", after as string),
  },
}));

const wendyTransformations: ProjectTransformation[] = [
  {
    number: 1,
    stages: {
      Before: productImage("Wendy houses", "wendy house1 before.jpg"),
      After: productImage("Wendy houses", "wendy house1 after.jpg"),
    },
  },
];
export const products: Product[] = [
  {
    id: "nutec-cabins",
    name: "Nutec Cabins",
    portfolioCategory: "Nutec Cabins",
    description:
      "Create the extra room your property needs with a custom Nutec cabin—planned around how you will actually use it, from a quiet garden office to practical guest accommodation.",
    details: [
      "Choose a layout, doors and windows that suit your site and daily routine",
      "Create a dedicated office, guest room, studio or utility space without changing your main home",
      "Review real interiors, exteriors and covered areas in the gallery before you request a quote",
    ],
    idealFor: ["Backyard accommodation", "Garden offices", "Guest or utility space"],
    reasonsToChoose: [
      "A tailored way to add usable space to your property",
      "A clean, practical exterior finish with options to personalise the layout",
      "A project conversation focused on your site, budget and intended use",
    ],
    quotePrompt:
      "Tell us the size, location and purpose of your cabin so we can prepare the right quote.",
    coverImage: nutecCabinCover,
    images: galleryImages("Nutec cabins ", []),
    transformations: nutecTransformations,
  },
  {
    id: "log-cabins",
    name: "Log Cabins",
    portfolioCategory: "Log Cabins",
    description:
      "Bring warmth and character to your garden with a custom log cabin that feels like part of the property—not an afterthought.",
    details: [
      "A distinctive timber-look finish for a welcoming garden room or guest space",
      "Plan doors, windows and the internal layout around privacy, light and access",
      "Compare real completed interiors and exteriors in the gallery",
    ],
    idealFor: ["Garden rooms", "Guest space", "Outdoor living"],
    reasonsToChoose: [
      "A character-filled alternative for customers who love the look of timber",
      "Flexible enough for a retreat, hobby room, guest space or outdoor living area",
      "Designed around the proportions and style of your home and garden",
    ],
    quotePrompt: "Share your preferred size, use and style ideas for a tailored log-cabin quote.",
    coverImage: logCabinCover,
    images: galleryImages("Log cabins", []),
  },
  {
    id: "wendy-houses",
    name: "Wendy Houses",
    portfolioCategory: "Wendy Houses",
    description:
      "Turn an underused corner of your garden into a useful, good-looking space with a Wendy house designed for the way you live.",
    details: [
      "Compact designs that make practical use of limited garden space",
      "Choose the door, windows and roof profile that fit your access and storage needs",
      "See a wide range of completed sizes and finishes before deciding",
    ],
    idealFor: ["Storage", "Workshops", "Garden rooms"],
    reasonsToChoose: [
      "A straightforward way to organise tools, create a hobby area or add a garden room",
      "Options for compact plots as well as larger storage requirements",
      "A custom discussion rather than a one-size-fits-all structure",
    ],
    quotePrompt:
      "Tell us what you need to store or create, plus the available space in your garden.",
    coverImage: wendyHouseCover,
    images: galleryImages("Wendy houses", []),
    transformations: wendyTransformations,
  },
  {
    id: "wooden-decking",
    name: "Wooden Decking",
    portfolioCategory: "Decking",
    description:
      "Make your outside area somewhere you want to spend time. A timber deck can connect your home, garden, pool or entertainment area with a warm natural finish.",
    details: [
      "Create a defined entertaining, dining or relaxation zone outdoors",
      "Plan steps, edges and changes in level for a considered transition into your garden",
      "Explore real installations around seating areas, access points and homes",
    ],
    idealFor: ["Outdoor entertainment", "Garden access", "Raised outdoor areas"],
    reasonsToChoose: [
      "A natural-looking surface that makes an outdoor area feel intentional and inviting",
      "Useful for solving awkward slopes, thresholds and level changes",
      "Designed around how you move through and use the space",
    ],
    quotePrompt: "Send us a photo of the area, its approximate size and how you want to use it.",
    coverImage: woodenDeckCover,
    images: galleryImages("Wooden deckings", []),
  },
  {
    id: "composite-decking",
    name: "Composite Decking",
    portfolioCategory: "Decking",
    description:
      "Choose a refined outdoor surface with the look of timber and a lower-maintenance routine—ideal when you want more time enjoying your deck and less time maintaining it.",
    details: [
      "A contemporary board finish for patios, pool surrounds and entertainment spaces",
      "Neat edge and step detailing for a polished result",
      "Composite boards are commonly selected for low-maintenance outdoor living areas",
    ],
    idealFor: ["Entertainment areas", "Patio upgrades", "Low-maintenance outdoor surfaces"],
    reasonsToChoose: [
      "A modern option for customers who prefer a lower-maintenance deck",
      "A practical choice for poolside, patio and everyday entertainment areas",
      "Available project options can be discussed around colour, size and finishing details",
    ],
    quotePrompt: "Tell us where the deck will go and the colour or look you have in mind.",
    coverImage: compositeDeckCover,
    images: galleryImages("Coposite deckings", []),
  },
  {
    id: "pergola-shades",
    name: "Pergola Shades",
    portfolioCategory: "Pergolas",
    description:
      "Give your patio or braai area a stronger sense of place with a custom pergola that frames the space for relaxed outdoor living.",
    details: [
      "Define an outdoor dining, braai or seating area with a purposeful overhead structure",
      "Consider freestanding or home-adjacent layouts for your available space",
      "Use the gallery to compare proportions, posts and open-slat styles",
    ],
    idealFor: ["Patio shade", "Outdoor dining", "Garden entertainment"],
    reasonsToChoose: [
      "Makes an outdoor area feel finished, welcoming and ready to use",
      "Can be planned around an existing patio, braai or seating area",
      "A visual focal point that brings structure to an open garden space",
    ],
    quotePrompt: "Share a photo of your patio or garden area and tell us how you want to use it.",
    coverImage: pergolaCover,
    images: galleryImages("Pergola shades", []),
    transformations: pergolaTransformations,
  },
  {
    id: "carports",
    name: "Carports",
    portfolioCategory: "Other",
    description:
      "Protect the vehicles you rely on with a carport planned around your driveway, parking layout and the look of your property.",
    details: [
      "A custom outdoor structure planned around vehicle access and available space",
      "A practical upgrade that keeps day-to-day parking more convenient",
      "Discuss the size, position and finish that suit your property",
    ],
    idealFor: ["Vehicle cover", "Property upgrades", "Outdoor protection"],
    reasonsToChoose: [
      "A purpose-built solution for one or more vehicles",
      "Planned to work with your driveway and property layout",
      "An opportunity to improve both convenience and curb appeal",
    ],
    quotePrompt:
      "Let us know how many vehicles you need to cover and share a photo of the parking area.",
    coverImage: carportImage,
    images: [carportImage],
  },
];

// Extract transformation images for display
const getTransformationImages = (product: Product) => {
  if (!product.transformations) return [];
  return product.transformations.flatMap((transformation) => {
    const images = [];
    if (transformation.stages.Before) {
      images.push({
        src: transformation.stages.Before,
        productName: product.name,
        category: product.portfolioCategory,
        alt: `${product.name} project ${transformation.number}: Before by Hot Mix Holdings`,
      });
    }
    if (transformation.stages.During) {
      images.push({
        src: transformation.stages.During,
        productName: product.name,
        category: product.portfolioCategory,
        alt: `${product.name} project ${transformation.number}: During by Hot Mix Holdings`,
      });
    }
    if (transformation.stages.After) {
      images.push({
        src: transformation.stages.After,
        productName: product.name,
        category: product.portfolioCategory,
        alt: `${product.name} project ${transformation.number}: After by Hot Mix Holdings`,
      });
    }
    return images;
  });
};

export const portfolioImages = products.flatMap((product) => {
  // Start with transformation images for products that have them
  const transformationImages = getTransformationImages(product);
  
  // Then add regular gallery images
  const galleryImages = product.images
    .filter((src) => !transformationImages.some((t) => t.src === src))
    .map((src, index) => ({
      src,
      productName: product.name,
      category: product.portfolioCategory,
      alt: `${product.name} project ${index + 1} by Hot Mix Holdings`,
    }));
  
  return [...transformationImages, ...galleryImages];
});
