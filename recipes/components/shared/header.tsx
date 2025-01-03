
import { ArrowRight, UserCheck } from "lucide-react";
import { Button } from "../ui/button";
import { Container } from "./container"
import Image  from 'next/image';
import Link from "next/link";

interface Props {
    className?: string
}

export const Header: React.FC<Props> = () => {
    return (
        <header className="pt-10">
            <Container className="flex items-end  justify-between ">
                <div className="flex items-center hover:scale-110 transition-transform duration-300">
                    <Link href="/">
                        <Image src="/Resipes+.svg" alt="Logo" width={190} height={50}/>
                    </Link>
                </div>
                <div className="flex items-center gap-20  pb-2 border-b-2 border-white cursor-pointer text-base font-semibold text-white">
                    <Link href="/catalog" className="hover:scale-110 transition-transform duration-300">Каталог</Link>
                    <Link href="#" className="hover:scale-110 transition-transform duration-300">О нас</Link>
                    <Link href="#" className="hover:scale-110 transition-transform duration-300">Избранное</Link>
                    <Link href="#" className="hover:scale-110 transition-transform duration-300">Профиль</Link>
                </div>
                <div>
                    <Button className="flex items-center justify-between px-7 text-base" variant="outline" size="default">
                        <div className="flex items-center gap-4">
                            <UserCheck height={20} width={25}/>
                            <ArrowRight size={15}/>
                        </div>
                        Войти
                    </Button>
                </div>
            </Container>
            </header>
    )
}