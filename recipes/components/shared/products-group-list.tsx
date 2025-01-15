import { cn } from "@/lib/utils"
import { ProductCard } from "./product-card"

interface Props {
    className?: string,
    items: any[]
}

export const ProductGroupList: React.FC<Props> = ({
    className,
    items
}) => {
    return (
        <div className={className}>
            <p className="text-[16px] font-semibold pl-12 pt-10">По запросу "куринные крылышки" найдено 6 рецептов</p>
            <div className="grid grid-cols-2 rounded-[5px] gap-[50px] px-12 py-10">
                {items.map((product, i) => (
                    <ProductCard 
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        ingrediens={product.ingrediens}
                        time={product.time}
                        weight={product.weight}
                    />
                ))}
            </div>
        </div>
    )
}