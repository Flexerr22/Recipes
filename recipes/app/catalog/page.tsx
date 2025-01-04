import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductGroupList } from "@/components/shared/products-group-list";
import { SearchInput } from "@/components/shared/search";



export default function Catalog() {
  return <div>
        <Container className="pt-10">
            <SearchInput />
        </Container>
        <div className="bg-black/50">
        <Container className="flex flex-col gap-[60px]">
            <div className="flex gap-[60px]">
                <div className="w-[260px] pb-6">
                    <Filters />
                </div>

                <div className="flex flex-col bg-white rounded-[15px] gap-10 flex-grow">
                    <ProductGroupList 
                    items={[
                        {
                            id: 1,
                            name: "Куринные крылышки ",
                            imageUrl: "https://eda.ru/images/RecipePhoto/620x415/kurinye-krylyshki-s-tamarindom_126278_photo_150413.webp",
                            ingrediens: 11,
                            time: 20,
                            weight: 250
                        },
                        {
                            id: 2,
                            name: "Куринные крылышки ",
                            imageUrl: "https://eda.ru/images/RecipePhoto/620x415/kurinye-krylyshki-s-tamarindom_126278_photo_150413.webp",
                            ingrediens: 11,
                            time: 20,
                            weight: 250
                        },
                        {
                            id: 3,
                            name: "Куринные крылышки ",
                            imageUrl: "https://eda.ru/images/RecipePhoto/620x415/kurinye-krylyshki-s-tamarindom_126278_photo_150413.webp",
                            ingrediens: 11,
                            time: 20,
                            weight: 250
                        },
                        {
                            id: 4,
                            name: "Куринные крылышки ",
                            imageUrl: "https://eda.ru/images/RecipePhoto/620x415/kurinye-krylyshki-s-tamarindom_126278_photo_150413.webp",
                            ingrediens: 11,
                            time: 20,
                            weight: 250
                        },
                        {
                            id: 5,
                            name: "Куринные крылышки ",
                            imageUrl: "https://eda.ru/images/RecipePhoto/620x415/kurinye-krylyshki-s-tamarindom_126278_photo_150413.webp",
                            ingrediens: 11,
                            time: 20,
                            weight: 250
                        },
                        {
                            id: 6,
                            name: "Куринные крылышки ",
                            imageUrl: "https://eda.ru/images/RecipePhoto/620x415/kurinye-krylyshki-s-tamarindom_126278_photo_150413.webp",
                            ingrediens: 11,
                            time: 20,
                            weight: 250
                        }
                    ]}
                    />
                </div>
                </div>
                </Container>
            </div>       
        
    </div>

}
