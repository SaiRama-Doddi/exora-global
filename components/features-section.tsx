import { Package, Globe, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Package,
    title: "Quality Products",
    description: "Premium goods sourced from trusted suppliers",
  },
  {
    icon: Globe,
    title: "Worldwide Shipping",
    description: "Reliable and fast global logistics",
  },
  {
    icon: Handshake,
    title: "Trusted Expertise",
    description: "Years of experience in international trade",
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-none bg-card shadow-lg transition-transform hover:-translate-y-1"
            >
              <CardContent className="flex items-center gap-4 p-6">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary/10">
                  <feature.icon className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
