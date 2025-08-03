"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function NewCarousel() {
  const imageurls = [
    "https://i.pinimg.com/1200x/8e/f5/af/8ef5af1cacebb410d490cbcad4ea85f3.jpg", // React
    "https://i.pinimg.com/736x/5e/b9/5e/5eb95eaf598d1007befaa78d038c2b2f.jpg", // Next.js
    "https://i.pinimg.com/736x/00/e1/ee/00e1eecf4c38085b2101ce994deba1b8.jpg", // Node.js
    "https://i.pinimg.com/736x/c5/26/0e/c5260e96e995b53d26028f6975be90bb.jpg", // MongoDB
    "https://i.pinimg.com/1200x/e8/85/5a/e8855a761b753ecd7270d8eb44b0c704.jpg", // Tailwind
    "https://i.pinimg.com/736x/e6/f8/db/e6f8db60f6b1962fde9a88545fad8062.jpg", // Python
  ]

  return (
    <div id="Home" className="relative px-4 py-6">
      <Carousel
        className="w-full"
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {imageurls.map((url, index) => (
            <CarouselItem
              key={index}
              className="basis-2/3 md:basis-1/3 lg:basis-1/5"
            >
              <Card className="shadow-md border">
                <CardContent className="flex items-center justify-center p-2">
                  <img
                    src={url}
                    alt={`Tech-${index}`}
                    className="w-full h-32 object-contain rounded-md"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="z-10" />
        <CarouselNext className="z-10" />
      </Carousel>
    </div>
  )
}
