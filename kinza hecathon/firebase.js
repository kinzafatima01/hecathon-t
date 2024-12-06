
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore, addDoc, collection ,getDocs , doc, setDoc,updateDoc,serverTimestamp,arrayUnion, arrayRemove, deleteDoc,query,  orderBy,  onSnapshot,Timestamp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBUw8n6PVlRkb8g69uBpTWpNKF17Nz_IUc",
    authDomain: "blog-4fa9c.firebaseapp.com",
    projectId: "blog-4fa9c",
    storageBucket: "blog-4fa9c.firebasestorage.app",
    messagingSenderId: "722153644991",
    appId: "1:722153644991:web:405306584cd4733f4eb70a",
    measurementId: "G-SCN6EP4DYS"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut, 
    signInWithPopup, GoogleAuthProvider, db, addDoc, collection,getDocs , doc, setDoc,
    updateDoc ,serverTimestamp,arrayUnion, arrayRemove , deleteDoc,query,  orderBy,  onSnapshot,Timestamp};
