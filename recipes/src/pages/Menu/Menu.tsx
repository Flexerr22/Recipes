import { useEffect, useState } from "react";
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

    useEffect(() => {
        getProduct(searchItem)
    },[searchItem])


    const getProduct = async (name?: string) => {
        try{
            const {data} = await axios.get<Product[]>(`${PREFIX}`, {
                params: {name}
            })
            setProducts(data)
        } catch(e){
            console.error(e)
            return
        }
        
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(event.target.value);
    };
    
    return <div className={styles['main']}>
    <div className={styles['sort']}>
            <div className={styles['select']}>
                <select name="" id="">
                    <option value="290">290</option>
                    <option value="280">280</option>
                    <option value="300">300</option>
                </select>
                <select name="" id="">
                    <option value="4">Кол-во ингридиентов</option>
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