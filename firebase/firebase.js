// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUKigNjIglv0qGrI_LTtacFAukqyoDTzc",
  authDomain: "crisalis-finnegans.firebaseapp.com",
  projectId: "crisalis-finnegans",
  storageBucket: "crisalis-finnegans.appspot.com",
  messagingSenderId: "283120208618",
  appId: "1:283120208618:web:b25f928caac729d8e5a593"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);