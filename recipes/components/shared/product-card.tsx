import { cn } from "@/lib/utils"
import Link from "next/link"
import { Title } from "./title"
import { ChefHat, Flame, Hourglass } from "lucide-react"

interface Props {
    className?: string,
    id: number,
    name: string,
    imageUrl: string,
    ingrediens: number,
    time: number,
    weight: number

}

export const ProductCard: React.FC<Props> = ({className, id, name, imageUrl, ingrediens, time, weight }) => {
    return (
        <div className={cn(className, "shadow-xl w-[20vw] rounded-[15px]")}>
            <Link href={`/product/${id}`} className="relative flex flex-col">
                <div className="flex h-[200px]">
                    <img className="rounded-[15px] w-full" height={50} src={imageUrl} alt={name} />
                </div>
                <div className="flex px-5 gap-2 flex-col mt-2 drop-shadow-xl">
                    <Title text={name} size="xs" className="font-semibold"></Title>
                    <div className="flex gap-3 items-center">
                        <ChefHat size={15} />
                        <p className="text-[#BFBFBF] text-[13px] font-semibold">{ingrediens} ингредиентов</p>
                    </div>
                    <div className="flex justify-between items-center pb-5">
                        <div className="flex gap-3 items-center">
                            <Hourglass size={15} />
                            <p className="text-[#BFBFBF] text-[13px] font-semibold">{time} минут</p>
                        </div>

                        {/* Вертикальная линия */}
                        <div className="border-[1px] h-4 border-black mx-2"></div>

                        <div className="flex gap-3 items-center">
                            <Flame size={15} />
                            <p className="text-[#BFBFBF] text-[13px] font-semibold">{weight} гр</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
