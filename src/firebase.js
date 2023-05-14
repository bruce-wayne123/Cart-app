import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
const firebaseConfig = {
    apiKey: "AIzaSyBh_466WCH3VDtB155qYpdoyvIOTtauEjQ",
    authDomain: "cart-d0865.firebaseapp.com",
    projectId: "cart-d0865",
    storageBucket: "cart-d0865.appspot.com",
    messagingSenderId: "1039413826357",
    appId: "1:1039413826357:web:d296fccfb48b2b5e8bb27c"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;