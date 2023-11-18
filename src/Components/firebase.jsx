// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import for Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdCacBApILWFA1JSE1y92vU20b9kTHIt0",
  authDomain: "tutoconnect-93c03.firebaseapp.com",
  projectId: "tutoconnect-93c03",
  storageBucket: "tutoconnect-93c03.appspot.com",
  messagingSenderId: "375470941971",
  appId: "1:375470941971:web:2af2ccfed4b671bca21ce6",
  measurementId: "G-4ZQ6HRS3F8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); // Initialize and export Firebase Storage
