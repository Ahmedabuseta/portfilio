'use client'
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay"

import { Data } from "./data";
import Image from "next/image";
import { useRef } from "react";
export default function SkillCarousel() {
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel
    plugins={[plugin.current]}
    opts={{
      align: "start",
      loop: true,
    }}
    className="w-3/4 m-auto "
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Data.map((skill, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 max-w-xs border-none ">
            <div className="p-1">
              <Card className=" bg-transparent border-none border-red-500">
                <CardContent className="flex-col flex gap-2 items-center justify-center p-6">
                  <Image src={skill.src} alt="Css" className="w-full  aspect-square" />
                  <h5 className="p-3 block text-white">{skill.title}</h5>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
