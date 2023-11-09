import React, { useEffect, useState } from "react";
import "./App.css";
import { collection, onSnapshot } from "firebase/firestore";
import Home from "./Components/pages/Home";
import Messages from "./Components/pages/Messages";
import Search from "./Components/pages/Search";
import Profile from "./Components/pages/Profiles/Profile";
import SignIn from "./Components/pages/SignIn";
import SignUp from "./Components/pages/SignUp";
import { auth, db } from "./Components/firebase"; // Import auth from firebase.jsx
import { Route, Routes, useNavigate } from "react-router-dom";
import CreatePost from "./Components/pages/CreatePost";
import Posts from "./Components/pages/Posts";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        //navigate("/home");
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={isAuthenticated ? <Search /> : <SignIn />} />
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
