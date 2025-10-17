import { useState } from "react"
import { supabase } from "../lib/supabase"

import { useNavigate } from "react-router"

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault() // Evita que el formulario actualice la página

    const { data, error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      alert('Las credenciales son incorrectas')
      throw error
    }

    navigate('/')

    console.log(data)
    console.log(error)
    console.log(email, password)
  }

  return (
    <>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" onChange={(event) => setEmail(event.target.value)} />
        </label>

        <label>
          Password
          <input type="password" name="password" onChange={(event) => setPassword(event.target.value)} />
        </label>

        <input type="submit" value='Login' />

        <pre>{JSON.stringify({ email, password })}</pre>
      </form>
    </>
  )
}

export default LoginPage