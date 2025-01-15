'use client'
import { cn } from "@/lib/utils"
import { Input } from "../ui/input"
import { Search } from "lucide-react";
import { useRef, useState } from "react";
import {useClickAway} from 'react-use'

interface Props {
    className?: string
}

export const SearchInput: React.FC<Props> = ({className}) => {
    
    const [focused, setFocused] = useState(false)
    const ref = useRef(null)
    useClickAway(ref, () => {
        setFocused(false)
    })

    return (
        <>
        {focused && <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30 "></div>}
        <div 
            ref={ref}
            className={cn('justify-between relative z-30',className)}>
            <Search className="absolute top-1/2 translate-y-[-50%]  ml-[320px] left-3 h-5 text-gray-400"/>
            <Input 
            className="w-[645px] mt-11 mb-[77px] mx-auto border-none focus:ring-0 focus:border-transparent outline-none pl-11" 
            placeholder="Поиск рецептов..."
            onClick={() => setFocused(true)}
        />
        </div>
        </>
    )
}