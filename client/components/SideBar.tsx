import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
      <div>
        <p>Ship By Category</p>
        <ul>
          <li>
            <Link to={'/'}>SHIP CLASS</Link>
          </li>
          <li>
            <Link to={'/'}>VIEW BY SOLD</Link>
          </li>
          <li>
            <Link to={'/'}>VIEW BY PRICE</Link>
          </li>
          <li>
            <Link to={'/'}>VIE BY MOVIE</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBar
