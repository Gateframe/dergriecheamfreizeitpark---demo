import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Intro } from "@/components/landing/Intro";
import { SignatureDishes } from "@/components/landing/SignatureDishes";
import { ReservationCTA } from "@/components/landing/ReservationCTA";
import { Gallery } from "@/components/landing/Gallery";
import { Footer } from "@/components/landing/Footer";
import { translations } from "@/i18n/translations";

const de = translations.de;

/** Set `VITE_SITE_URL` in production so og:image is an absolute URL. */
function ogImageUrl(): string {
  const path = "/og-hero.png";
  const base = import.meta.env.VITE_SITE_URL;
  if (typeof base === "string" && base.trim().length > 0) {
    return `${base.trim().replace(/\/$/, "")}${path}`;
  }
  return path;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: de["brand.name"],
  description: de["meta.rootDesc"],
  servesCuisine: ["Greek", "Mediterranean"],
  priceRange: "$$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Käthe Winkelmann Platz 3",
    addressLocality: "Neufahrn",
    postalCode: "85375",
    addressCountry: "DE",
  },
  telephone: "+4981656099330",
  email: "info@dergriecheamfreizeitpark.de",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "11:30",
      closes: "14:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "17:30",
      closes: "22:30",
    },
  ],
  image: ogImageUrl(),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: de["meta.rootTitle"] },
      {
        name: "description",
        content: de["meta.rootDesc"],
      },
      { property: "og:title", content: de["meta.rootTitle"] },
      {
        property: "og:description",
        content: de["meta.rootDesc"],
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: ogImageUrl() },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: de["brand.name"] },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImageUrl() },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <Intro />
      <SignatureDishes />
      <ReservationCTA />
      <Gallery />
      <Footer />
    </main>
  );
}
