// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "process.env.NEXT_PUBLIC_FIREBASE_API_KEY",
  authDomain: "next-blog-a3abc.firebaseapp.com",
  projectId: "next-blog-a3abc",
  storageBucket: "next-blog-a3abc.firebasestorage.app",
  messagingSenderId: "835753556710",
  appId: "1:835753556710:web:530d01da01a4e2efa69927"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);