import { useCallback, useEffect, useState } from "react";
import Headlink from "../../components/Headlink/Headlink";
import { PREFIX } from "../../components/helpers/API";
import { Product } from "../../components/interfaces/Product.interface";
import ProductCart from "../../components/ProductCart/ProductCart";
import Text from "../../components/Text/Text";
import styles from './Menu.module.css'
import axios from "axios";
import Search from "../../components/Search/Search";

export function Menu(){
    const[products,setProducts] = useState<Product[]>([])
    const [searchItem, setSearchItem] = useState<string>('')
    const [sortValue, setSortValue] = useState<string>('')
    const [sortValueNew, setSortValueNew] = useState<string>('')

    const getProduct = useCallback( async (name?: string) => {
        try{
            const {data} = await axios.get<Product[]>(`${PREFIX}`, {
                params: {name}
            })
            const sortedData = filterProducts(data, sortValue, sortValueNew);
            setProducts(sortedData);
        } catch(e){
            console.error(e)
            return
        }
        
    },[sortValue, sortValueNew])

    useEffect(() => {
        getProduct(searchItem)
    },[searchItem, getProduct])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(event.target.value);
    };

    const sortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortValue(event.target.value)
    }

    const sortChangeNew = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortValueNew(event.target.value)
    }

    const filterProducts = (products: Product[], sortValue: string, sortValueNew: string): Product[] => {
        if(sortValue){
            return products.filter(product => product.price.toString() === sortValue);

        }
        else if(sortValueNew){
            return products.filter(product => product.ingredients.length.toString() === sortValueNew);
        }
        return products
    }
    
    return <div className={styles['main']}>
    <div className={styles['sort']}>
            <div className={styles['select']}>
                <select onChange={sortChange} name="" id="">
                    <option value="">Сортировка по времени</option>
                    <option value="290">Время: 290</option>
                    <option value="280">Время: 280</option>
                    <option value="300">Время: 300</option>
                    <option value="320">Время: 320</option>
                </select>
                <select onChange={sortChangeNew} name="" id="">
                    <option value="">Кол-во ингридиентов</option>
                    <option value="4">Кол-во ингридиентов: 4</option>
                    <option value="3">Кол-во ингридиентов: 3</option>
                </select>
            </div>
            <Search onChange={handleChange} placeholder="Введите блюдо"/>
    </div> 
    <div className={styles['text']}>
        <Headlink>Рецепты</Headlink>
        <Text>Ищите рецепты русско-татарской кухни, выбирая категорию блюда, его подкатегорию или меню. </Text>
    </div>
    <div className={styles['cart']}>
        {products.map(p => (
            <ProductCart 
            key={p.id}
            id={p.id}
            title={p.name}
            author={p.name }
            time={p.price}
            ingridients={p.ingredients.length}
            image={p.image}
        />
        ))}
    </div>
    </div>
}