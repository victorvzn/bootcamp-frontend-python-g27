import { useState } from "react"

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault() // Evita que el formulario actualice la página

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