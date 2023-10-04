// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

export default getFirestore();
