// firebase.js
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCkq2SyOIE4SjzNTG91MlZwwpZiaKnivpg",
    authDomain: "full-stack-a40b5.firebaseapp.com",
    projectId: "full-stack-a40b5",
    storageBucket: "full-stack-a40b5.appspot.com",
    messagingSenderId: "720637718225",
    appId: "1:720637718225:web:03701c218795abea20dff0",
    measurementId: "G-RT2LQN55ZY"
  };



initializeApp(firebaseConfig);

export {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
};