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
      After: productImage("Wendy houses", "wendy houses1 after.jpg"),
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
    images: galleryImages("Nutec cabins ", [
      "485160029_1848412399269032_3819580771327137853_n.jpg",
      "Nutec cabin.jpg",
      "Nutec cabin2.jpg",
      "Nutec cabin3.jpg",
      "Nutec cabin4.jpg",
      "Nutec cabin5.jpg",
      "Nutec cabin6.jpg",
      "Nutec cabin7.jpg",
      "Nutec cabin inside.jpg",
      "Nutec cabin inside1.jpg",
      "nutec cabins 5 before.jpeg",
      "nutec cabins 5 during.jpeg",
      "nutec cabins 5 after.jpeg",
      "nutec cabins 6 before.jpeg",
      "nutec cabins 6 during .jpeg",
      "nutec cabins 6 after.jpeg",
      "nutec cabins 7 before.jpeg",
      "nutec cabins 7 during.jpeg",
      "nutec cabins 7 after.jpeg",
      "nutec cabins 8 before.jpeg",
      "nutec cabins 8 during.jpeg",
      "nutec cabins 8 after.jpeg",
      "**Nutec cabins**.jpg",
      "**Nutec cabins**1.jpg",
      "**Nutec cabins**11.jpg",
      "**Nutec cabins**111.jpg",
      "**Nutec cabins**12.jpg",
      "**Nutec cabins**121.jpg",
      "**Nutec cabins**221.jpg",
      "**Nutec cabins**7.jpg",
      "**Nutec cabins**8.jpg",
      "**Nutec cabins**in.jpg",
      "**Nutec cabins**ins.jpg",
      "**Nutec cabins**intere.jpg",
      "**Nutec cabins**interio.jpg",
      "**Nutec cabins1**.jpg",
      "485077995_1848412372602368_7005404093662747624_n.jpg",
      "485675859_1848414409268831_1465355039803700782_n.jpg",
      "485788782_1848415372602068_6367326270933149887_n.jpg",
      "486315474_1848311819279090_1205765078328143604_n.jpg",
      "486358378_1848414565935482_4978209582273981789_n.jpg",
      "707809451_2198655317578070_7879063369676578839_n.jpg",
      "Nutec cabin interio.jpg",
      "Nutec cabin structure.jpg",
      "Nutec cabins22.jpg",
      "WhatsApp Image 2026-10-08 at 21.47.44 (2).jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.37 (1).jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.37.jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.44 (1).jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.44.jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.49 (1).jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.49.jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.50 (1).jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.50 (3).jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.50.jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.51 (1).jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.51.jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.53.jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.55.jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.56 (2).jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.58.jpeg",
      "interio.jpeg",
    ]),
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
    images: galleryImages("Log cabins", [
      "**Log cabins**.jpg",
      "**Log cabins1**.jpg",
      "**Log cabins**ineri.jpg",
      "**Log cabins** int.jpg",
      "WhatsApp Image 2026-10-11 at 10.17.52.jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.53 (1).jpeg",
      "640287314_2119206068856329_8354244173323735031_n.jpg",
      "637974614_2119206118856324_6594605405730880347_n.jpg",
      "WhatsApp Image 2026-10-11 at 10.17.52 (2).jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.53 (2).jpeg",
    ]),
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
    images: galleryImages("Wendy houses", [
      "wendy house1 before.jpg",
      "wendy houses1 after.jpg",
      "486252465_1848299229280349_8096765824598124724_n.jpg",
      "611598556_2081537785956491_8267365227998063376_n.jpg",
      "485371102_1848299242613681_826172649766963019_n.jpg",
      "518418085_1931265740983697_4450569141622267390_n.jpg",
      "485925481_1848312995945639_7782680826035277450_n.jpg",
      "486021213_1848096575967281_7304030668735558407_n.jpg",
      "486529181_1848431325933806_8934116108433143922_n.jpg",
      "486241045_1848299349280337_5440888613460191141_n.jpg",
      "625202281_2100727490704187_4181234157987397060_n.jpg",
      "515267927_1927627634680841_7307711383932249539_n.jpg",
      "**wendy houses**.jpg",
      "485179351_1848299982613607_6202705071473977607_n.jpg",
      "485339902_1848313505945588_2861201343331098166_n.jpg",
      "485355751_1848312882612317_3513678048719455835_n.jpg",
      "485369369_1848305315946407_7438255452386209127_n.jpg",
      "485369635_1848300259280246_3120720596184012913_n.jpg",
      "485371773_1848305049279767_8330256932032719158_n.jpg",
      "485378194_1848312055945733_1733023339755548350_n.jpg",
      "485806752_1848300245946914_4149200736249370173_n.jpg",
      "486136789_1848300199280252_6304268498484941420_n.jpg",
      "608547311_2078534119590191_895846834161026376_n.jpg",
    ]),
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
    images: galleryImages("Wooden deckings", [
      "**Wooden deckings**.jpg",
      "Wooden deckings.jpg",
      "Wooden deckings2.jpg",
      "Wooden deckings3.jpg",
      "Wooden deckings6.jpg",
      "Wooden deckings12.jpg",
      "626301216_2100727707370832_2578196577156428640_n.jpg",
      "652629930_2137256173717985_8917797748093493321_n.jpg",
      "653397381_2137256237051312_4821007017582492415_n.jpg",
      "625067068_2100727624037507_1527758636792616080_n.jpg",
      "486120774_1848300405946898_1901381279915217764_n.jpg",
      "**Wooden deckings**14.jpg",
      "**Wooden deckings*111*.jpg",
      "651175635_2137256287051307_4984434255813778644_n.jpg",
      "651326707_2137256110384658_4691780999296126906_n.jpg",
      "WhatsApp Image 2026-10-11 at 10.17.52 (1).jpeg",
    ]),
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
    images: galleryImages("Coposite deckings", [
      "Composite deckings.jpg",
      "**Composite deckings**.jpg",
      "Composite deckings2.jpg",
      "Composite deckings4.jpg",
      "486245617_1848421082601497_5422416043152871738_n.jpg",
      "603867210_2073742596736010_4245191697543405651_n.jpg",
      "605427342_2073742556736014_8477002335865200565_n.jpg",
      "514236667_1923566855086919_8749329679572149950_n.jpg",
      "485870211_1848102765966662_222578002019003169_n.jpg",
      "485692403_1848420862601519_1000828643089999057_n.jpg",
      "485957159_1848421095934829_5547799805361159940_n.jpg",
      "**Wooden deckings*.jpg",
      "Composite deckings...jpg",
      "Composite deckings..jpg",
      "WhatsApp Image 2026-10-11 at 10.17.51 (2).jpeg",
    ]),
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
    images: galleryImages("Pergola shades", [
      "pergola shades 1 before.jpeg",
      "pergola shades 1 after.jpeg",
      "pergola shades 3 before.jpeg",
      "pergola shades 3 during.jpeg",
      "pergola shades 3 after.jpeg.jpg",
      "pergola shades 4 before.jpeg",
      "pergola shades 4 during.jpeg",
      "pergola shades 4 after.jpeg",
      "Pergola shades.jpg",
      "Pergola shades structure.jpg",
      "Pergola Shades2.jpg",
      "pergola shades2.jpg",
      "pergola shades3.jpg",
      "pergola shades4.jpg",
      "pergola shades6.jpg",
      "pergola shades7.jpg",
      "pergola shades8.jpg",
      "606416464_2078533822923554_8648956810405333634_n.jpg",
      "609012446_2078533922923544_6872079261313336528_n.jpg",
      "612102346_2081537892623147_4033913865758922757_n.jpg",
      "1d24fd23-bbd4-42cf-8f0c-22f476c27288.jpeg",
      "4dd2da75-680e-4c0b-83da-6eb68f54c628.jpeg",
      "536554ef-bfa7-41d7-bafc-a0aaa19c6ccb.jpeg",
      "605129996_2073742170069386_618461562511476727_n.jpg",
      "60545a5d-59d3-4bea-b369-d5581d4c1e8a.jpeg",
      "608642257_2081537929289810_8694801647921815284_n.jpg",
      "610892092_2078534052923531_4080436214257197457_n.jpg",
      "611153681_2081537839289819_1382103473124904153_n.jpg",
      "623385133_2100727754037494_4647912562546314523_n.jpg",
      "624755364_2100727804037489_1116504709633554052_n.jpg",
      "669d36ea-b75e-4569-b47b-351ade0193b1.jpeg",
      "73ad2bb7-4a7e-4645-9307-679a270faef0.jpeg",
      "80e73990-5126-4751-b265-5c0512c9d5ef.jpeg",
      "95acc539-451c-4e9e-87ce-82c54262d370.jpeg",
      "Pergola shades 11.jpg",
      "Pergola shades11.jpg",
      "Pergola shades12.jpg",
      "WhatsApp Image 2026-10-11 at 10.17.38.jpeg",
      "WhatsApp Image 2026-10-11 at 10.17.43.jpeg",
      "b6840119-418f-46d1-9093-28589011e5b2.jpeg",
      "bed8bac8-fe96-46e4-93b9-e0af0057a113.jpeg",
      "c5bbaf9e-66ee-4245-a891-f3025e56ede7.jpeg",
      "c65799d7-9dd7-4db9-830e-3549e35cc5d6.jpeg",
      "dd1a7262-500f-4bdb-8e9a-7188927a53b7.jpeg",
      "e00d4200-efaa-426c-8bd0-221596e72744.jpeg",
      "f005a898-d420-461a-bbc6-c5904819b0cb.jpeg",
      "facc5daa-53a4-43df-891b-9c12fcc6f1cb.jpeg",
      "pergola shades 10.jpg",
      "pergola shades111.jpg",
    ]),
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
export const portfolioImages = products.flatMap((product) =>
  product.images.map((src, index) => ({
    src,
    productName: product.name,
    category: product.portfolioCategory,
    alt: `${product.name} project ${index + 1} by Hot Mix Holdings`,
  })),
);
