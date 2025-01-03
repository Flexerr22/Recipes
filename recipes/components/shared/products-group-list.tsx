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
            <div className="grid grid-cols-3 bg-white rounded-[5px] gap-[23px] px-12 py-10">
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