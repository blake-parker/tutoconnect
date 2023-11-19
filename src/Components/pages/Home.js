import Navbar from "../NavBar/Navbar.jsx";
import { auth } from "../firebase.jsx";
import logo from "../../logo/small_logo.png";
import "../CSS/Landing.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

function Home() {
  const nav = useNavigate();
  const [random, setRandom] = useState(0);
  const handleNav = () => {
    nav("/search");
  };
  const colors = [
    "#ff5733",
    "#8a2be2",
    "#00ff00",
    "#ff1493",
    "#4169e1",
    "#ffff00",
    "#32cd32",
    "#ff4500",
    "#a020f0",
    "#00ced1",
  ];

  useEffect(() => {
    const newRandomNumber = Math.floor(Math.random() * colors.length - 1) + 1;
    setRandom(newRandomNumber);
  });

  return (
    <>
      <Navbar userPhotoURL={auth.currentUser.photoURL} />
      <div className="lp-container">
        <div className="picture">
          <img src={logo} alt="" />
        </div>
        <div className="welcome">
          <h1>
            Welcome to tutoConnect,{" "}
            <p style={{ color: colors[random] }}>
              &nbsp;{auth.currentUser.displayName}
            </p>
            !
          </h1>
          <h2>Discover the perfect tutor for your needs now</h2>
          <button onClick={handleNav}>Get Started</button>
        </div>
      </div>
    </>
  );
}
export default Home;
