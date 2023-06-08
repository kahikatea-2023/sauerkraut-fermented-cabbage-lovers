import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import App from './components/App'


export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        {/* <Route index element={<AllItems />} />
        <Route path="materials" element={<Materials />}>
          <Route index element={<Food />} />
          <Route path="food" element={<Food />} />
          <Route path="monsterparts" element={<MonsterParts />} />
        </Route>
        <Route path="armoury" element={<Armoury />}>
          <Route path="bows" element={<Bows />} />
          <Route path="shields" element={<Shields />} />
        </Route> */}
      </Route>
    </>
  )
)