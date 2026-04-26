import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n";
import Navbar from "@/components/Navbar";
import SideRail from "@/components/SideRail";
import CursorLight from "@/components/CursorLight";
import RevealObserver from "@/components/RevealObserver";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Cases from "@/components/Cases";
import Sponsors from "@/components/Sponsors";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { contactInfo } from "@/data/contact";
import { services } from "@/data/services";
import { faqItems } from "@/data/faq";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  const localeFaqItems = faqItems[locale];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localeFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "AlmazovLight",
    description: dict.meta.description,
    url: `https://almazov-light.uz/${locale}`,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: contactInfo.city[locale],
      addressCountry: contactInfo.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contactInfo.geo.lat.toString(),
      longitude: contactInfo.geo.lng.toString(),
    },
    openingHours: "Mo-Sa 10:00-19:00",
    image: "https://almazov-light.uz/og-image.jpg",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lighting Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.shortName[locale],
          description: s.description[locale],
        },
      })),
    },
  };

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <CursorLight />
      <Navbar locale={locale} dict={dict} />
      <SideRail />
      <RevealObserver />

      <main>
        <Hero locale={locale} dict={dict} />
        <About dict={dict} />
        <Process dict={dict} locale={locale} />
        <Cases locale={locale} dict={dict} />
        <Sponsors locale={locale} dict={dict} />
        <Faq locale={locale} />
        <Contact dict={dict} locale={locale} />
      </main>

      <Footer locale={locale} dict={dict} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
