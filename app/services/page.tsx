import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Package,
  Ship,
  FileCheck,
  Warehouse,
  ClipboardCheck,
  Truck,
  ShieldCheck,
  HeadphonesIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services - EXORA Global Exports",
  description: "Explore our comprehensive export services including sourcing, quality control, logistics, documentation, and end-to-end support.",
};
const services = [
  {
    icon: Package,
    title: "Product Sourcing",
    description:
      "We source premium-quality products directly from verified manufacturers and trusted suppliers. Our strong sourcing network ensures consistent quality, competitive pricing, and reliable supply for global buyers.",
    features: [
      "Verified manufacturers & suppliers",
      "Consistent product quality",
      "Bulk sourcing capability",
      "Competitive global pricing",
    ],
  },
  {
    icon: Ship,
    title: "Global Export Services",
    description:
      "We manage end-to-end export operations, ensuring smooth coordination, regulatory compliance, and timely delivery across international markets.",
    features: [
      "Complete export handling",
      "International trade coordination",
      "Timely global delivery",
      "Market-specific export support",
    ],
  },
  {
    icon: Truck,
    title: "Logistics & Shipping",
    description:
      "Efficient sea and air freight solutions with complete documentation and compliance support. We ensure secure, cost-effective, and on-time global shipments.",
    features: [
      "Sea freight & air cargo",
      "Customs documentation support",
      "Secure cargo handling",
      "On-time international delivery",
    ],
  },
  {
    icon: FileCheck,
    title: "Documentation & Compliance",
    description:
      "We handle all export documentation and ensure compliance with international trade regulations, reducing risks and ensuring smooth customs clearance.",
    features: [
      "Export documentation",
      "Certificate of origin",
      "Regulatory compliance",
      "Customs clearance support",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Customized Trade Solutions",
    description:
      "We design tailored export strategies based on your market, product type, and volume requirements, helping businesses scale efficiently in global trade.",
    features: [
      "Market-specific strategies",
      "Product & volume planning",
      "Flexible order management",
      "Buyer-focused export planning",
    ],
  },
  {
    icon: Warehouse,
    title: "Warehousing & Handling",
    description:
      "Safe and hygienic storage solutions ensure product quality is maintained before shipment. Proper handling processes prevent damage and contamination.",
    features: [
      "Secure storage facilities",
      "Hygienic product handling",
      "Inventory management",
      "Pre-shipment preparation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Strict quality checks and compliance standards are maintained for every shipment, ensuring products meet international buyer expectations.",
    features: [
      "Pre-shipment inspections",
      "Quality grading",
      "Standards compliance",
      "Batch consistency checks",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description:
      "Dedicated support from inquiry to final delivery. We focus on building long-term partnerships through transparency, communication, and reliable service.",
    features: [
      "Dedicated export assistance",
      "Order status updates",
      "Issue resolution support",
      "Long-term partnership focus",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-primary-foreground md:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-center text-lg text-primary-foreground/80">
            Comprehensive export solutions for your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-foreground">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Contact us today to discuss your export requirements
          </p>
          <Link href="/contact" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
