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
        <img src="https://wallpapers.com/images/hd/giga-chad-headshot-fdm8y2nd5zu8zken.jpg" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>Keylor</span>
        </div>
      </div>
      <div className="userChat" style={{marginBottom:"10px", backgroundColor:"var(--light-bg"}}>
        <img src="https://cdn.discordapp.com/attachments/1141544952342528080/1175958543749361756/image0.jpg?ex=656d1fbd&is=655aaabd&hm=903d7d6c42fd77a36e7c39ee9fb219554e77e4b1a33dda88046fc95c5be98960&" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>Michael</span>
        </div>
      </div>
      <div className="userChat" style={{marginBottom:"10px", backgroundColor:"var(--light-bg"}}>
        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>Blake</span>
        </div>
      </div>
      <div className="userChat" style={{marginBottom:"10px", backgroundColor:"var(--light-bg"}}>
        <img src="https://cdn.discordapp.com/attachments/941515472476704768/1175982251348082748/IMG_1888.jpg?ex=656d35d1&is=655ac0d1&hm=d9b056f7880df2bc165ba3c2a0f93e9410e64740565b9940f4dd69fb54434531&" alt="" className='messagingProfilePic'></img>
        <div className="userChatInfo">
          <span>Zach</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;