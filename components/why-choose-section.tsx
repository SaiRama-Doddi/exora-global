import { Globe2, BadgeDollarSign, Settings, HeadphonesIcon } from "lucide-react";

const reasons = [
  {
    icon: Globe2,
    title: "Global Network",
    description: "Extensive reach across continents",
  },
  {
    icon: BadgeDollarSign,
    title: "Competitive Pricing",
    description: "Best rates for quality products",
  },
  {
    icon: Settings,
    title: "Customized Solutions",
    description: "Tailored export services to meet your needs",
  },
  {
    icon: HeadphonesIcon,
    title: "Reliable Support",
    description: "Dedicated team for end-to-end assistance",
  },
];

export function WhyChooseSection() {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary-foreground md:text-4xl">
          Why Choose EXORA?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20">
                <reason.icon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary-foreground">
                {reason.title}
              </h3>
              <p className="text-sm text-primary-foreground/80">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
