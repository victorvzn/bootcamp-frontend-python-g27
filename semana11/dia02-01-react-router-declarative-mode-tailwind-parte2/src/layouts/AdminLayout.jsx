import { Link, Outlet } from "react-router"

const AdminLayout = () => {
  return (
    <>
      <header className="bg-yellow-300 p-4">
        <div className="container mx-auto flex justify-between">
          <h1>React router (ADMIN)</h1>

          <nav className="flex gap-4">
            <Link to='/'>Home</Link>
            <Link to='/login'>Logout</Link>
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