"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useLazyLoad } from "@/hooks/useLazyLoad";

// This would typically come from a database or API
const galleryEvents = [
  {
    id: 1,
    title: "Annual Sports Day 2023",
    images: ["/lol.png", "/lol.png", "/lol.png"],
  },
  {
    id: 2,
    title: "Science Fair Exhibition",
    images: ["/lol.png", "/lol.png", "/lol.png"],
  },
  {
    id: 3,
    title: "Cultural Festival",
    images: ["/lol.png", "/lol.png", "/lol.png"],
  },
  {
    id: 4,
    title: "Graduation Ceremony",
    images: ["/lol.png", "/lol.png", "/lol.png"],
  },
];

function LazyImage({ src, alt }: { src: string; alt: string }) {
  const { isLoaded, imgRef } = useLazyLoad(src);

  return (
    <div className="relative aspect-video" ref={imgRef}>
      {isLoaded ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-300 opacity-100"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse"></div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        School Event Gallery
      </h1>
      <div className="space-y-16">
        {galleryEvents.map((event) => (
          <div key={event.id}>
            <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {event.images.map((src, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <LazyImage
                      src={src}
                      alt={`${event.title} - Image ${index + 1}`}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
