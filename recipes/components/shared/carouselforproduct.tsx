import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import Image from 'next/image'


export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div>
      <div className="flex flex-col items-center">
        {/* Карусель */}
        <Carousel setApi={setApi} className="flex rounded-2xl items-center w-[20vw]">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-0">
                    <Image 
                      src="/olivie.png" 
                      alt={"Название картинки"}  
                      width={400}
                      height={200}    
                      className="object-cover h-full rounded-2xl"              
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-white text-black"/>
          <CarouselNext className="bg-white text-black"/>
        </Carousel>
        
        {/* Текст с текущим номером слайда */}
        <div className="py-2 text-center text-sm text-muted-foreground">
          {current} of {count}
        </div>
      </div>
    </div>
  )
}
