import { Button } from "../ui/button";
import { CarouselDemo } from "./carousel";
import { Container } from "./container"


interface Props {
    className?: string
}

export const Information: React.FC<Props> = () => {
    return (
        <header className="pt-10">
            <Container className="flex justify-between">
                <div className="flex flex-col text-white w-[427px] gap-5">
                    <b className="text-[48px] font-black leading-15">Онлайн книга рецептов</b>
                    <b className="text-[#BDBDBD]">lorem ispu Кореянка первый раз пробует водку Аж вспотела маленькаяДоброс наёмника из Австралии. Кадры допросом в лучших традициях Тарантиновских диалогов.</b>
                    <div className="flex gap-11">
                        <Button variant="default" size="default">Все рецепты</Button>
                        <Button className="bg-white text-black hover:bg-gray-200" variant="default" size="default">Добавить рецепт</Button>
                    </div>
                </div>

                <div className="border-2 top-0 bottom-0 left-[427px] w-[1px] bg-gray-400"></div>


                <div className="flex flex-col text-white w-[585px] gap-8">
                    <b className="text-[32px] font-black">Попробуйте приготовить!</b>
                    <CarouselDemo />
                </div>
            </Container>
            </header>
    )
}