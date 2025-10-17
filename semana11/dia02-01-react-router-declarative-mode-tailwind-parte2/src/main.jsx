import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router'

import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import CharacterPage from './pages/CharacterPage.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import AdminLayout from './layouts/AdminLayout.jsx'
import MoviesPage from './pages/MoviesPage.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/characters/:id' element={<CharacterPage />} />

        {/* TODO: Crearla ruta movies y obtener el listado de peliculas desde supabase */}
        <Route path='/movies' element={<MoviesPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<h1>Register Page</h1>} />
      </Route>
      {/* <App /> */}
    </Routes>
  </BrowserRouter>
)
