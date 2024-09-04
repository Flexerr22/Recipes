import { NavLink } from 'react-router-dom'
import styles from './Login.module.css'
import Input from '../../components/Input/Input'

export function Login() {
  return (
    <div className={styles['main']}>
      <div className={styles['login']}>
        <div className={styles['text']}>
          <p className={styles['primary']}>Sign in</p>
          <p className={styles['secondary']}>
            Let’s get started with your 30 days free trial
          </p>
        </div>
        <form>
          <div className={styles['form_inputs']}>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          </div>
          <div className={styles['buttons']}>
            <button className={styles['create_button']}>Sign in</button>
          </div>
          <div className={styles['footer']}>
            <p>Dont have account?</p>
            <NavLink to="/auth/register" className={styles['link']}>
              Sign up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}
