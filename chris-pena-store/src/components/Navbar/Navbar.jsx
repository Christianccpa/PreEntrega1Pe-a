import logo from "../../assets/logo.png"
import CarWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src={logo} alt="logo de marca"/>
      </div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <a href="#">Services</a>
        </li>
        <li className="navbar-item">
          <a href="#">Products</a>
        </li>
      </ul>
      <CarWidget/>
    </nav>
  )
}

export default Navbar