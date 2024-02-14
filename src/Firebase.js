// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC0Xpq8vVKKLaXCgLkPgr9kKoEGu3qrnEc",
  authDomain: "clone-3d0d2.firebaseapp.com",
  projectId: "clone-3d0d2",
  storageBucket: "clone-3d0d2.appspot.com",
  messagingSenderId: "63325235063",
  appId: "1:63325235063:web:6e9b7446f16f92dccee372",
  measurementId: "G-C83H0PTFXB",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
