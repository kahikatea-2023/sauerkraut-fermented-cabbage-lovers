import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'

const App = () => {
  return (
    <>
      <Header />

      <main>
      <SideBar />
        <Outlet />
      </main>
    </>
  )
}

export default App
