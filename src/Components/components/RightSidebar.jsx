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
const RightSidebar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='rightSidebar'>
      <div className="user">
        <img src="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg" alt="" className='displayProfilePic'></img>
      </div>
      <span className='userName'>{currentUser.uid == "doFbtUWiJdRTN5gbsj1OnEOGR7I3" ?  "hardcodeplz":"passMemorizeThis"}</span>
    </div>
  )
}

export default RightSidebar