import {Link} from "react-router-dom";
import "../CSS/nav.css"

function Navbar() {
  return (
    <nav className="nav">
        <Link to="/" className="site-title">tutoConnect</Link>
        <ul className="nav-bar-elements">
            <li>
                <Link to="/search">Search</Link>
            </li>
            <li>
                <Link to="/messages">Messages</Link>
            </li>
            <li>
                <Link to="/profile">
                    <img src="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg" alt="" className="profile-img"/>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
export default Navbar