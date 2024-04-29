// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyC6U-C8MlSd4PCelYv0XIsnCMDtbu-Oo8Q",
  authDomain: "advexcer7.firebaseapp.com",
  projectId: "advexcer7",
  storageBucket: "advexcer7.appspot.com",
  messagingSenderId: "939467245187",
  appId: "1:939467245187:web:d7b5608e8c2a338e78fdb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
