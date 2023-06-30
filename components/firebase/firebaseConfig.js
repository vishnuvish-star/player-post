// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv7a8FjcgnR6fJr60_LeGooHNoUS6EzKY",
  authDomain: "player-post-a8dcd.firebaseapp.com",
  projectId: "player-post-a8dcd",
  storageBucket: "player-post-a8dcd.appspot.com",
  messagingSenderId: "913801615910",
  appId: "1:913801615910:web:758905ccff6bad2a02e4e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
