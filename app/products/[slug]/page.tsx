import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductImageGallery } from "@/components/product-image-gallery";
import { EnquiryModal } from "@/components/enquiry-modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { products, getProductBySlug } from "@/lib/products";
import { ArrowLeft, CheckCircle, Package, MapPin, Calendar, Scale, Award } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: "Product Not Found - EXORA Global Exports",
    };
  }

  return {
    title: `${product.name} - EXORA Global Exports`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <Link href="/products" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="bg-background py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Image Gallery */}
            <ProductImageGallery images={product.images} productName={product.name} />

            {/* Product Info */}
            <div>
              <Badge className="mb-4 bg-secondary text-secondary-foreground">
                {product.category}
              </Badge>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                {product.shortDescription}
              </p>

              <Separator className="my-6" />

              <div className="prose prose-gray max-w-none">
                <h3 className="text-lg font-semibold text-foreground">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <Separator className="my-6" />

              {/* Quick Details */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Origin</p>
                    <p className="font-medium text-foreground">{product.details.origin}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Scale className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">MOQ</p>
                    <p className="font-medium text-foreground">{product.details.moq}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Calendar className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Shelf Life</p>
                    <p className="font-medium text-foreground">{product.details.shelfLife}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                    <Package className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Packaging</p>
                    <p className="font-medium text-foreground">{product.details.packaging}</p>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              {/* Enquiry Button */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <EnquiryModal productName={product.name} />
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground sm:w-auto"
                  >
                    Request a Quote
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Award className="h-5 w-5 text-secondary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {product.details.certifications.map((cert, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="flex items-center gap-1 bg-green-100 text-green-800"
                    >
                      <CheckCircle className="h-3 w-3" />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-foreground">Packaging Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.details.packaging}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Custom packaging available upon request. Contact us for bulk orders
                  and special requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
