import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'
import Hanger from './components/Hanger'
import ShipDetails from './components/ShipDetails'

export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Hanger />} />
        <Route path="shipdetails/:id" element={<ShipDetails />} />
      </Route>
    </>
  )
)
