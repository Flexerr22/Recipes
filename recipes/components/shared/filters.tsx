'use client'
import { Button } from "../ui/button"
import { CheckboxFiltersGroup } from "./checkbox-filters-group"
import { Title } from "./title"


interface Props {
    className?: string
}

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div className={className}>
            <div className="text-white">
                <CheckboxFiltersGroup 
                    title="Категории:"
                    className="mt-5"
                    limit={5}
                    defaultItems={[
                        {
                          text: "Завтраки",
                          value: "1",
                        },
                        {
                          text: "Обеды",
                          value: "2",
                        },
                        {
                          text: "Горячие блюда",
                          value: "3",
                        },
                        {
                            text: "Салаты",
                            value: "4",
                          },
                          {
                            text: "Супы",
                            value: "5",
                          }
                      ]}
                      items={[
                        {
                            text: "Завтраки",
                            value: "1",
                          },
                          {
                            text: "Обеды",
                            value: "2",
                          },
                          {
                            text: "Горячие блюда",
                            value: "3",
                          },
                          {
                            text: "Салаты",
                            value: "4",
                          },
                          {
                            text: "Супы",
                            value: "5",
                          }
                      ]}
                />
                <CheckboxFiltersGroup 
                    title="Кухни:"
                    className="mt-5"
                    limit={4}
                    defaultItems={[
                        {
                          text: "Итальянская",
                          value: "1",
                        },
                        {
                          text: "Мексиканская",
                          value: "2",
                        },
                        {
                          text: "Французская",
                          value: "3",
                        },
                        {
                          text: "Русская",
                          value: "4",
                        }
                      ]}
                      items={[
                        {
                            text: "Итальянская",
                            value: "1",
                          },
                          {
                            text: "Мексиканская",
                            value: "2",
                          },
                          {
                            text: "Французская",
                            value: "3",
                          },
                          {
                            text: "Русская",
                            value: "4",
                          },
                          {
                            text: "Греческая",
                            value: "5",
                          },
                          {
                            text: "Мексиканская",
                            value: "6",
                          },
                          {
                            text: "Французская",
                            value: "7",
                          },
                          {
                            text: "Русская",
                            value: "8",
                          }
                      ]}
                />
                <CheckboxFiltersGroup
                    title="Ингридиенты"
                    className="mt-5"
                    limit={6}
                    defaultItems={[
                    {
                        text: "Сырный соус",
                        value: "1",
                    },
                    {
                        text: "Моцарелла",
                        value: "2",
                    },
                    {
                        text: "Чеснок",
                        value: "3",
                    },
                    {
                        text: "Соленные огурчики",
                        value: "4",
                    },
                    {
                        text: "Красный лук",
                        value: "5",
                    },
                    {
                        text: "Томаты",
                        value: "6",
                    },
                    ]}
                    items={[
                    {
                        text: "Сырный соус",
                        value: "1",
                    },
                    {
                        text: "Моцарелла",
                        value: "2",
                    },
                    {
                        text: "Чеснок",
                        value: "3",
                    },
                    {
                        text: "Соленные огурчики",
                        value: "4",
                    },
                    {
                        text: "Красный лук",
                        value: "5",
                    },
                    {
                        text: "Томаты",
                        value: "6",
                    },
                    {
                        text: "Сырный соус",
                        value: "1",
                    },
                    {
                        text: "Моцарелла",
                        value: "2",
                    },
                    {
                        text: "Чеснок",
                        value: "3",
                    },
                    {
                        text: "Соленные огурчики",
                        value: "4",
                    },
                    {
                        text: "Красный лук",
                        value: "5",
                    },
                    {
                        text: "Томаты",
                        value: "6",
                    },
                    ]}
                />
            </div>
        </div>
    )
}