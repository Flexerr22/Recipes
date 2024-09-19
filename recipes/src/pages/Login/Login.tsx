import { NavLink, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import Input from '../../components/Input/Input'
import { FormEvent, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { LoginResponce } from '../../interfaces/auth.interface'
import { useAuth } from '../../interfaces/AuthContext'

export type LoginForm = {
  email: {
    value: string
  }
  password: {
    value: string
  }
}

export function Login() {
  const [error, setError] = useState<string | undefined>()
  const navigate = useNavigate()
  const { login } = useAuth()

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & LoginForm
    const { email, password } = target
    console.log(email.value)
    console.log(password.value)
    await sendLogin(email.value, password.value)
    setError(null)
  }

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<LoginResponce>(
        'https://purpleschool.ru/pizza-api-demo/auth/login',
        {
          email,
          password
        }
      )
      login(data.access_token)
      navigate('/')
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.message)
      }
    }
  }

  return (
    <div className={styles['main']}>
      <div className={styles['login']}>
        <div className={styles['text']}>
          <p className={styles['primary']}>Sign in</p>
          <p className={styles['secondary']}>
            Let’s get started with your 30 days free trial
          </p>
        </div>
        <form onSubmit={submit}>
          {error && <div>{error}</div>}
          <div className={styles['form_inputs']}>
            <Input id="email" name="email" type="email" placeholder="Email" />
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
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
