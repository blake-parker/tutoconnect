import React, { Component, useEffect } from 'react';
import {db} from "../firebase"
import Message from './Message'
import {useContext, useState} from 'react'
import Input from './input'
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

class Chats extends Component {
  static contextType = AuthContext;
  constructor(props){
    super(props);

    this.state = {
        chats: [

          // Add more chat messages as needed
        ],
    }
  }
  
  fetchMessages =  async () =>{
    const { currentUser } = this.context;
      const q = query(
        collection(db, "chats"),
      )

      const querySnapshot = await getDocs(q)
      let user = "null"
      querySnapshot.forEach((doc) => {
        user = doc.data()
        console.log(doc.data())
        let arr = []
        for(let i = 0; i < doc.data().chat.length; i++){
          let chat = doc.data().chat[i];
          console.log("chat: ", chat)

            let split = chat.split(":")
            let owner = split[0] == currentUser.uid ? "owner" : "notOwner"
            let chatText = split[1]
            if(chatText == "call101010")
              arr.push({owner:owner, message:"", isCall:"true"})
            else
              arr.push({owner:owner, message:chatText, isCall:"false"})

        }
        this.setState((prevState) => ({
          chats: arr
      }))
    })
  }
  componentDidMount = async () => {
    this.intervalId = setInterval(this.fetchMessages, 1000);
  }

 

  render(){

    const { chats } = this.state;

    return (
      <div className='chats'>
        <div className='messageContainer'>

          {chats.map((chat) => (
              <Message
              owner={chat.owner}
              message={chat.message}
              isCall={chat.isCall}/>
          ))}
          
        </div>
        <Input/>
      </div>
    )
  }
}

export default Chats