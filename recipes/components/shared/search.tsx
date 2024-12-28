import { cn } from "@/lib/utils"
import { Input } from "../ui/input"
import { Search } from "lucide-react";

interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({className}) => {
    return (
        <div className={cn('justify-between relative',className)}>
            <Search className="absolute top-1/2 translate-y-[-50%]  ml-[320px] left-3 h-5 text-gray-400"/>
            <Input 
            className="w-[645px] mt-11 mb-[77px] mx-auto border-none pl-11" 
            placeholder="Поиск рецептов..."
        />
        </div>
    )
}