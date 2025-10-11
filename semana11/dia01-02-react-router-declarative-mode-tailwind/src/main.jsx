import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />

      <Route path='/login' element={<h1>Login Page</h1>} />
      <Route path='/register' element={<h1>Register Page</h1>} />
      {/* <App /> */}
    </Routes>
  </BrowserRouter>
)
