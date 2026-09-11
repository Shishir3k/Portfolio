import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDt4Mxtt-YVd05AdgttNanIg5l-Sqg7NEY",
  authDomain: "shishirportfolio.firebaseapp.com",
  databaseURL: "https://shishirportfolio-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shishirportfolio",
  storageBucket: "shishirportfolio.firebasestorage.app",
  messagingSenderId: "426261019529",
  appId: "1:426261019529:web:cdd07785e2d3e165a63f58"
};


// Initialize Firebase (preventing duplicate initializations during Next.js hot reloads)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };