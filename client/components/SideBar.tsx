import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
      <div className='sidebar'>
        <h2>Ship By Category</h2>
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
