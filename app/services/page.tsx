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
      "We source premium quality products directly from trusted farmers and manufacturers across India. Our extensive network ensures access to the best products at competitive prices.",
    features: [
      "Direct farm sourcing",
      "Quality manufacturer partnerships",
      "Competitive pricing",
      "Product customization",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes ensure that every product meets international standards. We conduct thorough inspections at every stage of the supply chain.",
    features: [
      "Pre-shipment inspection",
      "Laboratory testing",
      "Certification compliance",
      "Quality documentation",
    ],
  },
  {
    icon: FileCheck,
    title: "Documentation & Compliance",
    description:
      "We handle all export documentation and ensure compliance with international trade regulations. Our team is well-versed in customs procedures worldwide.",
    features: [
      "Export documentation",
      "Customs clearance",
      "Certificate of origin",
      "Phytosanitary certificates",
    ],
  },
  {
    icon: Warehouse,
    title: "Warehousing & Storage",
    description:
      "State-of-the-art warehousing facilities ensure proper storage and handling of products. Temperature-controlled options available for sensitive goods.",
    features: [
      "Climate-controlled storage",
      "Inventory management",
      "Secure facilities",
      "Just-in-time delivery",
    ],
  },
  {
    icon: Ship,
    title: "Logistics & Shipping",
    description:
      "Comprehensive logistics solutions covering sea, air, and land transportation. We work with leading carriers to ensure timely and safe delivery.",
    features: [
      "Sea freight",
      "Air cargo",
      "Multimodal transport",
      "Real-time tracking",
    ],
  },
  {
    icon: Truck,
    title: "Last Mile Delivery",
    description:
      "Complete door-to-door delivery services ensuring your products reach the final destination safely and on time.",
    features: [
      "Door-to-door service",
      "Delivery scheduling",
      "Proof of delivery",
      "Returns management",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Risk Management",
    description:
      "Comprehensive cargo insurance and risk management services to protect your shipments against unforeseen circumstances.",
    features: [
      "Cargo insurance",
      "Risk assessment",
      "Claims handling",
      "Coverage options",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description:
      "Dedicated support team available to assist you throughout the export process. From inquiry to delivery, we are here to help.",
    features: [
      "24/7 support",
      "Dedicated account manager",
      "Regular updates",
      "Issue resolution",
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
