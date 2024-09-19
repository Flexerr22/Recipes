import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../interfaces/AuthContext'

export function Profile() {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/auth/login') // перенаправление на страницу авторизации после выхода
  }

  return (
    <div>
      <h1>Профиль</h1>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  )
}
