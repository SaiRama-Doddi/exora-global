import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Our Products - EXORA Global Exports",
  description: "Explore our wide range of premium export products including Makhana, Organic Spices, Maize Products, and more.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-primary-foreground md:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 text-center text-lg text-primary-foreground/80">
            Premium quality products for global markets
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`}>
                <Card className="group h-full overflow-hidden border-none shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="mb-1 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                        {product.category}
                      </span>
                      <h3 className="text-xl font-bold text-primary-foreground">{product.name}</h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground">{product.shortDescription}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
