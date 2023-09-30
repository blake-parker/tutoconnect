import React from "react";
import Hello from "./Components/TestComponents/Hello";
import "./App.css";

//Firebase import, allows you to use firebase for storage and such
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//React hooks allowing you to work with react & firebase database easier.
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyC2UdmKZswXhNkiEMAPT60_mlIm5vDn6ZI",
  authDomain: "tutoconnect-fd4e8.firebaseapp.com",
  projectId: "tutoconnect-fd4e8",
  storageBucket: "tutoconnect-fd4e8.appspot.com",
  messagingSenderId: "393607826722",
  appId: "1:393607826722:web:3d5445a7bd915cc440297b",
  measurementId: "G-WX66CQNK8K",
});

const auth = getAuth();
const firestore = getFirestore();

function App() {
  return (
    <>
      <Hello />
    </>
  );
}

export default App;
