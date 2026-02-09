import { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Award, Globe, TrendingUp } from "lucide-react";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "About Us - EXORA Global Exports",
  description: "Learn about EXORA Global Exports - Your trusted partner in international trade with years of expertise in premium product exports.",
};

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on the quality of our products",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Our clients success is our top priority",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Meeting international quality and safety standards",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Always improving and expanding our capabilities",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Countries Served" },
  { value: "500+", label: "Happy Clients" },
  { value: "1000+", label: "Products Exported" },
];

export default function AboutPage() {

const productImages = products.map((p) => p.images[0]);
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-primary-foreground md:text-5xl">
            About EXORA
          </h1>
          <p className="mt-4 text-center text-lg text-primary-foreground/80">
            Connecting Markets Worldwide
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                EXORA GLOBAL is a Dynamic export company committed to bridging global markets through quality products, transparent processes and dependable service. We work closely with trusted manufacturers and suppliers to deliver products that meet international standards.
              </p>
            {/*   <p className="mt-4 text-muted-foreground">
                With over 15 years of experience in the export industry, we have built
                strong relationships with farmers, manufacturers, and suppliers across
                India. Our commitment to quality and customer satisfaction has helped
                us serve clients in over 50 countries.
              </p> */}
              <p className="mt-4 text-muted-foreground">
               

EXORA GLOBAL is an experienced international export company dedicated in connecting manufacturers with global buyers,we source products directly from certified supplier and ensure.

              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-xl lg:aspect-video">
              <Image
                src="https://res.cloudinary.com/djjjd6of8/image/upload/v1770465612/ChatGPT_Image_Feb_7_2026_05_29_11_PM_qztyu2.png"
                alt="EXORA Warehouse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-none bg-primary text-primary-foreground shadow-xl">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                  <Target className="h-7 w-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="mt-4 text-primary-foreground/90">
                  To provide premium quality products to global markets while maintaining
                  the highest standards of service, reliability, and customer satisfaction.
                  We strive to be the preferred export partner for businesses worldwide.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-card shadow-xl">
              <CardContent className="p-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/20">
                  <Eye className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                <p className="mt-4 text-muted-foreground">
                  To become a global leader in agricultural and organic product exports,
                  recognized for our unwavering commitment to quality, sustainability,
                  and building lasting partnerships across continents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>  
      </section>

      {/* Stats */}
  <section className="bg-secondary py-16 overflow-hidden">
  <div className="container mx-auto px-4 lg:px-8">
    <h2 className="text-center text-2xl font-semibold mb-8">
      Our Export Products
    </h2>

    <div className="relative w-full overflow-hidden">
      <div className="flex gap-8 animate-scroll">
        {[...productImages, ...productImages].map((img, index) => (
          <img
            key={index}
            src={img}
            className="h-28 w-28 object-cover rounded-lg shadow-sm border-white border-4"
            alt="product"
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Core Values */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Our Core Values
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-none text-center shadow-lg transition-transform hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
