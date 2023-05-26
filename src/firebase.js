import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyCaU1mLaTgMO8kBd1FCx_knk_ynnLbBKI8",
  authDomain: "react-contact17.firebaseapp.com",
  projectId: "react-contact17",
  storageBucket: "react-contact17.appspot.com",
  messagingSenderId: "434964638662",
  appId: "1:434964638662:web:7dea1d6ab1bd096efea0c7"
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();