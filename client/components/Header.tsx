import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
        <Link to={"/"}><img className="logo" src="../images/Star_Wars_Logo.png" alt="" /></Link>
        <h1>Starship Emporium</h1>
        <div className="user-info">
          <img className="user-image" src="../images/admiral.webp" alt="" />
          <p>
            Steve’s Account <span>&#62;</span>
          </p>
        </div>
      </header>
  )
}

export default Header
