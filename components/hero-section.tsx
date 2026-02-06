"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://res.cloudinary.com/djjjd6of8/image/upload/v1770390232/d1_lkncmi.jpg",
    title: "Connecting the World",
    subtitle: "Through Trade",
    description: "Your Partner in Global Export Solutions",
  },
  {
    image: "https://res.cloudinary.com/djjjd6of8/image/upload/v1770390371/tt_upmivy.jpg",
    title: "Quality Products",
    subtitle: "Worldwide Delivery",
    description: "Premium goods sourced from trusted suppliers",
  },
  {
    image: "https://res.cloudinary.com/djjjd6of8/image/upload/v1770390502/chilli_wtwcvd.jpg",
    title: "Global Network",
    subtitle: "Local Expertise",
    description: "Extensive reach across continents",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[500px] w-full overflow-hidden md:h-[600px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-xl">
            <h1 className="text-balance text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
              {slides[currentSlide].title}
              <span className="block text-secondary">{slides[currentSlide].subtitle}</span>
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/90 md:text-xl">
              {slides[currentSlide].description}
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary-foreground/20 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-8 rounded-full transition-colors ${
              index === currentSlide ? "bg-secondary" : "bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
