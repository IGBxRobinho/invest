// v9 compat packages are API compatible with v8 code
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 

const firebaseConfig = {
  apiKey: "AIzaSyAsXE67Ww1Dy-qHhLOFhJWmyaTJJ7lXW5Y",
  authDomain: "sistemainveste.firebaseapp.com",
  projectId: "sistemainveste",
  storageBucket: "sistemainveste.appspot.com",
  messagingSenderId: "393635510112",
  appId: "1:393635510112:web:5e82275ac0bcea2163d005",
  measurementId: "G-17RF6JYYNW"
};


// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;