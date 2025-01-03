import { Container } from "@/components/shared/container";
import { Information } from "@/components/shared/information";
import { ProductCard } from "@/components/shared/product-card";
import { ProductGroupList } from "@/components/shared/products-group-list";
import { SearchInput } from "@/components/shared/search";
import { SearchBlock } from "@/components/shared/search-block";



export default function Catalog() {
  return <div>
      <Container className="py-10">
        <SearchInput />
      </Container>
    <Container className="flex">
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
                </Container>
        </div>

}
