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
        <img src="https://cdn.discordapp.com/attachments/1149014555490529312/1178510180254756975/IMG_3490.jpg?ex=65766822&is=6563f322&hm=555ea6a48721a3ebc96008f7ecf669cd09422ac902210a819263546da5ea7f4f&" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>{currentUser.uid == "doFbtUWiJdRTN5gbsj1OnEOGR7I3" ? "hardcodeplz":"Seif"}</span>
        </div>
      </div>
      <div className="userChat" style={{marginBottom:"10px", backgroundColor:"var(--light-bg"}}>
        <img src="https://cdn.discordapp.com/attachments/1149014555490529312/1178511813348962324/20230722_123237.jpg?ex=657669a7&is=6563f4a7&hm=c115779e036c3d8c2912fc8e8ea48b425dc3bbb49ae34e00c30cdc6ec9ce9ce0&" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>Keylor</span>
        </div>
      </div>
      <div className="userChat" style={{marginBottom:"10px", backgroundColor:"var(--light-bg"}}>
        <img src="https://cdn.discordapp.com/attachments/1149014555490529312/1178511979430809672/IMG_0192.png?ex=657669cf&is=6563f4cf&hm=d29f119be670db407ca2063a7a50a6b13c473b559d8e13aef3da0394179f5b9e&" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>Michael</span>
        </div>
      </div>
      <div className="userChat" style={{marginBottom:"10px", backgroundColor:"var(--light-bg"}}>
        <img src="https://cdn.discordapp.com/attachments/1149014555490529312/1178510701246033951/IMG_1757.jpg?ex=6576689e&is=6563f39e&hm=054ef0987819910ffb6e2aa043bef1f2c6a5aeb0e76bcd43f736063cf53b52f9&" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>Blake</span>
        </div>
      </div>
      <div className="userChat" style={{marginBottom:"10px", backgroundColor:"var(--light-bg"}}>
        <img src="https://cdn.discordapp.com/attachments/1149014555490529312/1178510138273955930/IMG_2433.jpg?ex=65766818&is=6563f318&hm=4dd1b235b97aaf6f9f7158d55bed613b275bf33bb021bab0c089a7e13c69a1e1&" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>Zach</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;