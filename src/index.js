import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh_466WCH3VDtB155qYpdoyvIOTtauEjQ",
  authDomain: "cart-d0865.firebaseapp.com",
  projectId: "cart-d0865",
  storageBucket: "cart-d0865.appspot.com",
  messagingSenderId: "1039413826357",
  appId: "1:1039413826357:web:d296fccfb48b2b5e8bb27c"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
);