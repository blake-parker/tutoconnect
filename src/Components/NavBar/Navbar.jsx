import { Link } from "react-router-dom";
import logo from "../../logo/small_logo.png";
import "./Nav.css";

function Navbar({ userPhotoURL }) {
  // Default profile picture URL
  const defaultProfilePicUrl = "https://firebasestorage.googleapis.com/v0/b/tutoconnect-93c03.appspot.com/o/default.jpg?alt=media&token=19061a62-a3df-4ff1-ac4f-9623ee7447b3";

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src={logo} alt="" className="home-img" />
      </Link>
      <ul className="nav-bar-elements">
        <li>
          <Link to="/createpost">Create Post</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          <Link to="/profile">
            <img
              src={defaultProfilePicUrl}
              alt="Profile"
              className="profile-img"
              style={{border: "2px solid black"}}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
