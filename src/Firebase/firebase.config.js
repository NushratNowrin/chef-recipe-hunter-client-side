// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD-7WE8FTz1D_NP8nWeiMco1Lf8VNKfKXI",
  authDomain: "deshi-delights.firebaseapp.com",
  projectId: "deshi-delights",
  storageBucket: "deshi-delights.appspot.com",
  messagingSenderId: "880490919594",
  appId: "1:880490919594:web:7ceabd6f3e4cedbacd02d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;