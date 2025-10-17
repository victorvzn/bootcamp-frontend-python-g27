import { Link, Outlet, useNavigate } from "react-router"

import { useAuth } from "../hooks/useAuth"

const AdminLayout = () => {
  const { logout, user } = useAuth()

  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()

    navigate('/login')
  }

  return (
    <>
      <header className="bg-yellow-300 p-4">
        <div className="container mx-auto flex justify-between">
          <h1>React router (ADMIN)</h1>

          <nav className="flex gap-4">
            <Link to='/'>Home</Link>
            <span>Welcome, {user?.email}!</span>
            <button onClick={handleLogout}>Logout</button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto m-6">
        <Outlet />
      </main>
    </>
  )
}

export default AdminLayout