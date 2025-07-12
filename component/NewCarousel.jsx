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

  const imageurls=["https://i.pinimg.com/736x/93/82/41/938241c44c83493ba2d383113ab21781.jpg",
                   "https://i.pinimg.com/736x/48/d1/6d/48d16de4b3ec8d1e0f21ab5049703c13.jpg",
                   "https://i.pinimg.com/736x/17/ed/89/17ed890c93643350be5d6336bc2d8701.jpg",
                   "https://i.pinimg.com/736x/a2/e5/a7/a2e5a70e86b8016bbf575178823eb514.jpg",
                   "https://i.pinimg.com/736x/00/c1/9a/00c19a33cf96ad8ee799cf6cc75d3048.jpg"]
  return (
    <div id ="Home" className="relative"> {/* Ensure enough width & positioning */}
      <Carousel
        className="relative w-full"
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
        Autoplay({
          delay: 4000,
        })
      ]}
      >
        <CarouselContent>
          {imageurls.map((url, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <span className="text-4xl font-semibold">
                      {/* {index + 1} */}
                      <img src={url} alt="carousel item" className="w-150 h-160 object-cover"/>
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Debug style added to check visibility */}
        {/* <CarouselPrevious className="z-50" />
        <CarouselNext className="z-50" /> */}
      </Carousel>
    </div>
  )
}
