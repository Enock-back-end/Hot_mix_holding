import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Expand,
  Facebook,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import heroImage from "@/assets/cabin-hero.jpg";
import { Button } from "@/components/ui/button";
import {
  quoteFormEmailUrl,
  QuoteLink,
  reportQuoteConversion,
  type QuoteRequest,
} from "@/lib/contact";
import { portfolioImages, products, type Product } from "@/lib/products";

const FILTERS = [
  "All",
  "Nutec Cabins",
  "Log Cabins",
  "Wendy Houses",
  "Decking",
  "Pergolas",
  "Other",
] as const;
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hot Mix Holdings Pty Ltd | Nutec Cabins, Timber Buildings & Decking Pretoria" },
      {
        name: "description",
        content:
          "Nutec cabins, log cabins, Wendy houses, wooden and composite decking, pergola shades and outdoor structures in Pretoria and Gauteng. Request a custom quote.",
      },
      { property: "og:title", content: "Hot Mix Holdings Pty Ltd" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Brand({ onDark = false }: { onDark?: boolean }) {
  return (
    <a href="#top" aria-label="Hot Mix Holdings home" className="flex min-w-0 items-center gap-2.5">
      <img
        src="/hot-mix-holdings-logo.jpeg"
        alt="Hot Mix Holdings Pty Ltd logo"
        width={640}
        height={640}
        className="size-14 shrink-0 rounded-md border border-border object-contain shadow-sm"
      />
      <span className="min-w-0 leading-tight">
        <span
          className={`block font-display text-xs font-extrabold uppercase sm:text-sm ${onDark ? "text-footer-foreground" : "text-foreground"}`}
        >
          Hot Mix Holdings
        </span>
        <span
          className={`block text-[9px] font-semibold uppercase tracking-widest sm:text-[10px] ${onDark ? "text-footer-muted" : "text-muted-foreground"}`}
        >
          Holdings Pty Ltd
        </span>
      </span>
    </a>
  );
}
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Brand />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          <a href="#top" className="nav-link">
            Home
          </a>
          <a href="#products" className="nav-link">
            Services
          </a>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
          <a href="#about" className="nav-link">
            About us
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://web.facebook.com/HotmixHoldingsPtyLtd/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Hot Mix Holdings on Facebook"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-primary px-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Facebook className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <Button asChild className="hidden sm:inline-flex">
            <a href="#quote-form">Get a Quote</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </Button>
        </div>
      </div>
      {open && (
        <nav
          className="border-t border-border bg-background px-4 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {[
              ["Home", "#top"],
              ["Services", "#products"],
              ["Portfolio", "#portfolio"],
              ["About us", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 font-semibold text-foreground"
              >
                {label}
              </a>
            ))}
            <a
              href="https://web.facebook.com/HotmixHoldingsPtyLtd/"
              target="_blank"
              rel="noreferrer"
              className="border-b border-border py-4 font-semibold text-foreground"
            >
              Visit us on Facebook
            </a>
            <Button asChild className="mt-4 sm:hidden">
              <a href="#quote-form" onClick={() => setOpen(false)}>
                Get a Quote
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

function QuoteForm() {
  const [request, setRequest] = useState<QuoteRequest>({
    name: "",
    phone: "",
    email: "",
    service: "Nutec Cabin",
    location: "",
    details: "",
  });
  const update = (field: keyof QuoteRequest, value: string) =>
    setRequest((current) => ({ ...current, [field]: value }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    reportQuoteConversion(quoteFormEmailUrl(request));
  };
  const fieldClass =
    "mt-1.5 min-h-11 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring";
  return (
    <section id="quote-form" className="bg-muted py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="section-label">Request a custom quote</p>
          <h2 className="section-title">Tell us about your project.</h2>
          <p className="section-copy">
            Fill in the form and your email app will open with a ready-to-send quote request. The
            more information you share, the better we can understand what you need.
          </p>
          <div className="mt-7 border-l-2 border-timber pl-5 text-sm leading-6 text-muted-foreground">
            Include the structure or service you need, your town or suburb, and any useful details
            such as the intended use, preferred look, access or approximate space available.
          </div>
        </div>
        <form onSubmit={submit} className="bg-card p-5 shadow-sm ring-1 ring-border sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold text-foreground">
              Your name *
              <input
                className={fieldClass}
                value={request.name}
                onChange={(event) => update("name", event.target.value)}
                autoComplete="name"
                required
              />
            </label>
            <label className="text-sm font-bold text-foreground">
              Phone / WhatsApp number *
              <input
                className={fieldClass}
                type="tel"
                value={request.phone}
                onChange={(event) => update("phone", event.target.value)}
                autoComplete="tel"
                required
              />
            </label>
            <label className="text-sm font-bold text-foreground">
              Email address *
              <input
                className={fieldClass}
                type="email"
                value={request.email}
                onChange={(event) => update("email", event.target.value)}
                autoComplete="email"
                required
              />
            </label>
            <label className="text-sm font-bold text-foreground">
              Service you need *
              <select
                className={fieldClass}
                value={request.service}
                onChange={(event) => update("service", event.target.value)}
              >
                {products.map((product) => (
                  <option key={product.id}>{product.name}</option>
                ))}
                <option>Other outdoor structure</option>
              </select>
            </label>
          </div>
          <label className="mt-5 block text-sm font-bold text-foreground">
            Project location (town / suburb) *
            <input
              className={fieldClass}
              value={request.location}
              onChange={(event) => update("location", event.target.value)}
              placeholder="For example: Pretoria East"
              required
            />
          </label>
          <label className="mt-5 block text-sm font-bold text-foreground">
            What would you like us to quote for? *
            <textarea
              className={`${fieldClass} min-h-30 resize-y`}
              value={request.details}
              onChange={(event) => update("details", event.target.value)}
              placeholder="For example: I need a cabin for a garden office, with windows and a small covered deck."
              required
            />
          </label>
          <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
            <Mail /> Create My Quote Email
          </Button>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            This opens your email app with your details already written in the message.
          </p>
        </form>
      </div>
    </section>
  );
}

function GalleryModal({
  product,
  initialIndex,
  onClose,
}: {
  product: Product;
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  const move = useCallback(
    (direction: number) => {
      setIndex((value) => {
        if (product.images.length === 0) return 0;
        return (value + direction + product.images.length) % product.images.length;
      });
    },
    [product.images.length],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [move, onClose]);

  useEffect(() => {
    if (product.images.length === 0) return;

    const preloadUrls = [
      product.images[index],
      product.images[(index + 1) % product.images.length],
      product.images[(index - 1 + product.images.length) % product.images.length],
    ];

    preloadUrls.forEach((src) => {
      if (!src) return;
      const image = new Image();
      image.src = src;
      image.decoding = "async";
      image.loading = "eager";
    });
  }, [index, product.images]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    touchStartX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const deltaX = event.clientX - touchStartX.current;
    if (Math.abs(deltaX) > 52) {
      move(deltaX > 0 ? -1 : 1);
    }

    touchStartX.current = null;
  };

  const currentImage = product.images[index] ?? product.images[0];

  return (
    <div
      className="fixed inset-0 z-[60] w-full max-w-[100vw] box-border overflow-x-hidden overflow-y-auto bg-slate/95 p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} gallery`}
      style={{ overscrollBehavior: "none", WebkitOverflowScrolling: "touch" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-3 flex items-center justify-between gap-3 text-slate-foreground">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-timber-light">
              {product.portfolioCategory}
            </p>
            <h2 className="font-display text-xl font-extrabold sm:text-2xl">{product.name}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="grid size-11 shrink-0 place-items-center border border-white/30 hover:bg-white/10"
          >
            <X />
          </button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div>
            <div
              className="relative flex h-[min(60svh,32rem)] min-h-[18rem] w-full items-center justify-center overflow-hidden bg-black sm:h-[min(68svh,36rem)]"
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerLeave={() => {
                touchStartX.current = null;
              }}
              style={{ touchAction: "pan-y", overscrollBehavior: "contain" }}
            >
              <img
                src={currentImage}
                alt={`${product.name} project image ${index + 1}`}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="block h-full w-full max-h-full max-w-full object-contain transition-opacity duration-200 ease-out"
                style={{ willChange: "transform" }}
              />
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Previous image"
                className="absolute left-2 grid size-11 place-items-center rounded-full bg-black/55 text-white hover:bg-black/80"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Next image"
                className="absolute right-2 grid size-11 place-items-center rounded-full bg-black/55 text-white hover:bg-black/80"
              >
                <ChevronRight />
              </button>
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
              {product.images.map((src, imageIndex) => (
                <button
                  type="button"
                  key={`${product.id}-${src}-${imageIndex}`}
                  onClick={() => setIndex(imageIndex)}
                  aria-label={`View image ${imageIndex + 1}`}
                  aria-current={imageIndex === index}
                  className={`h-16 w-20 shrink-0 overflow-hidden border-2 ${imageIndex === index ? "border-timber-light" : "border-transparent opacity-65"}`}
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          <aside className="bg-background p-5 text-foreground sm:p-6">
            <p className="text-sm leading-6 text-muted-foreground">{product.description}</p>
            <h3 className="mt-6 font-display text-lg font-bold">What you can see</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
              {product.details.map((detail) => (
                <li key={detail} className="flex gap-2">
                  <Check className="mt-1 size-4 shrink-0 text-timber" />
                  {detail}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-display text-lg font-bold">Ideal for</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {product.idealFor.join(" · ")}
            </p>
            <div className="mt-7 grid gap-3">
              <Button asChild>
                <QuoteLink channel="whatsapp" productName={product.name}>
                  <MessageCircle />
                  Get a Quote on WhatsApp
                </QuoteLink>
              </Button>
              <Button asChild variant="outline">
                <QuoteLink channel="email" productName={product.name}>
                  <Mail />
                  Email Us for a Quote
                </QuoteLink>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
function ProductCard({ product, open }: { product: Product; open: () => void }) {
  return (
    <article className="group overflow-hidden border border-border bg-card">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={product.coverImage}
          alt={`${product.name} cover image by Hot Mix Holdings`}
          width={928}
          height={720}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-card-foreground">{product.name}</h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">
          {product.description}
        </p>
        <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
          {product.details.slice(0, 2).map((feature) => (
            <li key={feature} className="flex gap-2">
              <Check className="mt-0.5 size-4 shrink-0 text-timber" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="outline" onClick={open}>
            View More <Expand />
          </Button>
          <Button asChild>
            <QuoteLink channel="whatsapp" productName={product.name}>
              Request a Quote <ArrowRight />
            </QuoteLink>
          </Button>
        </div>
      </div>
    </article>
  );
}

function Index() {
  const [selected, setSelected] = useState<Product | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const images = portfolioImages.filter((image) => filter === "All" || image.category === filter);
  const openImage = (src: string) => {
    const product = products.find((item) => item.images.includes(src));
    if (product) {
      setSelected(product);
      setSelectedIndex(product.images.indexOf(src));
    }
  };
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative min-h-[calc(100svh-4.5rem)] overflow-hidden text-hero-foreground lg:min-h-[780px]">
          <img
            src={heroImage}
            alt="Custom timber cabin with a spacious wooden deck"
            width={1600}
            height={1008}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-scrim/65" />
          <div className="relative mx-auto flex min-h-[calc(100svh-4.5rem)] max-w-7xl items-end px-4 pb-16 pt-28 sm:px-6 lg:min-h-[780px] lg:items-center lg:px-8 lg:pb-24 lg:pt-24">
            <div className="max-w-3xl">
              <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-[0.2em] text-hero-muted">
                <span className="h-px w-10 bg-timber" />
                Hot Mix Holdings (Pty) Ltd · Pretoria, South Africa
              </p>
              <h1 className="font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-7xl">
                Nutec cabins, timber buildings & outdoor structures.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-hero-muted sm:text-lg">
                Explore real projects, then tell us about your space for a custom quote.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:flex sm:flex-wrap">
                <Button asChild size="lg">
                  <QuoteLink channel="whatsapp">
                    <MessageCircle />
                    WhatsApp Us
                  </QuoteLink>
                </Button>
                <Button asChild size="lg" variant="heroOutline">
                  <QuoteLink channel="email">
                    <Mail />
                    Email Us
                  </QuoteLink>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="border-b border-border bg-muted py-7">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
            {[
              "Custom-built for your site",
              "Real project galleries",
              "Based in Pretoria · projects nationwide",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm font-semibold text-foreground"
              >
                <span className="grid size-7 shrink-0 place-items-center bg-primary text-primary-foreground">
                  <Check className="size-4" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </section>
        <section id="products" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="section-label">What we build</p>
              <h2 className="section-title">Purpose-built outdoor spaces</h2>
              <p className="section-copy">
                Browse each service gallery to see relevant completed work, then request a quote
                tailored to your site and needs.
              </p>
            </div>
            <div className="mt-12 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  open={() => {
                    setSelected(product);
                    setSelectedIndex(0);
                  }}
                />
              ))}
            </div>
          </div>
        </section>
        <section id="portfolio" className="bg-slate py-20 text-slate-foreground sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div className="max-w-2xl">
                <p className="section-label text-timber-light">All projects</p>
                <h2 className="section-title text-slate-foreground">
                  Craftsmanship in every detail
                </h2>
                <p className="mt-4 text-slate-foreground/75">
                  Every uploaded project image is grouped by its service category.
                </p>
              </div>
              <Button asChild variant="heroOutline">
                <QuoteLink channel="whatsapp">
                  Discuss Your Project <ArrowRight />
                </QuoteLink>
              </Button>
            </div>
            <div
              className="mt-8 flex gap-2 overflow-x-auto pb-2"
              role="group"
              aria-label="Filter portfolio images"
            >
              {FILTERS.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                  className={`shrink-0 border px-4 py-2 text-sm font-bold ${filter === item ? "border-timber bg-timber text-timber-foreground" : "border-white/35 text-slate-foreground hover:bg-white/10"}`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {images.map((image) => (
                <button
                  type="button"
                  key={image.src}
                  onClick={() => openImage(image.src)}
                  className="group relative aspect-square overflow-hidden bg-black text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-timber-light"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-black/65 p-2 text-xs font-bold text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus:opacity-100">
                    {image.productName}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <p className="section-label">About Hot Mix Holdings</p>
              <h2 className="section-title">
                Outdoor spaces,
                <br />
                built around you.
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
                Based in Pretoria, Hot Mix Holdings (Pty) Ltd takes on projects across South Africa.
                Wherever your property is, get in touch to discuss your requirements.
              </p>
            </div>
            <div>
              <p className="text-lg leading-8 text-muted-foreground">
                We turn outdoor spaces into functional, beautiful extensions of your home or
                property. From Nutec cabins and classic log cabins to Wendy houses, wooden and
                composite decking, and pergola shades, our team creates custom solutions around your
                space, style and needs.
              </p>
              <p className="mt-5 leading-7 text-muted-foreground">
                We focus on precise workmanship, quality materials and a considered finish in every
                project—whether it is a compact backyard structure, a poolside deck or an outdoor
                entertainment area.
              </p>
              <div className="mt-8 grid gap-x-5 gap-y-6 sm:grid-cols-2">
                <div className="border-l-2 border-timber pl-5">
                  <strong className="block font-display text-lg text-foreground">
                    Tailored solutions
                  </strong>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    Structures designed around your site, style and budget requirements.
                  </span>
                </div>
                <div className="border-l-2 border-timber pl-5">
                  <strong className="block font-display text-lg text-foreground">
                    Quality materials
                  </strong>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    Timber, composite surfaces and Nutec board selected for the project at hand.
                  </span>
                </div>
                <div className="border-l-2 border-timber pl-5">
                  <strong className="block font-display text-lg text-foreground">
                    Versatile expertise
                  </strong>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    Cabins, decking, shade structures and more, all under one roof.
                  </span>
                </div>
                <div className="border-l-2 border-timber pl-5">
                  <strong className="block font-display text-lg text-foreground">
                    Professional craftsmanship
                  </strong>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    Careful execution and considered finishes from first conversation to project
                    completion.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <QuoteForm />
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground/70">
                Have a project in mind?
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
                Let’s build something lasting.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="timber" size="lg">
                <QuoteLink channel="email">Email for Estimate</QuoteLink>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <QuoteLink channel="whatsapp">WhatsApp Us</QuoteLink>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="bg-footer py-12 text-footer-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          <div className="sm:col-span-2">
            <Brand onDark />
            <p className="mt-5 max-w-sm text-sm leading-6 text-footer-muted">
              Nutec cabins, log cabins, timber structures and outdoor living spaces, built with care
              from Pretoria for projects across South Africa.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Quick links</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-footer-muted">
              <a href="#products">Products</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#about">Why us</a>
            </div>
          </div>
          <div>
            <h3 className="footer-title">Contact</h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-footer-muted">
              <span className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                Pretoria, South Africa
              </span>
              <QuoteLink channel="whatsapp" className="flex gap-2">
                <MessageCircle className="size-4" />
                +27 72 842 3412
              </QuoteLink>
              <QuoteLink channel="email" className="flex gap-2">
                <Mail className="size-4" />
                reniuszema22@gmail.com
              </QuoteLink>
              <a
                href="https://web.facebook.com/HotmixHoldingsPtyLtd/"
                target="_blank"
                rel="noreferrer"
                className="flex gap-2"
              >
                <Facebook className="size-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-footer-border px-4 pt-6 text-xs text-footer-muted sm:px-6 lg:px-8">
          © 2026 Hot Mix Holdings Pty Ltd. All rights reserved.
        </div>
      </footer>
      <QuoteLink
        channel="whatsapp"
        aria-label="WhatsApp Hot Mix Holdings"
        className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-fab transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:bottom-7 sm:right-7"
      >
        <MessageCircle className="size-7" />
      </QuoteLink>
      {selected && (
        <GalleryModal
          product={selected}
          initialIndex={selectedIndex}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
