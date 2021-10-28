// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBk3LzzwG5nb98kwnCxPFtHsyIwZQYMNn0",
  authDomain: "clone-ec729.firebaseapp.com",
  projectId: "clone-ec729",
  storageBucket: "clone-ec729.appspot.com",
  messagingSenderId: "312348349682",
  appId: "1:312348349682:web:4761de087fb65e62e7ec6b",
  measurementId: "G-MFD392476Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
