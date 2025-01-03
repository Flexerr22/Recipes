import { Search } from "lucide-react";
import { Container } from "./container"
import { Input } from "../ui/input";
import { Button } from "../ui/button";


interface Props {
    className?: string
}

export const SearchBlock: React.FC<Props> = () => {
    return (
                <div className="flex bg-black/50 w-[1280px] h-[200px] py-5 px-14 border-2 border-white rounded-[15px] justify-between">
                    <div className="flex flex-col">
                        <b className="text-white text-2xl">Что готовим сегодня?</b>
                        <div className="relative flex items-center">
                            <Search className="absolute translate-y-[140%] h-3 top-1/2 left-2 h-5 text-gray-400" />
                            <Input
                                className="w-[300px] mt-11 mx-auto pl-8"
                                placeholder="Поиск рецептов..."
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <b className="text-white text-2xl font-bold">Популярные категории</b>
                        <div className="grid grid-rows-2 grid-flow-col gap-4 py-5 ">
                            <Button className="bg-white text-black hover:bg-gray-200"  variant="default" size="default">Завтраки</Button>
                            <Button className="bg-white text-black hover:bg-gray-200"  variant="default" size="default">Салаты</Button>
                            <Button className="bg-white text-black hover:bg-gray-200"  variant="default" size="default">Горячие блюда</Button>
                            <Button className="bg-white text-black hover:bg-gray-200"  variant="default" size="default">Обеды</Button>
                            <Button className="bg-white text-black hover:bg-gray-200"  variant="default" size="default">Супы</Button>
                        </div>
                    </div>
                </div>
    )
}