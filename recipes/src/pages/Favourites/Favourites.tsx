import Headlink from '../../components/Headlink/Headlink'
import Text from '../../components/Text/Text'
import styles from './Favourites.module.css'

export function Favourites() {
  return (
    <div className={styles['main']}>
      <Headlink>Моя книга рецептов</Headlink>
      <Text>
        Ищите рецепты русско-татарской кухни, выбирая категорию блюда, его
        подкатегорию или меню.{' '}
      </Text>
    </div>
  )
}
