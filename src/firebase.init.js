// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZuRjzzuOwO-9YZ83B6o8d3GTSyaXykc8",
  authDomain: "genius-car-service890.firebaseapp.com",
  projectId: "genius-car-service890",
  storageBucket: "genius-car-service890.appspot.com",
  messagingSenderId: "968822387561",
  appId: "1:968822387561:web:61e9ae56accf303a2503f"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const auth= getAuth(app);