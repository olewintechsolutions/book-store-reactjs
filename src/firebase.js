// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiVy19aCDpbRi9TaWGi4_klZKD-k_Uxd4",
  authDomain: "geo-geophy.firebaseapp.com",
  projectId: "geo-geophy",
  storageBucket: "geo-geophy.appspot.com",
  messagingSenderId: "428489506894",
  appId: "1:428489506894:web:604a44db55e7c1c66b431f",
  measurementId: "G-LK917P2H4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);