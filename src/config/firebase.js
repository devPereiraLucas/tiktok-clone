import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCgFK-vJRErwqsRxiyNPxfggJOYpth0ZWk",
  authDomain: "tiktok---jornada-b4aef.firebaseapp.com",
  projectId: "tiktok---jornada-b4aef",
  storageBucket: "tiktok---jornada-b4aef.appspot.com",
  messagingSenderId: "293379144837",
  appId: "1:293379144837:web:906920306feb0c6dad3dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;