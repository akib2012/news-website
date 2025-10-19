// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7uZobEkMJU7sg56TDwjOK1gm29wToAso",
  authDomain: "dragon-newa-project.firebaseapp.com",
  projectId: "dragon-newa-project",
  storageBucket: "dragon-newa-project.firebasestorage.app",
  messagingSenderId: "323352274719",
  appId: "1:323352274719:web:0364cc7452c8025554b22a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

