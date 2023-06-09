import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'

const App = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Outlet />
    </>
  )
}

export default App
