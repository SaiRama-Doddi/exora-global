"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://res.cloudinary.com/djjjd6of8/image/upload/v1770390232/d1_lkncmi.jpg",
  },
  {
    image: "https://res.cloudinary.com/djjjd6of8/image/upload/v1770390371/tt_upmivy.jpg",
  },
  {
    image: "https://res.cloudinary.com/djjjd6of8/image/upload/v1770390502/chilli_wtwcvd.jpg",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid min-h-[520px] items-center gap-8 py-12 md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
              Global Network
              <span className="block text-secondary">Through Trade</span>
            </h1>

            <p className="text-lg text-primary-foreground/90">
              Your Partner in Global Export Solutions. We deliver quality
              products worldwide with trusted sourcing and logistics expertise.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 cursor-pointer">
                  Get a Quote
                </Button>
              </Link>

              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-black hover:bg-primary-foreground hover:text-primary cursor-pointer"
                >
                  View Products
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE SLIDER */}
          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl md:h-[420px] lg:h-[480px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt="slide"
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
