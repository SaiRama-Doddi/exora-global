"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/lib/products";

export function ProductsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Our Top Export Products
          </h2>
          <p className="mt-2 text-muted-foreground">
            Premium quality products for global markets
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <Card className="group h-full overflow-hidden border-none shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-primary-foreground">{product.name}</h3>
                    <p className="text-sm text-primary-foreground/80">{product.category}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{product.shortDescription}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          {!showAll ? (
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              View All Products
            </Button>
          ) : (
            <Link href="/products">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Go to Products Page
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
