import { useState } from "react"
import { Input } from "../ui/input"
import { FilterChecboxProps, FilterCheckbox } from "./filters-checkbox"
import { Title } from "./title"

type Item = FilterChecboxProps

interface Props {
    className?: string,
    title: string,
    items: Item[],
    defaultItems : Item[],
    limit : number,
    searchInputPlaceholder ?: string,
    onChange?: (values: string[]) => void,
    defaultValue?: string[],
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
    className,
    title,
    items,
    defaultItems,
    limit = 3,
    searchInputPlaceholder = "Поиск...",
    onChange,
    defaultValue,
}) => {
    const [showAll, setShowAll] = useState(false)
    const [searchValue, setSearchValue] = useState('')


    const list = showAll 
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())) 
    : defaultItems.slice(0, limit)

    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }
    return (
        <div className={className}>
            <Title size="sm" text={title} className="font-bold mb-3"/>

            {showAll && <div className="mb-5">
                <Input  onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className="text-black bg-gray-50 border-none"/>
            </div>}

            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
                {list.map((item, i) => (
                    <FilterCheckbox 
                        key={i}
                        text={item.text}
                        value={item.value}
                        endAdornment={item.endAdornment}
                        checked={false}
                        onCheckedChange={(ss) => console.log(ss)}
                    />
                ))}
            </div>
            <div>
                    {items.length > limit && (
                        <div className={showAll ? 'border-t border-t-black/20 mt-4': ''}>
                            <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
                                {showAll ? 'Скрыть' : '+ Показать все'}
                            </button>
                        </div>
                    )}
                </div>
        </div>
    )
}