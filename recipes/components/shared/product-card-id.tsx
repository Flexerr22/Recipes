'use client'
import { cn } from "@/lib/utils"
import { Title } from "./title"
import { CarouselDApiDemo } from "./carouselforproduct"

type Props = {
    className?: string,
    name: string,
    steps: any[],
    ingrediens: any[],
    time: number,
    weight: number

}
export const ProductCardId: React.FC<Props> = ({className, name, steps, ingrediens, time, weight}) => {
    return (
        <div className={cn("flex flex-col ", className)}>
            <Title text={name} size="lg" className="font-bold text-center text-black"/>

            <div className="flex mt-[84px] justify-between">
                <CarouselDApiDemo />

                <div className="border-[1px] border-black"></div>
                
                <div className="flex flex-col w-[20vw] gap-8">
                    <div className="flex flex-col gap-5">
                        <Title className="font-medium text-[20px]" text={"Ингредиенты:"} ></Title>
                        <div className="flex flex-col gap-3">
                                {ingrediens.map((ingredient, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <Title size="xs" className="font-light" text={ingredient.name}></Title>

                                        <div className="flex-1 border-b border-gray-300 mx-2 mt-3"></div>
                                        
                                        <div className="flex gap-2">
                                        <Title size="xs" className="font-light" text={ingredient.value}></Title>
                                        <Title size="xs" className="font-light" text={ingredient.measure}></Title>
                                        </div> 
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <Title className="font-medium text-[20px]" text={"Время приготовления:"} ></Title>
                        <Title size="xs" className="font-light" text={`${time} минут`}></Title>
                    </div>
                    
                    <div className="flex justify-between items-center">
                        <Title className="font-medium text-[20px]" text={"Калорийность блюда:"} ></Title>
                        <Title size="xs" className="font-light" text={`${weight} ккал`}></Title>
                    </div>

                </div>
            </div>
            
            <Title size="sm" className="font-semibold mt-[92px] text-black" text={"Шаги приготовления:"} />
            
            <div className="flex flex-col gap-[106px] pb-10 pt-[100px]">
                    {steps.map((step, index) => (
                            <div className="flex justify-between">
                                <img key={index} src={step.image} width={400} height={300} />
                                <p className="text-[16px] leading-10 font-light w-[30vw]"><span className="font-bold pr-5">{step.id}  </span> {step.description}</p>
                            </div>
                    ))}
            </div>
        </div>
    )
}