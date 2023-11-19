import React, { useEffect} from "react";
import {useContext, useState} from 'react'
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { AuthContext } from '../contexts/AuthContext'
import {db} from "../firebase"

const Sidebar = () => {
  const [username, setUsername] = useState("")
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const {currentUser} = useContext(AuthContext)


  
  return (
    <div className="leftSidebar">
      <div className="userChat" style={{marginBottom:"10px"}}>
        <img src="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>{currentUser.uid == "doFbtUWiJdRTN5gbsj1OnEOGR7I3" ? "hardcodeplz":"Seif"}</span>
        </div>
      </div>
      <div className="userChat" style={{marginBottom:"10px", backgroundColor:"var(--light-bg"}}>
        <img src="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>Keylor</span>
        </div>
      </div>
      <div className="userChat" style={{marginBottom:"10px", backgroundColor:"var(--light-bg"}}>
        <img src="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>Michael</span>
        </div>
      </div>
      <div className="userChat" style={{marginBottom:"10px", backgroundColor:"var(--light-bg"}}>
        <img src="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>Blake</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;