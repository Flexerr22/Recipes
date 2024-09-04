import { Outlet } from 'react-router-dom'
import authPhoto from './../../assets/authPhoto.svg'
import styles from './AuthPage.module.css'

export function AuthPage() {
  return (
    <div className={styles['main']}>
      <div className={styles['left_panel']}>
        <img className={styles['img']} src={authPhoto} />
        <p className={styles['main_text']}>
          abc.com is the best place to find remote talent. We’ve been super
          impress by the quality of applicants.
        </p>
        <p className={styles['top_text']}>abc.com</p>
      </div>
      <div className={styles['right_panel']}>
        <Outlet />
      </div>
    </div>
  )
}
