import { useState } from 'react'
import styles from './ProductCart.module.css'
import { ProductCartProps } from './ProductCart.props'
import { Link } from 'react-router-dom';

export function ProductCart(props:ProductCartProps){
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked)
    }
    return <div className={styles['cart']}>
        <Link to={`/product/${props.id}`} className={styles['link']}>
        <div className={styles['img']}>
          <img  src={props.image} />
        </div>
        </Link>
        <div className={styles['info']}>
            <Link to={`/product/${props.id}`} className={styles['link']}>
            <div className={styles['title']}>
                {props.title}
            </div>
            </Link>
            <Link to={`/product/${props.id}`} className={styles['link']}>
            <div className={styles['author']}>
                <p>Автор:</p>
                {props.author}
            </div>
            </Link>
            <Link to={`/product/${props.id}`} className={styles['link']}>
            <div className='opicanie'>
                <div className={styles['ingridients']}>
                    <img src='/soup.svg' alt="Иконка супа"/>
                    {props.ingridients}
                    <p>ингридиентов</p>
                </div>
                
                <div className={styles['time']}>
                    <img src='/time.svg' alt=""/>
                    {props.time}
                    <p>минут</p>
                </div>
            </div>
            </Link>
        <img className={styles['like']} 
        src={liked ? '/like1.svg' : '/like.svg'} 
        alt='Добавить в избранное'
        onClick={toggleLike}
        />
        </div>
      </div>
}
export default ProductCart