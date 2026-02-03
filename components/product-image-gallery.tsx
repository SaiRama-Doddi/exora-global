"use client";

import React from "react"

import { useState, useRef } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current || !isZoomed) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image with Zoom */}
      <div
        ref={imageContainerRef}
        className="relative aspect-square cursor-zoom-in overflow-hidden rounded-lg bg-muted"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={`${productName} - Image ${selectedImage + 1}`}
          fill
          className={`object-cover transition-transform duration-200 ${
            isZoomed ? "scale-150" : "scale-100"
          }`}
          style={
            isZoomed
              ? {
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }
              : undefined
          }
        />
        {!isZoomed && (
          <div className="absolute bottom-4 left-4 rounded-md bg-primary/80 px-3 py-1 text-xs text-primary-foreground">
            Hover to zoom
          </div>
        )}
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative h-20 w-20 overflow-hidden rounded-md transition-all ${
              selectedImage === index
                ? "ring-2 ring-secondary ring-offset-2"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${productName} - Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
