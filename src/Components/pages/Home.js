import Navbar from "../NavBar/Navbar.jsx";
import { auth } from "../firebase.jsx";
import logo from "../../logo/small_logo.png";
import "../CSS/Landing.css";
import { useNavigate } from "react-router";

function Home() {
  const nav = useNavigate();
  const handleNav = () => {
    nav("/search");
  };
  return (
    <>
      <Navbar />
      <div className="lp-container">
        <div className="picture">
          <img src={logo} alt="" />
        </div>
        <div className="welcome">
          <h1>Welcome to tutoConnect, {auth.currentUser.displayName}!</h1>
          <h2>Discover the perfect tutor for your needs now</h2>
          <button onClick={handleNav}>Get Started</button>
        </div>
      </div>
    </>
  );
}
export default Home;
