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
import video from '../../logo/zoom.png'



const Input = () => {
  const {currentUser} = useContext(AuthContext)
  const [message, setMessage] = useState('');

  const sendMessage = async () => {
    const q = query(
      collection(db, "chats"),
    )

    const querySnapshot = await getDocs(q)
    console.log(querySnapshot)
    querySnapshot.forEach(async (doca) => {
      if (message.trim() !== '') {
        let arr = doca.data().chat
        arr.push(currentUser.uid+":"+message)
        console.log(arr)
        await updateDoc(doc(db, "chats", "chats"), {chat:arr})
  
        // Clear the input field after sending the message
        setMessage('');
      }
    })
  }

  const sendCall = async () => {
    const q = query(
      collection(db, "chats"),
    )

    const querySnapshot = await getDocs(q)
    console.log(querySnapshot)
    querySnapshot.forEach(async (doca) => {

      let arr = doca.data().chat
      arr.push(currentUser.uid+":call101010")
      console.log(arr)
      
      await updateDoc(doc(db, "chats", "chats"), {chat:arr})
      setMessage('');
    })
  }

  return (
    <div className='inputBar'>
      <button className='startCall' onClick={sendCall}>Video Call</button>
      <input className="chatInput"
        value={message}
        onChange={(e) => setMessage(e.target.value)}/>
      <button className='sendMessage' onClick={sendMessage}>Send</button>
    </div>
  )
}

export default Input