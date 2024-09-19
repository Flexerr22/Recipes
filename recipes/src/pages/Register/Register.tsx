import { NavLink } from 'react-router-dom'
import styles from './Register.module.css'
import Input from '../../components/Input/Input'
import button from './../../assets/button.svg'

export function Register() {
  return (
    <div className={styles['main']}>
      <div className={styles['login']}>
        <div className={styles['text']}>
          <p className={styles['primary']}>Create an account</p>
          <p className={styles['secondary']}>
            Let’s get started with your 30 days free trial
          </p>
        </div>
        <form>
          <div className={styles['form_inputs']}>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          </div>
          <div className={styles['buttons']}>
            <button className={styles['create_button']}>Create Account</button>
            <button className={styles['sign_button']}>
              <img className={styles['img']} src={button} />
              Sign up with Google
            </button>
          </div>
          <div className={styles['footer']}>
            <p>Already have an account?</p>
            <NavLink to="/auth/login" className={styles['link']}>
              Sign in
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  )
}
