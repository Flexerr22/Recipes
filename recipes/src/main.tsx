import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Menu } from './pages/Menu/Menu.tsx'
import { Error } from './pages/Error/Error.tsx'
import { Favourites } from './pages/Favourites/Favourites.tsx'
import { Profile } from './pages/Profile/Profile.tsx'
import { Layout } from './layout/Menu/Layout.tsx'
import { AddRecipe } from './pages/AddRecipe/AddRecipe.tsx'
import { Product } from './pages/Product/Product.tsx'
import { AuthPage } from './layout/AuthPage/AuthPage.tsx'
import { Register } from './pages/Register/Register.tsx'
import { Login } from './pages/Login/Login.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Menu />
      },
      {
        path: '/favourites',
        element: <Favourites />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/addrecipe',
        element: <AddRecipe />
      },
      {
        path: '/product/:id',
        element: <Product />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthPage />,
    children: [
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      }
    ]
  },
  {
    path: '*',
    element: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
