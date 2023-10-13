import React, { useEffect, useState } from "react";
import "./App.css";
import db from "./Components/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import Navbar from "./Components/Navbar";
import Home from "./Components/pages/Home";
import Messages from "./Components/pages/Messages";
import Search from "./Components/pages/Search";
import Profile from "./Components/pages/Profile";
import SignIn from "./Components/pages/SignIn";
import SignUp from "./Components/pages/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  const [colors, setColors] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "colors"), (snapshot) =>
        setColors(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      {colors.map((color) => (
        <h1 key={color.id} style={{ color: color.value }}>
          {color.name}
        </h1>
      ))}
    </>
  );
}

export default App;
