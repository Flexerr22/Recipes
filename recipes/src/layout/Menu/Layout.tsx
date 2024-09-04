import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'
import cn from 'classnames'
import favourite from './../../assets/favourite.svg'
import profile from './../../assets/profile.svg'
import line from './../../assets/line.svg'
import recipe from './../../assets/recipe.svg'

export function Layout() {
  return (
    <div className={styles['layout']}>
      <div className={styles['navbar']}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            cn(styles['link'], {
              [styles.active]: isActive
            })
          }
        >
          <img className={styles['img']} src={recipe} />
        </NavLink>
        <div className={styles['navbar_list']}>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              cn(styles['link'], {
                [styles.active]: isActive
              })
            }
          >
            <img className={styles['img']} src={favourite} />
            Моя книга рецептов
          </NavLink>
          <img className={styles['img']} src={line} />
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              cn(styles['link'], {
                [styles.active]: isActive
              })
            }
          >
            <img className={styles['img']} src={profile} />
            Профиль
          </NavLink>
          <img className={styles['img']} src={line} />
          <button className={styles['add_button']}>
            <NavLink
              to="/addrecipe"
              className={({ isActive }) =>
                cn(styles['link'], {
                  [styles.active]: isActive
                })
              }
            >
              Добавить рецепт
            </NavLink>
          </button>
        </div>
      </div>
      <div className={styles['main']}>
        <Outlet />
      </div>
    </div>
  )
}
