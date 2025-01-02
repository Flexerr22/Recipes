import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"

interface Props {
    className?: string
}

export const CarouselDemo: React.FC<Props> = () => {
    return (
        <Carousel >
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div>
                            <Card className="flex w-full h-full bg-[#545252] p-0">
                                <CardContent className="flex w-full h-full gap-3 p-0">
                                            <img
                                                className="w-full h-full object-cover py-6 pl-6"
                                                src="/olivie.png"
                                                alt="Картинка блюда"
                                            />
                                            <div className="flex flex-col  p-4 w-full h-full">
                                                <b className="text-base text-white font-semibold mb-2">Салат оливье</b>
                                                <b className="text-xs font-semibold text-[#BFBFBF] mb-4 w-[280px]">
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore optio nostrum quaerat delectus architecto qui vel iure voluptatem unde ea odio esse culpa enim placeat, non ducimus, ipsam accusantium totam!
                                                </b>
                                                <Button
                                                    variant="default"
                                                    size="default"
                                                    className="bg-white text-black hover:bg-gray-200"
                                                >
                                                    Смотреть рецепт
                                                </Button>
                                            </div>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white border-none text-black"/>
            <CarouselNext className="bg-white border-none text-black"/>
        </Carousel>
    )
}
