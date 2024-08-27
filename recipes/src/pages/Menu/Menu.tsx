import Headlink from "../../components/Headlink/Headlink";
import ProductCart from "../../components/ProductCart/ProductCart";
import Text from "../../components/Text/Text";
import styles from './Menu.module.css'

export function Menu(){
    return <div className={styles['main']}> 
    <div className={styles['text']}>
        <Headlink>Рецепты</Headlink>
        <Text>Ищите рецепты русско-татарской кухни, выбирая категорию блюда, его подкатегорию или меню. </Text>
    </div>
    <div className={styles['cart']}>
        <ProductCart 
            id={1}
            title='Брауни'
            author='Илья'
            time={40}
            ingridients={6}
            image='/brownie.png'
        />
    </div>
    </div>
}