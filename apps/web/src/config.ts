// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-3r4xPqg8i_y7nYLg-mo1jbjP9FALcc0",
  authDomain: "dfm-dev-36324.firebaseapp.com",
  projectId: "dfm-dev-36324",
  storageBucket: "dfm-dev-36324.appspot.com",
  messagingSenderId: "76469712798",
  appId: "1:76469712798:web:9a419bd6f0df44f4da488f"
};

// Initialize Firebase
export const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp);
export default firebaseapp;