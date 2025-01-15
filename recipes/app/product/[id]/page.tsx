import { Container } from "@/components/shared/container";
import { ProductCardId } from "@/components/shared/product-card-id";
export default function ProductPage (){
    return (
        <div className="rounded-2xl py-12 h-[100vh] bg-white mt-[129px]">
            <Container>
                <ProductCardId 
                    name={"Куринные крылышки"}
                    ingrediens={[
                        {
                            name: 'Куриное филе',
                            value: 100,
                            measure: 'гр'
                        },
                        {
                            name: 'Грибы',
                            value: 200,
                            measure: 'гр'
                        },
                        {
                            name: 'Жаренные овощи',
                            value: 100,
                            measure: 'гр'
                        },
                        {
                            name: 'Соевый соус',
                            value: 100,
                            measure: 'мл'
                        },
                    ]}
                    time={20}
                    weight={250} 
                    steps={[
                        {
                            id: 1,
                            image: '/olivie.png',
                            description: 'Шоколад разломать на кусочки и вместе со сливочным маслом растопить на водяной бане, не переставая все время помешивать лопаткой или деревянной ложкой. Получившийся густой шоколадный соус снять с водяной бани и оставить остывать.'
                        },
                        {
                            id: 2,
                            image: '/olivie.png',
                            description: 'Тем временем смешать яйца со ста граммами коричневого сахара: яйца разбить в отдельную миску и взбить, постепенно добавляя сахар. Взбивать можно при помощи миксера или вручную — как больше нравится, — но не меньше двух с половиной-трех минут.'
                        }
                    ]}            />
            </Container>
        </div>
    )
}