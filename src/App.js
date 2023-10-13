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
    </>
  );
}

export default App;
