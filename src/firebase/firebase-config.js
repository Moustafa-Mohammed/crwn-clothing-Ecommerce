// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBwmGEEbOg7M6ZdYi2WssPV9Vlx5HZNsH4",
  authDomain: "crwn-db-e2588.firebaseapp.com",
  projectId: "crwn-db-e2588",
  storageBucket: "crwn-db-e2588.appspot.com",
  messagingSenderId: "673036102054",
  appId: "1:673036102054:web:79f4d99b80385d21d04767",
  measurementId: "G-T6MZFGXZKT",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// initialize the service, in this case the database service
export const database = getFirestore(firebaseApp);

// // collection function takes two arguments
// // the database object and the collection we want to reference, "hats"
// const collectionReference = collection(database, "hats");

// // getDocs function returns a promise with a snapshot
// getDocs(collectionReference).then(snapshot => console.log(snapshot));

export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();

export const logout = () => {
  signOut(auth);
};
