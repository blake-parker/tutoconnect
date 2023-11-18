import React, { useEffect, useState } from "react";
import "./App.css";
import { doc, getDoc } from "firebase/firestore";
import Home from "./Components/pages/Home";
import Messages from "./Components/pages/Messages";
import Search from "./Components/pages/Search";
import Profile from "./Components/pages/Profiles/Profile";
import SignIn from "./Components/pages/SignIn";
import SignUp from "./Components/pages/SignUp";
import { auth, db } from "./Components/firebase";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import CreatePost from "./Components/pages/CreatePost";
import Posts from "./Components/pages/Posts";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userPhotoURL, setUserPhotoURL] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        const userRef = doc(db, "users", user.uid);
        getDoc(userRef).then((docSnap) => {
          if (docSnap.exists()) {
            setUserPhotoURL(docSnap.data().photoURL);
          }
        });
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // Function to determine if the Navbar should be rendered
  const shouldRenderNavbar = () => {
    const path = location.pathname;
    // Exclude Navbar on homepage, login, and signup pages
    return !['/', '/login', '/signup'].includes(path);
  };

  return (
    <>
      {shouldRenderNavbar() && <Navbar userPhotoURL={userPhotoURL} />}
      <div className="container">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Home /> : <SignIn />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/CreatePost" element={<CreatePost />} />
          <Route path="/Posts" element={<Posts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
