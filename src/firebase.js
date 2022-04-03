import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "react-dashboard-26688.firebaseapp.com",
  projectId: "react-dashboard-26688",
  storageBucket: "react-dashboard-26688.appspot.com",
  messagingSenderId: "722030154971",
  appId: "1:722030154971:web:f505ea54dbe7e939aba8fe"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();