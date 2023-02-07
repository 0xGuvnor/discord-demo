// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyrSkxETXjUG0o-zrDWLxCADs-t0-46IA",
  authDomain: "discord-demo-9d3a7.firebaseapp.com",
  projectId: "discord-demo-9d3a7",
  storageBucket: "discord-demo-9d3a7.appspot.com",
  messagingSenderId: "221234969062",
  appId: "1:221234969062:web:00e762fc6a6c20231efe27",
  measurementId: "G-Y92ESLPJG9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
