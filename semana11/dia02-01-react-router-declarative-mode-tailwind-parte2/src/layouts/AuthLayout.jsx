import { Outlet } from "react-router"

const AuthLayout = () => {
  return (
    <>
      <h1>Soy el layout del LOGIN/REGISTER</h1>

      <Outlet />
    </>
  )
}

export default AuthLayout