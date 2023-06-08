import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to={'/Hanger'}>Home</Link>
          </li>
          <li>
            <Link to={'/Ships'}>Ships</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBar
