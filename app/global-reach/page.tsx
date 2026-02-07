import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, MapPin, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Reach - EXORA Global Exports",
  description: "Discover our worldwide presence - exporting premium products to 50+ countries across Asia, Europe, Americas, Africa, and Oceania.",
};

const regions = [
  {
    name: "Asia Pacific",
    countries: ["Singapore", "Malaysia", "Australia", "Southeast Asia"],
    description:
      "Strong presence in Asia-Pacific markets with growing demand for organic and agricultural products.",
  },
  {
    name: "Europe",
    countries: ["United Kingdom", "Germany", "European Union"],
    description:
      "Established partnerships across Europe meeting strict EU quality and compliance standards.",
  },
  {
    name: "Middle East",
    countries: ["United Arab Emirates"],
    description:
      "Growing market for premium food products and agricultural exports.",
  },
  {
    name: "Americas",
    countries: ["Canada"],
    description:
      "Expanding export operations with reliable distribution networks.",
  },
];


const highlights = [
  {
    icon: Globe,
    value: "50+",
    label: "Countries",
    description: "Global export destinations",
  },
  {
    icon: MapPin,
    value: "6",
    label: "Continents",
    description: "Worldwide presence",
  },
  {
    icon: Users,
    value: "500+",
    label: "Partners",
    description: "Trusted business relationships",
  },
  {
    icon: TrendingUp,
    value: "30%",
    label: "Annual Growth",
    description: "Year-over-year expansion",
  },
];

export default function GlobalReachPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-primary-foreground md:text-5xl">
            Our Global Reach
          </h1>
          <p className="mt-4 text-center text-lg text-primary-foreground/80">
            Connecting markets across continents
          </p>
        </div>
      </section>

      {/* World Map Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative aspect-[2/1] overflow-hidden rounded-lg shadow-xl">
            <Image
              src="https://res.cloudinary.com/djjjd6of8/image/upload/v1770389695/g_azogjy.jpg"
              alt="EXORA Global Network"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-primary/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
                  Exporting to 50+ Countries
                </h2>
                <p className="mt-2 text-lg text-primary-foreground/90">
                  Your trusted partner in global trade
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Regions */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Regions We Serve
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region, index) => (
              <Card
                key={index}
                className="border-none shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <MapPin className="h-5 w-5 text-secondary" />
                    {region.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">{region.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">
            Expand Your Business Globally
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Partner with EXORA to access premium products from India
          </p>
          <Link href="/contact" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
